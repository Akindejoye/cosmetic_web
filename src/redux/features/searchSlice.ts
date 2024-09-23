import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Data from "@/utils/productData";

const initialState = {
  products: Data,
  filteredProduts: Data,
  searchTerm: '',
};

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredProduts = state.products.filter(product =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    }
  },
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;