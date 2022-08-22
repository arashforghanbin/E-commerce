import axios, { AxiosResponse } from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const URL = "http://localhost:3004/usersList";

interface UserObject {
  id: number;
  userName: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

interface Users {
  usersList: UserObject[];
  usersStatus: "idle" | "pending" | "fulfilled" | "rejected";
}

const init: any = {
  usersList: [],
  usersStatus: "idle",
};

export const fetchUsers: any = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const users: AxiosResponse = await axios.get<UserObject[]>(URL);
    return users.data;
  }
);

const addUserReducer = createSlice({
  name: "fiterReducer",
  initialState: init,
  reducers: {
    add: (state, action) => {
      return state.userList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.usersStatus = "pending";
      })
      .addCase(fetchUsers.fulfilled, (state) => {
        state.usersStatus = "fulfilled";
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.usersStatus = "rejected";
      });
  },
});

export const { add } = addUserReducer.actions;
export default addUserReducer.reducer;
