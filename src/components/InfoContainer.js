// src/components/InfoContainer.js
import React from 'react';
import './InfoContainer.css';

const InfoContainer = () => {
  return (
    <div className="info-container">
      <div className="info-box">
        <div className="info-title">Ether Price</div>
        <div className="info-value">$3,379.84 @ 0.055489 BTC (+0.02%)</div>
      </div>
      <div className="info-box">
        <div className="info-title">Market Cap</div>
        <div className="info-value">$406,205,214,992</div>
      </div>
      <div className="info-box">
        <div className="info-title">Transactions</div>
        <div className="info-value">2,422.94 M (13.2 TPS)</div>
      </div>
      <div className="info-box">
        <div className="info-title">Med Gas Price</div>
        <div className="info-value">3 Gwei ($0.21)</div>
      </div>
      <div className="info-box">
        <div className="info-title">Last Finalized Block</div>
        <div className="info-value">20199175</div>
      </div>
      <div className="info-box">
        <div className="info-title">Last Safe Block</div>
        <div className="info-value">20199239</div>
      </div>
    </div>
  );
};

export default InfoContainer;
