import React from 'react';
import './Place.scss';


const Place = ({ name, shortDescription }) => (
  <div className="place">
    <h2 className="place__name">{name}</h2>
    <p className="place__description">{shortDescription}</p>
  </div>
);

export default Place;
