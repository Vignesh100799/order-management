import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchOrders = createAsyncThunk('order_list/fetchOrders', async () => {
    try {
        const response = await axios.get("https://65630c3eee04015769a6bb77.mockapi.io/orders");
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const userSlice = createSlice({
    name: "order_list",
    initialState: {
        orders: [],
        status: 'idle',
        error: null,
        sideBarToggle:true
    },
    reducers: {
        setUsers: (state, action) => {
            state.orders = action.payload;
            state.loading = false;
            state.error = null;
            return state;
        },
        deleteUser: (state, action) => {
            const id = action.payload;
            state.orders = state.orders.filter((user) => user.id !== id);
            state.loading = false;
            state.error = null;
            return state;
        },
        editUser: (state, action) => {
            const id = action.payload;
            state.orders = state.orders.filter((user) => user.id !== id);
            state.loading = false;
            state.error = null;
            return state;
        },
        setSideBarToggle:(state,action)=>{
            state.sideBarToggle = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orders = action.payload;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});
export const {
    setUsers,
    deleteUser,
    editUser,

  } = userSlice.actions;
  

export default userSlice.reducer;