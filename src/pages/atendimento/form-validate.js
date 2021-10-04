
export const validate = (values) => {

    const errors = {};

    if (values.table === '' || values.table === 'Mesas') {
      errors.table = 'Por favor, indique o número da mesa'
    }
    
    if (values.name === '') {
      errors.name = 'Por favor, insira um nome do cliente'
    }    
  
    return errors;
  }