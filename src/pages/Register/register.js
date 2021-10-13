import React, { useState, Fragment } from "react";
import { Link } from 'react-router-dom';

import { registerUser } from "../../utils/auth";
import { validate } from './form-validate'
import { Footer } from '../../components/footer/footer'
import { Button } from '../../components/button/button'
import { InputText } from '../../components/input/input'
import Modal from '../../components/modal/modal'

import '../banana/login.css';

import fundo from '../../img/fundo.png'
import fundoDesk from '../../img/fundo-desk.png'
import hamburguer from '../../img/hamburguer-login.png'
import jesus from '../../img/jesus.gif'
import jesusDesk from '../../img/jesus-desk.gif'


const Register = () => {

  const [isModalVisible, setModalVisible] = useState(false)
  const [messageErrorRegister, setMessageErrorRegister] = useState('')
  const [errors, setErrors] = useState({})
  function validateValues(values) {
    const errorsResult = validate(values)
    setErrors(errorsResult)
    return errorsResult
  }


  const [infoUser, setInfoUser] = useState({ name: '', email: '', password: '', role: '' });

  const handleChange = (e) => {
    const informationUser = e.target.id;
    setInfoUser({ ...infoUser, [informationUser]: e.target.value })
    
  }


  const handleRegister = (e) => {
    e.preventDefault();

    const resultErrors = validateValues(infoUser);
    if (!resultErrors.email && !resultErrors.password && !resultErrors.name && !resultErrors.role) {
      
      registerUser(infoUser.name, infoUser.email, infoUser.password, infoUser.role)
        .then((response) => {          

          if (response.status === 400) {
            setMessageErrorRegister('Atenção: não informou os dados necessários')
            setModalVisible('error')
          } else if (response.status === 403) {
            setMessageErrorRegister('Atenção: já existe um cadastro com esse email')
            setModalVisible('error')
          } else {
            setModalVisible('concluído')
          }
        })
    }
  }

  return (
    <Fragment>
      <div className='login'>
        <figure className='fundos-login'>
          <img className='fundo-login'
            src={fundo} alt='fundo' />
          <img className='fundo-desk'
            src={fundoDesk} alt='fundo' />
          <img className='hamburguer-login'
            src={hamburguer} alt='hamburguer' />
        </figure>
        <figure className='logos-login'>
          <img className='jesus-logo'
            src={jesus} alt='jesus' />
          <img className='jesus-desk'
            src={jesusDesk} alt='jesus' />
        </figure>

        <form className='form-login' >

          <fieldset className='form-inner'>
            <div>
              <InputText className="input" type='email' id='email' placeholder='Email'
                name='email'
                value={infoUser.email}
                onChange={handleChange} />
              <section className='icons-input'>
                <i className='far fa-envelope icons'></i>
              </section>
            </div>
            {errors.email && <span className='form-error email'>{errors.email}</span>}
          </fieldset>

          <fieldset className="form-inner">
            <div>
              <InputText className="input-password"
                type="password" id="password" placeholder="Password"
                name='password'
                value={infoUser.password}
                onChange={handleChange} />
              <section className="icons-input">
                <i id="show" className="fas fa-lock icons"></i>
                <i id="hide" className="fas fa-lock-open icons"></i>
              </section>
            </div>
            {errors.password && <span className='form-error'>{errors.password}</span>}
          </fieldset>

          <fieldset className='form-inner'>
            <div>
              <InputText className="input-name" type='name' id='name' placeholder='name'
                name='name'
                value={infoUser.name}
                onChange={handleChange} />
            </div>
            {errors.name && <span className='form-error email'>{errors.name}</span>}
          </fieldset>

          <fieldset className='form-inner'>
            <div className="role-name">
              <label>
                <input className="role-option" type="radio" name="name-role" id='role'
                  value="atendente"
                  onChange={handleChange} />
                atendente
              </label>
              <label className="role-option">
                <input className="role-option" type="radio" name="name-role" id='role'
                  value="cozinheira"
                  onChange={handleChange} />
                cozinheira
              </label>
              <label className="role-option">
                <input className="role-option" type="radio" name="name-role" id='role'
                  value="gerente"
                  onChange={handleChange} />
                gerente
              </label>
            </div>
            {errors.role && <span className='form-error email'>{errors.role}</span>}
          </fieldset>

          <Button className="btn" type='submit' onClick={handleRegister}>Cadastre-se</Button>
          <p className='link-register'>Clique <Link to='/'>aqui </Link>para logar-se.</p>
        </form>
        <Footer className="footer" />
      </div>
      {isModalVisible === "concluído" && <Modal onClose={() => setModalVisible(false)}>Seu cadastro foi realizado!</Modal>}
      {isModalVisible === "error" && <Modal onClose={() => setModalVisible(false)}>{messageErrorRegister}</Modal>}
    </Fragment>
  )
};

export default Register;