import React from 'react';
import './outInDoor.css';
import { Link } from 'react-router-dom';
const OutDoorIndoor = () => {
  return (
    <div className="plans">
      <div className="general-background-image">
        <div className="back">
          <h2>Outdoor & Indoor Plans</h2>
          <Link className="link back-link" to="/MarkitSite">
            Home
          </Link>
        </div>
      </div>
      <div className="outindoor-plans container">
        <h2
          className="general-header found-header"
          style={{ marginTop: '100px' }}
        >
          Outdoor & Indoor package
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
            <td>lighted lantern</td>
            <td>Two-sided lantern, size 1 meter</td>
            <td>1 meter</td>
            <td>1200</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>Flex interface</td>
            <td>Illuminated front, 1 meter</td>
            <td>1 meter</td>
            <td>1000</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>Banner interface</td>
            <td>Wooden chassis with 1 meter banner</td>
            <td>1 meter</td>
            <td>250</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>Luminous letters</td>
            <td>Luminous letters flat 1 * 60</td>
            <td>1 meter</td>
            <td>1800</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>Stainless lettering</td>
            <td>1*60 stainless steel letters</td>
            <td>1 meter</td>
            <td>1800</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>Glass vinyl</td>
            <td>Vinyl with cellophane for installation</td>
            <td>1 meter</td>
            <td>250</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>roll-up</td>
            <td>Roll up size 80 * 200</td>
            <td>1</td>
            <td>500</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>cutest</td>
            <td>Size 11*22</td>
            <td>1000</td>
            <td>2000</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>cutest</td>
            <td>Size 10*15</td>
            <td>10</td>
            <td>350</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>cutest</td>
            <td>Size 15*20</td>
            <td>10</td>
            <td>500</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>cutest</td>
            <td>Size 20*30 tax</td>
            <td>10</td>
            <td>1000</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>personal cards</td>
            <td>Cushion 300 gm, size 9 * 6</td>
            <td>1000</td>
            <td>300</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>Advertising flyer</td>
            <td>A5 single color printing 80 gm</td>
            <td>1000</td>
            <td>400</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>Advertising flyer</td>
            <td>A5 print 4 color 80g</td>
            <td>1000</td>
            <td>1100</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>Note book</td>
            <td>Size 10*15 wire</td>
            <td>100</td>
            <td>1500</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>Seal</td>
            <td>girth seal</td>
            <td>1</td>
            <td>400</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>Identification card</td>
            <td>Identification card</td>
            <td>10</td>
            <td>150</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>A5 prescriptions</td>
            <td>One thing, one color</td>
            <td>40</td>
            <td>1500</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>A5 prescriptions</td>
            <td>One thing, colors</td>
            <td>40</td>
            <td>2000</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
          <tr>
            <td>A5 prescriptions</td>
            <td>Face and back colors</td>
            <td>40</td>
            <td>2500</td>
            <td>
              <button className="btn">Buy</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default OutDoorIndoor;
