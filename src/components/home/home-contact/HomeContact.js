import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import image from '../../../assets/img_6-600x600.jpg';
import './homeContact.css';
const HomeContact = () => {
  const data = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_71cgivw',
      'template_q87s9fl',
      data.current,
      '7-NbVRdacC445n3OW'
    );

    e.target.reset();
  };

  return (
    <div>
      <div className="container home-contact-container">
        <form ref={data} onSubmit={sendEmail} action="">
          <label htmlFor="">
            Say <span>Hello</span> To Me
          </label>
          <input type="text" placeholder="FULL NAME" name="fullName" required />
          <div>
            <input
              type="text"
              name="phone"
              placeholder="PHONE NUMBER"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL ADDRESS"
              required
            />
          </div>
          <textarea
            name="message"
            id=""
            cols="5"
            rows="7"
            placeholder="YOUR MESSAGE"
            required
          ></textarea>
          <button className="send" type="submit">
            SEND
          </button>
        </form>
        <div className="home-contact-image">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
