import React from "react";

import './drop.css'

const DropDown = () => {
  return (
    <div className="dropMesa">
      <select  className="opcoes1"name="select">
        <option className="opcoes">Mesas</option>
        <option className="opcoes">Mesa 1</option>
        <option className="opcoes">Mesa 2</option>
        <option className="opcoes">Mesa 3</option>
        <option className="opcoes">Mesa 4</option>
        <option className="opcoes">Mesa 5</option>
        <option className="opcoes">Mesa 6</option>
        <option className="opcoes">Mesa 7</option>
        <option className="opcoes">Mesa 8</option>
        <option className="opcoes">Mesa 9</option>
      </select>
    </div>
  )
}

export default DropDown;