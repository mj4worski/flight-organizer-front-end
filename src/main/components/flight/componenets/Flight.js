import React from 'react';
import PropTypes from 'prop-types';

const Flight = ({ flight }) => (
  <section>
    <h1>Founded flights:</h1>
    <p>From : {flight.departureFrom}</p>
    <p>To : {flight.arrivalTo}</p>
    <button onClick={() => {}}>Book It</button>
  </section>
);

Flight.propTypes = {
  flight: PropTypes.shape({
    departureFrom: PropTypes.string,
    arrivalTo: PropTypes.string,
  }).isRequired,
};

export default Flight;
