import React from "react";

import './container.css';
import {Button} from "../button/button";

const ContainerPedidos = ({children, children2}) => {

  // const [enviar, setEnviar] = useState('enviar')

  // function enviarPedido () {
  //   setEnviar('enviar')
  // }

  return (
    <section className="container">
      <div className="container-menu-pedidos">
        {children}
      </div>
      <div className="container-pedi">
        <p>Status do Pedido</p>
        {children2}
        <div className="total">
          <p>Quantidodade dos pedidos</p>
          <p>Total</p>
        </div>
        <Button className="btn-enviarStatus" id="enviarStatus" type="submit" onClick={null}>Enviar</Button>
      </div>
    </section>
  )
}

export default ContainerPedidos;
