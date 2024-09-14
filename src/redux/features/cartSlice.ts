import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
}

// const initialState: Array<IProduct> = [];
const storedState = localStorage.getItem("cosmetic");
const initialState: Array<IProduct> =
  storedState ? JSON.parse(storedState) : [];
;

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      if (state.findIndex((pro) => pro.id === action.payload.id) === -1) {
        state.push(action.payload);
      } else {
        return state.map((item) => {
          return item.id === action.payload.id 
            ? { ...item, quantity: item.quantity + 1} 
            : item;
        });
      }
      localStorage.setItem('cosmetic', JSON.stringify(state));
    },


    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const newState = state.filter((item) => item.id !== id);
      localStorage.setItem('cosmetic', JSON.stringify(newState));
      return newState;
    }
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;