import { createSlice } from "@reduxjs/toolkit"

const cartSlice =createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{ state.items.push(action.payload)},
        removeItem: (state, action) => {
            const itemIndex = action.payload; // Get the index from the action payload
            state.items.splice(itemIndex, 1); // Remove the item at the specified index
          },
        clearCart: (state)=>{state.items=[];},
    },
});  
 
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;