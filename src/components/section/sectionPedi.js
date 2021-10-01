import React, { useState, useEffect } from "react";

import './section.css'
import DropDown from "../dropdown/dropdown";
import { Button } from "../button/button";
import { InputText } from "../input/input";

const SectionPedidos = ({ onChange, infoOrder, handleMenu}) => {

  return (
    <div>
      <section className="section-pedi">
        <DropDown
        onChange={onChange} infoOrder={infoOrder}>
        </DropDown>
        <InputText type="text"
          className="input-pedi" name="name"
          id="input-pedi" value={infoOrder.name}
          onChange={onChange} placeholder="Nome" />
        <Button className="btn-select" id="café" type="submit" onClick={() => {handleMenu("breakfast")}}>Café da Manhã</Button>
        <Button className="btn-select" id="almoço" type="button" onClick={() => {handleMenu("all-day")}}>Almoço</Button>
      </section>
    </div>
  )
}

export default SectionPedidos;
