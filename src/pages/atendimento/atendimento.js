import React, { useState, useEffect } from "react";

import './atendi.css'

import { getProducts } from "../../utils/services";

import Header from '../../components/header/header'

import { Button } from '../../components/button/button'
import Product from "../../components/product/product";
import ItemOrder from "../../components/product/itemOrder";
import SectionPedidos from '../../components/section/sectionPedi';
import SectionResumo from '../../components/section/sectionResumo';
import ContainerPedidos from '../../components/container/containerPedi';
import ContainerResumo from '../../components/container/containerResumo';

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
      itensOrder[indexOfProduct].quantity++
      setItensOrder([...itensOrder])

    } else {
      item.quantity = 1
      setItensOrder([...itensOrder, item])
    }
  }

  useEffect(() => {
    console.log(itensOrder)
  }, [itensOrder])


  function removeItem(item) {
    const findItem = itensOrder.find(element => element.id === item.id);
    const indexOfProduct = itensOrder.indexOf(findItem)

    if (itensOrder[indexOfProduct].quantity === 1) {
      itensOrder.splice(indexOfProduct, 1)

      // setItensOrder([...itensOrder])        
    } else {
      itensOrder[indexOfProduct].quantity--

      //setItensOrder([...itensOrder])
    }
    setItensOrder([...itensOrder])
  }

  function addValue() {
    return itensOrder.reduce((accum, item) => accum + (item.price*item.quantity), 0)
  }

  function addTotalQuantity() {
    return itensOrder.reduce((accum, item) => accum + item.quantity, 0)
  }


  return (
    <div>
      <Header></Header>
      <div className="buttons">
        <Button className="btn-pedi" id="btn-pedi" type="submit" onClick={() => { handlePedidos("pedidos") }}>Anotar Pedidos</Button>
        <Button className="btn-resumo" id="btn-resumo" type="submit" onClick={() => { handlePedidos("resumo") }}>Resumo</Button>
      </div>
      <div className="selection">
        {select === "pedidos" && <SectionPedidos onChange={addInfoOrder} handleMenu={handleMenu} infoOrder={infoOrder}>
        </SectionPedidos>}
        {select === "resumo" && <SectionResumo />}
      </div>

      <div className="containerCardápio">
        {select === "pedidos" && <ContainerPedidos
          listOfProducts={itensOrder}
          value={addValue()}
          totalQuantity={addTotalQuantity()}
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
                  quantity={item.quantity}
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