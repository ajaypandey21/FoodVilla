import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


const store = configureStore({
    reducer:{
        cart: cartSlice,
    },

});

export default store;


/*
/ Create store.js
    - configuring Slices (configureStore)

 Provide my store to the app
    -    <Provider store={store}></Provider>    

 Cartslice.js
    - (RTK) createSlice({
        name:"",
        initialState:
        reducers:{
            addItem:(slice,action)=>{ state=action.payload}
        }
    })  
     
    export const { addItem, removeItem, clearCart } = cartSlice.action
    export default cartSlice.reducer: 


*/ 