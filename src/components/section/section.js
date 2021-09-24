import React from "react";

import './section.css'
import DropDown from "../dropdown/dropdown";
import ButtonSelect from "../button/buttonSelect";

const Section = () => {
    return (
        <section className="section">
            <DropDown></DropDown>
            <DropDown></DropDown>
            <ButtonSelect type='submit' >Atualizar</ButtonSelect>
        </section>
    )
}

export default Section;