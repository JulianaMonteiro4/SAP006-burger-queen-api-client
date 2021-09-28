import React, { useState, useEffect } from "react";

import { getProducts } from '../../utils/services'

import Product from "../../components/product/product";
import { Button } from '../../components/button/button'


import './cardapio.css'

const Cardapio = () => {

  const [tab, setTab] = useState('breakfast')


  const [menu, setMenu] = useState('breakfast')

  function handleBreakFast() {
    setTab('breakfast')
    console.log(tab)
    // getProducts()
    // .then((listresponse) => {
    //     listresponse.json().then((list) => console.log(list))
    // })
  }

  function handleLunch() {
    setTab('lunch')
    console.log(tab)

  }

  useEffect(() => {
    getProducts()
      .then((listresponse) => {
        listresponse.json().then((list) => console.log(list))
      })

  }, [])



  return (
    <div className="page">
      <section className="buttons">
        <Button className="btn-pedi" type="submit" onClick={handleBreakFast}>Café da Manhã</Button>
        <Button className="btn-resumo" onClick={handleLunch}>Almoço</Button>
      </section>
      <section className="menu-produtos">
        {tab === 'breakfast' && <div>oi</div>}
        {tab === 'lunch' && <div>tchau</div>}
      </section>
    </div>
  )
}

export default Cardapio