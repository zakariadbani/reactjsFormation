import { apiProduct } from "./index"; // Utilise ton client API configuré

// Récupérer tous les produits
export async function fetchProducts(): Promise<Product[]> {
  const response = await apiProduct.get<Product[]>("/products"); // Remplace par l'URL API appropriée pour tes produits
  return response.data;
}

// Récupérer un produit par ID (si nécessaire)
export async function fetchProductById(id: number): Promise<Product> {
  const response = await apiProduct.get<Product>(`/products/${id}`);
  return response.data;
}
