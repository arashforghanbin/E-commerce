import { createSlice } from "@reduxjs/toolkit";

interface ProductsList {
  productsList: object[];
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
