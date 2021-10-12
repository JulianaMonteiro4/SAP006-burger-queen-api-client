import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { Routes } from '../src/routes/routes'

ReactDOM.render( 
  <React.StrictMode>
    <BrowserRouter>
      <Routes />      
      
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);
