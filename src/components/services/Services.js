import React, { useEffect, useState } from 'react';
import './services.css';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineCube } from 'react-icons/hi';
import { SlSocialDropbox } from 'react-icons/sl';
import { SiCoronaengine } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import { TbBrandPython } from 'react-icons/tb';

import { Link, useNavigate } from 'react-router-dom';
const Services = (props) => {
  const { setServiceId } = props;
  const servicesData = [
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
    {
      icon: SiCoronaengine,
      link: 'DIRECT MARKTING',
      par: 'Extracting results and making predictions by analyzing the data,Marketing and direct selling plans',
      id: 4,
    },

    {
      icon: TbBrandPython,
      link: 'E-MARKTING',
      par: 'Managing accounts on social networking sites,Digital identity management',
      id: 5,
    },
    {
      icon: TbBrandPython,
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
      icon: TbBrandPython,
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
      <div className="general-background-image">
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
