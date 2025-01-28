import React from 'react';
import Sidebar from '../sidebar/Sidebar'; 
import Topbar from '../topbar/Topbar'; 
import './Home.css';
import Statistique from '../statistique/Statistique';
const Home = () => {
  return (
    <div className="home-container">
      <Sidebar /> 
      <Topbar /> 
      <div className="content">
      
        <Statistique /> 
      </div>
    </div>
  );
};

export default Home;
