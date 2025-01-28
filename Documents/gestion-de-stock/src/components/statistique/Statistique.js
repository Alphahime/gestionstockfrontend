import React from 'react';
import './Statistique.css';

const Statistique = () => {
  // Données factices (à remplacer par des données réelles)
  const statsData = {
    clients: 1234,
    ventes: 12000,
    produits: 567,
    recettes: 15000,
  };

  return (
    <div className="statistique-container">
      <div className="stats-grid">
        {/* Clients */}
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <h3>Clients</h3>
          <p>{statsData.clients}</p>
        </div>

        {/* Ventes */}
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <h3>Ventes</h3>
          <p>${statsData.ventes}</p>
        </div>

        {/* Produits */}
        <div className="stat-card">
          <div className="stat-icon">🛒</div>
          <h3>Produits</h3>
          <p>{statsData.produits}</p>
        </div>

        {/* Recettes */}
        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <h3>Recettes</h3>
          <p>${statsData.recettes}</p>
        </div>
      </div>
    </div>
  );
};

export default Statistique;