import React from "react";

import './itemOrder.css'

import { Button } from "../button/button";
import ItemComanda from "./itemComanda";

const ComandaPedi = ({ item, cores, handleStatus, children }) => {
  const productsOfOrder = item.Products


  return (
    <div className="comanda">
      <p>Pedido:{item.id}</p>
      <ul className="item-order">
        {productsOfOrder?.map(product => {
          return (
            <ItemComanda item={product} />
          )
        }
        )}
      </ul>
      <div className="total">
        <p>Quantidade de itens: {productsOfOrder?.reduce((accum, item) => accum + item.qtd, 0)}</p>
        <p>Total:{null}</p>
      </div>
      <Button className="btn-changeStatus" id="changeStatus" style={{ backgroundColor: cores }} type="button" onClick={() => handleStatus()}>{children}</Button>
    </div>
  )
}

export default ComandaPedi;
