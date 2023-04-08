import React from 'react';
import './blog.css';
import blogImage from '../../assets/img_4-1170x780.jpg';
import { Link } from 'react-router-dom';
const Blog = () => {
  return (
    <div className="blogs" id="blog">
      <h2 className="general-header">OUR BLOG</h2>
      <hr className="general-hr" />
      <div className="container blog-container">
        <div className="blog">
          <div className="blog-image">
            <img src={blogImage} alt="" />
            <button className=" blog-image-button">DIGITAL AGENCY</button>
          </div>
          <div className="blog-text">
            <Link className="link blog-first-link">Sample Post With Image</Link>
            <Link className="link blog-second-link">LUKE / AUGUST 7, 2017</Link>
            <hr
              style={{
                border: '0.1px solid #b1b2b34b',
                marginTop: '25px',
                marginBottom: '25px',
              }}
            />

            <p>
              Est aperiam deleniti cu, nostrud impedit vix at, at liber
              comprehensam ius amet. Accusam delectus, nihil constituto ex usu
              ut eu causae has deseruisse sed. Est ludus labitur eligendi, saepe
              viderer id sit, sed ad verear ornatus.
            </p>
            <button className="blog-button">MORE</button>
          </div>
        </div>
        <div className="blog">
          <div className="blog-image">
            <img src={blogImage} alt="" />
            <button className=" blog-image-button">DIGITAL AGENCY</button>
          </div>
          <div className="blog-text">
            <Link className="link blog-first-link">Sample Post With Image</Link>
            <Link className="link blog-second-link">LUKE / AUGUST 7, 2017</Link>
            <hr
              style={{
                border: '0.1px solid #b1b2b34b',
                marginTop: '25px',
                marginBottom: '25px',
              }}
            />

            <p>
              Est aperiam deleniti cu, nostrud impedit vix at, at liber
              comprehensam ius amet. Accusam delectus, nihil constituto ex usu
              ut eu causae has deseruisse sed. Est ludus labitur eligendi, saepe
              viderer id sit, sed ad verear ornatus.
            </p>
            <button className="blog-button">MORE</button>
          </div>
        </div>
        <div className="blog">
          <div className="blog-image">
            <img src={blogImage} alt="" />
            <button className=" blog-image-button">DIGITAL AGENCY</button>
          </div>
          <div className="blog-text">
            <Link className="link blog-first-link">Sample Post With Image</Link>
            <Link className="link blog-second-link">LUKE / AUGUST 7, 2017</Link>
            <hr
              style={{
                border: '0.1px solid #b1b2b34b',
                marginTop: '25px',
                marginBottom: '25px',
              }}
            />

            <p>
              Est aperiam deleniti cu, nostrud impedit vix at, at liber
              comprehensam ius amet. Accusam delectus, nihil constituto ex usu
              ut eu causae has deseruisse sed. Est ludus labitur eligendi, saepe
              viderer id sit, sed ad verear ornatus.
            </p>
            <button className="blog-button">MORE</button>
          </div>
        </div>
        <div className="blog">
          <div className="blog-image">
            <img src={blogImage} alt="" />
            <button className=" blog-image-button">DIGITAL AGENCY</button>
          </div>
          <div className="blog-text">
            <Link className="link blog-first-link">Sample Post With Image</Link>
            <Link className="link blog-second-link">LUKE / AUGUST 7, 2017</Link>
            <hr
              style={{
                border: '0.1px solid #b1b2b34b',
                marginTop: '25px',
                marginBottom: '25px',
              }}
            />

            <p>
              Est aperiam deleniti cu, nostrud impedit vix at, at liber
              comprehensam ius amet. Accusam delectus, nihil constituto ex usu
              ut eu causae has deseruisse sed. Est ludus labitur eligendi, saepe
              viderer id sit, sed ad verear ornatus.
            </p>
            <button className="blog-button">MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
