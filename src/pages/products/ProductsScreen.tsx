// ProductList.tsx
import React from "react";
import ProductCount from "./ProductCount";
import ProductList from "./ProductList";

const ProductsScreen: React.FC = () => {
  return (
    <div>
      <ProductCount />
      <ProductList />
    </div>
  );
};

export default ProductsScreen;
