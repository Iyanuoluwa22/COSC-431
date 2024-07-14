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
            <li> <a href="url">Post Malone</a>
        </li>
            <li> <a href="url">Paris Hilton</a>
        </li>
          </ul>
        </div>
        <div className="latest-transaction">
          <h2>LATEST TRANSACTION</h2>
          <ul>
            <li></li>
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
