// @flow
import React from 'react';
import type { FlightType } from '../../state/types';
import Flight from './Flight';

type FlightList = {
    flights: FlightType,
    reservationFlight: Function,
}

export default ({ flights, reservationFlight }: FlightList) => (
  <div>{
            (typeof flights === 'undefined' || flights.length === 0) ?
              <p>Nie znaleziono lotow</p> :
                flights.map(flight =>
                  <Flight key={flight.id} flight={flight} onReservationClick={reservationFlight} />,
                )
  }</div>
);
