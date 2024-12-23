import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../types/user"; // Importation de l'interface User

const UserDetails: React.FC = () => {
  const { id } = useParams(); // Récupère l'id depuis l'URL
  const [user, setUser] = useState<User | null>(null); // État pour stocker les données de l'utilisateur
  const [loading, setLoading] = useState(true); // État pour gérer le chargement
  const [error, setError] = useState<string | null>(null); // État pour gérer les erreurs

  useEffect(() => {
    if (id) {
      // Appel à l'API pour récupérer les données de l'utilisateur
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data); // Met à jour l'état avec les données de l'utilisateur
          setLoading(false); // Arrête le chargement
        })
        .catch((error) => {
          setError(
            "Erreur lors de la récupération des données de l'utilisateur"
          );
          setLoading(false);
        });
    }
  }, [id]); // Requête à l'API quand l'id change

  if (loading) return <p>Chargement...</p>; // Affiche un message de chargement
  if (error) return <p>{error}</p>; // Affiche un message d'erreur si une erreur se produit

  return (
    <div className="details_user">
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <h3>Adresse:</h3>
          <p>
            {user.address.suite}, {user.address.street}
          </p>
          <p>
            {user.address.city}, {user.address.zipcode}
          </p>
          <p>
            Coordonnées géographiques: Latitude {user.address.geo.lat},
            Longitude {user.address.geo.lng}
          </p>
          <h3>Informations supplémentaires:</h3>
          <p>Téléphone: {user.phone}</p>
          <p>
            Site web:{" "}
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.website}
            </a>
          </p>
          <h3>Entreprise:</h3>
          <p>Nom: {user.company.name}</p>
          <p>Phrase d'accroche: {user.company.catchPhrase}</p>
          <p>Activité: {user.company.bs}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
