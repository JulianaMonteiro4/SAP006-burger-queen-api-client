import React, { useState, useEffect } from "react";

import './atendi.css'

import { getProducts } from '../../utils/services'

import Product from "../../components/product/product";

import Header from '../../components/header/header';
import { Button } from '../../components/button/button';
import SectionPedidos from '../../components/section/sectionPedi';
import SectionResumo from '../../components/section/sectionResumo';
import ContainerPedidos from '../../components/container/containerPedi';
import ContainerResumo from '../../components/container/containerResumo';

const Atendimento = () => {

  const [select, setSelect] = useState('')

  function handlePedidos(selectInfoOrder) {
    setSelect(selectInfoOrder)
  }

  const [infoOrder, setInfoOrder] = useState({ table: '', name: '', })

  function addInfoOrder(e) {
    const { name, value } = e.target;

    setInfoOrder({ ...infoOrder, [name]: value })
    console.log(infoOrder)
  }


  const [allProducts, setAllProducts] = useState([]);
  const [menu, setMenu] = useState([]); 

  useEffect(() => {
    getProducts()
      .then((listresponse) => {
        listresponse.json().then((list) => {

          setAllProducts(list)
        })
      })
  }, [])


  function handleMenu(menuSelected) {
    setMenu(allProducts.filter((item) => item.type === menuSelected));
  }
 

  const [itensOrder, setItensOrder] = useState([]);

  function addItem(item) {
    const findItem = itensOrder.find(element => element.id === item.id);

    if (findItem) {
      const indexOfProduct = itensOrder.indexOf(findItem)
      itensOrder[indexOfProduct].quantity++      

      setItensOrder([...itensOrder])   
    } else {
      item.quantity = 1
      //itensOrder.push(item)
      setItensOrder([...itensOrder, item])     
    }
  }

  useEffect(() => {
    console.log(itensOrder)
  }, [itensOrder])

  function removeItem(item) {
    const findItem = itensOrder.find(element => element.id === item.id);
    const indexOfProduct = itensOrder.indexOf(findItem)

    if (itensOrder[indexOfProduct].quantity === 0) {
      itensOrder.splice(indexOfProduct, 1)

     // setItensOrder([...itensOrder])        
    } else {
      itensOrder[indexOfProduct].quantity--

      //setItensOrder([...itensOrder])
    }
    setItensOrder([...itensOrder])
  }

  function addValue() {
    const bill = itensOrder.reduce((accum, item) => accum + item.price, 0)
  }

  return (
    <div>
      <Header></Header>
      <div className="buttons">
        <Button className="btn-pedi" type="submit" onClick={() => { handlePedidos("pedidos") }}>Anotar Pedidos</Button>
        <Button className="btn-resumo" onClick={() => { handlePedidos("resumo") }}>Resumo</Button>
      </div>
      <div className="selection">
        {select === 'pedidos' && <SectionPedidos onChange={addInfoOrder} infoOrder={infoOrder} />}
        {select === 'resumo' && <SectionResumo />}
      </div>
      <div className="containerCardápio">
        {select === 'pedidos' && <ContainerPedidos
          array={itensOrder}
        >
          {allProducts.map(item => {
            return (
              <Product key={item.id}
                image={item.image}
                name={item.name}
                flavor={item.flavor}
                complement={item.complement}
                price={item.price}
                onClick={() => addItem(item)}
              />
            )
          })}
        </ContainerPedidos>}
        {select === 'resumo' && <ContainerResumo />}
      </div>
    </div>
  )
}

export default Atendimento;