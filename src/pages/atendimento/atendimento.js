import React, { useState } from "react";

import './atendi.css'

import { Button } from '../../components/button/button'
import SectionPedidos from '../../components/section/sectionPedi';
import SectionResumo from '../../components/section/sectionResumo';
import ContainerPedidos from '../../components/container/containerPedi';
import ContainerResumo from '../../components/container/containerResumo';

const Atendimento = () => {

  const [select, setSelect] = useState('')
  
  function handlePedidos(selectInfoOrder) {
    setSelect(selectInfoOrder)
  }


  return (
    <div>
      <div className="buttons">
        <Button className="btn-pedi" type="submit" onClick={() => {handlePedidos("pedidos")} }>Anotar Pedidos</Button>
        <Button className="btn-resumo" onClick={() => {handlePedidos("resumo")} }>Resumo</Button>
      </div>
      <div className="selection">
        {select === 'pedidos' && <SectionPedidos />}
        {select === 'resumo' && <SectionResumo />}
      </div>
      <div className="containerCardápio">
        {select === 'pedidos' &&  <ContainerPedidos />}
        {select === 'resumo' && <ContainerResumo />}
      </div>
    </div>
  )
}

export default Atendimento;