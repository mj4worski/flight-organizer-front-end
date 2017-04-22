import React from 'react'

const Flight = (flight) => {
    return (
        <section>
            <h1>Znaleziony lot to:</h1>
            <p>Skad : {flight.flight.from}</p>
            <p>Dokad : {flight.flight.to}</p>
        </section>
    )
};

export default Flight;