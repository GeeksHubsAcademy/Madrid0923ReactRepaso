import { useState, useEffect } from "react";
import "./Home.css";

import { Modal } from "@mantine/core";

//RDX

import { useSelector } from "react-redux";
import { searchData } from "../searchSlice";
import { bringMovies, latestMovies } from "../../services/apiCalls";
export const Home = () => {
  //Instancio Redux en modo lectura

  const criterioBusqueda = useSelector(searchData);

  //Variable de estado que contiene las películas
  const [peliculas, setPeliculas] = useState([]);

  //Variable de estado que controla el modal
  const [opened, setOpened] = useState(false);
  const [film, setFilm] = useState({});

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

      return () => clearTimeout(bringDebouncedMovies);
    }
  }, [criterioBusqueda.criteria]);

  return (
    <div className="homeDesign">
      {peliculas.length > 0 ? (
        <div>
          {peliculas.map((pelicula) => {
            return (
              <div
                key={pelicula.id}
                onClick={() => {
                  setFilm(pelicula)
                  setOpened(true)
                  console.log(pelicula)
                }}
              >
                {pelicula.title}
              </div>
            );
          })}
        </div>
      ) : (
        <div>Estan viniendo</div>
      )}

      {/* Modal... */}
      <Modal opened={opened} centered onClose={() => setOpened(false)}>
        <div>
            <div>{film.title}</div>
            <div>{film.overview}</div>
            <div>{film.release_date}</div>
            <div>{film.original_language}</div>
        </div>
      </Modal>
    </div>
  );
};
