import React from "react";

import './container.css';
import {Button} from "../button/button";

const ContainerPedidos = ({children, children2, value, totalQuantity, handleValueOrder}) => {

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
        <div className="container-itens-pedido">
        <p>Status do Pedido</p>
        {children2}
        </div>
        <div className="total">
          <p>Quantidade de itens: {totalQuantity === '' ? '0' : totalQuantity}</p>
          <p>Total:{value === '' ? '0' : value}</p>
          <Button className="btn-enviarStatus" id="enviarStatus" type="submit" onClick={handleValueOrder}>Enviar</Button>
        </div>        
      </div>
    </section>
  )
}

export default ContainerPedidos;
