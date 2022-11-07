import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
import { FaRocket, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container" id="footer">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contents</h2>
            <Link
              to="main"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Home
            </Link>
            <Link
              to="cards"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Deep Space
            </Link>
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <a
              href="https://www.linkedin.com/in/john-dave-grencio-780825239/"
              target="_blank"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/NoisyCocktatoo" target="_blank">
              <FaGithub /> Github
            </a>
            <a href="https://www.facebook.com/jayds.dave/" target="_blank">
              <FaFacebook /> Facebook
            </a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              AstroGo! <FaRocket className="fa-rocket-footer" />
            </Link>
          </div>
          <small class="website-rights">AstroGo © 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
