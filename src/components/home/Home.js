import React from 'react';
import './home.css';
import Land from './land/Land';
import HomeGallery from './homeGallery/HomeGallery';
import TeamWork from './homeWork/TeamWork';
import HomeStratgy from './home-strategy/HomeStratgy';
import About from '../about/About';
import HomeAbout from './home-about/HomeAbout';
import HomeContact from './home-contact/HomeContact';
import HomeStr from './home-str/HomeStr';
const Home = () => {
  return (
    <div>
      <Land />
      <HomeGallery />
      <TeamWork />
      <HomeStratgy />
      <HomeAbout />
      <HomeContact />
      <HomeStr />
    </div>
  );
};

export default Home;
