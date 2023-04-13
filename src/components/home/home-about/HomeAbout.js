import React from 'react';
import aboutImage from '../../../assets/about_home.jpg';
import './homeAbout.css';
import { useNavigate } from 'react-router-dom';
const HomeAbout = () => {
  const navigate = useNavigate('');
  return (
    <div>
      <div className="about home-about" id="about">
        <div className="container">
          <div className="about-left">
            <img src={aboutImage} alt="" />
          </div>
          <div className="about-rigth">
            <p className="about-first-p">
              <span>
                Abou<span>t</span>, Us
              </span>
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
            <button
              className="about-button"
              onClick={() => navigate('/MarkitSite/about')}
            >
              ABOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
