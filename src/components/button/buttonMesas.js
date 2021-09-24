import React from "react";

import './button.css'

const ButtonMesas = ({children, onClick, type }) => {
    return (
        <button
            className="btn-mesas"
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default ButtonMesas;