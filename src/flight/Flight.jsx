import React from 'react'

const Flight = ({departureFrom ,arrivalTo ,date}) => {
    return (
        <section>
            <h1>Znaleziony lot to:</h1>
            <p>Skad : {departureFrom}</p>
            <p>Dokad : {arrivalTo}</p>
            {/*<p>Kiedy : {date.dayOfWeek} {date.month} {date.year}</p>*/}
        </section>
    )
};

export default Flight;