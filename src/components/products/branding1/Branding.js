import React from 'react';
import './branding.css';
import { Link } from 'react-router-dom';
const Branding = () => {
  return (
    <div className="plans">
      <div className="general-background-image">
        <div className="back">
          <h2>Branding Plans</h2>
          <Link className="link back-link" to="/MarkitSite">
            Home
          </Link>
        </div>
      </div>
      <div className="branding-plans container ">
        <h2
          className="general-header found-header"
          style={{ marginTop: '100px' }}
        >
          Foundation package
        </h2>
        <table>
          <tr>
            <th>Band</th>
            <th>Details</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Logo design</td>
            <td>Model 1</td>
            <td>1</td>
            <td>500</td>
          </tr>
          <tr>
            <td>personal cards</td>
            <td>design only</td>
            <td>1</td>
            <td>150</td>
          </tr>
          <tr>
            <td>A4 official paper</td>
            <td>design </td>
            <td>1</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Folder</td>
            <td>design </td>
            <td>1</td>
            <td>150</td>
          </tr>
          <tr>
            <td>Envelopes size 11*22</td>
            <td>design</td>
            <td>1</td>
            <td>100</td>
          </tr>
          <tr>
            <td>A5 flyer, one color</td>
            <td>design </td>
            <td>1</td>
            <td>200</td>
          </tr>
          <tr>
            <td>3D exterior design</td>
            <td>design</td>
            <td>1</td>
            <td>500</td>
          </tr>
          <tr>
            <td>Design or photography 360</td>
            <td>design</td>
            <td>1</td>
            <td>250</td>
          </tr>
          <tr>
            <td>Social management package</td>
            <td>Mini Connect</td>
            <td>month</td>
            <td>1500</td>
          </tr>
          <tr>
            <td>financing package</td>
            <td>Face ADS</td>
            <td>10-15 days</td>
            <td>1000</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>4450</td>
          </tr>
          <tr>
            <td></td>
            <td>Package discount</td>
            <td>%</td>
            <td>4000</td>
          </tr>
          <button className="buy">Buy</button>
        </table>
        <h2
          className="general-header found-header"
          style={{ marginTop: '100px' }}
        >
          Complementary package
        </h2>
        <table>
          <tr>
            <th>Band</th>
            <th>Details</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Logo design</td>
            <td>Model 2</td>
            <td>1</td>
            <td>500</td>
          </tr>
          <tr>
            <td>personal cards</td>
            <td>1000 with the design</td>
            <td>1000</td>
            <td>300</td>
          </tr>
          <tr>
            <td>A4 official paper</td>
            <td>1000 with the design </td>
            <td>1000</td>
            <td>850</td>
          </tr>
          <tr>
            <td>Folder</td>
            <td>1000 with the design </td>
            <td>1000</td>
            <td>2500</td>
          </tr>
          <tr>
            <td>Envelopes size 11*22</td>
            <td>1000 with the design</td>
            <td>1000</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>ID card 10</td>
            <td>10 with the design</td>
            <td>10</td>
            <td>150</td>
          </tr>
          <tr>
            <td>A5 flyer, one color</td>
            <td>Advertising design</td>
            <td>1</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Stickers 30 * 30 sulfonated</td>
            <td>Advertising design</td>
            <td>1</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Profile</td>
            <td>10 design pages</td>
            <td>1</td>
            <td>500</td>
          </tr>
          <tr>
            <td>seals</td>
            <td>1 stamp</td>
            <td>1</td>
            <td>500</td>
          </tr>
          <tr>
            <td>3d exterior design</td>
            <td>1 design</td>
            <td>1</td>
            <td>500</td>
          </tr>
          <tr>
            <td>Photography / Design 360</td>
            <td>2 design</td>
            <td>1</td>
            <td>500</td>
          </tr>
          <tr>
            <td>Pens</td>
            <td>printed pen</td>
            <td>100</td>
            <td>500</td>
          </tr>
          <tr>
            <td>Mugs</td>
            <td>Printed plain mug</td>
            <td>10</td>
            <td>700</td>
          </tr>
          <tr>
            <td>Bags</td>
            <td>Canvas bag size 30 * 35</td>
            <td>100</td>
            <td>500</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>Website A maximum of 50 hours 10 pages approx </td>
            <td>1</td>
            <td>5000</td>
          </tr>
          <tr>
            <td>Managing social media accounts</td>
            <td>M iniMulti</td>
            <td>month</td>
            <td>2500</td>
          </tr>
          <tr>
            <td>Sponsored advertisement package</td>
            <td>Face ads</td>
            <td>2 weeks</td>
            <td>2000</td>
          </tr>
          <tr>
            <td></td>
            <td>Total</td>
            <td>--</td>
            <td>18400</td>
          </tr>
          <tr>
            <td></td>
            <td>Package discount</td>
            <td>%</td>
            <td>17500</td>
          </tr>
          <button className="buy">Buy</button>
        </table>
        <h2
          className="general-header found-header"
          style={{ marginTop: '100px' }}
        >
          Integrated package
        </h2>
        <table>
          <tr>
            <th>Band</th>
            <th>Details</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Logo design</td>
            <td>Model 2</td>
            <td></td>
            <td>500</td>
          </tr>
          <tr>
            <td>personal cards</td>
            <td>2000 with the design</td>
            <td>2000</td>
            <td>600</td>
          </tr>
          <tr>
            <td>A4 official paper</td>
            <td>2000 with the design </td>
            <td>2000</td>
            <td>1600</td>
          </tr>
          <tr>
            <td>Folder</td>
            <td>2000 with the design </td>
            <td>2000</td>
            <td>5000</td>
          </tr>
          <tr>
            <td>Envelopes size 11*22</td>
            <td>1000 with the design</td>
            <td>1000</td>
            <td>5000</td>
          </tr>
          <tr>
            <td>ID card </td>
            <td>20 with the design</td>
            <td>20</td>
            <td>300</td>
          </tr>
          <tr>
            <td>A5 flyer, one color</td>
            <td>1000 with the design</td>
            <td>1000</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Stickers 30 * 30 sulfonated</td>
            <td>1000 with the design</td>
            <td>1000</td>
            <td>1500</td>
          </tr>
          <tr>
            <td>Profile</td>
            <td>100 profile 10 pages</td>
            <td>10</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>seals</td>
            <td>3 with the design</td>
            <td>3</td>
            <td>750</td>
          </tr>
          <tr>
            <td>Uniform T-shirt + cap</td>
            <td>12 with the design</td>
            <td>12</td>
            <td>2750</td>
          </tr>
          <tr>
            <td>brochure a5 150 gm, 4 colors, front and back</td>
            <td>1000 with the design</td>
            <td>1000</td>
            <td>1200</td>
          </tr>
          <tr>
            <td>3d exterior design</td>
            <td>2 design</td>
            <td>2</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Photography / Design 360</td>
            <td>5 design</td>
            <td>5</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Pens</td>
            <td>printed pen</td>
            <td>100</td>
            <td>500</td>
          </tr>
          <tr>
            <td>Mugs</td>
            <td>Printed plain mug</td>
            <td>10</td>
            <td>750</td>
          </tr>
          <tr>
            <td>Bags</td>
            <td>Canvas bag size 30 * 35</td>
            <td>100</td>
            <td>500</td>
          </tr>
          <tr>
            <td>phone app</td>
            <td>shop for sales</td>
            <td>1</td>
            <td>25000</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>Website A maximum of 200 hours</td>
            <td>1</td>
            <td>15000</td>
          </tr>
          <tr>
            <td>Managing social media accounts</td>
            <td>M iniMulti</td>
            <td>1</td>
            <td>3500</td>
          </tr>
          <tr>
            <td>Sponsored advertisement package</td>
            <td>Face and insta ads</td>
            <td>2 weeks</td>
            <td>3000</td>
          </tr>
          <tr>
            <td></td>
            <td>Total</td>
            <td>--</td>
            <td>68750</td>
          </tr>
          <tr>
            <td></td>
            <td>Package discount</td>
            <td>%</td>
            <td>67000</td>
          </tr>
          <button className="buy">Buy</button>
        </table>
      </div>
    </div>
  );
};

export default Branding;
