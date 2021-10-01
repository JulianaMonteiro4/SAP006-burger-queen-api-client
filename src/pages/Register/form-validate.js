
export const validate = (values) => {
    const errors = {};

    if (values.role === '') {
        errors.role = 'Por favor, escolha a sua função.'
      }

    if (values.name === '') {
      errors.name = 'Por favor, insira um nome válido.'
    }

    if (values.name.length < 4) {
      errors.name = 'Insira um nome válido com no mínimo 4 caracteres'
    }

    if (!values.email.includes('.com')) {
        errors.email = 'Por favor, insira um email válido com @!'
      }
  
    if (!values.email.includes('@')) {
      errors.email = 'Por favor, insira um email válido com @!'
    }

    if (values.email === '') {
      errors.email = 'Por favor, insira um email válido'
    }
  
    if (values.password.length < 6) {
      errors.password = 'Por favor, insira uma senha com no mínimo 6 caracteres'
    }
    
    if (values.password === '') {
      errors.password = 'Por favor, insira uma senha válida'
    }
    
  
    return errors;
  }