import React from 'react';
import {
    Router,
    Route,
} from 'react-router-dom';
import 'whatwg-fetch';
import createBrowserHistory from 'history/createBrowserHistory';
import FindFlights from './components/flight/FindFlightsContainer';
import MainPage from './components/MainPage';
import Login from './components/Login';
import Header from './components/header/Header';
import './app.scss';


const Content = () => (
  <section >
    <Route exact path="/" component={MainPage} />
    <Route path="/findFlight" component={FindFlights} />
    <Route path="/login" component={Login} />
  </section>
);

export default () => (
  <Router history={createBrowserHistory()}>
    <div>
      <Header />
      <Content />
    </div>
  </Router>
);

