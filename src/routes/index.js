import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import theme from "../theme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
//COMPONENTS
import Dashboard from "../pages/form";


export default function Routes() {
  return ( 
    <ThemeProvider theme={theme}>
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
          <Redirect to={"/"}/>
        </Switch>
      </Router> 
    </ThemeProvider>
  )
} 