import React from 'react';
//import reactDom from 'react-dom';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/login/login';
import Register  from '../pages/Register/register';
import Home from '../pages/home/home';
import Cardapio from '../pages/cardapio/cardapio'
import Atendimento from '../pages/atendimento/atendimento'
import Mesa from '../pages/atendimento/mesa'

import PrivateRoute from './privete-route';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Login}  />
      <Route exact path='/register' component={Register}  />
      <PrivateRoute exact path='/home' component={Home} />
      <PrivateRoute exact path='/cardapio' component={Cardapio} />
      <PrivateRoute exact path='/atendimento' component={Atendimento} />
      <Route exact path='/mesas' component={Mesa} />
      <Route component={() => <div>Page 404</div>} />
    </Switch>
  )
}