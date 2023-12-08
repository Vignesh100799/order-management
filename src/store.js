import { configureStore } from "@reduxjs/toolkit";
import { orderSlice } from "./features/OrderReducer";
import { userSlice } from "./features/UserReducer";

export const store = configureStore({
    reducer:{
        order_list: orderSlice.reducer,
        users_info: userSlice.reducer
    }
})