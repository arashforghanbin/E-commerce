import { createSlice } from "@reduxjs/toolkit";

const init = {
  isLoggedIn: false,
  userLoggedIn: { userName: "", password: "" },
};

const userLoginReducer = createSlice({
  name: "userLoginReducer",
  initialState: init,
  reducers: {
    handleIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    handleUserLoggedIn: (state, action) => {
      state.userLoggedIn = action.payload;
    },
  },
});

export const { handleUserLoggedIn, handleIsLoggedIn } =
  userLoginReducer.actions;
export default userLoginReducer.reducer;
