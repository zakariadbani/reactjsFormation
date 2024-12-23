// api/userApi.ts
import { apiClient } from "./index";

// Récupérer tous les employés
export async function fetchEmployees(): Promise<Employee[]> {
  const response = await apiClient.get<Employee[]>("/users");
  return response.data;
}
// Fonction pour récupérer les détails d'un employé par ID
export async function fetchEmployeeById(
  id: string | undefined
): Promise<Employee> {
  const response = await apiClient.get<Employee>(`/users/${id}`);
  return response.data;
}
