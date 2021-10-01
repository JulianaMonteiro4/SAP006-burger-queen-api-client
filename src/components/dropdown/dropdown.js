import React, { useState, useEffect } from "react";

import './drop.css'

const DropDown = ({onChange, infoOrder}) => {
  return (
    <div className="dropMesa">
      <select  className="opcoes1" name="table" onChange={onChange} value={infoOrder.table === "" ? "Mesas" : infoOrder.table}>
        <option className="opcoes">Mesas</option>
        <option className="opcoes" value="1">Mesa 1</option>
        <option className="opcoes" value="2">Mesa 2</option>
        <option className="opcoes" value="3">Mesa 3</option>
        <option className="opcoes" value="4">Mesa 4</option>
        <option className="opcoes" value="5">Mesa 5</option>
        <option className="opcoes" value="6">Mesa 6</option>
        <option className="opcoes" value="7">Mesa 7</option>
        <option className="opcoes" value="8">Mesa 8</option>
        <option className="opcoes" value="9">Mesa 9</option>
      </select>
    </div>
  )
}

export default DropDown;