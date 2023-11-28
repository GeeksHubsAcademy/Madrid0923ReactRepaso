
import "./CustomInput.css"

export const CustomInput = ({design, type, name, placeholder, functionWrite, functionError}) => {

    return (
        <input 
            className={design}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={(e)=>functionWrite(e)}
            onBlur={(e)=>functionError(e)}
            maxLength={50}
        />
    )
}