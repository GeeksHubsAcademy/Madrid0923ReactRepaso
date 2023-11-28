
import "./CustomInput.css"

export const CustomInput = ({design, type, name, placeholder, functionWrite}) => {

    return (
        <input 
            className={design}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={(e)=>functionWrite(e)}
            maxLength={50}
        />
    )
}