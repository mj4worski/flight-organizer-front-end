import React from 'react';
import Flight from './Flight.js'

const FlightList = ({flights, reservationFlight}) => {
    return (
        <div>
            {
                ( typeof flights === 'undefined' || flights.length === 0 ) ?
                    <p>Nie znaleziono lotow</p> :
                    flights.map(flight =>
                        <Flight key={flight.id} flight={flight} onReservationClick={reservationFlight}/>
                    )
            }
        </div>
    )
};

export default FlightList;