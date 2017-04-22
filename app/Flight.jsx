import React from 'react'

const Flight = ({from ,to}) => {
    return (
        <section>
            <h1>Znaleziony lot to:</h1>
            <p>Skad : {from}</p>
            <p>Dokad : {to}</p>
        </section>
    )
};

export default Flight;