import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImage from './images/default.jpg';
import './PlaceTile.scss';

const PlaceTile = ({ name, image }) => {
  const sectionStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  };
  return (
    <div className="place-tile" style={sectionStyle}>
      <span className="place-tile__front-panel" />
      <Link to="#" className="place-tile__link" >
        <h2 className="place-tile__name">{name}</h2>
      </Link>
    </div>
  );
};

PlaceTile.defaultProps = {
  image: defaultImage,
};

PlaceTile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default PlaceTile;
