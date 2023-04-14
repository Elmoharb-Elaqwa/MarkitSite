import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './service.css';
const Service = (props) => {
  const { service } = props;

  const params = new URLSearchParams(window.location.search);
  const par = params.get('par');
  const link = params.get('link');
  return (
    <div>
      <div className="general-background-image">
        <div className="back">
          <h2>{link}</h2>
          <Link className="link back-link" to="/MarkitSite/services">
            Our Services
          </Link>
        </div>
      </div>
      <div className="ser">
        <div className="container">
          <div className="ser-left">
            <p className="link ser-p">{link}</p>
            {link === 'ADMINISTRATIVE DEVELOPMENT' && (
              <ul className="service-ul">
                <li>Administrative Development</li>
                <li>Building strategic plans and development plans</li>
                <li>
                  Building and developing the administrative and organizational
                  structure
                </li>
                <li>
                  Laying down organizational work regulations and procedural
                  laws
                </li>
                <li>Preparing task lists for employees</li>
                <li>
                  Preparing models for the flow of operations and personnel
                  affairs
                </li>
                <li>Annual plan and operational plan templates</li>
                <li>
                  Configuring institutional and functional performance
                  measurement tools
                </li>
                <li>Developing tools for measuring process indicators</li>
              </ul>
            )}
            {link === 'PROFESSIONAL PHOTOGRAPHY' && (
              <ul className="service-ul">
                <li>Videography</li>
                <li>Location videos</li>
                <li>Filming interviews and recordings</li>
                <li>Coverage of events and events</li>
                <li>Photographing legal persons</li>
                <li>Photographing products for sales</li>
                <li>
                  Photographing products for promotions and advertisements
                </li>
                <li>Photographing products for websites and direct selling</li>
              </ul>
            )}
            {link === 'FINISHES AND DECORATION' && (
              <ul className="service-ul">
                <li>3D design</li>
                <li>Cladding facades and different designs</li>
                <li>Commercial Furniture</li>
                <li>Special and integrated equipment for service places</li>
                <li> Equipment for academies and educational places</li>
              </ul>
            )}
            {link === 'DIRECT MARKTING' && (
              <ul className="service-ul">
                <li>
                  {' '}
                  Extracting results and setting expectations by analyzing data
                </li>
                <li>Marketing and direct selling plans</li>
                <li>Sales services for the benefit of third parties</li>
                <li>Marketing and contracting representatives</li>
                <li> Direct sales representatives</li>
                <li> outdoor advertisements</li>
                <li> TV advertisements</li>
                <li> Road advertisements</li>
                <li> Magazine advertisements </li>
              </ul>
            )}
            {link === 'E-MARKTING' && (
              <ul className="service-ul">
                <li> Digital Identity Management</li>
                <li>Managing accounts on social networking sites</li>
                <li>Managing the accounts of the various selling platforms</li>
                <li>Marketing and contracting representatives</li>
                <li> Financing services and managing financial accounts</li>
                <li> And electronic banking: payment - collection</li>
              </ul>
            )}
            {link === 'ADVERTISING SERVICES' && (
              <ul className="service-ul">
                <li> Informational films</li>
                <li>Typographic films</li>
                <li>Infographic and animation films</li>
                <li>2D and 3D animation films</li>
                <li> Advertising designs</li>
                <li> designs for packaging and packages</li>
                <li> Promotional gifts</li>
                <li> In-kind gifts, models, medals, pens</li>
                <li> Bags, mugs, tissue boxes, shields and T-shirts</li>
              </ul>
            )}
            {link === 'WEBSITE BUILDING' && (
              <ul className="service-ul">
                <li> Markets and various electronic stores</li>
                <li>Special and interactive websites</li>
                <li>Various mobile applications ANDROID IOS</li>
              </ul>
            )}
            {link === 'ORGANIZING CONFERENCES' && (
              <ul className="service-ul">
                <li> 3D drawing of the event</li>
                <li>Media graphic for the event</li>
                <li>The content of the program for the event</li>
                <li> Broadcasters and organizers of the event</li>
                <li>Speeches of attendees and speakers</li>
                <li> Filming the event with videos and photos</li>
                <li> Reservation of hotels and airline tickets for guests</li>
                <li>Media content and press file</li>
                <li>Table and hall fixtures and decorations</li>
                <li>TV coverage and carrier channels</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
