import React,  { useState }from "react";

import './atendi.css'

import Header from "../../components/header/header";
import { Button  } from "../../components/button/button";
import ContainerStatusPedidos from "../../components/container/containerStatusPedi";
import ContainerHistorico from "../../components/container/containerHistorico";

const Pedido = () => {
  const [container, setContainer] = useState('')

  function handleStatusPedi(selectInfoPedi) {
    setContainer(selectInfoPedi)
  }

  return (
    <div>
      <Header></Header>
      <div className="buttons">
        <Button className="btn-status-pedi" id="btn-status-pedi" type="submit" onClick={() => {handleStatusPedi("status")}}>Status Pedidos</Button>
        <Button className="btn-historico" id="btn-historico" type="submit" onClick={() => {handleStatusPedi("histórico")}}>Histórico</Button>
        <Button className="btn-atualizar-pedi" id="btn-atualizar" type="submit" onClick={null}>Atualizar</Button>
      </div>
      <div className="container-pedidos">
        <div>
          {container === "status" && <ContainerStatusPedidos />}
          {container === "histórico" && <ContainerHistorico />}
        </div>
      </div>
    </div>
  )
}

export default Pedido;