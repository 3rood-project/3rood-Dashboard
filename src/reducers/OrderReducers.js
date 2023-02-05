import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  allOrders: [],
};
const config = {
  method: "get",
  url: "http://127.0.0.1:8000/api/allOrders",
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
    Authorization: "Bearer 2|i2GfvbsLjqnHHJXtZNftgQZFl5fxz5beWP8iBpBG",
  },
};
export const fetchOrdersReducers = createAsyncThunk(
  "orders/fetchOrdersReducers",
  async () => {
    const response = await axios.request(config);
    console.log(response.data);

    return response.data;
  }
);
export const OrderReducers = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOrdersReducers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchOrdersReducers.fulfilled]: (state, action) => {
      state.allOrders = action.payload.data;
      state.isLoading = false;
    },
  },
});
// export const {} = AllShopsReducer.actions;

export default OrderReducers.reducer;
