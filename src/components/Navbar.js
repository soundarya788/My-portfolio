import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-content">
        <ul className="navbar-items">
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ marginLeft: '8px' }}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
            >
              Contact
            </Link>
          </li>
          
          
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


