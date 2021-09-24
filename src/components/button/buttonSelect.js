import React from "react";

import './button.css'

const ButtonSelect = ({children, onClick, type }) => {
    return (
        <button
            className="btn-select"
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default ButtonSelect;