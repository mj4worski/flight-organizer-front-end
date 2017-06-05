// @flow
import type {FlightType} from '../../state/data-flow'
import React from 'react'

type FlightComponentType = {
    flight: FlightType,
    onReservationClick: Function,
}

export default ({flight, onReservationClick}: FlightComponentType) => (
    <section>
        <h1>Znaleziony lot to:</h1>
        <p>Skad : {flight.departureFrom}</p>
        <p>Dokad : {flight.arrivalTo}</p>
        <button onClick={(e) => onReservationClick(flight)}>Rezerwacja</button>
    </section>
);