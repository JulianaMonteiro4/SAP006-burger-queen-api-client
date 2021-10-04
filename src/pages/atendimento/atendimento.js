import React, { useState, useEffect } from "react";

import './atendi.css'

import { getProducts, registerOrder } from "../../utils/services";

import Header from '../../components/header/header'
import { Button } from '../../components/button/button'
import Product from "../../components/product/product";
import ItemOrder from "../../components/product/itemOrder";
import SectionMesa from "../../components/section/sectionMesa";
import SectionPedidos from '../../components/section/sectionPedi';
import SectionResumo from '../../components/section/sectionResumo';
import ContainerMesas from "../../components/container/containerMesas";
import ContainerPedidos from '../../components/container/containerPedi';
import ContainerResumo from '../../components/container/containerResumo';

function addValue(array) {
  return array.reduce((accum, item) => accum + (item.price*item.qtd), 0)
}

function addTotalQuantity(array) {
  return array.reduce((accum, item) => accum + item.qtd, 0)
}

const Atendimento = () => {

  //mudar a guia de anotar pedido ou resumo
  const [select, setSelect] = useState('')

  function handlePedidos(selectInfoOrder) {
    setSelect(selectInfoOrder)
  }

  //inserir as informações do pedido, mesa e nome do cliente
  const [infoOrder, setInfoOrder] = useState({ table: '', name: '' })

  function addInfoOrder(e) {
    const { name, value } = e.target;
    setInfoOrder({ ...infoOrder, [name]: value })
    console.log(infoOrder)
  }

  //pega alista de produtos
  const [allProducts, setAllProducts] = useState([])
  const [menu, setMenu] = useState([])
  // const [menuSelected, setMenuSelected] = useState('')


  useEffect(() => {
    getProducts().then((listresponse) => {
      listresponse.json().then((list) => {
        setAllProducts(list)
      })
    })
  }, [])

  //o usuario escolhe o menu pedido pelo cliente
  function handleMenu(menuOption) {
    // setMenuSelected(menuOption)
    setMenu(allProducts.filter((item) => item.type === menuOption))
  }

  //inserir o produto no pedido
  const [itensOrder, setItensOrder] = useState([])

  function addItem(item) {
    const findItem = itensOrder.find(element => element.id === item.id)

    if (findItem) {
      const indexOfProduct = itensOrder.indexOf(findItem)
      itensOrder[indexOfProduct].qtd++
      setItensOrder([...itensOrder])

    } else {
      item.qtd = 1
      setItensOrder([...itensOrder, item])
    }
  }

  useEffect(() => {
    console.log(itensOrder)
  }, [itensOrder])


  function removeItem(item) {
    const findItem = itensOrder.find(element => element.id === item.id);
    const indexOfProduct = itensOrder.indexOf(findItem)

    if (itensOrder[indexOfProduct].qtd === 1) {
      itensOrder.splice(indexOfProduct, 1) 

    } else {
      itensOrder[indexOfProduct].qtd--      
    }
    setItensOrder([...itensOrder])
  }

  function sendOrder() {
    registerOrder(infoOrder.name, infoOrder.table, itensOrder)
    .then((responseOrder) => {
      responseOrder.json().then((order) => console.log(order))
    })
  } 


  return (
    <div>
      <Header></Header>
      <div className="buttons">
        <Button className="btn-mesas" id="btn-mesas" type="submit" onClick={() => { handlePedidos("mesas") }}>Status Mesas</Button>
        <Button className="btn-pedi" id="btn-pedi" type="submit" onClick={() => { handlePedidos("pedidos") }}>Anotar Pedidos</Button>
        <Button className="btn-resumo" id="btn-resumo" type="submit" onClick={() => { handlePedidos("resumo") }}>Resumo</Button>
      </div>
      <div className="selection">
        {select === "mesas" && <SectionMesa onChange={null} infoOrder={infoOrder}/>}
        {select === "pedidos" && <SectionPedidos onChange={addInfoOrder} handleMenu={handleMenu} infoOrder={infoOrder}>
        </SectionPedidos>}
        {select === "resumo" && <SectionResumo />}
      </div>

      <div className="containerCardápio">
        {select === "mesas" && <ContainerMesas />}
        {select === "pedidos" && <ContainerPedidos
          listOfProducts={itensOrder}
          value={addValue(itensOrder)}
          totalQuantity={addTotalQuantity(itensOrder)}
          children={
            menu && menu.map(item => {
              return (
                <Product key={item.id}
                  image={item.image}
                  name={item.name}
                  flavor={item.flavor}
                  complement={item.complement}
                  price={item.price}
                  onClick={() => { addItem(item) }}
                />
              )
            })}
          children2={
            itensOrder && itensOrder.map(item => {
              return (
                <ItemOrder name={item.name}
                  price={item.price}
                  quantity={item.qtd}
                  onClick={() => removeItem(item)} />
              )
            })}
        />}
        {select === "resumo" && <ContainerResumo />}
      </div>
    </div>
  )
}

export default Atendimento;