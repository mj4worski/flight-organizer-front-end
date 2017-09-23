import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';
import FlightList from './FlightList';
import { findFlights } from '../actions';
import { selectFlights } from '../reducers';

const FindFlight = ({ flights, find }) => (
  <div>
    <Form onClick={find} />
    <FlightList flights={flights} />
  </div>
);

FindFlight.propTypes = {
  flights: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    departureFrom: PropTypes.string,
    arrivalTo: PropTypes.string,
  })).isRequired,
  find: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  flights: selectFlights(state),
});

const mapDispatchToProps = {
  find: findFlights,
};

export default connect(mapStateToProps, mapDispatchToProps)(FindFlight);
