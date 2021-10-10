import React from "react";

import './container.css';

const ContainerResumo = ({ children }) => {
  return (
    <section className="container">
      <div className="container-pedi-entregue">
        {children}
      </div>
    </section>
  )
}

export default ContainerResumo;
