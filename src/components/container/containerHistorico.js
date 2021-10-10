import React from "react";

import './container.css';

const ContainerHistorico = ({ children }) => {
  return (
    <section className="container-historico">
      <div className="container-pedi-delivered">
        {children}
      </div>
    </section>
  )
}

export default ContainerHistorico;