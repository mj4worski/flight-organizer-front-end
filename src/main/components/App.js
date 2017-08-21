import React from 'react';
import {
    Router,
    Route,
} from 'react-router-dom';
import 'whatwg-fetch';
import createBrowserHistory from 'history/createBrowserHistory';
import FindFlights from './flight/FindFlightsContainer';
import MainPage from './MainPage';
import Login from './Login';
import Header from './header/Header';
import Footer from './footer/Footer';
import './App.scss';


const Content = () => (
  <div >
    <Route exact path="/" component={MainPage} />
    <Route path="/findFlight" component={FindFlights} />
    <Route path="/login" component={Login} />
  </div>
);

export default () => (
  <Router history={createBrowserHistory()}>
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  </Router>
);

