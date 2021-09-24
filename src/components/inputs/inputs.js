import React from "react";

import './inputs.css'

const Input = ({children}) => {
  return (
    <input className="input"
    type="text"
    >
        {children}
    </input>
  )
}

export default Input;