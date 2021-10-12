import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getRoleUser } from '../utils/services'

const PrivateRouteKitchen = props => getRoleUser('cozinheira')
    ? <Route to='/pedidos' {... props} /> 
    : <Redirect to='/home' /> 

export default PrivateRouteKitchen;