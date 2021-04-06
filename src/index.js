import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';

import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import SignUp from './components/auth/signup';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import Single from './components/articles/single';
import Search from './components/articles/search';
import Admin from './Admin';
import Create from './components/admin/create';
import Edit from './components/admin/edit';
import Delete from './components/admin/delete';
import Superuser from './Superuser';
import UserEdit from './components/superuser/edit';
import UserDelete from './components/superuser/delete';

import reportWebVitals from './reportWebVitals';

const websiteName = "Bhaven's Blog"

const routing = (
  <Router>
    <React.StrictMode>
    <Header title={websiteName} />
      <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/create" component={Create} />
          <Route exact path="/admin/edit/:slug" component={Edit} />
          <Route exact path="/admin/delete/:slug" component={Delete} />
          <Route exact path="/superuser" component={Superuser} />
          <Route exact path="/superuser/edit/:username" component={UserEdit} />
          <Route exact path="/superuser/delete/:username" component={UserDelete} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/article/:slug" component={Single} />
          <Route path="/search" component={Search} />
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
