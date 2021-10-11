import React from 'react';
//import reactDom from 'react-dom';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/login/login';
import Register  from '../pages/Register/register';
import Home from '../pages/home/home';
import Cardapio from '../pages/cardapio/cardapio'
import Atendimento from '../pages/atendimento/atendimento'
import Pedido from '../pages/pedidos/pedidos';

import PrivateRoute from './privete-route';
import PublicRoute from './public-route';

export const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact path='/' component={Login}  />
      <PublicRoute exact path='/register' component={Register}  />
      <PrivateRoute exact path='/home' component={Home} />
      <PrivateRoute exact path='/cardapio' component={Cardapio} />
      <PrivateRoute exact path='/atendimento' component={Atendimento} />
      <Route exact path='/pedidos' component={Pedido} />
      <Route component={() => <div>Page 404</div>} />
    </Switch>
  )
}