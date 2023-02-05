import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  shopsRequest: [],
};
const config = {
  method: "get",
  url: "http://127.0.0.1:8000/api/shopsRequest",
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
    Authorization: "Bearer 2|i2GfvbsLjqnHHJXtZNftgQZFl5fxz5beWP8iBpBG",
  },
};
export const fetchShopsRequestReducers = createAsyncThunk(
  "shopsRequest/fetchShopsRequestReducers",
  async () => {
    const response = await axios.request(config);
    console.log(response.data);

    return response.data;
  }
);
export const shopsRequestReducer = createSlice({
  name: "shopsRequest",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchShopsRequestReducers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchShopsRequestReducers.fulfilled]: (state, action) => {
      state.shopsRequest = action.payload.data;
      state.isLoading = false;
    },
  },
});
// export const {} = AllShopsReducer.actions;

export default shopsRequestReducer.reducer;
