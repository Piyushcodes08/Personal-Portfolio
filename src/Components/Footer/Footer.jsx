import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Piyush Codes</h3>
        <p>Piyush.codes © 2025 All rights reserved. Designed by Piyush Gond.</p>

        <div className="social-icons">
          <a href="https://github.com/Piyushcodes08" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/piyush-gond-55a6a9340" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="Gmailto:piyushkoirax@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
