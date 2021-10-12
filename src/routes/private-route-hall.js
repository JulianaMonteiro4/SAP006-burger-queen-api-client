import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getRoleUser } from '../utils/services'

const PrivateRouteHall =  props => getRoleUser('atendente')
    ?  <Route to='/atendimento' {... props} /> 
    :  <Redirect to='/home' /> 

export default PrivateRouteHall;