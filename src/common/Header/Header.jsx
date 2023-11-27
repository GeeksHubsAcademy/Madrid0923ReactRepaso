
import { CustomNav } from "../CustomNav/CustomNav"
import "./Header.css"
export const Header = () => {

    return(
        <div className="headerDesign">

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