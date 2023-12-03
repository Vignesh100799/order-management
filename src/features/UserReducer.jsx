import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchOrders = createAsyncThunk('order_list/fetchOrders', async () => {
    try {
        const response = await axios.get("https://65630c3eee04015769a6bb77.mockapi.io/orders");
        return response.data;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
});
export const fetchOrderDetails = createAsyncThunk('order_list/fetchOrderDetails', async (orderId) => {
    try {
        const response = await axios.get(`https://65630c3eee04015769a6bb77.mockapi.io/orders/${orderId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching order details:', error);
        throw error;
    }
});

export const deleteOrder = createAsyncThunk('order_list/deleteOrder', async (orderId) => {
    try {
        await axios.delete(`https://65630c3eee04015769a6bb77.mockapi.io/orders/${orderId}`);
        return orderId;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
});
export const createOrder = createAsyncThunk('order_list/createOrder', async (newOrder) => {
    try {
        const response = await axios.post("https://65630c3eee04015769a6bb77.mockapi.io/orders", newOrder);
        return response.data;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
});
export const updateOrder = createAsyncThunk('order_list/updateOrder', async (updatedOrder) => {
    try {
        const response = await axios.put(`https://65630c3eee04015769a6bb77.mockapi.io/orders/${updatedOrder.id}`, updatedOrder);
        return response.data;
    } catch (error) {
        console.error('Error updating order:', error);
        throw error;
    }
});

export const userSlice = createSlice({
    name: "order_list",
    initialState: {
        orders: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        setSideBarToggle:(state,action)=>{
            state.sideBarToggle = action.payload
        },
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
            })
            // In your reducer
            .addCase(deleteOrder.fulfilled, (state, action) => {
                const deletedOrderId = action.payload;
                state.orders = state.orders.filter((order) => order.id !== deletedOrderId);
            })

            .addCase(createOrder.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orders.push(action.payload);
            })
            .addCase(updateOrder.fulfilled, (state, action) => {
                const updatedOrder = action.payload;
                const index = state.orders.findIndex((order) => order.id === updatedOrder.id);
                if (index !== -1) {
                    state.orders[index] = updatedOrder;
                }
            });
    },
    sideBarToggle: true
});
export const {
    setSideBarToggle,
    sideBarToggle
} = userSlice.actions;


export default userSlice.reducer;