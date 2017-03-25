import React from 'react';
import NavbarContainer from './NavbarContainer';

const Header = (props) => {
  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <a href="/">fLICKlIST</a>
        </div>
        <NavbarContainer />
      </div>
    </section>
  );
};

export default Header;
