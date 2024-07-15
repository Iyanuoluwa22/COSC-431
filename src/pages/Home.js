// src/pages/Home.js
import React from 'react';
import InfoContainer from '../components/InfoContainer';
import Content from '../components/Content';
import Chat from './Chat';

const Home = ({ isLoggedIn, userEmail }) => {
  return (
    <div>
      <InfoContainer/>
      <Content/>
      {isLoggedIn && <Chat userEmail={userEmail} />}
    </div>
  );
};

export default Home;
