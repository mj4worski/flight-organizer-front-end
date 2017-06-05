// @flow
import type {FlightType} from '../../state/data-flow'
import React from 'react';
import Flight from './Flight.js'

type FlightList = {
    flights: FlightType,
    reservationFlight: Function,
}

export default ({flights, reservationFlight}: FlightList) => (
    <div>
        {
            ( typeof flights === 'undefined' || flights.length === 0 ) ?
                <p>Nie znaleziono lotow</p> :
                flights.map(flight =>
                    <Flight key={flight.id} flight={flight} onReservationClick={reservationFlight}/>
                )
        }
    </div>
);