import React from 'react';
import eventImage from '../../assets/img_6-600x600.jpg';
import './events.css';
import { Link } from 'react-router-dom';
const Events = () => {
  return (
    <div className="events" id="events">
      <h2 className="general-header">OUR TEAM</h2>
      <hr className="general-hr" />
      <div className="container events-container">
        <div className="event">
          <div className="event-image">
            <img src={eventImage} alt="" />
          </div>
          <div className="event-text">
            <Link className="event-first-link link">SEPTEMBER 5, 2018</Link>
            <p className="event-first-p">
              FYCKE LANE, TEANECK, NEW JERSEY, UNITED STATES, 07666, CONFERENCE
              HALL
            </p>
            <Link className="event-second-link">
              Doming Imperdiet Scribentur Erant Vocibus
            </Link>
            <p className="event-second-p">
              Mel in tale expetendis, usu te regione fuisset ne amet viderer
              instructior sit, no prima iusto mea an modo ex.
            </p>
          </div>
        </div>
        <div className="event">
          <div className="event-text">
            <Link className="event-first-link link">SEPTEMBER 5, 2018</Link>
            <p className="event-first-p">
              FYCKE LANE, TEANECK, NEW JERSEY, UNITED STATES, 07666, CONFERENCE
              HALL
            </p>
            <Link className="event-second-link">
              Doming Imperdiet Scribentur Erant Vocibus
            </Link>
            <p className="event-second-p">
              Mel in tale expetendis, usu te regione fuisset ne amet viderer
              instructior sit, no prima iusto mea an modo ex.
            </p>
          </div>
          <div className="event-image">
            <img src={eventImage} alt="" />
          </div>
        </div>
        <div className="event">
          <div className="event-image">
            <img src={eventImage} alt="" />
          </div>
          <div className="event-text">
            <Link className="event-first-link link">SEPTEMBER 5, 2018</Link>
            <p className="event-first-p">
              FYCKE LANE, TEANECK, NEW JERSEY, UNITED STATES, 07666, CONFERENCE
              HALL
            </p>
            <Link className="event-second-link">
              Doming Imperdiet Scribentur Erant Vocibus
            </Link>
            <p className="event-second-p">
              Mel in tale expetendis, usu te regione fuisset ne amet viderer
              instructior sit, no prima iusto mea an modo ex.
            </p>
          </div>
        </div>
        <div className="event">
          <div className="event-text">
            <Link className="event-first-link link">SEPTEMBER 5, 2018</Link>
            <p className="event-first-p">
              FYCKE LANE, TEANECK, NEW JERSEY, UNITED STATES, 07666, CONFERENCE
              HALL
            </p>
            <Link className="event-second-link">
              Doming Imperdiet Scribentur Erant Vocibus
            </Link>
            <p className="event-second-p">
              Mel in tale expetendis, usu te regione fuisset ne amet viderer
              instructior sit, no prima iusto mea an modo ex.
            </p>
          </div>
          <div className="event-image">
            <img src={eventImage} alt="" />
          </div>
        </div>
        <div className="event">
          <div className="event-image">
            <img src={eventImage} alt="" />
          </div>
          <div className="event-text">
            <Link className="event-first-link link">SEPTEMBER 5, 2018</Link>
            <p className="event-first-p">
              FYCKE LANE, TEANECK, NEW JERSEY, UNITED STATES, 07666, CONFERENCE
              HALL
            </p>
            <Link className="event-second-link">
              Doming Imperdiet Scribentur Erant Vocibus
            </Link>
            <p className="event-second-p">
              Mel in tale expetendis, usu te regione fuisset ne amet viderer
              instructior sit, no prima iusto mea an modo ex.
            </p>
          </div>
        </div>
        <div className="event">
          <div className="event-text">
            <Link className="event-first-link link">SEPTEMBER 5, 2018</Link>
            <p className="event-first-p">
              FYCKE LANE, TEANECK, NEW JERSEY, UNITED STATES, 07666, CONFERENCE
              HALL
            </p>
            <Link className="event-second-link">
              Doming Imperdiet Scribentur Erant Vocibus
            </Link>
            <p className="event-second-p">
              Mel in tale expetendis, usu te regione fuisset ne amet viderer
              instructior sit, no prima iusto mea an modo ex.
            </p>
          </div>
          <div className="event-image">
            <img src={eventImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
