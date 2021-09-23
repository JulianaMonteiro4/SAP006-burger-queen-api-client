import React from "react";

import './header.css'
import logoPng from '../../img/jesus-logo.png'

const Header = () => {
  return (
    <header className='nav'>
      <figure className='logoPng'>
        <img className='logo-png'
          src={logoPng} alt='logoPng' />
      </figure>
    </header>
  )
}

export default Header;