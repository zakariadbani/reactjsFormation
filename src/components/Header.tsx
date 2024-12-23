import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/charts">Charts</Link>
          </li>
          <li>
            <Link to="/employees">Employés</Link>
          </li>
          <li>
            <Link to="/products">Produits</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
