import { createSlice } from "@reduxjs/toolkit"; //it is a method in redux toolkit

//createSlice method is an object
const CartSlice = createSlice({
  name: "Cart", //first we have to give name
  initialState: [], // then give initialState where array always be empty

  // reducers is key object pair that includes two functions
  // 1. add function and remove function
  reducers: {
    //add  has two parameters state and action
    // state is connected to initialState
    // action is connected  to user action (eg onClick etc)
    // there are the types of payload but we are not using any of them now
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      //filter method will filter items from state this will be only work when something is present in state because filter method is used in state only
      state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
