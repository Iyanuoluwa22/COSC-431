// src/components/InfoContainer.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InfoContainer.css';

const InfoContainer = () => {
  const [etherPrice, setEtherPrice] = useState('');
  const [marketCap, setMarketCap] = useState('');
  const [transactions, setTransactions] = useState('');
  const [gasPrice, setGasPrice] = useState('');
  const [lastFinalizedBlock, setLastFinalizedBlock] = useState('');
  const [lastSafeBlock, setLastSafeBlock] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const apiKey = 'QV3DQ2H2962AWIED1MYACQ7ESKMY5F2HSD';
        
        const etherPriceResponse = await axios.get(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${apiKey}`);
        const etherPriceData = etherPriceResponse.data.result;
        setEtherPrice(`$${etherPriceData.ethusd} @ ${etherPriceData.ethbtc} BTC`);

        const gasPriceResponse = await axios.get(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${apiKey}`);
        const gasPriceData = gasPriceResponse.data.result;
        setGasPrice(`${gasPriceData.SafeGasPrice} Gwei`);

        // Mocking other data as an example
        setMarketCap('$406,205,214,992');
        setTransactions('2,422.94 M (13.2 TPS)');
        setLastFinalizedBlock('20199175');
        setLastSafeBlock('20199239');
      } catch (error) {
        console.error('Error fetching data from Etherscan', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="info-container">
      <div className="info-box">
        <div className="info-title">Ether Price</div>
        <div className="info-value">{etherPrice}</div>
      </div>
      <div className="info-box">
        <div className="info-title">Market Cap</div>
        <div className="info-value">{marketCap}</div>
      </div>
      <div className="info-box">
        <div className="info-title">Transactions</div>
        <div className="info-value">{transactions}</div>
      </div>
      <div className="info-box">
        <div className="info-title">Med Gas Price</div>
        <div className="info-value">{gasPrice}</div>
      </div>
      <div className="info-box">
        <div className="info-title">Last Finalized Block</div>
        <div className="info-value">{lastFinalizedBlock}</div>
      </div>
      <div className="info-box">
        <div className="info-title">Last Safe Block</div>
        <div className="info-value">{lastSafeBlock}</div>
      </div>
    </div>
  );
};

export default InfoContainer;
