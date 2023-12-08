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
  setSideBarToggle,
  sideBarToggle,
  setOrder,
  createOder,
  editOrder,
  deleteOrder,
  setLoading,
  lookOrder,
} = userSlice.actions;

export default userSlice.reducer;
