import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Transfer from './components/Transfer/Transfer';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact={true} path='/'>
            <Login />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/transfer">
            <Transfer />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
