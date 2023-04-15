import React from 'react';
import './webApp.css';
import { Link } from 'react-router-dom';
const WebApp = () => {
  return (
    <div className="plans">
      <div className="general-background-image">
        <div className="back">
          <h2>Web & App Plans</h2>
          <Link className="link back-link" to="/MarkitSite">
            Home
          </Link>
        </div>
      </div>
      <div className="webapp-plans container">
        <h2
          className="general-header found-header"
          style={{ marginTop: '100px' }}
        >
          Web & App package
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
            <td>Web site</td>
            <td>word press + host + free domain renewal</td>
            <td>1</td>
            <td>5000</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>Web store</td>
            <td>Dynamic + host + free domain</td>
            <td>1</td>
            <td>15000</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>Mobile App</td>
            <td>Flutter Android + IOS</td>
            <td>1</td>
            <td>15000</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>APP Store</td>
            <td>Flutter Android + IOS</td>
            <td>1</td>
            <td>25000</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default WebApp;
