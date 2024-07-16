// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import InfoContainer from './components/InfoContainer';
import Content from './components/Content';
import Home from './pages/Home';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Profile from './pages/Profile';

function AppContent() {
  const location = useLocation();
  const [showInfo, setShowInfo] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state
  const [userEmail, setUserEmail] = useState(''); // Store user's email

  const handleLogoClick = () => {
    setShowInfo(true);
  };

  const handleNavClick = () => {
    setShowInfo(false);
  };

  // This function simulates a login action
  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email); // Set user email on login
  };
// to handle the signout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail(''); 
    localStorage.removeItem('userEmail');
  };

  return (
    <>
      <Header onLogoClick={handleLogoClick} onNavClick={handleNavClick} isLoggedIn={isLoggedIn} onLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={showInfo ? <><InfoContainer /><Content /></> : <Home isLoggedIn={isLoggedIn} userEmail={userEmail} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} /> {/* Pass login handler */}
        <Route path="/chat" element={isLoggedIn ? <Chat userEmail={userEmail} /> : <Login onLogin={handleLogin} />} /> {/* Add the chat route */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
