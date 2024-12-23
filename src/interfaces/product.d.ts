interface Rating {
  rate: number;
  count: number;
}
// Définir le type d'un produit
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
