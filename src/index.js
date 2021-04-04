import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import SignUp from './components/signup';
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <React.StrictMode>
    <Header title="Bhaven's Blog" />
      <Switch>
          <Route exact path="/" component={App} />
          <Route path="/signup/" component={SignUp} />
      </Switch>
      <Footer />
    </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
