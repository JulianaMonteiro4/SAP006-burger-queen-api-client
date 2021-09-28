import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import './atendi.css'

import { Button } from '../../components/button/button'

const Atendimento = () => {

  //const [select, setSelect] = useState({})

  let history = useHistory()
  
  const handlePedidos = () => {
  }

  const handleResumo = () => {
    history.push('/resumo')
  }

  return (
    <div className='pagina-atendimento'>
      <div className="buttons">        
        <Button className="btn-pedi" type="submit" onClick={handlePedidos}>Anotar Pedidos</Button>
        <Button className="btn-resumo" onClick={handleResumo}>Resumo</Button>
      </div>
    </div>
  )
}

export default Atendimento;