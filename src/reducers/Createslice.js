import { createSlice } from "@reduxjs/toolkit";

const createslice=createSlice({
    name:"cart",
    initialState:{
    cart:[]
    },
    reducers:{
        add_to_cart:(state,action)=>{
            const existingItem = state.cart.find(
                (item) => item.id === action.payload.id
              );
              if (existingItem) {
                state.cart = state.cart.map((item) =>
                  item.id === action.payload.id ? { ...item, qty:item.qty + 1 } : item
                );
              } else {
                state.cart.push(action.payload);
              }
              localStorage.setItem("carts", JSON.stringify(state.items));
        },
        remove_product:(state,action)=>{
            state.cart=state.cart.filter((data)=>data.id!== action.payload.id)
        },
        incrementQty: (state, action) => {
          state.cart = state.cart.map((item) =>
            item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
          );
        },
        decrementQty: (state, action) => {
          state.cart = state.cart.map((item) =>
            item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
          );
        },

    }
});

export const {add_to_cart,remove_product,incrementQty,decrementQty}=createslice.actions;

export default createslice.reducer;