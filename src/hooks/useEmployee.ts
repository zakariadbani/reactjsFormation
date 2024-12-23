import { useState, useEffect } from "react";
import { fetchEmployees, fetchEmployeeById } from "../services/api/employeeApi";

export function useEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadEmployees() {
      try {
        const data = await fetchEmployees(); // Récupère la liste des utilisateurs
        setEmployees(data);
      } catch (err) {
        setError("Erreur lors de la récupération des employés");
      } finally {
        setLoading(false); // Arrête le chargement
      }
    }
    loadEmployees(); // Appelle la fonction au montage
  }, []);

  return { employees, loading, error }; // Retourne les états au composant appelant
}

// Hook pour récupérer les détails d'un utilisateur
export function useEmployeeDetails(id: string | undefined) {
  const [employee, setEmployee] = useState<Employee | null>(null); // État pour stocker les données de l'utilisateur
  const [loading, setLoading] = useState<boolean>(true); // État pour gérer le chargement
  const [error, setError] = useState<string | null>(null); // État pour gérer les erreurs

  useEffect(() => {
    if (id) {
      async function loadEmployeeDetails() {
        try {
          const data = await fetchEmployeeById(id); // Récupère les détails de l'utilisateur
          setEmployee(data);
        } catch (err) {
          setError(
            "Erreur lors de la récupération des données de l'utilisateur"
          );
        } finally {
          setLoading(false); // Arrête le chargement
        }
      }

      loadEmployeeDetails(); // Appelle la fonction au montage
    }
  }, [id]);

  return { employee, loading, error }; // Retourne les états au composant appelant
}
