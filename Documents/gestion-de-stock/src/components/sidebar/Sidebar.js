import React, { useState } from 'react';
import './Sidebar.css';
import {
  FaHome,
  FaUsers,
  FaBox,
  FaChartLine,
  FaTruck,
  FaUserTie,
  FaWarehouse,
  FaCreditCard,
  FaReceipt,
  FaBalanceScale,
} from 'react-icons/fa';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
      {/* L'en-tête gère maintenant le clic pour réduire/étendre */}
      <div className="sidebar-header" onClick={toggleSidebar}>
        <h2>{isCollapsed ? '' : 'Assirou'}</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className="sidebar-item">
            <FaHome className="sidebar-icon" />
            {!isCollapsed && <span>Accueil</span>}
          </li>
          <li className="sidebar-item">
            <FaUsers className="sidebar-icon" />
            {!isCollapsed && <span>Clients</span>}
          </li>
          <li className="sidebar-item">
            <FaBox className="sidebar-icon" />
            {!isCollapsed && <span>Produits</span>}
          </li>
          <li className="sidebar-item">
            <FaChartLine className="sidebar-icon" />
            {!isCollapsed && <span>Ventes</span>}
          </li>
          <li className="sidebar-item">
            <FaTruck className="sidebar-icon" />
            {!isCollapsed && <span>Fournisseurs</span>}
          </li>
          <li className="sidebar-item">
            <FaUserTie className="sidebar-icon" />
            {!isCollapsed && <span>Employés</span>}
          </li>
          <li className="sidebar-item">
            <FaWarehouse className="sidebar-icon" />
            {!isCollapsed && <span>Stocks</span>}
          </li>
          <li className="sidebar-item">
            <FaCreditCard className="sidebar-icon" />
            {!isCollapsed && <span>Paiements</span>}
          </li>
          <li className="sidebar-item">
            <FaReceipt className="sidebar-icon" />
            {!isCollapsed && <span>Recettes</span>}
          </li>
          <li className="sidebar-item">
            <FaBalanceScale className="sidebar-icon" />
            {!isCollapsed && <span>Bilan</span>}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;