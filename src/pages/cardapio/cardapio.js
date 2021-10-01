import React, { useState, useEffect } from "react";

import { getProducts } from '../../utils/services'

import Header from '../../components/header/header';
import Product from "../../components/product/product";
import { Button } from '../../components/button/button'


import './cardapio.css'

const Cardapio = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [menu, setMenu] = useState([]);

    function handleMenu(menuSelected) {
        setMenu(allProducts.filter((item) => item.type === menuSelected));
    }

    useEffect(() => {
        getProducts()
            .then((listresponse) => {
                listresponse.json().then((list) => {

                    setAllProducts(list)
                })
            })
    }, [])

    //useEffect(() => { console.log(menu) }, [menu])


    return (
        <div className="page pagina-atendimento">
            <Header></Header>
            <section className="buttons">
                <Button className="btn-pedi" type="submit" onClick={() => { handleMenu("breakfast") }}>Café da Manhã</Button>
                <Button className="btn-resumo" onClick={() => { handleMenu("all-day") }}>Almoço</Button>
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
        </div>
    )
}

export default Cardapio;

// const [tab, setTab] = useState('breakfast')


//     const [menu, setMenu] = useState([])

//     function handleBreakFast() {
//         setTab('breakfast')
//         // console.log(tab)
//         // getProducts()
//         // .then((listresponse) => {
//         //     listresponse.json().then((list) => console.log(list))
//         // })
//         //
//     }

//     function handleLunch() {
//         setTab('lunch')
//         // console.log(tab)

//     }


//     // const products = getProducts().then((list) => {
//     //     setState
//     // })
//     // console.log(products)

//     useEffect(() => {
//         getProducts()
//             .then((listresponse) => {
//                 listresponse.json().then((list) => {

//                     //console.log(list)

//                     // const x = list.filter(product => product.flavor === 'carne' && product.complement === null && product.name.includes('simples'))
//                     // console.log(x)
//                     setMenu([
//                         menu[0]=list.filter(product => product.type === 'breakfast'), 
//                         menu[1]=list.filter(product => product.type === 'all-day'),
//                         menu[2]=list.filter(product => product.sub_type === 'side'),
//                         menu[3]=list.filter(product => product.sub_type === 'drinks'),
//                     ])
//                    console.log(menu)
//                 })
//             })

//     }, [])



