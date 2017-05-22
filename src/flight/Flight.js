import React from 'react'

const Flight = ({departureFrom ,arrivalTo}) => {
    return (
        <section>
            <h1>Znaleziony lot to:</h1>
            <p>Skad : {departureFrom}</p>
            <p>Dokad : {arrivalTo}</p>
        </section>
    )
};

export default Flight;