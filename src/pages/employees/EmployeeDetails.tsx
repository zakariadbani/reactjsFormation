import React from "react";
import { useParams } from "react-router-dom";
import { useEmployeeDetails } from "../../hooks/useEmployee";

const EmployeeDetails: React.FC = () => {
  const { id } = useParams(); // Récupère l'id depuis l'URL
  const { employee, loading, error } = useEmployeeDetails(id); // Utilise le hook personnalisé

  if (loading) return <p>Chargement...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="details_user">
      {employee && (
        <div>
          <h2>{employee.name}</h2>
          <p>Username: {employee.username}</p>
          <p>Email: {employee.email}</p>
          <h3>Adresse:</h3>
          <p>
            {employee.address.suite}, {employee.address.street}
          </p>
          <p>
            {employee.address.city}, {employee.address.zipcode}
          </p>
          <p>
            Coordonnées géographiques: Latitude {employee.address.geo.lat},
            Longitude {employee.address.geo.lng}
          </p>
          <h3>Informations supplémentaires:</h3>
          <p>Téléphone: {employee.phone}</p>
          <p>
            Site web:{" "}
            <a
              href={`http://${employee.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {employee.website}
            </a>
          </p>
          <h3>Entreprise:</h3>
          <p>Nom: {employee.company.name}</p>
          <p>Phrase d'accroche: {employee.company.catchPhrase}</p>
          <p>Activité: {employee.company.bs}</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeDetails;
