import { createSlice } from "@reduxjs/toolkit";


export const wishlistSlice =createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addWishlistItem:(state, action)=>{
            state.push(action.payload)
        },
        removewishlistitem:(state,action)=>{
          return  state.filter((item)=> item.id !=action.payload)
        }
    }

})

export const {addWishlistItem,removewishlistitem}=wishlistSlice.actions

export default wishlistSlice.reducer
