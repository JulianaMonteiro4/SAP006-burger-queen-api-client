import React from 'react';

import mesa from '../../img/table.png'

import './tables.css'

const Tables = ({ orders, cores, children, ready, ordersTableActive }) => {
    return (
      <div key={orders?.id+1159} style={{ backgroundColor: cores }} className="div-template-mesa">
        <section className="info-template-mesa">
        <h1>MESA {children}</h1>
        {ready === 0 ? null : <><i className="fas fa-concierge-bell"><p>{ready}</p></i> </> }
        </section>
        <img className="mesa1" style={{ color: cores }}
          src={mesa} onClick={ordersTableActive} alt="mesa" />
      </div>
    )
  }

export default Tables;