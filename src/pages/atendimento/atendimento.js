import React, { useState, useEffect } from "react";

import './atendi.css'

import { getProducts, registerOrder, getAllOrders, updateOrderStatus } from "../../utils/services";
import { validate } from './form-validate';
import { addValue, addTotalQuantity, filterStatusOrders, statusColors } from '../../utils/data'

import Header from '../../components/header/header';
import { Button } from '../../components/button/button';
import Product from "../../components/product/product";
import ItemOrder from "../../components/product/itemOrder";
import SectionPedidos from '../../components/section/sectionPedi';
import ContainerMesas from "../../components/container/containerMesas";
import ContainerPedidos from '../../components/container/containerPedi';
import ContainerHistorico from "../../components/container/containerHistorico";
import Modal from '../../components/modal/modal'
import ComandaPedi from "../../components/product/comandaPedi";

const Atendimento = () => {

  //validação dos inputs 
  const [errors, setErrors] = useState({})
  function validateValues(values) {
    const errorsResult = validate(values)
    setErrors(errorsResult)
    return errorsResult;
  }

  //mudar a guia de anotar pedido ou ver o status das mesas 
  const [select, setSelect] = useState('')

  function handlePedidos(selectInfoOrder) {
    setSelect(selectInfoOrder)
  }

  //para usar o modal
  const [isModalVisible, setModalVisible] = useState(false)

  // Pega lista de pedidos entregues 
  const [ordersReady, setOrdersReady] = useState([])
  const [ordersDelivered, setOrdersDelivered] = useState([])

  function getOrders() {
    console.log('pegou')
    getAllOrders().then((responseCommand) => {
      responseCommand.json().then((command) => {
        setOrdersReady([...filterStatusOrders(command, 'ready', 'updatedAt')])
        setOrdersDelivered([...filterStatusOrders(command, 'delivered', 'updatedAt')])
      })
    })
  }

  //inserir as informações do pedido, mesa e nome do cliente
  const [infoOrder, setInfoOrder] = useState({ table: '', name: '' })

  function addInfoOrder(e) {
    const { name, value } = e.target;
    setInfoOrder({ ...infoOrder, [name]: value })

    console.log(infoOrder, errors)
  }

  //pega a lista de produtos
  const [allProducts, setAllProducts] = useState([])
  const [menu, setMenu] = useState([])

  useEffect(() => {
    getProducts().then((listresponse) => {
      listresponse.json().then((list) => {
        setAllProducts(list)
      })
    }).catch((error) => {
      console.log(error)
    })
    getOrders()
  }, [])

  //o usuario escolhe o menu pedido pelo cliente
  function handleMenu(menuOption) {
    setMenu(allProducts.filter((item) => item.type === menuOption))
  }

  //inserir o produto no pedido
  const [itensOrder, setItensOrder] = useState([])
  const [orderRequest, setOrderRequest] = useState([])

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

  // retira um item do pedido
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

  //enviar o pedido para a cozinha
  function sendOrder() {
    const resultErrorsLogin = validateValues(infoOrder);

    if (!resultErrorsLogin.table && !resultErrorsLogin.name) {
      registerOrder(infoOrder.name, infoOrder.table, itensOrder)
        .then((responseOrder) => {
          responseOrder.json().then((order) => {
            console.log(order)
            setOrderRequest(order)
            setModalVisible('pedido realizado')
            setInfoOrder({ table: '', name: '' })
            setItensOrder([])
          })
        })
    } else {
      setModalVisible('error')
    }
  }

  // Apagar pedido
  function cleanSectionOrder() {
    setInfoOrder({ table: '', name: '' })
    setItensOrder([])

  }


  useEffect(() => {
    console.log(itensOrder)
  }, [itensOrder])

  //Mudar o status de pronto para entregue
  const [messageModal, setMessageModal] = useState('')

  function attOrderStatus(orderId, orderStatus) {
    updateOrderStatus(orderId, orderStatus).then((response) => {
      console.log(response)

      switch (response.status) {
        case 200:
          setMessageModal('Status do pedido alterado com sucesso')
          setModalVisible('active')
          getOrders()
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
      <Header></Header>
      <div className="buttons">
        <Button className="btn-mesas" id="btn-mesas" type="submit" onClick={() => { handlePedidos("mesas") }}>Status Mesas</Button>
        <Button className="btn-pedi" id="btn-pedi" type="submit" onClick={() => { handlePedidos("pedidos") }}>Anotar Pedidos</Button>
        <Button className="btn-resumo" id="btn-resumo" type="submit" onClick={() => { handlePedidos("histórico") }}>Histórico</Button>
      </div>
      <div className="selection">
        {/*select === "mesas" && <SectionMesa onChange={null} infoOrder={infoOrder}/>*/}
        {select === "pedidos" && <SectionPedidos onChange={addInfoOrder} handleMenu={handleMenu} infoOrder={infoOrder}>
        </SectionPedidos>}
      </div>

      <div className="containerCardápio">
        {select === "mesas" && <ContainerMesas />}
        {select === "pedidos" && <ContainerPedidos
          listOfProducts={itensOrder}
          value={addValue(itensOrder)}
          totalQuantity={addTotalQuantity(itensOrder)}
          cleanOrder={cleanSectionOrder}
          handleValueOrder={sendOrder}
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
                <ItemOrder item={item}
                  name={item.name}
                  price={item.price}
                  quantity={item.qtd}
                  onClick={() => removeItem(item)} />
              )
            })}
        />}
        {select === "histórico" && <ContainerHistorico
          children={
            ordersReady !== [] && ordersReady.map(order => {
              return (
                <ComandaPedi
                  item={order}
                  className={"comanda"}
                  orderId={order.id}
                  cores={statusColors(order.status)}
                  handleStatus={() => attOrderStatus(order.id, "delivered")}
                  children={"Pronto"}
                />
              )
            })
          }
          children2={
            ordersDelivered !== [] && ordersDelivered.map(order => {
              return (
                <ComandaPedi
                  item={order}
                  className={"comanda"}
                  orderId={order.id}
                  cores={statusColors(order.status)}
                  handleStatus={null}
                  children={"Entregue"}
                />
              )
            })
          }
        />}
      </div>
      {isModalVisible === "active" && <Modal onClose={() => setModalVisible(false)}>{messageModal}</Modal>}
      {isModalVisible === 'error' && <Modal onClose={() => setModalVisible(false)}>{errors.table || errors.name}</Modal>}
      {isModalVisible === 'pedido realizado' && <Modal onClose={() => setModalVisible(false)}>Redido Realizado:{orderRequest.id}</Modal>}
    </div>
  )
}

export default Atendimento;