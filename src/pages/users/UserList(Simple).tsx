import React, { useEffect, useState } from "react";

// Define the User type based on API response
interface User {
  id: number;
  name: string;
}

export default function UserList() {
  // Use `User[]` to type the users array
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // API call to fetch users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des utilisateurs", error);
        setLoading(false);
      });
  }, []); // Empty dependency array - runs only once on mount

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
