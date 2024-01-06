// Fetching Data

import { createSlice } from "@reduxjs/toolkit"; //same is cartSlice

export const STATUSES = Object.freeze({
  SUCCESS: "SUCCESS",
  ERROR: "error",
  Loading: "LOADING",
});

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    // same as in the cartSlice
    data: [],
    //it is used to show wheather api is working or not
    status: STATUSES.SUCCESS, //Success means data is properly loading
  },
  // reducer same as in cartSlice
  reducers: {
    setProducts(state, action) {
      // whatever action would be it will be equal  to the state.data
      state.data = action.payload;
    },
    setStatus(state, action) {
      // whatever action would be it will be equal  to the state.status
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = ProductSlice.actions;
export default ProductSlice.reducer;
