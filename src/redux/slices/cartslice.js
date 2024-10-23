import { createSlice } from "@reduxjs/toolkit";



export const cartslice = createSlice({
   name:'cart',
   initialState:[],
   reducers:{
    addItemtoCart:(state,action)=>{
        state.push(action.payload)
    },
    removeCartItem:(state , action)=>{
        return state.filter((item)=>item.id != action.payload)
    },
    emptyCart:(state)=>{
        return state=[]
    }
   }
})

export default cartslice.reducer
export const {addItemtoCart , removeCartItem , emptyCart} = cartslice.actions
