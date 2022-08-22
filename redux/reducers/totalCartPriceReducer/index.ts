import { createSlice } from "@reduxjs/toolkit";

const init = {
  totalPrice: 0,
};

const totalCartPriceReducer = createSlice({
  name: "totalCartPriceReducer",
  initialState: init,
  reducers: {
    addTotalCost: (state, action) => {
      state.totalPrice = action.payload;
    },
    resetTotalCost: (state) => {
      state.totalPrice = init.totalPrice;
    },
  },
});

export const { addTotalCost, resetTotalCost } = totalCartPriceReducer.actions;
export default totalCartPriceReducer.reducer;
