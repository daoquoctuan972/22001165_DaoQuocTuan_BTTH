import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find(p => p.id === item.id);
      if (existItem) {
        existItem.quantity += item.quantity;
      } else {
        state.cartItems.push(item);
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(p => p.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find(p => p.id === id);
      if (item) item.quantity = quantity;
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
