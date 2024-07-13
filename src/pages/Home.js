// src/pages/Home.js
import React from 'react';
import InfoContainer from '../components/InfoContainer';
import Content from '../components/Content';
import ProfilePage from '../scripts/UserInfo';


const Home = () => {
  return (
    <div>
      <InfoContainer/>
      <Content/>
      <ProfilePage/>
    </div>
  );
};

export default Home;
