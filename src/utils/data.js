//atendimento - para ver a quantidade de itens do pedido e somar o valor total 
function addValue(array) {
    return array.reduce((accum, item) => accum + (item.price * item.qtd), 0)
  }
  
  function addTotalQuantity(array) {
    return array.reduce((accum, item) => accum + item.qtd, 0)
  }

  //atendimento - pedidos: para a cor dos botões e mesas 
  
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

  //pedidos: para um único pedido conforme a ordem de prioridade 

  function colorStatusTable(orderTableStatus) {
    let orderStatus = []
            
    orderStatus = orderTableStatus?.find((element) => element.status === 'ready')

    if(orderStatus === [] || orderStatus === undefined) {
      orderStatus = orderTableStatus?.find((element) => element.status === 'inprogress')
    } 

    if(orderStatus === [] || orderStatus === undefined) {
      orderStatus = orderTableStatus?.find((element) => element.status === 'pending')
    }

    if(orderStatus === [] || orderStatus === undefined) {
      orderStatus = orderTableStatus?.find((element) => element.status === 'delivered')
    }
    
    return orderStatus
  }

  //atendimentoMesas: para ordenar os pedidos do popup
  function orderOrdersTime(listOrders, orderTime) {
    return listOrders?.sort((a, b) => { 
      return a[orderTime] < b[orderTime] ?  1 :  a[orderTime] > b[orderTime] ? -1 : 0
    }) 
  }

  //pedidos - para filtrar os pedidos e confome o status e ordená-los conforme o tempo 

  function filterStatusOrders(listOrders, status, orderTime) {
    const ordersStatus = listOrders.filter(item => item.status === status)  
    return ordersStatus.sort((a, b) => { 
      return a[orderTime] < b[orderTime] ?  1 :  a[orderTime] > b[orderTime] ? -1 : 0
    })   
  }



 



  export { addValue, addTotalQuantity, statusColors, colorStatusTable, filterStatusOrders, orderOrdersTime}