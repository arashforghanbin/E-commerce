import axios, { AxiosResponse } from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const URL = "http://localhost:3004/productCategories";

interface ProductCategory {
  id: number;
  value: string;
  description: string;
  img: string;
}

interface Categories {
  Categories: ProductCategory[];
  categoriesStatus: "idle" | "pending" | "fulfilled" | "rejected";
}

const init: Categories = {
  Categories: [],
  categoriesStatus: "idle",
};

export const fetchCategories: any = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    const data: AxiosResponse = await axios.get<ProductCategory[]>(URL);
    return data.data;
  }
);

const productCategoriesReducer = createSlice({
  name: "productCategoriesReducer",
  initialState: init,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.categoriesStatus = "pending";
      })
      .addCase(fetchCategories.fulfilled, (state, action: any) => {
        state.Categories = action.payload;
        state.categoriesStatus = "fulfilled";
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.categoriesStatus = "rejected";
      });
  },
});

export default productCategoriesReducer.reducer;
