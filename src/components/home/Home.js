import React from 'react';
import './home.css';
import Land from './land/Land';
import HomeGallery from './homeGallery/HomeGallery';
import TeamWork from './homeWork/TeamWork';
const Home = () => {
  return (
    <div>
      <Land />
      <HomeGallery />
      <TeamWork />
    </div>
  );
};

export default Home;
