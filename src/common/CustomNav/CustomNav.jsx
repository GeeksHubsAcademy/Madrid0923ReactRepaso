
import { useNavigate } from 'react-router-dom'
import "./CustomNav.css"
export const CustomNav = ({path, titulo}) => {

    const navigate = useNavigate()

    return(
        <div className="customNavDesign" onClick={()=>navigate(path)}>{titulo}</div>
    )
}