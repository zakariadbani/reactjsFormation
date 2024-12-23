import React from "react";
import { Link } from "react-router-dom";

// Déclaration du composant DashboardHome
const DashboardHome: React.FC = () => {
  return (
    <div>
      <h2>Page d'accueil du Tableau de bord</h2>
      <nav>
        <ul>
          <li>
            <Link to="overview">Vue d'ensemble</Link> {/* Chemin relatif */}
          </li>
          <li>
            <Link to="settings">Paramètres</Link> {/* Chemin relatif */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardHome;
