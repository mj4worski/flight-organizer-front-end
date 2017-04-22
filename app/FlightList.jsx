import React from 'react';
import Flight from './Flight.jsx'

const FlightList = (flights) => {
    const flightsPop = flights;
    return (
        <div>
            {
                ( typeof flightsPop.flights == 'undefined' || flightsPop.flights.length === 0 ) ?
                    <p>Nie znaleziono lotow</p> :
                    flightsPop.flights.map(flight =>
                        <Flight flight={flight}/>
                    )
            }
        </div>
    )
};


export default FlightList;