import React, { useState, useEffect } from "react";

import { getProducts } from '../../utils/services'

import Header from '../../components/header/header';
import Product from "../../components/product/product";
import { Button } from '../../components/button/button'
import Modal from '../../components/modal/modal'


import './cardapio.css'

const Cardapio = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [menu, setMenu] = useState([]);

  function handleMenu(menuSelected) {
    setMenu(allProducts?.filter((item) => item.type === menuSelected));
  }

  useEffect(() => {
    getProducts()
      .then((listresponse) => {
        listresponse.json().then((list) => {

          if (list.code === 401) {
            setMessageErrorRegister(list.message)
            setModalVisible('error')
          }

          setAllProducts(list)
        })
      })
  }, [])

  
  const [isModalVisible, setModalVisible] = useState(false)
  const [messageErrorRegister, setMessageErrorRegister] = useState('')

  return (
    <div className="page pagina-atendimento">
      <Header></Header>
      <section className="buttons">
        <Button className="btn-pedi" id="" type="submit" onClick={() => { handleMenu("breakfast") }}>Café da Manhã</Button>
        <Button className="btn-resumo" id="" onClick={() => { handleMenu("all-day") }}>Almoço</Button>
      </section>
      <section className="menu-produtos">
        {menu && menu.map(item => {
          return (
            <Product key={item.id}
              image={item.image}
              name={item.name}
              flavor={item.flavor}
              complement={item.complement}
              price={item.price}
            />
          )
        })}

      </section>
      {isModalVisible === "error" && <Modal onClose={() => setModalVisible(false)}>{messageErrorRegister}</Modal>}
    </div>
  )
}

export default Cardapio;