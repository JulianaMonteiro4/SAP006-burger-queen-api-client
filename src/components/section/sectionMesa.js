import React from "react";

import './section.css'
import DropDown from "../dropdown/dropdown";
import {Button} from "../button/button";

const SectionMesa = () => {
    return (
        <section className="section-mesa">
            <DropDown></DropDown>
            <DropDown></DropDown>
            <Button className="btn-select" type="submit" onClick={null}>Atualizar</Button>
        </section>
    )
}

export default SectionMesa;