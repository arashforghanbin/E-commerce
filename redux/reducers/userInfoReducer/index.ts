import { createSlice } from "@reduxjs/toolkit";

const init = {
  userInfo: {
    province: "",
    city: "",
    recipient: "",
    personalId: "",
    zipCode: "",
    address: "",
  },
};

const userInfoReducer = createSlice({
  name: "userInfoReducer",
  initialState: init,
  reducers: {
    addUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    emptyUserInfo: (state) => {
      state.userInfo = init.userInfo;
    },
  },
});

export const { addUserInfo, emptyUserInfo } = userInfoReducer.actions;
export default userInfoReducer.reducer;
