
function addValue(array) {
    return array.reduce((accum, item) => accum + (item.price * item.qtd), 0)
  }
  
  function addTotalQuantity(array) {
    return array.reduce((accum, item) => accum + item.qtd, 0)
  }
  
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
      default:
        cor = '#38B6FF'
    }
    return cor
  }

  function filterStatusOrders(listOrders, status, orderTime) {
    const ordersStatus = listOrders.filter(item => item.status === status)  
    return ordersStatus.sort((a, b) => { 
      return a[orderTime] < b[orderTime] ?  1 :  a[orderTime] > b[orderTime] ? -1 : 0
    })   
  }



  export { addValue, addTotalQuantity, statusColors, filterStatusOrders }