import React from 'react';

import ComandaPedi from '../product/comandaPedi';
import { statusColors } from '../../utils/data';


const TablesOrders = ({ orders, onClose, attOrderStatusToDelivered }) => {

  const ordersTable = orders.sort((a, b) => a.updatedAt < b.updatedAt ?  1 :  a.updatedAt > b.updatedAt ? -1 : 0)
  


  function handleOutsideClick(e) {
    if (e.target.id === 'orders-table') onClose()

  }

  return (
    <div id="orders-table" className="modal-orders-table" onClick={handleOutsideClick}>
      <div className="container-orders-table">
      <div className="section-orders-table">
        <button className="close-modal-orders-table" onClick={onClose}></button>
        {ordersTable?.map((order) => {
          return (<ComandaPedi
            item={order}
            className={"comanda-modal-pedidos"}
            orderId={order.id}
            cores={() => statusColors(order.status)}
            handleStatus={() => {
              if (order.status === 'ready') {
                attOrderStatusToDelivered(order.id, "delivered")
              } else {
                console.log('botão funcionando')
              }

            }}

            children={order.status === 'pending' ? 'Pendente' :
              order.status === 'inprogress' ? 'Em preparo' :
                order.status === 'ready' ? 'Pronto' :
                  order.status === 'delivered' ? 'Entregue' : 'Não há pedido'
            }
          />
          )
        })}
      </div>
      </div>
    </div>
  )
}

export default TablesOrders;