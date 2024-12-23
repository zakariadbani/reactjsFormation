import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { User } from "../../types/user"; // Importation de l'interface User

const API_URL = "https://jsonplaceholder.typicode.com/users";

const CamembertFetch: React.FC = () => {
  const [data, setData] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((users) => {
        // Générer des données fictives pour l'exemple, ici on compte le nombre de lettres des prénoms
        const processedData = users.map((user: User) => ({
          name: user.name,
          value: user.name.length, // Exemple de traitement, vous pouvez ajuster selon vos besoins
        }));
        setData(processedData);
      })
      .catch((error) => {
        console.error("Erreur:", error);
      });
  }, []);

  const COLORS = [
    "#2F4F4F", // Dark Slate Gray
    "#333333", // Very Dark Gray
    "#1A1A1A", // Darker Black
    "#4B0082", // Indigo
    "#800000", // Maroon
    "#8B4513", // Saddle Brown
    "#6A5ACD", // Slate Blue
    "#2E8B57", // Sea Green
    "#B22222", // Firebrick
    "#191970", // Midnight Blue
  ];

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h2>Graphique en camembert avec des données fictives</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default CamembertFetch;
