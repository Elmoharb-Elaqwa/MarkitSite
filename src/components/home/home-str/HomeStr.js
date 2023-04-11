import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineCube } from 'react-icons/hi';
import { SlSocialDropbox } from 'react-icons/sl';
import { SiCoronaengine } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import { TbBrandPython } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import './homeStr.css';
const HomeStr = () => {
  const strategyData = [
    {
      icon: BsSearch,
      link: 'ADMINISTRATIVE DEVELOPMENT',
      par: 'Setting vision, mission and goals,Building and developing the organizational structure',
      id: 1,
    },
    {
      icon: HiOutlineCube,
      link: 'PROFESSIONAL PHOTOGRAPHY',
      par: 'Location videos,Filming interviews and recordings,Coverage of events and events',
      id: 2,
    },
    {
      icon: SlSocialDropbox,
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
          {strategyData.map((strategy) => {
            return (
              <div className="service">
                <div>
                  <strategy.icon
                    style={{
                      fontSize: '50px',
                      marginTop: '70px',
                      color: '#ff493c',
                    }}
                  />
                  <Link className="link-service">{strategy.link}</Link>
                </div>
                <p>{strategy.par}</p>
                <button className="more">MORE</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeStr;
