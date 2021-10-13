import React from 'react';

import ComandaPedi from '../product/comandaPedi';
import { statusColors, orderOrdersTime } from '../../utils/data';


const TablesOrders = ({ orders, onClose, attOrderStatusToDelivered }) => {

  const ordersTable = orderOrdersTime(orders, 'updatedAt')

  function handleOutsideClick(e) {
    if (e.target.id === 'orders-table') onClose()
  }

  return (
    <div id="orders-table" className="modal-orders-table" onClick={handleOutsideClick}>
      <div className="container-orders-table">
        <button className="close-modal-orders-table" onClick={onClose}></button>
        <div className="section-orders-table">
          {ordersTable?.map((order) => {
            return (<ComandaPedi
              key={ordersTable.indexOf(order)+14254654578}
              item={order}
              className={"comanda-modal-pedidos"}              
              cores={statusColors(order.status)}
              handleStatus={() => {
                if (order.status === 'ready') {
                  attOrderStatusToDelivered(order.id, "delivered")
                }
              }}

              children={order.status === 'pending' ? 'Pendente' :
                order.status === 'inprogress' ? 'Em preparo' :
                  order.status === 'ready' ? 'Pronto' :
                    order.status === 'delivered' ? 'Entregue' : 'Antigo'
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