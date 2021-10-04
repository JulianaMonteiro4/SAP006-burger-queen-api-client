import React from "react";

import './section.css'
import {Button} from "../button/button";

const SectionMesa = ({onChange, infoOrder}) => {
    return (
        <section className="section-mesa">
            <Button className="btn-atualizar" id="btn-atualizar" type="submit" onClick={null}>Atualizar</Button>
        </section>
    )
}

export default SectionMesa;