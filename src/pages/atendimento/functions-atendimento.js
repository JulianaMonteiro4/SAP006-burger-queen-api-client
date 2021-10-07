
function addValue(array) {
    return array.reduce((accum, item) => accum + (item.price * item.qtd), 0)
  }
  
  function addTotalQuantity(array) {
    return array.reduce((accum, item) => accum + item.qtd, 0)
  }

  export { addValue, addTotalQuantity }