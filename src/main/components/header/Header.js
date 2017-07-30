import React from 'react';
import NavBar from './NavBar';
import './Header.scss';

const Header = () => (
  <div className="header">
    <NavBar />
    <div className="header__logo">
      <h1 className="header__text">Kazda podroz ma swoj poczatek</h1>
    </div>
  </div>
);

export default Header;
