import React from 'react';

export default ({ flight }) => (
  <section>
    <h1>Znaleziony lot to:</h1>
    <p>Skad : {flight.departureFrom}</p>
    <p>Dokad : {flight.arrivalTo}</p>
    <button onClick={() => {}}>Rezerwacja</button>
  </section>
);
