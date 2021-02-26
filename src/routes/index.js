import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
//COMPONENTS
import Form from "../components/root";


export default function Routes() {
  return ( 
    <Router>
        <Switch>
            <Route exact path="/" component={Form} /> 
            <Route exact path='/clientes' component={Form} /> 
            <Route exact path='/suscripciones' component={Form} /> 
            <Route exact path='/cobra' component={Form} /> 
            <Route exact path='/recaudo' component={Form} /> 
            <Route exact path='/reportes' component={Form} /> 
            <Route exact path='/saldoRetiro' component={Form} /> 
            <Route exact path='/integraciones' component={Form} /> 
            <Route exact path='/admin' component={Form} /> 
        </Switch>
    </Router> 
  )
} 