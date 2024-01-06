import { configureStore } from "@reduxjs/toolkit"; //importing configStore function from reduxtoolkit

import cartReducer from "./Cartslice"; //importing cartReducer from file
import ProductSlice from "./ProductSlice";

// store is like storage
//whenever cart will been called then cartReducer perform the function
const store = configureStore({
  // multiples states
  reducer: { cart: cartReducer, product: ProductSlice },
});

export default store;
