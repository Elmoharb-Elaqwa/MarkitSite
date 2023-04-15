import React from 'react';
import { RiAdminFill } from 'react-icons/ri';
import { HiBuildingStorefront } from 'react-icons/hi2';
import { AiFillCamera } from 'react-icons/ai';

import { Link, useNavigate } from 'react-router-dom';
import './homeStr.css';
const HomeStr = () => {
  const navigate = useNavigate();
  const strategyData = [
    {
      icon: RiAdminFill,
      link: 'ADMINISTRATIVE DEVELOPMENT',
      par: 'Setting vision, mission and goals,Building and developing the organizational structure',
      id: 1,
    },
    {
      icon: AiFillCamera,
      link: 'PROFESSIONAL PHOTOGRAPHY',
      par: 'Location videos,Filming interviews and recordings,Coverage of events and events',
      id: 2,
    },
    {
      icon: HiBuildingStorefront,
      link: 'FINISHES AND DECORATION',
      par: 'Special and integrated equipment for service places,Cladding facades and different designs',
      id: 3,
    },
  ];
  return (
    <div className="str">
      <h2 className="general-header">Our Services</h2>
      <hr className="general-hr" />

      <div className="services" id="services">
        <div className="container services-container">
          {strategyData.map((strategy, index) => {
            return (
              <div className="service" key={index}>
                <div>
                  <strategy.icon
                    style={{
                      fontSize: '50px',
                      marginTop: '70px',
                      color: '#52adb8',
                    }}
                  />
                  <Link className="link-service" to="/MarkitSite/services">
                    {strategy.link}
                  </Link>
                </div>
                <p>{strategy.par}</p>
                <button
                  onClick={() => navigate('/MarkitSite/services')}
                  className="more"
                >
                  MORE
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeStr;
