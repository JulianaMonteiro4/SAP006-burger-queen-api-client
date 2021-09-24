import React from "react";

import './input.css'

    export const InputText = ({type, className, id, placeholder, value, onChange}) => {

    return (
        <input className={className}
                id={id}        
                type={type} placeholder={placeholder} 
                value={value}
                onChange={onChange} />
    )

}