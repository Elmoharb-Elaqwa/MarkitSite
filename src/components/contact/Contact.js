import React from 'react';
import './contact.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { TbMessageCircle } from 'react-icons/tb';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div>
      <div className="general-background-image">
        <div className="back">
          <h2>Contact Us</h2>
          <Link className="link back-link" to="/MarkitSite">
            Home
          </Link>
        </div>
      </div>

      <div className="contacts" id="contact">
        <h2 className="general-header">CONTACT US</h2>
        <hr className="general-hr" />
        <div className="container contact-container">
          <div className="contact">
            <BsFillTelephoneFill
              style={{ fontSize: '40px', color: 'var(--color-yellow)' }}
            />
            <a
              href="https://api.whatsapp.com/send?phone=201115654244"
              target="blank"
              className="link contact-link yellow"
            >
              Phone
            </a>
            <p>01115654244</p>
          </div>
          <div className="contact">
            <CgMail
              style={{ fontSize: '40px', color: 'var(--color-orange)' }}
            />
            <a
              href="mailto:bm7097002@gmail.com"
              className="link contact-link orange"
            >
              Email
            </a>
            <p>hi5@example.com</p>
          </div>
          <div className="contact">
            <TbMessageCircle style={{ fontSize: '40px', color: 'green' }} />
            <a
              href="https://m.me/a.abdo99"
              target="blank"
              className="link contact-link green"
            >
              Messanger
            </a>
            <p>248 Hedge St</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
