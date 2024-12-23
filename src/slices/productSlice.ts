//slices/productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  products: Product[];
  product: Product | null; // Ajoutez un champ pour un produit spécifique
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  product: null, // Initialiser comme null
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.loading = false;
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    fetchProductStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductSuccess: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
      state.loading = false;
    },
    fetchProductFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Exporter les actions
export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProductStart,
  fetchProductSuccess,
  fetchProductFailure,
} = productSlice.actions;

// Exporter le reducer
export default productSlice.reducer;
