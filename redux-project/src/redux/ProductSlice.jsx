import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  SUCCESS: "SUCCESS",
  ERROR: "error",
  Loading: "LOADING",
});

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = ProductSlice.actions;
export default ProductSlice.reducer;
