import React, { useState } from "react";

import './atendi.css'

import { Button } from '../../components/button/button'
import SectionPedidos from '../../components/section/sectionPedi';
import SectionResumo from '../../components/section/sectionResumo';
import ContainerPedidos from '../../components/container/containerPedi';
import ContainerResumo from '../../components/container/containerResumo';

const Atendimento = () => {

  const [select, setSelect] = useState('')
  const [container, setContainer] = useState('')
  
  function handlePedidos() {
    setSelect('pedidos')
    setContainer('breakfast')
  }

  function handleResumo() {
    setSelect('resumo')
    setContainer('lunch')
  }

  return (
    <div>
      <div className="buttons">
        <Button className="btn-pedi" type="submit" onClick={handlePedidos}>Anotar Pedidos</Button>
        <Button className="btn-resumo" onClick={handleResumo}>Resumo</Button>
      </div>
      <div className="selection">
        {select === 'pedidos' && <SectionPedidos />}
        {select === 'resumo' && <SectionResumo />}
      </div>
      <div className="containerCardápio">
        {container === 'breakfast' && <ContainerPedidos />}
        {container === 'lunch' && <ContainerResumo />}
      </div>
    </div>
  )
}

export default Atendimento;