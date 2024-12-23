import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const ProductCount: React.FC = () => {
  // Récupérer le nombre de produits depuis Redux
  const productCount = useSelector(
    (state: RootState) => state.products.products.length
  );

  return (
    <div>
      <h1>Nombre total de produits : {productCount}</h1>
    </div>
  );
};

export default ProductCount;
