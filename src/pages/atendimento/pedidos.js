import React, { useEffect, useState } from "react";

import './atendi.css'

import { getAllOrders, updateOrderStatus } from "../../utils/services";
import { statusColors, filterStatusOrders } from '../../utils/data'

import Header from "../../components/header/header";
import { Button } from "../../components/button/button";
import ContainerStatusPedidos from "../../components/container/containerStatusPedi";
import ContainerHistorico from "../../components/container/containerHistorico";
import ComandaPedi from "../../components/product/comandaPedi";
import Modal from '../../components/modal/modal'


const Pedido = () => {
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
      case 'delivered':
        cor = '#38B6FF'
        break
      default:
        cor = '#FFF'
    }
    return cor
  }

  const [container, setContainer] = useState('')

  function handleStatusPedi(selectInfoPedi) {
    setContainer(selectInfoPedi)
  }

  const [ordersPending, setOrdersPending] = useState([])
  const [ordersInProgress, setOrdersInProgress] = useState([])
  const [ordersReady, setOrdersReady] = useState([])
  const [ordersDelivered, setOrdersDelivered] = useState([])

  function getOrders() {
    console.log('pegou')
    getAllOrders().then((responseCommand) => {
      responseCommand.json().then((command) => {
               
        setOrdersPending([...filterStatusOrders(command, 'pending', 'createAt')])
        setOrdersInProgress([...filterStatusOrders(command, 'inprogress', 'updatedAt')])
        setOrdersReady([...filterStatusOrders(command, 'ready', 'updatedAt')])
        setOrdersDelivered([...filterStatusOrders(command, 'delivered', 'updatedAt')])
      })
    })
  }

  useEffect(() => {
    getOrders()
  }, [])


  useEffect(() => {
   console.log(ordersInProgress)
  }, [ordersInProgress])

  const [messageModal, setMessageModal] = useState('')
  const [isModalVisible, setModalVisible] = useState(false)

  function attOrderStatus(orderId, orderStatus) {
    console.log('oi')
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
        <Button className="btn-status-pedi" id="btn-status-pedi" type="submit" onClick={() => { handleStatusPedi("status") }}>Status Pedidos</Button>
        <Button className="btn-historico" id="btn-historico" type="submit" onClick={() => { handleStatusPedi("histórico") }}>Histórico</Button>
        <Button className="btn-atualizar-pedi" id="btn-atualizar" type="submit" onClick={getOrders}>Atualizar</Button>
      </div>
      <div className="container-pedidos">
        <div>
          {container === "status" && <ContainerStatusPedidos
            children1={
              ordersPending !== [] && ordersPending.map(order => {
                
                return (
                  <ComandaPedi
                    item={order}
                    className={"comanda"}
                    orderId={order.id}
                    cores={statusColors(order.status)}
                    handleStatus={() => attOrderStatus(order.id, "inprogress")}
                    children={"Pendente"}
                  />
                )
              }
              )}

            children2={
              ordersInProgress !== [] && ordersInProgress.map(order => {
                return (
                  <ComandaPedi
                    item={order}
                    className={"comanda"}
                    orderId={order.id}
                    cores={statusColors(order.status)}
                    handleStatus={() => attOrderStatus(order.id, "ready")}
                    children={"Em Preparo"}
                  />
                )
              })
            }

            children3={
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
          />}
          {container === "histórico" && <ContainerHistorico
            children={
              ordersDelivered !== [] && ordersDelivered.map(order => {
                return (
                  <ComandaPedi
                    item={order}
                    orderId={order.id}
                    cores={statusColors(order.status)}
                    handleStatus={() => attOrderStatus(order.id, "delivered")}
                    children={"Entregue"}
                  />
                )
              }
              )}
          />}
        </div>
      </div>
      {isModalVisible === "active" && <Modal onClose={() => setModalVisible(false)}>{messageModal}</Modal>}
    </div>
  )
}

export default Pedido;