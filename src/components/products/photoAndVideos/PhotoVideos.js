import React from 'react';
import './photoVideos.css';
import { Link } from 'react-router-dom';
const PhotoVideos = () => {
  return (
    <div className="plans">
      <div className="general-background-image">
        <div className="back">
          <h2>Photo&Video Plans</h2>
          <Link className="link back-link" to="/MarkitSite">
            Home
          </Link>
        </div>
      </div>
      <div className="photo-plans container">
        <h2
          className="general-header found-header"
          style={{ marginTop: '100px' }}
        >
          Photo&Video package
        </h2>
        <table>
          <tr>
            <th>Band</th>
            <th>Details</th>
            <th>Number</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>products</td>
            <td>Product photography</td>
            <td>10</td>
            <td>200</td>
          </tr>
          <tr>
            <td>products</td>
            <td>Product photography</td>
            <td>from 11-20</td>
            <td>170</td>
          </tr>
          <tr>
            <td>products</td>
            <td>Product photography</td>
            <td>from 21-30</td>
            <td>150</td>
          </tr>
          <tr>
            <td>products</td>
            <td>Product photography</td>
            <td>from 31-40</td>
            <td>120</td>
          </tr>
          <tr>
            <td>products</td>
            <td>Product photography</td>
            <td>from 41-50</td>
            <td>100</td>
          </tr>
          <tr>
            <td>products</td>
            <td>Product photography</td>
            <td>from 51-100</td>
            <td>50</td>
          </tr>
          <tr>
            <td>products</td>
            <td>Product photography</td>
            <td>from 100-..</td>
            <td>35</td>
          </tr>
          <tr>
            <td>External photography</td>
            <td>Photography</td>
            <td>8h</td>
            <td>1500</td>
          </tr>
          <tr>
            <td>External photography</td>
            <td>Video recording</td>
            <td>8h</td>
            <td>2000</td>
          </tr>

          <button className="buy">Buy</button>
        </table>
      </div>
    </div>
  );
};

export default PhotoVideos;
