import React from 'react';
import './mediaGraphic.css';
import { Link } from 'react-router-dom';
const MediaGraphic = () => {
  return (
    <div className="plans">
      <div className="general-background-image">
        <div className="back">
          <h2>Media Graphic Plans</h2>
          <Link className="link back-link" to="/MarkitSite">
            Home
          </Link>
        </div>
      </div>
      <div className="media-plans container">
        <h2
          className="general-header found-header"
          style={{ marginTop: '100px' }}
        >
          Media Graphic package
        </h2>
        <table>
          <tr>
            <th>Band</th>
            <th>Details</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Buy</th>
          </tr>
          <tr>
            <td>Typographic</td>
            <td>Typographic + Music over</td>
            <td>1min</td>
            <td>500</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>Info graphic</td>
            <td>Graphic + music over</td>
            <td>1min</td>
            <td>1000</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>Video Editing</td>
            <td>Video editing + sound effects</td>
            <td>1min</td>
            <td>1000</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>Motion graphic</td>
            <td>Graphic + voice over</td>
            <td>1min</td>
            <td>1500</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MediaGraphic;
