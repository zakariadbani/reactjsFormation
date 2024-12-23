import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Camembert: React.FC = () => {
  // Données du camembert
  const data = [
    { name: "Dark Slate Gray", value: 30 },
    { name: "Very Dark Gray", value: 40 },
    { name: "Darker Black", value: 20 },
    { name: "Indigo", value: 10 },
  ];

  // Couleurs des secteurs
  const COLORS = [
    "#2F4F4F", // Dark Slate Gray
    "#333333", // Very Dark Gray
    "#1A1A1A", // Darker Black
    "#4B0082", // Indigo
  ];

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h2>Camembert des Ventes</h2>
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

export default Camembert;
