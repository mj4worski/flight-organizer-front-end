import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultImage from '../../images/pic02.jpg';
import './Place.scss';

const Place = ({ name, image = defaultImage }) => {
  const sectionStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  };
  return (
    <div className="place" style={sectionStyle}>
      <Link to="#" className="place__link" >
        <h2 className="place__name">{name}</h2>
      </Link>
    </div>
  );
};

Place.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.any,
};

export default Place;
