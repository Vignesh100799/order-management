import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/UserReducer";

export const store = configureStore({
    reducer:{
        order_list: userSlice.reducer
    }
})