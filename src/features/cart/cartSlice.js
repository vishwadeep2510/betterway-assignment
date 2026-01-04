import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: savedCart },
  reducers: {
    addToCart(state, action) {
      const item = state.items.find(i => i.id === action.payload.id);

      if (item) {
        if (item.quantity < item.stock) item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    updateQuantity(state, action) {
      const { id, qty } = action.payload;

      if (qty <= 0) {
        state.items = state.items.filter(i => i.id !== id);
      } else {
        const item = state.items.find(i => i.id === id);
        if (item) item.quantity = qty;
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeItem(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    }
  }
});

export const { addToCart, updateQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
