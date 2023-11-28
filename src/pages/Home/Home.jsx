import { useState, useEffect } from "react";
import "./Home.css";

//RDX

import { useSelector } from "react-redux";
import { searchData } from "../searchSlice";
import { bringMovies, latestMovies } from "../../services/apiCalls";
export const Home = () => {
  //Instancio Redux en modo lectura

  const criterioBusqueda = useSelector(searchData);

  //Variable de estado que contiene las películas
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    if (criterioBusqueda.criteria === "") {
      latestMovies()
        .then((result) => {
          setPeliculas(result.data.results);
        })
        .catch((error) => console.log(error));
    } else {

      const bringDebouncedMovies = setTimeout(() => {

        bringMovies(criterioBusqueda.criteria)
          .then((result) => {
            if (result.data.results.length !== 0) {
              setPeliculas(result.data.results);
            }
          })
          .catch((error) => console.log(error));

      }, 300);

      return () => clearTimeout(bringDebouncedMovies)

    }
  }, [criterioBusqueda.criteria]);

  return (
    <div className="homeDesign">
      {peliculas.length > 0 ? (
        <div>
          {peliculas.map((pelicula) => {
            return <div key={pelicula.id}>{pelicula.title}</div>;
          })}
        </div>
      ) : (
        <div>Estan viniendo</div>
      )}
    </div>
  );
};
