// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onLogoClick, onNavClick, isLoggedIn }) => {
  return (
    <header>
      <div className="logo" onClick={onLogoClick} style={{ cursor: 'pointer' }}>
        <h1 className="logo-text"><span>CELEB</span>SCAN</h1>
      </div>
      <i className="fa-solid fa-bars menu-toggle"></i>
      <ul className="nav">
        <li><Link to="/" onClick={onNavClick}>Home</Link></li>
        <li><Link to="/about" onClick={onNavClick}>About</Link></li>
        <input type="text" placeholder="Search by address/Txn Hash" />
        <li>
          <Link to="/login">
            <i className="fa fa-user"></i>
            Login/Register
          </Link>
        </li>
        {isLoggedIn && <li><Link to="/chat" onClick={onNavClick}>Chat</Link></li>} {/* Conditionally render Chat link */}
      </ul>
    </header>
  );
};

export default Header;
