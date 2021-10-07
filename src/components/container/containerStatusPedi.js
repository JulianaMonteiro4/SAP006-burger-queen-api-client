import React from "react";

import './container.css';

const ContainerStatusPedidos = ({ children }) => {
  return (
    <section className="container-status-pedi">
      <div className="container-pedi-peding">
        {children}
      </div>
      <div className="container-pedi-inprogress">
      </div>
      <div className="container-pedi-ready">
      </div>
    </section>
  )
}

export default ContainerStatusPedidos;