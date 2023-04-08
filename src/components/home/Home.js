import React from 'react';
import './home.css';
import About from '../about/About';
import Services from '../services/Services';
import Events from '../events/Events';
import Gallery from '../gallery/Gallery';
import Blog from '../bolg/Blog';
import Contact from '../contact/Contact';
const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="container ">
          <div className="home-left">
            <div className="top">
              <span className="hi">D</span>
              <span className="five">S</span>
            </div>
            <div className="bottom">
              <span className="de">T</span>
              <span className="ee">A</span>
            </div>
            <p className="home-left-text">MARKTING . SEO . BRANDING</p>
          </div>
          <div className="home-right">
            <h1>
              Hi
              <span>D</span>
            </h1>
            <h3 className="name1">My Name </h3>
            <h3 className="name2">Is Dasta </h3>
          </div>
        </div>
      </div>
      {/* <hr style={{ border: '1px solid gray', marginTop: '5px' }} /> */}

      {/* <hr style={{ border: '1px solid gray', marginTop: '25px' }} /> */}
      {/* <Events />
      <hr style={{ border: '1px solid gray', marginTop: '25px' }} /> */}
      {/* <Gallery /> */}
      <hr style={{ border: '1px solid gray', marginTop: '25px' }} />
      {/* <Blog />
      <hr style={{ border: '1px solid gray', marginTop: '25px' }} /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
