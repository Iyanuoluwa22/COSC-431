// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1 className="logo-text"><span>CELEB</span>SCAN</h1>
      </div>
      <i className="fa-solid fa-bars menu-toggle"></i>
      <ul className="nav">
        <li><a href="articles.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <input type="text" placeholder="Search by address/Txn Hash" />
        <li>
          <a href="#">
            <i className="fa fa-user"></i>
            Celebscan
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
