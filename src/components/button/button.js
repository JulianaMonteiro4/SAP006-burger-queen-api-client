import React from 'react';

import './button.css'

export const Button = ({children, onClick, type }) => {
    return (
        <button
            className="btn"
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )


}