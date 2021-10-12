
export const validate = (values) => {

  const errors = {};

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