import React from 'react';
import './socialMedia.css';
import { Link } from 'react-router-dom';
const SocialMedia = () => {
  return (
    <div className="plans">
      <div className="general-background-image">
        <div className="back">
          <h2>Social Media Plans</h2>
          <Link className="link back-link" to="/MarkitSite">
            Home
          </Link>
        </div>
      </div>
      <div className="social-plans container">
        <h2
          className="general-header found-header"
          style={{ marginTop: '100px' }}
        >
          Connect package
        </h2>
        <table>
          <tr>
            <th>Band</th>
            <th>Details</th>
            <th>Number</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>manage pages</td>
            <td>Facebook+Insta</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Auto reply</td>
            <td>one in monht</td>
            <td>1</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Respond to comments and messages</td>
            <td>During the working day from 11 am - 5 </td>
            <td>6</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Basic designs Profile + cover</td>
            <td>one in month</td>
            <td>2</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Written posts with design</td>
            <td>10 post</td>
            <td>10</td>
            <td>1500</td>
          </tr>
          <tr>
            <td>Story renewed </td>
            <td>every 4 days</td>
            <td>7</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Posting posts in interested groups</td>
            <td>10 Share on the content</td>
            <td>100</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Target customers with direct messages</td>
            <td>Messenger client</td>
            <td>500</td>
            <td>250</td>
          </tr>

          <tr>
            <td></td>
            <td>Total</td>
            <td>--</td>
            <td>2850</td>
          </tr>
          <tr>
            <td></td>
            <td>Package discount</td>
            <td>%</td>
            <td>2500</td>
          </tr>
          <button className="buy">Buy</button>
        </table>
        <h2
          className="general-header found-header"
          style={{ marginTop: '100px' }}
        >
          Multi package
        </h2>
        <table>
          <tr>
            <th>Band</th>
            <th>Details</th>
            <th>Number</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>create pages</td>
            <td>Facebook+Insta+Tiktook</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Auto reply</td>
            <td>two in monht</td>
            <td>2</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Respond to comments and messages</td>
            <td>During the working day from 11 am - 5 </td>
            <td>1</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Basic designs Profile + cover</td>
            <td>one in month</td>
            <td>1</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Written posts with design</td>
            <td>15 post</td>
            <td>15</td>
            <td>2250</td>
          </tr>
          <tr>
            <td>Story renewed </td>
            <td>every 2 days</td>
            <td>15</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Posting posts in interested groups</td>
            <td>20 Share on the content</td>
            <td>300</td>
            <td>400</td>
          </tr>
          <tr>
            <td>Target customers with direct messages</td>
            <td>Messenger client</td>
            <td>1000</td>
            <td>350</td>
          </tr>
          <tr>
            <td>Advertising videos</td>
            <td>Advertising videos Video 30 sec Motion Graphics 1 1000</td>
            <td>1</td>
            <td>1000</td>
          </tr>

          <tr>
            <td></td>
            <td>Total</td>
            <td>--</td>
            <td>5000</td>
          </tr>
          <tr>
            <td></td>
            <td>Package discount</td>
            <td>%</td>
            <td>4500</td>
          </tr>
          <button className="buy">Buy</button>
        </table>
        <h2
          className="general-header found-header"
          style={{ marginTop: '100px' }}
        >
          Business package
        </h2>
        <table>
          <tr>
            <th>Band</th>
            <th>Details</th>
            <th>Number</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>create pages</td>
            <td>Facebook+Insta+Tiktook+Google</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Auto reply</td>
            <td>two in monht</td>
            <td>2</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Respond to comments and messages</td>
            <td>During the working day from 11 am - 5 </td>
            <td>1</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Basic designs Profile + cover</td>
            <td>two in month</td>
            <td>1</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Written posts with design</td>
            <td>20 post</td>
            <td>20</td>
            <td>3000</td>
          </tr>
          <tr>
            <td>Story renewed </td>
            <td>every day</td>
            <td>30</td>
            <td>350</td>
          </tr>
          <tr>
            <td>Posting posts in interested groups</td>
            <td>30 Share on the content</td>
            <td>600</td>
            <td>500</td>
          </tr>
          <tr>
            <td>Target customers with direct messages</td>
            <td>Messenger client</td>
            <td>1500</td>
            <td>400</td>
          </tr>
          <tr>
            <td>Advertising videos</td>
            <td>Motion + typo + montage</td>
            <td>3</td>
            <td>1500</td>
          </tr>

          <tr>
            <td></td>
            <td>Total</td>
            <td>--</td>
            <td>6550</td>
          </tr>
          <tr>
            <td></td>
            <td>Package discount</td>
            <td>%</td>
            <td>6000</td>
          </tr>
          <button className="buy">Buy</button>
        </table>
      </div>
    </div>
  );
};

export default SocialMedia;
