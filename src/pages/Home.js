// src/pages/Home.js
import React from 'react';
import InfoContainer from '../components/InfoContainer';
import Content from '../components/Content';
import Chat from './Chat'


const Home = () => {
  return (
    <div>
      <InfoContainer/>
      <Content/>
      <Chat/>
    </div>
  );
};

export default Home;
