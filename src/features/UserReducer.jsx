import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "order_list",
    initialState: {
        orders: [],
        loading: false,
    },
    reducers: {
        setOrder: (state, action) => {
            state.orders = action.payload;
            state.loading = false;
            return state
        },
        createOder:(state,action) =>{
            state.orders = [...state.orders,action.payload]
            state.loading = false;
            return state
        },

        editOrder: (state, action) => {
            const id = action.payload;
            state.orders = state.orders.filter((details) => details.id !== id);
        },
        deleteOrder: (state, action) => {
            const id = action.payload;
            state.orders = state.orders.filter((details) => details.id !== id);
        },
        setSideBarToggle: (state, action) => {
            state.sideBarToggle = action.payload;
        },
        setLoading: (state) => {
            state.loading = true;
        },
    },
    sideBarToggle: true,
});
export const {
    setSideBarToggle,
    sideBarToggle,
    setOrder,
    createOder,
    editOrder,
    deleteOrder,
    setLoading
} = userSlice.actions;

export default userSlice.reducer;
