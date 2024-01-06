import { configureStore } from "@reduxjs/toolkit"; //importing configStore function from reduxtoolkit
import cartReducer from "./Cartslice"; //importing cartReducer from file

// store is like storage
//whenever cart has been called then cartReducer do the function
const store = configureStore({ reducer: { cart: cartReducer } });

export default store;
