import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Importez tous les composants nécessaires
import CategoriesList from './components/categories/CategoriesList';
import CategoryForm from './components/categories/CategoryForm';
import CategoryDetail from './components/categories/CategoryDetail';

import MagasinsList from './components/magasins/MagasinsList';
import MagasinForm from './components/magasins/MagasinForm';
import MagasinDetail from './components/magasins/MagasinDetail';

import FournisseursList from './components/fournisseurs/FournisseursList';
import FournisseurForm from './components/fournisseurs/FournisseurForm';
import FournisseurDetail from './components/fournisseurs/FournisseurDetail';

import ProduitsList from './components/produits/ProduitsList';
import ProduitForm from './components/produits/ProduitForm';
import ProduitDetail from './components/produits/ProduitDetail';

import ClientsList from './components/clients/ClientsList';
import ClientForm from './components/clients/ClientForm';
import ClientDetail from './components/clients/ClientDetail';

import EmployesList from './components/employes/EmployesList';
import EmployeForm from './components/employes/EmployeForm';
import EmployeDetail from './components/employes/EmployeDetail';

import StocksList from './components/stocks/StocksList';
import StockForm from './components/stocks/StockForm';
import StockDetail from './components/stocks/StockDetail';

import PromotionsList from './components/promotions/PromotionsList';
import PromotionForm from './components/promotions/PromotionForm';
import PromotionDetail from './components/promotions/PromotionDetail';

import HistoriquePrixList from './components/historique-prix/HistoriquePrixList';
import HistoriquePrixForm from './components/historique-prix/HistoriquePrixForm';
import HistoriquePrixDetail from './components/historique-prix/HistoriquePrixDetail';

import VentesList from './components/ventes/VentesList';
import VenteForm from './components/ventes/VenteForm';
import VenteDetail from './components/ventes/VenteDetail';

import LigneVentesList from './components/ligne-ventes/LigneVentesList';
import LigneVenteForm from './components/ligne-ventes/LigneVenteForm';
import LigneVenteDetail from './components/ligne-ventes/LigneVenteDetail';

import PaiementsList from './components/paiements/PaiementsList';
import PaiementForm from './components/paiements/PaiementForm';
import PaiementDetail from './components/paiements/PaiementDetail';

import DepensesList from './components/depenses/DepensesList';
import DepenseForm from './components/depenses/DepenseForm';
import DepenseDetail from './components/depenses/DepenseDetail';

import RecettesList from './components/recettes/RecettesList';
import RecetteForm from './components/recettes/RecetteForm';
import RecetteDetail from './components/recettes/RecetteDetail';

import MouvementStocksList from './components/mouvement-stocks/MouvementStocksList';
import MouvementStockForm from './components/mouvement-stocks/MouvementStockForm';
import MouvementStockDetail from './components/mouvement-stocks/MouvementStockDetail';

import BilansList from './components/bilans/BilansList';
import BilanForm from './components/bilans/BilanForm';
import BilanDetail from './components/bilans/BilanDetail';

import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

