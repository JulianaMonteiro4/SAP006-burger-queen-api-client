import React, { useEffect, useState } from "react";

import './container.css';

import { getAllOrders, updateOrderStatus } from "../../utils/services";
import { statusColors, colorStatusTable, orderOrdersTime, filterOrdersTable } from '../../utils/data'

import SectionMesa from '../section/sectionMesa'
import Tables from '../tables/tables'
import TablesOrders from "../tables/tablesOrders";
import Modal from "../modal/modal";



const ContainerMesas = () => {

  const [statusMesa, setStatusMesa] = useState(false)
  const [attStatusHall, setAttStatusHall] = useState({ attHall: 1 })

  const [tables, setTables] = useState([
    {
      table: 1,
      orders: []
    },
    {
      table: 2,
      orders: []
    },
    {
      table: 3,
      orders: []
    },
    {
      table: 4,
      orders: []
    },
    {
      table: 5,
      orders: []
    },
    {
      table: 6,
      orders: []
    },
    {
      table: 7,
      orders: []
    },
    {
      table: 8,
      orders: []
    },
    {
      table: 9,
      orders: []
    }
  ])

  function handleTable() {
    attStatusHall.attHall++
    setAttStatusHall({ ...attStatusHall })
  }

  function getProducts() {
    getAllOrders()
      .then((responseOrders) => {
        responseOrders.json().then((listOrders) => {                

          tables.map((table) => setTables([...tables, table.orders = listOrders.filter(orders => orders.table === table.table)]))
                      
        })
      })
    setStatusMesa(true)
    setTables([...tables, tables.splice(9, 1)])    
  }


  useEffect(() => {
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attStatusHall]) 


  const [listOfOrdersTables, setListOfOrdersTables] = useState([])
  const [messageModal, setMessageModal] = useState('')
  const [isModalVisible, setModalVisible] = useState(false)

  const ordersTableActive = (table) => {
    setModalVisible('listofOrdersTable') 
    setListOfOrdersTables([...filterOrdersTable(table)])    
  }


  function attOrderStatusToDelivered(orderId, orderStatus) {
    updateOrderStatus(orderId, orderStatus).then((response) => {

      switch (response.status) {
        case 200:
          getProducts()
          setMessageModal('Status do pedido alterado com sucesso')
          setModalVisible('active')
          break
        case 400:
          setMessageModal('Atenção: dados obrigatórios ausentes ou nenhuma alteração aplicada')
          setModalVisible('active')
          break
        case 401:
          setMessageModal('Atenção: usuário não autorizado')
          setModalVisible('active')
          break
        case 403:
          setMessageModal('Proibido. O pedido pertence a outro restaurante')
          setModalVisible('active')
          break
        case 404:
          setMessageModal('Atenção: pedido não encontrado')
          setModalVisible('active')
          break
        default:
          setMessageModal('Refaça a mudança')
          setModalVisible('active')
      }
    })
  }

  return (
    <div>
      <SectionMesa onClick={handleTable} />

      <section className="container-mesas">
        {statusMesa && tables.map((table) => {          
          const numberTable = table.table
          const listOfOrdersTable = table.orders

          const orderTableTime = orderOrdersTime(listOfOrdersTable, 'createAt')

          const orderStatus = colorStatusTable(orderTableTime)

          const ordersReady = orderTableTime?.filter((element) => element.status === 'ready')                 
             
          
          return (
            <Tables cores={statusColors(orderStatus?.status)}
              children={numberTable} orders={orderStatus}
              ready={ordersReady?.length}
              ordersTableActive={() => ordersTableActive(orderTableTime)}
            />
          )
        })}
      </section>
      <section>
        {isModalVisible === 'listofOrdersTable' && <TablesOrders
          orders={listOfOrdersTables}          
          onClose={() => setModalVisible(false)}
          attOrderStatusToDelivered={attOrderStatusToDelivered}
        />}
      </section>
      {isModalVisible === "active" && <Modal onClose={() => setModalVisible(false)}>{messageModal}</Modal>}
    </div>
  )
}

export default ContainerMesas;