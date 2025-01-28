import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">Assirou</span>
      </div>
      <div className="search-container">
          <input type="text" placeholder="Rechercher..." className="search-input" />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      <div className="topbar-right">
        <div className="topbar-icon">🔔</div>
        <div className="topbar-icon">👤</div>
      </div>
    </div>
  );
};

export default Topbar;