import React from "react";

import './container.css';

const ContainerHistorico = ({ children, children2 }) => {
  return (
    <section className="container-historico">
      <div className="container-pedi-ready">
        <p>Pedidos Prontos</p>
        {children}
      </div>
      <div className="container-pedi-delivered">
        <p>Pedidos Entregues</p>
        {children2}
      </div>
    </section>
  )
}

export default ContainerHistorico;