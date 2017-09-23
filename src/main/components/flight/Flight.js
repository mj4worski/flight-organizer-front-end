import React from 'react';
import PropTypes from 'prop-types';

const Flight = ({ flight }) => (
  <section>
    <h1>Znaleziony lot to:</h1>
    <p>Skad : {flight.departureFrom}</p>
    <p>Dokad : {flight.arrivalTo}</p>
    <button onClick={() => {}}>Rezerwacja</button>
  </section>
);

Flight.propTypes = {
  flight: PropTypes.shape({
    departureFrom: PropTypes.string,
    arrivalTo: PropTypes.string,
  }).isRequired,
};

export default Flight;
