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
          //console.log(listOrders)
          //setAllOrders(listOrders)
          //console.log(listOrders[0].status)
          //encontrar(listOrders)
         tables.map((table) => setTables([...tables, table.orders = listOrders.filter(orders => orders.table === table.table)]))
         //setStatusMesa(true)
       
        })
      })
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
        cor = '#FAF970'
        break
      case 'preparo':
        cor = '#8CFA70'
        break
      default:
        cor = '#EB4A2D'
    }
    return cor
  }



  const Mesa = ({ cores, children }) => {
    return (
      <div style={{ backgroundColor: cores }} className="table-order">
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
        {/*statusMesa && */ tables.map((table) => {
            const numberTable = table.table                       
            const firstOrder = table.orders?.[0]
            const statusOrder = firstOrder?.status

            console.log(statusOrder)
            return (
            <Mesa cores={statusColors(statusOrder)} children={numberTable}/>
            )                  
          })           
          }        
      </section>
    </div>
  )
}

export default ContainerMesas;