import { Link } from "react-router-dom";
import { useEmployees } from "../../hooks/useEmployee";

export default function EmployeeList() {
  const { employees, loading, error } = useEmployees();

  if (loading) return <p>Chargement...</p>; // Affiche un message de chargement
  if (error) return <p>{error}</p>; // Affiche un message d'erreur
  return (
    <div>
      <h2>Liste des employés</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/employees/${employee.id}`}>{employee.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
