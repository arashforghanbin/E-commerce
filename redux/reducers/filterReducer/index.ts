import { createSlice } from "@reduxjs/toolkit";



const init: any = {
  chosenCategories:[],
};

const filterReducer = createSlice({
  name: "fiterReducer",
  initialState: init,
  reducers: {
    selectedCategories: (state, action) => {
      state.chosenCategories = action.payload;
    },
  },
});

export const { selectedCategories } = filterReducer.actions;
export default filterReducer.reducer;
