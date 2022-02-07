import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../apis/productsApi";
import { cartSlice } from "../slices/cartSlice";

export const store = configureStore({
  reducer: {
    productsApi: productsApi.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