import Home from './components/home/Home'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Barre de navigation */}
        <Routes>

         <Route path="/acceuil" element={<Home />} /> 


          {/* Routes pour les catégories */}
          <Route path="/categories" element={<CategoriesList />} />
          <Route path="/categories/new" element={<CategoryForm />} />
          <Route path="/categories/:id" element={<CategoryDetail />} />
          <Route path="/categories/:id/edit" element={<CategoryForm />} />

          {/* Routes pour les magasins */}
          <Route path="/magasins" element={<MagasinsList />} />
          <Route path="/magasins/new" element={<MagasinForm />} />
          <Route path="/magasins/:id" element={<MagasinDetail />} />
          <Route path="/magasins/:id/edit" element={<MagasinForm />} />

          {/* Routes pour les fournisseurs */}
          <Route path="/fournisseurs" element={<FournisseursList />} />
          <Route path="/fournisseurs/new" element={<FournisseurForm />} />
          <Route path="/fournisseurs/:id" element={<FournisseurDetail />} />
          <Route path="/fournisseurs/:id/edit" element={<FournisseurForm />} />

          {/* Routes pour les produits */}
          <Route path="/produits" element={<ProduitsList />} />
          <Route path="/produits/new" element={<ProduitForm />} />
          <Route path="/produits/:id" element={<ProduitDetail />} />
          <Route path="/produits/:id/edit" element={<ProduitForm />} />

          {/* Routes pour les clients */}
          <Route path="/clients" element={<ClientsList />} />
          <Route path="/clients/new" element={<ClientForm />} />
          <Route path="/clients/:id" element={<ClientDetail />} />
          <Route path="/clients/:id/edit" element={<ClientForm />} />

          {/* Routes pour les employés */}
          <Route path="/employes" element={<EmployesList />} />
          <Route path="/employes/new" element={<EmployeForm />} />
          <Route path="/employes/:id" element={<EmployeDetail />} />
          <Route path="/employes/:id/edit" element={<EmployeForm />} />

          {/* Routes pour les stocks */}
          <Route path="/stocks" element={<StocksList />} />
          <Route path="/stocks/new" element={<StockForm />} />
          <Route path="/stocks/:id" element={<StockDetail />} />
          <Route path="/stocks/:id/edit" element={<StockForm />} />

          {/* Routes pour les promotions */}
          <Route path="/promotions" element={<PromotionsList />} />
          <Route path="/promotions/new" element={<PromotionForm />} />
          <Route path="/promotions/:id" element={<PromotionDetail />} />
          <Route path="/promotions/:id/edit" element={<PromotionForm />} />

          {/* Routes pour l'historique des prix */}
          <Route path="/historique-prix" element={<HistoriquePrixList />} />
          <Route path="/historique-prix/new" element={<HistoriquePrixForm />} />
          <Route path="/historique-prix/:id" element={<HistoriquePrixDetail />} />
          <Route path="/historique-prix/:id/edit" element={<HistoriquePrixForm />} />

          {/* Routes pour les ventes */}
          <Route path="/ventes" element={<VentesList />} />
          <Route path="/ventes/new" element={<VenteForm />} />
          <Route path="/ventes/:id" element={<VenteDetail />} />
          <Route path="/ventes/:id/edit" element={<VenteForm />} />

          {/* Routes pour les lignes de vente */}
          <Route path="/ligne-ventes" element={<LigneVentesList />} />
          <Route path="/ligne-ventes/new" element={<LigneVenteForm />} />
          <Route path="/ligne-ventes/:id" element={<LigneVenteDetail />} />
          <Route path="/ligne-ventes/:id/edit" element={<LigneVenteForm />} />

          {/* Routes pour les paiements */}
          <Route path="/paiements" element={<PaiementsList />} />
          <Route path="/paiements/new" element={<PaiementForm />} />
          <Route path="/paiements/:id" element={<PaiementDetail />} />
          <Route path="/paiements/:id/edit" element={<PaiementForm />} />

          {/* Routes pour les dépenses */}
          <Route path="/depenses" element={<DepensesList />} />
          <Route path="/depenses/new" element={<DepenseForm />} />
          <Route path="/depenses/:id" element={<DepenseDetail />} />
          <Route path="/depenses/:id/edit" element={<DepenseForm />} />

          {/* Routes pour les recettes */}
          <Route path="/recettes" element={<RecettesList />} />
          <Route path="/recettes/new" element={<RecetteForm />} />
          <Route path="/recettes/:id" element={<RecetteDetail />} />
          <Route path="/recettes/:id/edit" element={<RecetteForm />} />

          {/* Routes pour les mouvements de stock */}
          <Route path="/mouvement-stocks" element={<MouvementStocksList />} />
          <Route path="/mouvement-stocks/new" element={<MouvementStockForm />} />
          <Route path="/mouvement-stocks/:id" element={<MouvementStockDetail />} />
          <Route path="/mouvement-stocks/:id/edit" element={<MouvementStockForm />} />

          {/* Routes pour les bilans */}
          <Route path="/bilans" element={<BilansList />} />
          <Route path="/bilans/new" element={<BilanForm />} />
          <Route path="/bilans/:id" element={<BilanDetail />} />
          <Route path="/bilans/:id/edit" element={<BilanForm />} />
        </Routes>
        <Footer /> {/* Pied de page */}
      </div>
    </Router>
  );
}

export default App;