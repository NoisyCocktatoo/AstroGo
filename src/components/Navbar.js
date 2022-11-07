import React, { useState, useEffect } from "react";
import { Link as Link1 } from "react-scroll";
import { Link as Link2 } from "react-router-dom";
import { FaRocket, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link1
            to="main"
            className="navbar-logo"
            onClick={closeMobileMenu}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Link2 to="/" className="navbar-logo" onClick={closeMobileMenu}>
              AstroGo! <FaRocket className="fa-rocket" />
            </Link2>
          </Link1>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FaTimes className="fa-bars" />
            ) : (
              <FaBars className="fa-bars" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link1
                to="main"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <Link2 to="/" onClick={closeMobileMenu} className="nav-links2">
                  Home
                </Link2>
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="cards"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <Link2 to="/" onClick={closeMobileMenu} className="nav-links2">
                  Deep Space
                </Link2>
              </Link1>
            </li>
            <li className="nav-item">
              <Link1
                to="footer"
                className="nav-links"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link1>
            </li>
          </ul>
          {button}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
