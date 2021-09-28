import React from "react";

import './section.css'
import DropDown from "../dropdown/dropdown";
import { Button } from "../button/button";
import { InputText } from "../input/input";

const SectionResumo = () => {
  return (
    <section className="section-resumo">
      <DropDown></DropDown>
      <InputText type="text"
        className="input-resumo"
        id="input-pedi" value={null}
        onChange={null} placeholder="Nome" />
      <Button className="btn-enviar" type="submit" onClick={null}>Enviar</Button>
    </section>
  )
}

export default SectionResumo;