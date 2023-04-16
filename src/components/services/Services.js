import React, { useEffect, useState } from 'react';
import './services.css';
import { RiAdminFill } from 'react-icons/ri';
import { HiBuildingStorefront } from 'react-icons/hi2';
import { SiCoronaengine } from 'react-icons/si';
import { GiOrganigram } from 'react-icons/gi';
import { IoShareSocialSharp } from 'react-icons/io5';
import { FaAdversal } from 'react-icons/fa';
import { TbBrandPython } from 'react-icons/tb';
import { AiFillCamera } from 'react-icons/ai';

import { Link, useNavigate } from 'react-router-dom';
const Services = (props) => {
  const { setServiceId } = props;
  const servicesData = [
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
    {
      icon: SiCoronaengine,
      link: 'DIRECT MARKTING',
      par: 'Extracting results and making predictions by analyzing the data,Marketing and direct selling plans',
      id: 4,
    },

    {
      icon: IoShareSocialSharp,
      link: 'E-MARKTING',
      par: 'Managing accounts on social networking sites,Digital identity management',
      id: 5,
    },
    {
      icon: FaAdversal,
      link: 'ADVERTISING SERVICES',
      par: '2D and 3D animation movies,Product advertising designs for billboards',
      id: 6,
    },
    {
      icon: TbBrandPython,
      link: 'WEBSITE BUILDING',
      par: 'Various markets and electronic stores,Private and interactive websites',
      id: 7,
    },
    {
      icon: GiOrganigram,
      link: 'ORGANIZING CONFERENCES',
      par: 'Media graphic for the event,The content of the program for the event',
      id: 8,
    },
  ];
  const [serviceData, setServiceData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem('service');
  }, []);
  return (
    <div>
      <div className="general-background-image ser">
        <div className="back">
          <h2>Our Services</h2>
          <Link className="link back-link" to="/MarkitSite">
            Home
          </Link>
        </div>
      </div>

      <div className="services" id="services">
        <div className="container services-container">
          {servicesData.map((service) => {
            return (
              <div className="service">
                <div>
                  <service.icon
                    style={{
                      fontSize: '50px',
                      marginTop: '70px',
                      color: '#52adb8',
                    }}
                  />
                  <Link className="link-service">{service.link}</Link>
                </div>
                <p>{service.par}</p>
                <button
                  className="more"
                  onClick={() => {
                    navigate(
                      `/MarkitSite/services/${service.id}/?par=${service.par}&link=${service.link}`
                    );
                    setServiceId(service);
                  }}
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

export default Services;
