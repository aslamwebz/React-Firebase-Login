import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './components/Nav'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import store from './store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store} >
        <Router>
            <Route path={'/*'} component={Navigation} />
            <Route exact path={'/'} component={Home} />
            <Route  path={'/login'} component={Login} />
            <Route  path={'/signup'} component={Signup} />
        </Router>
    </Provider>
  );
}

export default App