/* eslint-disable jsx-a11y/alt-text */
// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default () => (
  <div className="header">
    <ul className="nav-bar">
      <li className="nav-bar__item">
        <Link to="/" className="nav-bar__item-visual">Strona glowna</Link>
      </li>
      <li className="nav-bar__item">
        <Link to="/findFlight" className="nav-bar__item-visual">Znajdz lot</Link>
      </li>
      <li className="nav-bar__item">
        <Link to="/login" className="nav-bar__item-visual">Logowanie</Link>
      </li>
    </ul>
    <div className="header__logo">
        <h1 className="header__text">Kazda podroz ma swoj poczatek</h1>
    </div>
  </div>
);
