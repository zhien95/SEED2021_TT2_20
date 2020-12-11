import React from 'react';
import ReactDOM from 'react-dom'

import './index.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Login';
import Payment from './Payment';
import Home from './Home'

import Navbar from './Navbar';
import Error from './Error';
import Balance from './Balance';


const ReactRouterSetup = () =>{
  return(
  <Router>
  <Navbar />
  <Switch>
    <Route exact path='/'>
      <Login/>
    </Route>
    <Route path='/home'>
      <Home/>
    </Route>
    <Route path = '/payment'>
      <Payment/>
    </Route>
    <Route path = '/balance'>
      <Balance/>
    </Route>
    <Route path='*'>
      <Error />
    </Route>
  </Switch>
</Router>
  )
}

export default ReactRouterSetup;

ReactDOM.render(
  <React.StrictMode>
    <ReactRouterSetup/>
  </React.StrictMode>,
  document.getElementById('root')
);