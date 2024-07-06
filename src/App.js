// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import InfoContainer from './components/InfoContainer';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <InfoContainer />
      <Content />
    </div>
  );
}

export default App;

