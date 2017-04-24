import React from 'react';
import Flight from './Flight.jsx'

const FlightList = ({flights}) => {
    return (
        <div>
            {
                ( typeof flights == 'undefined' || flights.length === 0 ) ?
                    <p>Nie znaleziono lotow</p> :
                    flights.map(flight =>
                        <Flight {...flight}/>
                    )
            }
        </div>
    )
};


export default FlightList;