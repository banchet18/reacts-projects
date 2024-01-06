import { createSlice } from "@reduxjs/toolkit";

//createSlice method is an object
const CartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      state.filter((item) => item.id !== action.payload);
    },
  },
});

export default CartSlice;
