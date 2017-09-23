import React from 'react';
import PropTypes from 'prop-types';
import Flight from './Flight';

const FlightList = ({ flights }) => (
  <div>{
        (typeof flights === 'undefined' || flights.length === 0) ?
          <p>Sorry, your current search result doesn&#39;t exist. Try different direction.</p> :
            flights.map(flight =>
                (<Flight
                  key={flight.id}
                  flight={flight}
                />),
            )
    }</div>
);

FlightList.propTypes = {
  flights: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    departureFrom: PropTypes.string,
    arrivalTo: PropTypes.string,
  })),
};

FlightList.defaultProps = {
  flights: [],
};

export default FlightList;
