import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './index.css';

import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import SignUp from './components/signup';
import Login from './components/login';
import Logout from './components/logout';

import reportWebVitals from './reportWebVitals';

const websiteName = "Wyb Blog"

const routing = (
  <Router>
    <React.StrictMode>
    <Header title={websiteName} />
      <Switch>
          <Route exact path="/" component={App} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
      </Switch>
      <Footer title={websiteName} />
    </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
