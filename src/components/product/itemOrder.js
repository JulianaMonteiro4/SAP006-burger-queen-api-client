import React from "react";

import './itemOrder.css'

const ItemOrder = ({ item, name, price, quantity, onClick }) => {
  return (
    <li className="item-order">
      <div className="item-infos">
        <p className="info-item-order">{name}</p>
        <p className="info-item-order">R${price},00</p>
        <p className="info-item-order">{quantity}</p>
        <i className="far fa-minus-square" onClick={onClick}></i>
      </div>
      <div className="item-infos-flavor">
        <p className="info-item-order-flavor">{item.flavor}</p>
        <p className="info-item-order-flavor">{item.complement}</p>
      </div>
    </li>
  )
}

export default ItemOrder;

//item.subtype.includes('Hambúrguer')