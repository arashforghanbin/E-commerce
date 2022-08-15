import { createSlice } from "@reduxjs/toolkit";

const init = {
  isModalOpen: false,
};

const modalReducer = createSlice({
  name: "modalReducer",
  initialState: init,
  reducers: {
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setIsModalOpen } = modalReducer.actions;
export default modalReducer.reducer;
