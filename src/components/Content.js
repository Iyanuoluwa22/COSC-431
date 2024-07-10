// src/components/Content.js
import React from 'react';
import './Content.css';

const Content = () => {
  return (
    <div className="content clearfix">
      <div className="latest-container">
        <div className="latest-block">
          <h2>LATEST BLOCK</h2>
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
