import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  allProducts: [],
};
const config = {
  method: "get",
  url: "http://127.0.0.1:8000/api/allProducts",
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
    Authorization: "Bearer 124|eyDiT6RiLYGl7CwilBT5vxYGumBaBN1lQgLkG6VX",
  },
};
export const fetchProductsReducers = createAsyncThunk(
  "products/fetchProductsReducers",
  async () => {
    const response = await axios.request(config);
    console.log(response.data);

    return response.data;
  }
);
export const ProductsReducers = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProductsReducers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProductsReducers.fulfilled]: (state, action) => {
      state.allProducts = action.payload.data;
      state.isLoading = false;
    },
  },
});
// export const {} = AllShopsReducer.actions;

export default ProductsReducers.reducer;
