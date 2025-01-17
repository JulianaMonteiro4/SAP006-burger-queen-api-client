import React, { useEffect, useState } from "react";

import './pedidos.css'

import { getAllOrders, updateOrderStatus } from "../../utils/services";
import { statusColors, filterStatusOrders, filterOrdersTimeCresc } from '../../utils/data'

import Header from "../../components/header/header";
import { Button } from "../../components/button/button";
import ContainerStatusPedidos from "../../components/container/containerStatusPedi";
import ContainerHistorico from "../../components/container/containerHistorico";
import ComandaPedi from "../../components/product/comandaPedi";
import Modal from '../../components/modal/modal'


const Pedido = () => {

  const [container, setContainer] = useState('')

  function handleStatusPedi(selectInfoPedi) {
    setContainer(selectInfoPedi)
  }

  const [ordersPending, setOrdersPending] = useState([])
  const [ordersInProgress, setOrdersInProgress] = useState([])
  const [ordersReady, setOrdersReady] = useState([])
  const [ordersDelivered, setOrdersDelivered] = useState([])

  function getOrders() {
    getAllOrders().then((responseCommand) => {
      responseCommand.json().then((command) => {

        setOrdersPending([...filterStatusOrders(command, 'pending', 'createAt')])
        setOrdersInProgress([...filterStatusOrders(command, 'inprogress', 'createAt')])
        setOrdersReady([...filterStatusOrders(command, 'ready', 'createAt')])
        setOrdersDelivered([...filterOrdersTimeCresc(command, 'delivered', 'updateAt')])
      })
    })
  }

  useEffect(() => {
    getOrders()
  }, [])

  const [messageModal, setMessageModal] = useState('')
  const [isModalVisible, setModalVisible] = useState(false)

  function attOrderStatus(orderId, orderStatus) {

    updateOrderStatus(orderId, orderStatus).then((response) => {

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
                  <ComandaPedi key={order.id+6487}                 
                    item={order}
                    className={"comanda"}                    
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
                  <ComandaPedi key={order.id+6487}                   
                    item={order}
                    className={"comanda"}                    
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
                  <ComandaPedi key={order.id+6487}                   
                    item={order}
                    className={"comanda"}                    
                    cores={statusColors(order.status)}
                    handleStatus={() => {
                      setMessageModal('Usuário não tem autorização')
                      setModalVisible('active')
                    }}
                    children={"Pronto"}
                  />
                )
              })
            }
          />}
          
          {container === "histórico" && <ContainerHistorico

            children={
              ordersReady !== [] && ordersReady.map(order => {
                return (
                  <ComandaPedi  key={order.id+8087}                
                    item={order}
                    className={"comanda"}                    
                    cores={statusColors(order.status)}
                    handleStatus={() => {
                      setMessageModal('Usuário não tem autorização')
                      setModalVisible('active')
                    }}
                    children={"Pronto"}
                  />
                )
              })
            }
            children2={
              ordersDelivered !== [] && ordersDelivered.map(order => {
                return (
                  <ComandaPedi  key={order.id+6487}                  
                    item={order}
                    className={"comanda"}                    
                    cores={statusColors(order.status)}
                    handleStatus={() => {
                      setMessageModal('Usuário não tem autorização')
                      setModalVisible('active')
                    }}
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