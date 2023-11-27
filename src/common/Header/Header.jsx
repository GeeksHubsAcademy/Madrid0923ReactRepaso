
import { CustomNav } from "../CustomNav/CustomNav"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Header.css"
import { bringMovies } from "../../services/apiCalls"
export const Header = () => {

    const location = useLocation()

    const [criteria, setCriteria] = useState("")

    useEffect(()=>{

        if(criteria !== ""){
            
            bringMovies(criteria)
                .then(
                    result => {
                        console.log(result.data.results)
                    }
                )
                .catch(error => console.log(error))
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