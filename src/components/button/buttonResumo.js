import React from "react";

import './button.css'

const ButtonResumo = ({children, onClick, type }) => {
    return (
        <button
            className="btn-resumo"
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default ButtonResumo;