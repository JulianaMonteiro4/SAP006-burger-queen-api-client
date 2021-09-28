import React from "react";

import './container.css';
import {Button} from "../button/button";

const ContainerPedidos = () => {

  // const [enviar, setEnviar] = useState('enviar')

  // function enviarPedido () {
  //   setEnviar('enviar')
  // }

  return (
    <section className="container">
      <div className="container-pedi">
        <p>Status do Pedido</p>
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
