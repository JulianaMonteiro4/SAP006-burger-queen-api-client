import React from "react";

import './itemOrder.css'
import { preparationTime } from '../../utils/data'

import ItemComanda from './itemComanda';


const ComandaPedi = ({ item, className, cores, handleStatus, children }) => {
  const productsOfOrder = item.Products  

  const timeready = preparationTime(item)
  console.log(timeready)


  return (
    <article className={className} key={item.id}>
      <section className="info-pedido">
        <div className="info-order-kitchen">
        <i className="fas fa-receipt"><p> - {item.id}</p></i>
        {item.status === 'ready' && <i className="far fa-hourglass"><p>{timeready}</p></i>}
        </div>
        <i className="far fa-calendar-check"><p> - {(item.createdAt).substr(0, 10)}</p></i>
        <i className="far fa-clock"><p> - {(item.createdAt).substr(11, 8)}</p></i>
        <i className="fas fa-table"><p> - {item.table}</p></i>
        <i className="fas fa-user"><p> - {item.client_name}</p></i>
      </section>
      <ul className="item-order">
        {productsOfOrder?.map(product => {
          return (
            <ItemComanda item={product} />
          )
        }
        )}
      </ul>     
      <button className="btn-changeStatus" id="changeStatus" style={{ backgroundColor: cores }} type="button" onClick={() => handleStatus()}>{children}</button>
    </article>
  )
}

export default ComandaPedi;
