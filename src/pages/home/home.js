/* eslint-disable no-mixed-operators */
import React, { useState } from 'react';

import { useHistory } from "react-router-dom"

import { logout, roleUser } from '../../utils/auth';

import { Footer } from '../../components/footer/footer';
import Modal from '../../components/modal/modal'

import './home.css';

import menu1 from '../../img/menu1.png'
import menu2 from '../../img/menu2.png'
import menu3 from '../../img/menu3.png'
import menu4 from '../../img/menu4.png'
import menu5 from '../../img/menu5.png'


const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false)

  let history = useHistory()

  const handlePage = (path) => {
    
    if (roleUser === 'cozinheira' && path === '/atendimento' ||
    roleUser === 'atendente' && path === '/pedidos' 
    ){
      setModalVisible(true)
    } else {
    history.push(path)
    }
  }

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  return (
    <div className='menu-div'>
      <figure className='menu'>
        <img className='menu1 fatia'
          src={menu1} alt='menu1' />
        <img className='menu2 fatia'
          src={menu2} alt='menu2'
          onClick={() => { handlePage('/cardapio') }} />
        <img className='menu3 fatia'
          src={menu3} alt='menu3'
          onClick={() => { handlePage('/atendimento') }} />
        <img className='menu4 fatia'
          src={menu4} alt='menu4'
          onClick={() => { handlePage('/pedidos') }} />
        <img className='menu5 fatia'
          src={menu5} alt='menu5'
          onClick={handleLogout} />
          <div>
          {isModalVisible && <Modal onClose={() => setModalVisible(false)}>Usuário não tem permissão</Modal>}
          </div>
      </figure>
      <Footer className="footer-home" />
    </div>
  )
}

export default Home;

//<Link to='/'>Ir para Login</Link>