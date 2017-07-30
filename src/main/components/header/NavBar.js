import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import './NavBar.scss';

const NavItemContainer = ({ children }) => (
  <ul className="nav-bar">
    {React.Children.map(children, child => (
      <li className="nav-bar__item">
        {child}
      </li>
            ))}
  </ul>
);

const NavBar = () => {
  const visualStyles = 'nav-bar__item-visual';
  const selectedStyles = 'nav-bar__item-selected';
  return (
    <NavItemContainer>
      <Link
        to="/"
        className={cx(visualStyles, { [`${selectedStyles}`]: location.pathname === '/' })}
      >
          Strona glowna
      </Link>
      <Link
        to="/findFlight"
        className={cx(visualStyles, { [`${selectedStyles}`]: location.pathname === '/findFlight' })}
      >
          Znajdz lot
      </Link>
      <Link
        to="/login"
        className={cx(visualStyles, { [`${selectedStyles}`]: location.pathname === '/login' })}
      >
          Logowanie
      </Link>
    </NavItemContainer>
  );
};

export default NavBar;
