import React, { useState } from 'react';
import './teamWork.css';
import { Link } from 'react-router-dom';
import abdulrahman1 from '../../../assets/abdulrahman.png';
import abdulrahman2 from '../../../assets/abdulrahman1.png';
import abdulrahman3 from '../../../assets/abdulrahman2.png';
import abdulrahman4 from '../../../assets/abdulrahman3.png';
import abdulrahman5 from '../../../assets/abdulrhman4.png';
const TeamWork = () => {
  const [image, setImage] = useState('abdulrahman1');
  return (
    <div className="team-work ">
      <div className="container team-work-container">
        <div className="team-work-persons">
          <Link
            onClick={() => setImage('abdulrahman1')}
            className="link team-link team-work-one"
          >
            <span>Ahmed</span> Ali
          </Link>
          <Link
            onClick={() => setImage('abdulrahman2')}
            className="link team-link  team-work-two"
          >
            <span>Muhammad</span> Ali
          </Link>
          <Link
            onClick={() => setImage('abdulrahman3')}
            className="link team-link team-work-three"
          >
            <span>Yaman</span> Sayed
          </Link>
          <Link
            className="link  team-link team-work-four"
            onClick={() => setImage('abdulrahman4')}
          >
            <span>Hossam</span> Ibrahim
          </Link>
          <Link
            className="link team-link team-work-five"
            onClick={() => setImage('abdulrahman5')}
          >
            <span>Ibrahim</span> Ahmed
          </Link>
        </div>
        <div className="team-work-images">
          <img
            src={
              image === 'abdulrahman1'
                ? abdulrahman1
                : image === 'abdulrahman2'
                ? abdulrahman2
                : image === 'abdulrahman3'
                ? abdulrahman5
                : image === 'abdulrahman4'
                ? abdulrahman1
                : image === 'abdulrahman5'
                ? abdulrahman2
                : abdulrahman1
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TeamWork;
