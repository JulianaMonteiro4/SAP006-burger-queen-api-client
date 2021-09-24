import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import './atendi.css'

import { Button } from '../../components/button/button'

import Section from "../../components/section/section";
import SectionPedidos from "../../components/section/sectionPedi";

const Atendimento = () => {

  const [select, setSelect] = useState({Section})

  let history = useHistory()
  // const handleMesas = () => {
  // }
  
  const handlePedidos = (e) => {
    e.preventDefaul()
    setSelect({SectionPedidos})
  }

  const handleResumo = () => {
    history.push('/resumo')
  }

  return (
    <div>
      <div className="buttons">        
        <Button className="btn-pedi" type="submit" onClick={handlePedidos}>Anotar Pedidos</Button>
        <Button className="btn-resumo" onClick={handleResumo}>Resumo</Button>
      </div>
      <Section />
    </div>
  )
}

export default Atendimento;