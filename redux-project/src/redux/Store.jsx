import { configureStore } from "@reduxjs/toolkit"; //importing configStore function from reduxtoolkit

import cartReducer from "./Cartslice"; //importing cartReducer from file

// store is like storage
//whenever cart will been called then cartReducer perform the function
const store = configureStore({ reducer: { cart: cartReducer } });

export default store;
