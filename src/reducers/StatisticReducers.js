import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  statistics: [],
};
const config = {
  method: "get",
  url: "http://127.0.0.1:8000/api/statistics",
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
    Authorization: "Bearer 2|i2GfvbsLjqnHHJXtZNftgQZFl5fxz5beWP8iBpBG",
  },
};
export const fetchStatistics = createAsyncThunk(
  "statistics/fetchStatistics",
  async () => {
    const response = await axios.request(config);

    return response.data;
  }
);
export const statisticsReducer = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchStatistics.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchStatistics.fulfilled]: (state, action) => {
      state.statistics = action.payload.data;
      state.isLoading = false;
    },
  },
});
// export const {} = AllShopsReducer.actions;

export default statisticsReducer.reducer;
