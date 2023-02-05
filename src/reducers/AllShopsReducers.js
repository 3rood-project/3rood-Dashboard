import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  allShops: [],
};
const config = {
  method: "get",
  url: "http://127.0.0.1:8000/api/allShopsControl",
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
    Authorization: "Bearer 2|i2GfvbsLjqnHHJXtZNftgQZFl5fxz5beWP8iBpBG",
  },
};
export const fetchAllShopsReducers = createAsyncThunk(
  "allShops/fetchAllShopsReducers",
  async () => {
    const response = await axios.request(config);
    console.log(response.data);

    return response.data;
  }
);
export const allShopsReducer = createSlice({
  name: "allShops",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllShopsReducers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAllShopsReducers.fulfilled]: (state, action) => {
      state.allShops = action.payload.data;
      state.isLoading = false;
    },
  },
});
// export const {} = AllShopsReducer.actions;

export default allShopsReducer.reducer;
