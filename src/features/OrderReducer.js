import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: "order_list",
    initialState: {
        orders: [],
        loading: false,
        viewOrderInfo:{},
        userInfo:{}      
    },
    reducers: {
        setOrder: (state, action) => {
            return {
              ...state,
              orders: action.payload,
              loading: false,
            };
          },
        createOder:(state,action) =>{
            state.orders = [...state.orders,action.payload]
            state.loading = false;
            return state
        },
        viewOrder:(state,actions)=>{
            state.viewOrderInfo = actions.payload;
            state.loading = false;
            return state
        },

        editOrder: (state, action) => {
            const updatedOrder = action.payload;
            const index = state.orders.findIndex((order) => order.id === updatedOrder.id);
            if (index !== -1) {
              state.orders[index] = updatedOrder;
            }
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
    viewOrder,
    editOrder,
    deleteOrder,
    setLoading
} = orderSlice.actions;

export default orderSlice.reducer;