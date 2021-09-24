import React from "react";

import './section.css'
import DropDown from "../dropdown/dropdown";
import {Button} from "../button/button";
import {InputText} from "../input/input";

const SectionPedidos = () => {
    return (
        <section className="section-pedi">
            <DropDown></DropDown>
            <InputText type="text" 
            className="input-pedi" 
            id="input-pedi" value={null} 
            onChange={null} placeholder="Nome" />
            <Button className="btn-select" type="submit" onClick={null}>Café da Manhã</Button>
            <Button className="btn-select" type="submit" onClick={null}>Almoço</Button>
        </section>
    )
}

export default SectionPedidos;