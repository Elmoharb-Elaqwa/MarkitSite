import React from 'react';
import './about.css';
import aboutImage from '../../assets/about_home.jpg';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
      <div className="general-background-image abo">
        <div className="back">
          <h2>About Us</h2>
          <Link className="link back-link" to="/MarkitSite">
            Home
          </Link>
        </div>
      </div>
      <div className="about" id="about">
        <h2 className="general-header">ABOUT US </h2>
        <hr className="general-hr" />
        <div className="container">
          <div className="about-left">
            <img src={aboutImage} alt="" />
          </div>
          <div className="about-rigth">
            <p className="about-first-p">
              <span>
                Hi<span>D</span>, I’m Dasta,
              </span>
              a Digital Enterpreneur based in Cairo...
            </p>
            <p className="about-second-p">
              <span>
                Dost company was founded with many experiences, business
                management, programmers and designers.
              </span>
              The company has consulting and successes in commercial projects
              and successes.Dasta.. offers many innovative solutions in the
              development and marketing of brands of different companies,
              factories and shops for all sectors and activities of emerging,
              medium and large entities through a distinguished professional
              team that provides many solutions and services related to medical
              marketing - industrial marketing - commercial marketing -
              marketing Electronic - real estate marketing - entertainment and
              tourism marketing ...... and many other services.
            </p>
            <button className="about-button">ABOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
