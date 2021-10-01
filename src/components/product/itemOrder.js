import React from "react";

import './itemOrder.css'

const ItemOrder = ({ name, price, quantity, onClick }) => {
  return (
    <li className="item-order">
      <p className="info-item-order">{name}</p>
      <p className="info-item-order">{price}</p>
      <p className="info-item-order">{quantity}</p>
      <i className="far fa-minus-square" onClick={onClick}></i>
    </li>
  )
}

export default ItemOrder;