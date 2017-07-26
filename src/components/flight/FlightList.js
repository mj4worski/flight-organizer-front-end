import React from 'react';
import Flight from './Flight';


export default ({ flights }) => (
  <div>{
            (typeof flights === 'undefined' || flights.length === 0) ?
              <p>Nie znaleziono lotow</p> :
                flights.map(flight =>
                  (<Flight
                    key={flight.id}
                    flight={flight}
                  />),
                )
  }</div>
);
