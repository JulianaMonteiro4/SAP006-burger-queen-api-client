import React from 'react';

import mesa from '../../img/table.png'

import './tables.css'

const Tables = ({ key, cores, children, ordersTableActive }) => {
  console.log(cores)
    return (
      <div key={key} style={{ backgroundColor: cores }} className="table-order">
        <h1>MESA {children}</h1>
        {<img className="mesa1" style={{ color: cores }}
          src={mesa} onClick={ordersTableActive} alt="mesa" />}
      </div>
    )
  }

export default Tables; 