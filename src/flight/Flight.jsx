import React from 'react'

const Flight = ({from ,to ,date}) => {
    return (
        <section>
            <h1>Znaleziony lot to:</h1>
            <p>Skad : {from}</p>
            <p>Dokad : {to}</p>
            {/*<p>Kiedy : {date.dayOfWeek} {date.month} {date.year}</p>*/}
        </section>
    )
};

export default Flight;