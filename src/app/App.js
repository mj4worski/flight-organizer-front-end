// @flow
import React from 'react';
import {
    Router,
    Route,
} from 'react-router-dom';
import 'whatwg-fetch';
import FindFlights from '../components/flight/FindFlights';
import MainPage from '../components/MainPage';
import Login from '../components/Login';
import history from './HistoryConfiguration';
import Header from './Header';
import './App.scss';


const Content = () => (
  <div className="content">
    <section >
      <Route exact path="/" component={MainPage} />
      <Route path="/findFlight" component={FindFlights} />
      <Route path="/login" component={Login} />
    </section>
  </div>
);

export default () => (
  <Router history={history}>
    <div>
      <Header />
      <Content />
    </div>
  </Router>
);

