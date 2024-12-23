import React from "react";
import { Link } from "react-router-dom";

// Déclaration du composant DashboardHome
const ChartHome: React.FC = () => {
  return (
    <div>
      <h2>Charts</h2>
      <nav>
        <ul>
          <li>
            <Link to="recharts">recharts</Link> {/* Chemin relatif */}
          </li>
          <li>
            <Link to="camembert">Camembert</Link> {/* Chemin relatif */}
          </li>
          <li>
            <Link to="camembertfetch">CamembertFetch</Link>
            {/* Chemin relatif */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ChartHome;
