import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer-all">
      <div className="footer">
        <h1>info@dasta.net</h1>
        <div className="social-links">
          <a
            href="https://www.facebook.com/DastaProduction/"
            target="blank"
            className="link"
          >
            FACEBOOK
          </a>
          {/* <a
            href="https://www.facebook.com/DastaProduction/"
            target="blank"
            className="link"
          >
            LINKEDIN
          </a> */}
          <a
            href="https://www.instagram.com/dasta.agency/?igshid=YmMyMTA2M2Y%3D"
            target="blank"
            className="link"
          >
            INSTAGRAM
          </a>
        </div>
      </div>

      <div className="copyright"> BY DASTA</div>
    </div>
  );
};

export default Footer;
