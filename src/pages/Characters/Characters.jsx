import { useEffect, useState } from "react";
import "./Characters.css";
import { bringCharacters } from "../../services/apiCalls";

export const Characters = () => {
  const [personajes, setPersonajes] = useState([]);

  const [elegido, setElegido] = useState({});

  const handleSelect = (e) => {
    personajes.map(
      personaje => {
        if(personaje.id === parseInt(e.target.value)){
          setElegido(personaje)
        }
      }
    )
  } 

  useEffect(() => {
    if (personajes.length === 0) {
      bringCharacters()
        .then((results) => {
          setPersonajes(results.data.results);
        })
        .catch((error) => console.log(error));
    }
  }, [personajes]);

  useEffect(()=>{
    console.log("Soy el elegido....", elegido)
  }, [elegido])

  return (
    <div className="charactersDesign">
      {
        //Si ya dispongo de los personajes.....
        personajes.length > 0 && (
          <select
            name="elegido"
            onChange={handleSelect
            }
          >
            <option>Select a character</option>

            {personajes.map((personaje) => {
              return <option value={personaje.id} key={personaje.id}>{personaje.name}</option>;
            })}

          </select>
        )
      }
    </div>
  );
};
