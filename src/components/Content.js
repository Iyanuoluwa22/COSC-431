// src/components/Content.js
import React from 'react';
import './Content.css';

const Content = () => {
  return (
    <div className="content clearfix">
      <div className="latest-container">
        <div className="latest-block">
          <h2>CELEB PROFILES</h2>
          <ul>
            <li> <a href="url">Snoop Dog</a>
        </li>
            <li> <a href="url">Mark Cuban</a>
        </li>
            <li> <a href="https://etherscan.io/address/0xbEA020c3bD417f30De4d6bd05b0ED310ac586cc0">Post Malone</a>
        </li>
            <li> <a href="url">Paris Hilton</a>
        </li>
          </ul>
        </div>
        <div className="latest-transaction">
          <h2>LATEST TRANSACTION</h2>
          <ul>
            <li><p>Transaction ID:<a href="url">0893489234329</a> </p>
            <p>From:<a href="url">0xadA412f7C7...9166</a> </p>
            <p>To:<a href="https://etherscan.io/address/0xbEA020c3bD417f30De4d6bd05b0ED310ac586cc0">0xbEA020c3bD417...cc0</a> </p>
            <p>Amount:0.000101 ETH </p>
            </li>

            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
