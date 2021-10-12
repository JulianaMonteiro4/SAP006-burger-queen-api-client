import React, { useState, Fragment } from "react";
import { Link, useHistory } from 'react-router-dom';

import { Footer } from '../../components/footer/footer';
import { Button } from '../../components/button/button'
import { InputText } from '../../components/input/input'
import Modal from '../../components/modal/modal'

import { loginUser, loginConfirmed } from '../../utils/auth';
import { validate } from './form-validate';

import './login.css';

import fundo from '../../img/fundo.png'
import fundoDesk from '../../img/fundo-desk.png'
import hamburguer from '../../img/hamburguer-login.png'
import jesus from '../../img/jesus.gif'
import jesusDesk from '../../img/jesus-desk.gif'

const Login = () => {

  const [isModalVisible, setModalVisible] = useState(false)
  const [messageErrorRegister, setMessageErrorRegister] = useState('')
  const [errors, setErrors] = useState({})
  function validateValues(values) {
    const errorsResult = validate(values)
    setErrors(errorsResult)
    return errorsResult;
  }  

  const [infoUser, setInfoUser] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const informationUser = e.target.id;
    setInfoUser({ ...infoUser, [informationUser]: e.target.value })   
  }

  let history = useHistory()

  const handleLogin = (e) => {
    e.preventDefault();
    const resultErrorsLogin = validateValues(infoUser);

    if (!resultErrorsLogin.email && !resultErrorsLogin.password) {

      loginUser(infoUser.email, infoUser.password)
        .then((responseLogin) => {
          responseLogin.json()
            .then((user) => {

              if (user.code === 400) {
                setMessageErrorRegister(user.message)
                setModalVisible('error')
              } else {
                loginConfirmed(user.token, user.role)
                history.push('/home')
                document.location.reload(true) 
              }
            })
        })
    }
  };

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

          <Button className='btn' type='submit' onClick={handleLogin}>Logue-se</Button>
          <p className='link-register'>Clique <Link to='/register'>aqui </Link>para se cadastrar.</p>
        </form>
        <Footer className="footer" />
      </div>
      {isModalVisible === "error" && <Modal onClose={() => setModalVisible(false)}>{messageErrorRegister}</Modal>}
    </Fragment>
  )
};

export default Login;