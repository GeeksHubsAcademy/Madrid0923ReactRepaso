
import { CustomNav } from "../CustomNav/CustomNav"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Header.css"
export const Header = () => {

    const location = useLocation()

    const [criteria, setCriteria] = useState("")

    useEffect(()=>{
        console.log(criteria)
    },[criteria])

    return(
        <div className="headerDesign">

            {
                location.pathname === "/" &&

                <input 
                    className="inputSearchDesign"
                    type="text"
                    name="criteria"
                    onChange={()=>setCriteria(e.target.value)}
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