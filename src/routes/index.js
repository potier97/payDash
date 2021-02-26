import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
//COMPONENTS
import Dashboard from "../pages/form";


export default function Routes() {
  return ( 
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} /> 
        <Route exact path='/clientes' component={Dashboard} /> 
        <Route exact path='/suscripciones' component={Dashboard} /> 
        <Route exact path='/cobra' component={Dashboard} /> 
        <Route exact path='/recaudo' component={Dashboard} /> 
        <Route exact path='/reportes' component={Dashboard} /> 
        <Route exact path='/saldoRetiro' component={Dashboard} /> 
        <Route exact path='/integraciones' component={Dashboard} /> 
        <Route exact path='/admin' component={Dashboard} /> 
      </Switch>
    </Router> 
  )
} 