import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom"

import './header.css'
import jesus from '../../img/jesus-logo.png'
import menu from '../../img/menuHamburguinho.png'

import { logout } from '../../utils/auth';

const Header = () => {

  const [classNave, setClassNave] = useState('menu-nav')

  const handleMenu = () => {
    if (classNave === 'menu-nav') {
      setClassNave('menu-nav active')
    } else {
      setClassNave('menu-nav')
    }
  }

  //const [pageName, setPageName] = useState('Hamburgueria Jesus')

  const [pageMenuHeader, setPageMenuHeader] = useState('');

  const handleChangePage = (e) => {
    const informationPage = (e.target.id);
    setPageMenuHeader(informationPage)
    // if (informationUser === 'password') {      
    // }
  }

  //location.pathname 

  // let history = useHistory()
  // let location = useLocation();

  // if (pageMenuHeader === location.pathname) {
  //   console.log('igual', pageMenuHeader, location.pathname)
  // } else (
  //   console.log('diferente', pageMenuHeader, location.pathname)
  // )

  // switch (pageMenuHeader) {
  //   case location.pathname:
  //     //history.push('/home')
  //     console.log('igual')
  //     break;

  //   case '/logout':
  //     logout()
  //     history.push('/')

  //     break;   
  //   default:
  //     history.push(pageMenuHeader)
    
  // }

  return (
    <header className="menu-header">
      <img src={jesus} alt='logo' className='logo-header' id='feed'></img>
      <p className='page-name'>{pageMenuHeader}</p>
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