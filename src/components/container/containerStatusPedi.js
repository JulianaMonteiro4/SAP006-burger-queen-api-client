import React from "react";

import './container.css';


const ContainerStatusPedidos = ({ children1, children2, children3 }) => {
  return (
    <section className="container-status-pedi">
      <div className="container-pedi-peding">
        <p>Pedidos Pendentes</p>
        {children1}
      </div>
      <div className="container-pedi-inprogress">
        <p>Pedidos em Preparo</p>
        {children2}
      </div>
      <div className="container-pedi-ready">
        <p>Pedidos Prontos</p>
        {children3}
      </div>
    </section>
  )
}

export default ContainerStatusPedidos;