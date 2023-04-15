import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer-all">
      <div className="footer">
        <h1>dastateam@gmail.com</h1>
        <div className="social-links">
          <a
            href="https://www.facebook.com/DastaProduction/"
            target="blank"
            className="link"
          >
            FACEBOOK
          </a>
          <a
            href="https://www.facebook.com/DastaProduction/"
            target="blank"
            className="link"
          >
            LINKEDIN
          </a>
          <a
            href="https://www.facebook.com/DastaProduction/"
            target="blank"
            className="link"
          >
            INSTAGRAM
          </a>
        </div>
      </div>

      <div className="copyright">COPYRIGHT 2023</div>
    </div>
  );
};

export default Footer;
