import React from "react";

import './button.css'

const ButtonPedi = ({children, onClick, type }) => {
    return (
        <button
            className="btn-pedi"
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default ButtonPedi;