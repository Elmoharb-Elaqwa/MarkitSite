import React from 'react';
import './offsitPrints.css';
import { Link } from 'react-router-dom';
const OffsitPrints = () => {
  return (
    <div className="plans">
      <div className="general-background-image">
        <div className="back">
          <h2>Offset Prints Plans</h2>
          <Link className="link back-link" to="/MarkitSite">
            Home
          </Link>
        </div>
      </div>
      <div className="offset-plans container">
        <h2
          className="general-header found-header"
          style={{ marginTop: '100px' }}
        >
          Offset Prints package
        </h2>
        <table>
          <tr>
            <th>Band</th>
            <th>Details</th>
            <th>Number</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>official paper</td>
            <td>A4 paper</td>
            <td>1000</td>
            <td>1200</td>
          </tr>
          <tr>
            <td>Folder</td>
            <td>UV print A4</td>
            <td>1000</td>
            <td>4500</td>
          </tr>
          <tr>
            <td>Folder</td>
            <td>Sulphurised</td>
            <td>1000</td>
            <td>5000</td>
          </tr>
          <tr>
            <td>Folder</td>
            <td>UV print A5</td>
            <td>1000</td>
            <td>2750</td>
          </tr>
          <tr>
            <td>Folder</td>
            <td>Sulphurised</td>
            <td>1000</td>
            <td>3000</td>
          </tr>
          <tr>
            <td>cutest</td>
            <td>Size 23*33</td>
            <td>1000</td>
            <td>3300</td>
          </tr>
          <tr>
            <td>cutest</td>
            <td>Size 17*25</td>
            <td>1000</td>
            <td>3000</td>
          </tr>
          <tr>
            <td>cutest</td>
            <td>Size 11*22</td>
            <td>1000</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>cutest</td>
            <td>Size 10*15</td>
            <td>10</td>
            <td>350</td>
          </tr>
          <tr>
            <td>cutest</td>
            <td>Size 15*20</td>
            <td>10</td>
            <td>500</td>
          </tr>
          <tr>
            <td>cutest</td>
            <td>Size 20*30 tax</td>
            <td>10</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>personal cards</td>
            <td>Cushion 300 gm, size 9 * 6</td>
            <td>1000</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Advertising flyer</td>
            <td>A5 single color printing 80 gm</td>
            <td>1000</td>
            <td>400</td>
          </tr>
          <tr>
            <td>Advertising flyer</td>
            <td>A5 print 4 color 80g</td>
            <td>1000</td>
            <td>1100</td>
          </tr>
          <tr>
            <td>Note book</td>
            <td>Size 10*15 wire</td>
            <td>100</td>
            <td>1500</td>
          </tr>
          <tr>
            <td>Seal</td>
            <td>girth seal</td>
            <td>1</td>
            <td>400</td>
          </tr>
          <tr>
            <td>Identification card</td>
            <td>Identification card</td>
            <td>10</td>
            <td>150</td>
          </tr>
          <tr>
            <td>A5 prescriptions</td>
            <td>One thing, one color</td>
            <td>40</td>
            <td>1500</td>
          </tr>
          <tr>
            <td>A5 prescriptions</td>
            <td>One thing, colors</td>
            <td>40</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>A5 prescriptions</td>
            <td>Face and back colors</td>
            <td>40</td>
            <td>2500</td>
          </tr>

          <button className="buy">Buy</button>
        </table>
      </div>
    </div>
  );
};

export default OffsitPrints;
