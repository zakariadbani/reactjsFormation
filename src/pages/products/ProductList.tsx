// ProductList.tsx
import React from "react";
import { useProducts } from "../../hooks/useProducts"; // Hook personnalisé pour les produits

const ProductList: React.FC = () => {
  const { products, loading, error } = useProducts(); // Utilisation du hook pour récupérer les produits

  if (loading) return <p>Chargement des produits...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product_list">
      <h1>Liste des produits</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - <span>${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
