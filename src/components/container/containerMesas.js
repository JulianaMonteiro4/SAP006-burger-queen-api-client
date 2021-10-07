import React, { useEffect, useState, View } from "react";

import './container.css';

import { getAllOrders } from "../../utils/services";

import SectionMesa from '../section/sectionMesa'

import mesa from '../../img/table.png'


const ContainerMesas = () => {

  const [ statusMesa, setStatusMesa ] = useState(false)

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

  const [allOrders, setAllOrders] = useState([])

  useEffect(() => {
    getAllOrders()
      .then((responseOrders) => {
        responseOrders.json().then((listOrders) => {
          console.log(listOrders)
          setAllOrders(listOrders)
          //encontrar(listOrders)
         tables.map((table) => setTables([...tables, table.orders = listOrders.filter(orders => orders.table === table.table)]))
       
        })
      })
      setStatusMesa(true)
  }, [])

  useEffect(() => {   
    console.log(tables)
  }, [tables])

  function handleTable() {   
  console.log('oi')
  }

  function statusColors(statusOrder) {    
    let cor = ''
    
    switch (statusOrder) {
      case 'pending':
        cor = '#EB4A2D'
        break
      case 'ready':
        cor = '#8CFA70'
        break
      case 'inprogress':
        cor = '#F3E139'
        break
      default:
        cor = '#38B6FF'
    }
    return cor
  }



  const Mesa = ({ key, cores, children }) => {
    return (
      <div key={key} style={{ backgroundColor: cores }} className="table-order">
        <h1>MESA {children}</h1>
        {<img className="mesa1" style={{ color: cores }}
          src={mesa} onClick={null} alt="mesa" />}
      </div>
    )
  }



  return (
    <div>
      <SectionMesa onClick={handleTable} />

      <section className="container-mesas">        
        {statusMesa && tables.map((table) => {
            const numberTable = table.table
            const orderTableStatus = table.orders                   
            // const firstOrder = table.orders?.[0]
            // const statusOrder = firstOrder?.status

            const orderStatus = orderTableStatus?.find((element) => 
              element.status === 'ready' ||
              element.status === 'inprogress' ||
              element.status === 'pending'
            )

            console.log(orderStatus)
            return (
            <Mesa cores={statusColors(orderStatus?.status)} children={numberTable} key={orderStatus?.id}/>
            )                  
          })           
          }        
      </section>
    </div>
  )
}

export default ContainerMesas;