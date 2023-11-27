
import { CustomNav } from "../CustomNav/CustomNav"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Header.css"
import { bringMovies } from "../../services/apiCalls"

//Importaciones Redux..

import { useDispatch} from 'react-redux'
import { add_search } from "../../pages/searchSlice"

export const Header = () => {

    //Instancio REDUX en modo lectura

    const dispatch = useDispatch();

    const location = useLocation()

    const [criteria, setCriteria] = useState("")

    useEffect(()=>{

        if(criteria !== ""){
            
            //Guardo el criterio de búsqueda en REDUX
            dispatch(add_search(criteria))
        }
    },[criteria])

    return(
        <div className="headerDesign">

            {
                location.pathname === "/" &&

                <input 
                    className="inputSearchDesign"
                    type="text"
                    name="criteria"
                    onChange={(e)=>setCriteria(e.target.value)}
                />
            }

            <CustomNav 
                path="/"
                titulo="Home" 
            />
            <CustomNav 
                path="/login"
                titulo="Login" 
            />
            <CustomNav 
                path="/register"
                titulo="Register" 
            />
        </div>
    )
}