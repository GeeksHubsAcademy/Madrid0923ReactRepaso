import { CustomInput } from "../../common/CustomInput/CustomInput";
import { useState, useEffect } from "react";
import { loginFunction } from "../../services/apiCalls";
import "./Login.css";

import { useDispatch } from "react-redux";
import { login } from "../userSlice";

import { useNavigate } from "react-router-dom";
import { validate } from "../../services/useFul";

export const Login = () => {
  //INSTANCIO NAVIGATE
  const navigate = useNavigate();

  //INSTANCIO RDX EN MODO ESCRITURA
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [userError, setUserError] = useState({
    usernameError: "",
    passwordError: ""
  })

  const [msg, setMsg] = useState("");

  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const logMe = () => {
    loginFunction(user)
      .then((result) => {
        //Ahora que ya tengo los datos del login, los guardo en RDX

        dispatch(login({ credentials: result.data }));

        setMsg(`Bienvenid@ de vuelta ${result.data.firstName}....`);

        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => console.log(error));
  };

  const checkError = (e) => {

    let error = "";

    error = validate(e.target.name, e.target.value)

    setUserError((prevState) => ({
      ...prevState,
      [e.target.name + 'Error']: error
    }));

  }

  return (
    <div className="loginDesign">
      {msg !== "" ? (
        <div>{msg}</div>
      ) : (
        <>
          <CustomInput
            design={`inputDesign ${userError.usernameError !== '' ? 'inputDesignError' : ''}`}
            type={"text"}
            name={"username"}
            placeholder={""}
            functionWrite={inputHandler}
            functionError={checkError}
          />
          <div className="errorRedMsg">{userError.usernameError}</div>
          <CustomInput
            design={`inputDesign ${userError.passwordError !== '' ? 'inputDesignError' : ''}`}
            type={"password"}
            name={"password"}
            placeholder={""}
            functionWrite={inputHandler}
            functionError={checkError}
          />
          <div className="errorRedMsg">{userError.passwordError}</div>
          <div className="loginButtonDesign" onClick={logMe}>
            Login
          </div>
        </>
      )}
    </div>
  );
};
