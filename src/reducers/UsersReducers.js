import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  users: [],
};
const config = {
  method: "get",
  url: "http://127.0.0.1:8000/api/users",
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
    Authorization: "Bearer 2|i2GfvbsLjqnHHJXtZNftgQZFl5fxz5beWP8iBpBG",
  },
};
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.request(config);
  return response.data;
});

export const UsersReducer = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload.data.users;
      state.isLoading = false;
    },
  },
});
// export const {} = AllShopsReducer.actions;

export default UsersReducer.reducer;
