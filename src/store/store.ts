// app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer, // Ajouter le reducer des produits ici
  },
});

// Exporter le type du store pour l'utiliser dans toute l'application
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
