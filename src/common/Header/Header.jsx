import { CustomNav } from "../CustomNav/CustomNav";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";
import { bringMovies } from "../../services/apiCalls";

import { useNavigate } from 'react-router-dom'

//Importaciones Redux..

import { useDispatch, useSelector } from "react-redux";
import { add_search } from "../../pages/searchSlice";
import { userData, logout } from "../../pages/userSlice";

export const Header = () => {

  //Instancio Navigate 

  const navigate = useNavigate()

  //Instancio REDUX en modo lectura

  const reduxUserData = useSelector(userData);

  //Instancio REDUX en modo escritura

  const dispatch = useDispatch();

  const location = useLocation();

  const [criteria, setCriteria] = useState("");

  useEffect(() => {
    //Guardo el criterio de búsqueda en REDUX
    dispatch(add_search(criteria));
  }, [criteria]);

  // useEffect(()=>{
  //     console.log("yo estoy en el header", reduxUserData.credentials)
  // }, [reduxUserData.credentials])

  const logOutMe = () => {

    dispatch(logout( {credentials : ""}))

    navigate("/")
    
  }

  return (
    <div className="headerDesign">
      {location.pathname === "/" && (
        <input
          className="inputSearchDesign"
          type="text"
          name="criteria"
          onChange={(e) => setCriteria(e.target.value)}
        />
      )}

      <CustomNav path="/" titulo="Home" />
      <CustomNav path="/characters" titulo="Characters" />
      <CustomNav path="/dates" titulo="Dates" />

      {reduxUserData.credentials.token ? (
        <>
          <CustomNav path="/profile" titulo={reduxUserData.credentials.firstName} />
          <div className="customNavDesign" onClick={logOutMe}>log out</div>
        </>
      ) : (
        <>
          <CustomNav path="/login" titulo="Login" />
          <CustomNav path="/register" titulo="Register" />
        </>
      )}
    </div>
  );
};
