import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  allMessages: [],
};
const config = {
  method: "get",
  url: "http://127.0.0.1:8000/api/allMessages",
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
    Authorization: "Bearer 2|i2GfvbsLjqnHHJXtZNftgQZFl5fxz5beWP8iBpBG",
  },
};
export const fetchMessageReducers = createAsyncThunk(
  "messages/fetchMessageReducers",
  async () => {
    const response = await axios.request(config);
    console.log(response.data);

    return response.data;
  }
);
export const allMessagesReducers = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMessageReducers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMessageReducers.fulfilled]: (state, action) => {
      state.allMessages = action.payload.data;
      state.isLoading = false;
    },
  },
});
// export const {} = AllShopsReducer.actions;

export default allMessagesReducers.reducer;
