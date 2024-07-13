/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const walletAddress = "0xa6715EAFe5D215B82cb9e90A9d6c8970A7C90033";

const apiKey = 'QV3DQ2H2962AWIED1MYACQ7ESKMY5F2HSD';

const ProfilePage = () => {
  const [etherPrice, setEtherPrice] = useState('');
  const [walletEth, setWalletEth] = useState('');
  const [walletPrice, setWalletPrice] = useState('');
  const [walletTransactions, setTransactions] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const etherPriceResponse = await axios.get(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${apiKey}`);
        const etherPriceData = etherPriceResponse.data.result;
        const etherPriceInUSD = parseFloat(etherPriceData.ethusd);
        setEtherPrice(etherPriceInUSD.toFixed(2));

        let walletEthResponse = await axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=${walletAddress}&tag=latest&apikey=${apiKey}`);
        const walletEth = BigInt(walletEthResponse.data.result);
        const walletInETH = Number(walletEth) / 1e18;
        setWalletEth(walletInETH.toFixed(6))
        const walletInUSD = walletInETH * etherPriceInUSD;

        setWalletPrice(walletInUSD.toFixed(2));

        const getTransResponse = await axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${apiKey}`);
        const transactions = getTransResponse.data.result;

        setTransactions(transactions); // You can process transactions as needed

      } catch (error) {
        console.error('Error fetching data from Etherscan', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      Ether Price: {walletEth} ETH <br />
      Wallet Price: ${walletPrice} USD <br />
      Wallet Transactions: {JSON.stringify(walletTransactions, null, 2)}
    </div>
  );
};

export default ProfilePage;