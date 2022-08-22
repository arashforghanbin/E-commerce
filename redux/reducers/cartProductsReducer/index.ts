import { createSlice } from "@reduxjs/toolkit";

interface cartProduct {
  id: string;
  imgLink: string;
  productName: string;
  basePrice: number;
  hasDiscount: boolean;
  discountAmount: number | undefined;
  quantity: number;
}

interface cartProductsProps {
  cartProducts: cartProduct[];
  cartProductsStatus: "idle" | "pending" | "fulfilled" | "rejected";
}

const init: cartProductsProps = {
  cartProducts: [],
  cartProductsStatus: "idle",
};

const cartProductsReducer = createSlice({
  name: "cartProductsReducer",
  initialState: init,
  reducers: {
    add: (state, action) => {
      const foundObject = state.cartProducts.find(
        (item: any) => item.id === action.payload.id
      );
      if (foundObject) {
        foundObject.quantity += 1;
      } else {
        state.cartProducts.push(action.payload);
      }
    },
    remove: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== action.payload.id
      );
    },
    decrement: (state, action) => {
      const foundObject: any = state.cartProducts.find(
        (item: any) => item.id === action.payload.id
      );
      if (foundObject.quantity === 0) {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        foundObject.quantity -= 1;
      }
    },
    emptyProductCart: (state) => {
      state.cartProducts = init.cartProducts;
    },
  },
});

export const { add, remove, decrement, emptyProductCart } =
  cartProductsReducer.actions;
export default cartProductsReducer.reducer;
