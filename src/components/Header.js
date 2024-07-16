// src/components/Header.js
import React from 'react';

import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import './Header.css';

const Header = ({ onLogoClick, onNavClick, isLoggedIn, onLogout }) => {
 

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      onLogout(); 
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

 return (
    <header>
      <div className="logo" onClick={onLogoClick} style={{ cursor: 'pointer' }}>
        <h1 className="logo-text"><span>CELEB</span>SCAN</h1>
      </div>
      <i className="fa-solid fa-bars menu-toggle"></i>
      <ul className="nav">
        <li><Link to="/" onClick={onNavClick}>Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>

      
        {isLoggedIn ? (
          <>
            <li><Link to="/chat" onClick={onNavClick}>Chat</Link></li>
            <li><button className="sign-out-btn" onClick={handleSignOut}>Sign Out</button></li>
          </>
        ) : (


          <li>
            <Link to="/login">
              <i className="fa fa-user"></i>
              Login/Register
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
