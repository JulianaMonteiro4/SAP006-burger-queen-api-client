import React from "react";

import './container.css';


const ContainerStatusPedidos = ({ children1, children2, children3 }) => {
  return (
    <section className="container-status-pedi">
      <div className="container-pedi-peding">
        {children1}
      </div>
      <div className="container-pedi-inprogress">
        {children2}
      </div>
      <div className="container-pedi-ready">
        {children3}
      </div>
    </section>
  )
}

export default ContainerStatusPedidos;