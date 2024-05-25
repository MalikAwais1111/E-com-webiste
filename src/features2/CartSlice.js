
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [] 
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,  
  reducers: {
    addtocart: (state, action) => {
        const { id } = action.payload;
        const existingItem = state.cart.find((item) => item.id === id);
      
        if (existingItem) {
            existingItem.count += 1;
        } else {
          const cartItem = {
            id: action.payload.id,
            title: action.payload.title,
            price: action.payload.price,
            count: 1 
                    };
          state.cart.push(cartItem);
        }
      },
      
    removefromcart: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item.id !== action.payload;
      });
    },
    increment: (state, action) => {
      const { id } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.count=item.count + 1; 
      }
    },
    decrement: (state, action) => {
      const { id } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        if (item.count > 1) {
          item.count -= 1; 
        } else {
          state.cart = state.cart.filter((item) => item.id !== id);
        }
      }
    }
  }
});

export const { addtocart, removefromcart, increment, decrement } = CartSlice.actions;

export default CartSlice.reducer;
