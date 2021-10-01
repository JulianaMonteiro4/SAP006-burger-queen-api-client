import React from "react";

import './container.css';
import {Button} from "../button/button";

const ContainerPedidos = ({children, array}) => {

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
        <ul>
          {array !== [] && array.map((item) => <li>oi</li>)}
        </ul>
        <div className="total">
          <p>Quantidodade dos pedidos</p>
          <p>Total</p>
        </div>
        <Button className="btn-enviarStatus" type="submit" onClick={null}>Enviar</Button>
      </div>
    </section>
  )
}

export default ContainerPedidos;
