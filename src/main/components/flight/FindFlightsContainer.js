import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

FindFlightContainer.propTypes = {
  flights: PropTypes.array.isRequired,
  find: PropTypes.func.isRequired,
};

const mapStateToProps = ({ flights }) => ({
  flights,
});

export default connect(
    mapStateToProps,
  {
    find: findFlights,
  },
)(FindFlightContainer);
