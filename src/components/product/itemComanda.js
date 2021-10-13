import React from "react";

const ItemComanda = ({ item }) => {
  return (
    <>
    <li>
      <div className="item-infos" >
        <p className="info-item-order">{item.qtd} x </p>
        <p className="info-item-order">{item.name}</p>
      </div>
      <div className="item-infos-flavor">
        <p className="info-item-order-flavor">{item.flavor}</p>
        <p className="info-item-order-flavor">{item.complement}</p>
      </div>
    </li>
    </>
  )
}

export default ItemComanda;