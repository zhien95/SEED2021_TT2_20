import React from 'react';
import ReactDOM from 'react-dom'

import './index.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BookList from './BookList';
import About from './About';
import Album from './Album';

import Navbar from './Navbar';
import Error from './Error';
import ChartHolder from './ChartHolder';


const ReactRouterSetup = () =>{
  return(
  <Router>
  <Navbar />
  <Switch>
    <Route exact path='/'>
      <BookList/>
    </Route>
    <Route path='/about'>
      <About/>
    </Route>
    <Route path = '/Album'>
      <Album/>
    </Route>
    <Route path = '/Charts'>
      <ChartHolder/>
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