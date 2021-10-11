import React from "react";

import './itemOrder.css'

import { Button } from "../button/button";
import ItemComanda from "./itemComanda";

const ComandaPedi = ({ item, className, cores, handleStatus, children }) => {
  const productsOfOrder = item.Products


  return (
    <article className={className} key={item.id}>
      <section>
      <p>Pedido:{item.id}</p>
      <p>Mesa:{item.table}</p>
      <p>Cliente:{item.client_name}</p>
      </section>
      <ul className="item-order">
        {productsOfOrder?.map(product => {
          return (
            <ItemComanda item={product} />
          )
        }
        )}
      </ul>
      <section className="total">
        <p>Quantidade de itens: {productsOfOrder?.reduce((accum, item) => accum + item.qtd, 0)}</p>
        <p>Total:{null}</p>
      </section>
      <Button className="btn-changeStatus" id="changeStatus" style={{ backgroundColor: cores }} type="button" onClick={() => handleStatus()}>{children}</Button>
    </article>
  )
}

export default ComandaPedi;
