import React from "react";

// import { useState } from "react/cjs/react.development";

import './section.css'
import DropDown from "../dropdown/dropdown";
import { Button } from "../button/button";
import { InputText } from "../input/input";


const SectionPedidos = ({onChange, infoOrder}) => {
  return (
    <div>
      <section className="section-pedi">
        <DropDown onChange={onChange} infoOrder={infoOrder}></DropDown>
        <InputText type="text"
          className="input-pedi"
          name='name'
          id="input-pedi" value={infoOrder.name}
          onChange={onChange} placeholder="Nome" />
        <Button className="btn-select" type="submit" onClick={null}>Café da Manhã</Button>
        <Button className="btn-select" type="submit" onClick={null}>Almoço</Button>
      </section>
    </div>
  )
}

export default SectionPedidos;