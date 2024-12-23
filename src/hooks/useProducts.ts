// hooks/useProducts.ts
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../services/api/productApi"; // API pour récupérer les produits
import { RootState } from "../store/store"; // Pour le type du state global
import {
  fetchProductsFailure,
  fetchProductsStart,
  fetchProductsSuccess,
} from "../slices/productSlice";

export function useProducts() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    async function loadProducts() {
      dispatch(fetchProductsStart()); // Déclenche l'action de début de chargement
      try {
        const data = await fetchProducts(); // Appel API
        dispatch(fetchProductsSuccess(data)); // Si succès, dispatch les produits dans Redux
      } catch (err) {
        dispatch(
          fetchProductsFailure("Erreur lors de la récupération des produits")
        );
      }
    }

    loadProducts(); // Appelle la fonction au montage du composant
  }, [dispatch]);

  return { products, loading, error };
}
