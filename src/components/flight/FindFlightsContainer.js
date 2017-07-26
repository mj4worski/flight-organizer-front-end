import React from 'react';
import { connect } from 'react-redux';
import {
    FlightList,
    FindFlightsFrom,
} from './index';
import {
    findFlights,
} from '../../actions';

const FindFlightContainer = ({ flights, find }) => (
  <div>
    <FindFlightsFrom onClick={find} />
    <FlightList flights={flights} />
  </div>
);

const mapStateToProps = ({ flights }) => ({
  flights,
});

export default connect(
    mapStateToProps,
  {
    find: findFlights,
  },
)(FindFlightContainer);
