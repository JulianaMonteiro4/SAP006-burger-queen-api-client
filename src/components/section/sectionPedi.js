import React from "react";

import './section.css'
import DropDown from "../dropdown/dropdown";
import ButtonSelect from "../button/buttonSelect";
import Input from "../inputs/inputs";

const SectionPedidos = () => {
    return (
        <section className="section">
            <DropDown></DropDown>
            <Input>Nome</Input>
            <ButtonSelect type='submit' >Café da Manhã</ButtonSelect>
            <ButtonSelect type='submit' >Almoço</ButtonSelect>
        </section>
    )
}

export default SectionPedidos;