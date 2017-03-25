import React from 'react';
import Navbar from './Navbar';

const Header = (props) => {
  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <a href="/">fLICKlIST</a>
        </div>
        <Navbar
          profileURL={props.profileURL}
        />
      </div>
    </section>
  );
};

export default Header;
