import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom"

import './header.css'
import jesus from '../../img/jesus-logo.png'
import menu from '../../img/menuHamburguinho.png'

import { logout } from '../../utils/auth';

const Header = () => {
  let history = useHistory()

  const [classNave, setClassNave] = useState('menu-nav');

  const handleMenu = () => {
    if (classNave === 'menu-nav') {
      setClassNave('menu-nav active')
    } else {
      setClassNave('menu-nav')
    }
  }


  const [pageMenuHeader, setPageMenuHeader] = useState('');

  useEffect(() => {
    setPageMenuHeader(`${history.location.pathname}`)

  }, [])

  const handleChangePage = (e) => {
    const informationPage = e.target.id;
    setPageMenuHeader(informationPage)


    switch (informationPage) {
      case (history.location.pathname):
        //history.push('/home')
        console.log('igual')
        break;

      case '/logout':
        logout()
        history.push('/')
        break;     

      default:
        history.push(informationPage)        
    }
  }

  return (
    <header className="menu-header">
      <img src={jesus} alt='logo' className='logo-header' id='feed'></img>
      <p className='page-name'>{pageMenuHeader.toLocaleUpperCase().replace('/', '')}</p>
      <nav className={classNave}>
        <img src={menu} alt='logo' className='hamburguer-header' id='hamburguer' onClick={handleMenu}></img>
        <ul className='menu-hamburguer'>
          <li className='menu-a' id='/home' onClick={handleChangePage}>Home</li>
          <li className='menu-a' id='/cardapio' onClick={handleChangePage}>Cardápio</li>
          <li className='menu-a' id='/atendimento' onClick={handleChangePage}>Atendimento</li>
          <li className='menu-a' id='/pedidos' onClick={handleChangePage}>Pedidos</li>
          <li className='menu-a' id='/logout' onClick={handleChangePage}>Sair</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;