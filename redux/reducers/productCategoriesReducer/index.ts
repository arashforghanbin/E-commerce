import { createSlice } from "@reduxjs/toolkit";

interface ProductCategory {
  id: number;
  value: string;
  description: string;
  img: string;
}

interface Categories {
  Categories: ProductCategory[];
}

const init: Categories = {
  Categories: [],
};

const productCategoriesReducer = createSlice({
  name: "productCategoriesReducer",
  initialState: init,
  reducers: {
    add: (state, action) => {
      state.Categories.push(action.payload);
    },
  },
});

export const { add } = productCategoriesReducer.actions;
export default productCategoriesReducer.reducer;
