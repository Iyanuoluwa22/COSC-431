/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css'; 
import { exportUsername } from './Login';
import { db } from '../firebase';
import { query, where, collection, getDocs } from 'firebase/firestore';

const apiKey = 'QV3DQ2H2962AWIED1MYACQ7ESKMY5F2HSD';

const ProfilePage = () => {
  const [etherPrice, setEtherPrice] = useState('');
  const [walletEth, setWalletEth] = useState('');
  const [walletPrice, setWalletPrice] = useState('');
  const [walletTransactions, setTransactions] = useState([]);
  const [userData, setUserData] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', exportUsername));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0].data();
        setUserData(userDoc); // Set user data
        setWalletAddress(userDoc.walletAddress); // Set wallet address
      } else {
        console.log("No such user!");
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!walletAddress) return;

      try {
        const etherPriceResponse = await axios.get(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${apiKey}`);
        const etherPriceData = etherPriceResponse.data.result;
        const etherPriceInUSD = parseFloat(etherPriceData.ethusd);
        setEtherPrice(etherPriceInUSD.toFixed(2));

        const walletEthResponse = await axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=${walletAddress}&tag=latest&apikey=${apiKey}`);
        const walletEthValue = BigInt(walletEthResponse.data.result);
        const walletInETH = Number(walletEthValue) / 1e18;
        setWalletEth(walletInETH.toFixed(6));
        const walletInUSD = walletInETH * etherPriceInUSD;

        setWalletPrice(walletInUSD.toFixed(2));

        const getTransResponse = await axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${apiKey}`);
        const transactions = getTransResponse.data.result;

        setTransactions(transactions.slice(0, 5)); // Limit to 5 transactions

      } catch (error) {
        console.error('Error fetching data from Etherscan', error);
      }
    };

    fetchData();
  }, [walletAddress]);

  return (
    <div>
      <h1>{userData ? userData.username : "Username"}</h1>
      <div id="row">
        <p>Wallet Address: {walletAddress}</p>
        <p>Ether Price: {walletEth} ETH</p>
        <p>Wallet Price: ${walletPrice} USD</p> 
      </div>
      <h2>Wallet Transactions:</h2>
      <ul className="transaction-list">
        {walletTransactions.map((transaction, index) => (
          <li key={index} className="transaction-item">
            <div className="transaction-hash">Transaction Hash: {transaction.hash}</div>
            <div className="transaction-details">
              <div>Block Number: {transaction.blockNumber}</div>
              <div>From: {transaction.from}</div>
              <div>To: {transaction.to}</div>
              <div>Value: {transaction.value}</div>
              <div>Gas: {transaction.gas}</div>
              <div>Gas Price: {transaction.gasPrice}</div>
              <div>TimeStamp: {transaction.timeStamp}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;
