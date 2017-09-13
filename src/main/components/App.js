import React from 'react';
import { Router } from 'react-router-dom';
import 'whatwg-fetch';
import createBrowserHistory from 'history/createBrowserHistory';
import { Header } from './header';
import { Footer } from './footer';
import Routing from './Routing';

import './App.scss';


export default () => (
  <Router history={createBrowserHistory()}>
    <div className="app">
      <Header />
      <Routing />
      <Footer />
    </div>
  </Router>
);

