import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import { BsList } from 'react-icons/bs';
const Navbar = () => {
  const [open, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');
  const navigate = useNavigate();
  console.log(active);
  return (
    <nav>
      <div className="head" onClick={() => navigate('/MarkitSite')}>
        <h2>
          Dast
          <span className="five">a</span>
          Agency
        </h2>
        <h4>Marketing & Development Services</h4>
      </div>
      <BsList
        className={`icon ${open && 'open-icon'}`}
        onClick={() => setIsOpen(!open)}
      />
      <ul className={`main-ul ${open && 'open'}`}>
        <li>
          <Link
            onClick={() => setActive('home')}
            className={`link ${active === 'home' ? 'active' : ''}`}
            to="/MarkitSite"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setActive('about')}
            className={`link ${active === 'about' ? 'active' : ''}`}
            to="/MarkitSite/about"
          >
            ABOUT
          </Link>
        </li>

        <li>
          <Link
            onClick={() => setActive('services')}
            className={`link ${active === 'services' ? 'active' : ''}`}
            to="/MarkitSite/services"
          >
            SERVICES
          </Link>
        </li>
        <li className="pages">
          <Link
            onClick={() => setActive('pages')}
            className={`link ${active === 'pages' ? 'active' : ''}`}
            to="#"
          >
            PRODUCTS
          </Link>
          <ul className="pages-ul" id="paUl">
            <li>
              <Link className="link" to="/MarkitSite/brand">
                BRANDING
              </Link>
            </li>
            <hr />

            <li>
              <Link className="link" to="/MarkitSite/social">
                SOCIAL MEDIA
              </Link>
            </li>
            <hr />

            <li>
              <Link className="link" to="/MarkitSite/webapp">
                WEB&APP
              </Link>
            </li>
            <hr />

            <li>
              <Link className="link" to="/MarkitSite/media">
                MEDIA GRAPHIC
              </Link>
            </li>
            <hr />

            <li>
              <Link className="link" to="/MarkitSite/photovideos">
                PHOTO&VIDEOS
              </Link>
            </li>
            <hr />

            <li>
              <Link className="link" to="/MarkitSite/offset">
                OFFSET PRINTS
              </Link>
            </li>
            <hr />

            <li>
              <Link className="link" to="/MarkitSite/outindoor">
                OUTDOOR&INDOOR
              </Link>
            </li>
          </ul>
        </li>
        {/* <li>
          <a
            onClick={() => setActive('events')}
            className={`link ${active === 'events' ? 'active' : ''}`}
            href="#events"
          >
            TEAM
          </a>
        </li> */}
        <li>
          <Link
            onClick={() => setActive('gallery')}
            className={`link ${active === 'gallery' ? 'active' : ''}`}
            to="/MarkitSite/work"
          >
            WORK
          </Link>
        </li>

        {/* <li>
          <a
            onClick={() => setActive('blog')}
            className={`link ${active === 'blog' ? 'active' : ''}`}
            href="#blog"
          >
            BLOG
          </a>
        </li> */}
        <li>
          <Link
            onClick={() => setActive('contact')}
            className={`link ${active === 'contact' ? 'active' : ''}`}
            to="/MarkitSite/contact"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
