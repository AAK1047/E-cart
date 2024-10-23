import { configureStore } from "@reduxjs/toolkit";
import  wishlistSlice  from "./slices/wishlistslice";
import cartslice  from "./slices/cartslice";



const store= configureStore({
    reducer:{
       wishlist  : wishlistSlice,
       cartItem : cartslice

    }
})

export default store