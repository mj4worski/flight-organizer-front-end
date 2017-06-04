import React from 'react'

const Flight = ({flight, onReservationClick}) => {
    return (
        <section>
            <h1>Znaleziony lot to:</h1>
            <p>Skad : {flight.departureFrom}</p>
            <p>Dokad : {flight.arrivalTo}</p>
            <button onClick={(e) => onReservationClick(flight)}>Rezerwacja</button>
        </section>
    )
};

export default Flight;