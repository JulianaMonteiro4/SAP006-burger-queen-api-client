import React from 'react';

import './section.css'
import {Button} from '../button/button';

const SectionMesa = ({onClick}) => {
    return (
        <section className="section-mesa">
            <div className="legend-status-table">
                <p style={{color: '#EB4A2D', marginLeft: '10px'}}>Pendente</p>
                <p style={{color: '#F3E139', marginLeft: '10px'}}>Em Preparo</p>
                <p style={{color: '#8CFA70', marginLeft: '10px'}}>Pronto</p>
                <p style={{color: '#38B6FF', marginLeft: '10px'}}>Entregue</p>
                <p style={{marginLeft: '10px'}}>Mesa Disponível</p>
            </div>
            <Button className="btn-atualizar" id="btn-atualizar" type="submit" onClick={onClick}>Atualizar</Button>
        </section>
    )
}

export default SectionMesa;