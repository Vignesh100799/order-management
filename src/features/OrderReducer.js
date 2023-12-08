import { createSlice } from "@reduxjs/toolkit";

<<<<<<< HEAD:src/features/UserReducer.jsx
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
      return state;
    },
    createOder: (state, action) => {
      state.orders = [...state.orders, action.payload];
      state.loading = false;
      return state;
    },

    editOrder: (state, action) => {
      const updatedOrder = action.payload;
      const index = state.orders.findIndex(
        (order) => order.id === updatedOrder.id
      );
      if (index !== -1) {
        state.orders[index] = updatedOrder;
      }
=======
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
>>>>>>> 92c03fa2202bf226e9407e47af6b3a732b2651bc:src/features/OrderReducer.js
    },
    lookOrder: (state, action) => {
      state.orders = action.payload;
      state.loading = false;
      return state;
    },
    deleteOrder: (state, action) => {
      const id = action.payload;
      state.orders = state.orders.filter((details) => details.id !== id);
      return state;
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
<<<<<<< HEAD:src/features/UserReducer.jsx
  setSideBarToggle,
  sideBarToggle,
  setOrder,
  createOder,
  editOrder,
  deleteOrder,
  setLoading,
  lookOrder,
} = userSlice.actions;
=======
    setSideBarToggle,
    sideBarToggle,
    setOrder,
    createOder,
    viewOrder,
    editOrder,
    deleteOrder,
    setLoading
} = orderSlice.actions;
>>>>>>> 92c03fa2202bf226e9407e47af6b3a732b2651bc:src/features/OrderReducer.js

export default orderSlice.reducer;
