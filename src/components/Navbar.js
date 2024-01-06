import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
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
                style={{ marginLeft: '808px' }}
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
                Skills
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                Experience
              </Link>
              </li>
              <li className="navbar-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
              </li>
          </ul>
        </div>
      </nav>

      <div className={`w3-sidebar w3-bar-block w3-dark-grey w3-animate-left ${showSidebar ? 'w3-show' : 'w3-hide'}`} id="mySidebar" style={{marginTop:'0px'}}>
        <button className="w3-bar-item w3-button w3-large" onClick={toggleSidebar} >Close &times;</button>
        <Link className="w3-bar-item w3-button" to="home" onClick={toggleSidebar}>Home</Link>
        <Link className="w3-bar-item w3-button" to="about" onClick={toggleSidebar}>About</Link>
        <Link className="w3-bar-item w3-button" to="contact" onClick={toggleSidebar}>Contact</Link>
      </div>

      <button className="w3-button w3-white w3-xxlarge" onClick={toggleSidebar}>&#9776;</button>
    </>
  );
};

export default Navbar;






