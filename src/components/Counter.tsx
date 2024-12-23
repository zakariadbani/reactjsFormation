import React, { useState } from "react";
import Button from "./Button";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Compteur : {count}</p>
      <Button label="Incrémenter" onClick={() => setCount(count + 1)} />
    </div>
  );
};

export default Counter;
