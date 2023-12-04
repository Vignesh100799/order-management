import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "order_list",
  initialState: {
    orders: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setSideBarToggle: (state, action) => {
      state.sideBarToggle = action.payload;
    },
    setOrder: (state, action) => {
      state.orders = action.payload; // Assuming action.payload is an array
    },
    
    editOrder: (state, action) => {
      const id = action.payload;
      state.orders = state.orders.filter((details) => details.id !== id);
    },
    deleteOrder: (state, action) => {
      const id = action.payload;
      state.orders = state.orders.filter((details) => details.id !== id);
    },
  },
  sideBarToggle: true,
});
export const {
  setSideBarToggle,
  sideBarToggle,
  setOrder,
  editOrder,
  deleteOrder,
} = userSlice.actions;

export default userSlice.reducer;
