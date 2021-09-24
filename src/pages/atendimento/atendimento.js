import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import './atendi.css'

import ButtonMesas from '../../components/button/buttonMesas'
import ButtonPedi from '../../components/button/buttonPedi'
import ButtonResumo from '../../components/button/buttonResumo'
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
        <ButtonMesas type="submit" onClick={Section}>Status Mesas</ButtonMesas>
        <ButtonPedi type="submit" onClick={handlePedidos}>Anotar Pedidos</ButtonPedi>
        <ButtonResumo type="submit" onClick={handleResumo}>Resumo</ButtonResumo>
      </div>
      <Section />
    </div>
  )
}

export default Atendimento;