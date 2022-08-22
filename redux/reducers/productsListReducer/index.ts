import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
const URL = "http://localhost:3004/productsList";

interface Product {
  id: string;
  productName: string;
  price: number;
  category: string;
  imgLink: string;
  discount: number;
  clicked: number;
  bought: number;
  taste: string;
  engName: string;
  weight: number;
  hasDiscount: boolean;
  madeIn: string;
}

interface ProductsList {
  productsList: Product[];
  productStatus: "idle" | "pending" | "fulfilled" | "rejected";
}

const init: ProductsList = {
  productsList: [],
  productStatus: "idle",
};

export const fetchProductsList: any = createAsyncThunk(
  "products/fetchProductsList",
  async () => {
    const data: AxiosResponse = await axios.get<Product[]>(URL);
    return data.data;
  }
);

const productsListReducer = createSlice({
  name: "productsListReducer",
  initialState: init,
  reducers: {
    deleteProduct: (state, action)=> {
      state.productsList.filter((item)=> item.id !== action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsList.pending, (state) => {
        state.productStatus = "pending";
      })
      .addCase(fetchProductsList.fulfilled, (state, action: any) => {
        state.productsList = action.payload;
        state.productStatus = "fulfilled";
      })
      .addCase(fetchProductsList.rejected, (state) => {
        state.productStatus = "rejected";
      });
  },
});

export const { deleteProduct } = productsListReducer.actions;
export default productsListReducer.reducer;
