import React from 'react';
import PropTypes from 'prop-types';
import Flight from './Flight';

const FlightList = ({ flights }) => (
  <div>{
        (typeof flights === 'undefined' || flights.length === 0) ?
          <p>Nie znaleziono lotow</p> :
            flights.map(flight =>
                (<Flight
                  key={flight.id}
                  flight={flight}
                />),
            )
    }</div>
);

FlightList.propTypes = {
  flights: PropTypes.array,
};

export default FlightList;
