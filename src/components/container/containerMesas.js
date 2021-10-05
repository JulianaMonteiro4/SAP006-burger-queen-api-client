import React, { useEffect, useState, View } from "react";

import './container.css';

import { getAllOrders } from "../../utils/services";

import SectionMesa from '../section/sectionMesa'

import mesa from '../../img/table.png'
// import mesaRed from '../../img/table-red.png'
// import mesaYellow from '../../img/table-yellow.png'
// import mesaGreen from '../../img/table-green.png'



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
          console.log(listOrders[0].status)
          //encontrar(listOrders)
         tables.map((table) => setTables([...tables, table.orders = listOrders.filter(orders => orders.table === table.table)]))
         setStatusMesa(true)
       
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
    let cor = 'red'
    
    switch (statusOrder) {
      case "pending":
        cor = 'blue'
        break
      case 'preparo':
        cor = 'green'
        break
      default:
        cor = 'red'
    }
    return cor
  }



  const Mesa = ({ cores }) => {
    return (
      <div style={{ backgroundColor: cores }} className="table-order">
        <h1 >MESA</h1>
        {<img className="mesa1" style={{ color: cores }}
          src={mesa} onClick={null} alt="mesa" />}
      </div>
    )
  }



  return (
    <div>
      <SectionMesa onClick={null} />

      <section className="container-mesas">        
        {statusMesa && tables.map((table) => {                          
            const firstOrder = table.orders?.[0]
            const statusOrder = firstOrder?.status

            console.log(statusOrder)
            return (
            <Mesa cores={statusColors(statusOrder)} />
            )                  
          })           
          } 

          {/* <img className="mesa1"
          src={mesa} onClick={null} alt="mesa" />
        <img className="mesa1"
          src={mesa} onClick={null} alt="mesa" />
        <img className="mesa1"
          src={mesa} onClick={null} alt="mesa" />
        <img className="mesa1"
          src={mesa} onClick={null} alt="mesa" />
        <img className="mesa1"
          src={mesa} onClick={null} alt="mesa" />
        <img className="mesa1"
          src={mesa} onClick={null} alt="mesa" />
        <img className="mesa1"
          src={mesa} onClick={null} alt="mesa" />
        <img className="mesa1"
          src={mesa} onClick={null} alt="mesa" /> */}
        
      </section>
    </div>
  )
}

export default ContainerMesas;