// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import InfoContainer from './components/InfoContainer';
import Content from './components/Content';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

function AppContent() {
  const location = useLocation();
  const [showInfo, setShowInfo] = useState(false);

  const handleLogoClick = () => {
    setShowInfo(true);
  };

  const handleNavClick = () => {
    setShowInfo(false);
  };


  return (
    <>
      <Header onLogoClick={handleLogoClick} onNavClick={handleNavClick} />
      <Routes>
        <Route path="/" element={showInfo ? <><InfoContainer /><Content /></> : <Home />} />
        <Route path="/about" element={showInfo ? <><InfoContainer /><Content /></> : <About />} />
        <Route path="/login" element={<Login />} />
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
