import { configureStore } from "@reduxjs/toolkit";
import reducerfunction from "../reducers/Createslice"
const Store=configureStore({
    reducer:{
        cart:reducerfunction
    }
});

export default Store;