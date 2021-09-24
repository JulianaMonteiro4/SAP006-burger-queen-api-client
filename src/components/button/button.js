import React from 'react';

import './button.css'

export const Button = ({children, className, type, onClick}) => {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}