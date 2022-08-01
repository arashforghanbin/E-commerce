import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: string;
  productName: string;
  price: number;
  category: string;
  file: string;
  discount: number;
  clicked: number;
  bought: number;
  taste: string;
  engName: string;
  weight: number;
  hasDiscount: boolean;
}

interface ProductsList {
  productsList: Product[];
}

const init: ProductsList = {
  productsList: [],
};

const productsListReducer = createSlice({
  name: "productsListReducer",
  initialState: init,
  reducers: {
    add: (state, action) => {
      state.productsList.push(action.payload);
    },
  },
});

export const { add } = productsListReducer.actions;
export default productsListReducer.reducer;
