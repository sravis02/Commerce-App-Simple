import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  badge: null,
  cartId: null, // Cann i pass a funcciton inside here to read froma sync storage??
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementBadge(state) {
      if (state.badge == null) {
        state.badge = 1;
      } else {
        state.badge++;
      }
    },
    resetBadge(state) {
      state.badge = null;
    },
    setCartId(state, payload) {
      state.cartId = payload.payload;
    },
  },
});

export const { incrementBadge, resetBadge, setCartId } = cartSlice.actions;
