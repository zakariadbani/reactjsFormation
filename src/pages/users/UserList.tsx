import React, { useEffect, useState } from "react";
import { User } from "../../types/user"; // Importation de l'interface User
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Déclaration du type pour les utilisateurs
// type User ={
//   id: number;
//   name: string;
//   email: string;
// }

export default function UserList() {
  // Use `User[]` to type the users array
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true); // État pour gérer le chargement
  const [error, setError] = useState<string | null>(null); // État pour gérer les erreurs

  // Appel à l'API pour récupérer les utilisateurs
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des utilisateurs", error);
        setError("error");
        setLoading(false);
      });
  }, []); // Empty dependency array - runs only once on mount

  if (loading) return <p>Chargement...</p>; // Affiche un message de chargement
  if (error) return <p>{error}</p>; // Affiche un message d'erreur
  return (
    <div className="users_list">
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div className="user_card">
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <Link to={`/users/${user.id}`}>Voir détails</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
