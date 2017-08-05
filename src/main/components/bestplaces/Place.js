import React from 'react';
import PropTypes from 'prop-types';
import './Place.scss';

const Place = ({ name, shortDescription }) => (
  <div className="place">
    <h2 className="place__name">{name}</h2>
    <p className="place__description">{shortDescription}</p>
  </div>
);

Place.propTypes = {
  name: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
};

export default Place;
