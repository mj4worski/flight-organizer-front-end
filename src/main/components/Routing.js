import React from 'react';
import { Route } from 'react-router-dom';
import { FindFlights } from './flight';
import { BestPlaces } from './bestplaces';
import Login from './Login';

const Routing = () => (
  <div >
    <Route exact path="/" component={BestPlaces} />
    <Route path="/findFlight" component={FindFlights} />
    <Route path="/login" component={Login} />
  </div>
);

export default Routing;
