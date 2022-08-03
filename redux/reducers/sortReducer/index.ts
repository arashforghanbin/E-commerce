import { createSlice } from "@reduxjs/toolkit";

const init = {
  chosenOption: "mostSales",
};

const sortReducer = createSlice({
  name: "sortReducer",
  initialState: init,
  reducers: {
    selectedSortingOption: (state, action) => {
      state.chosenOption = action.payload;
    },
  },
});

export const { selectedSortingOption } = sortReducer.actions;
export default sortReducer.reducer;
