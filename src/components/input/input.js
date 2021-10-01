import React from "react";

import './input.css'

    export const InputText = ({className, name, id, type, placeholder, value, onChange}) => {

    return (
        <input className={className} name={name}
                id={id}        
                type={type} placeholder={placeholder} 
                value={value}
                onChange={onChange} />
    )

}