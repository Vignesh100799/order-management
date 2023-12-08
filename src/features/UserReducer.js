import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../config/config";

export const fetchPricing = createAsyncThunk('userData/fetchPricing', async () => {
    try {
        const response = await axios.get(`${config.packageApi}/Package`)
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;  // Make sure to rethrow the error after logging it
    }
})

export const userSlice = createSlice({
    name: 'users_info', // Add a name property here
    initialState: {
        pricing: [],
        loading: false
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPricing.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchPricing.fulfilled, (state, action) => {
            state.loading = false;
            state.pricing = action.payload;
        })
        .addCase(fetchPricing.rejected, (state, action) => {
            state.loading = false;
            state.pricing = action.error.message;
        });
    }
});

export default userSlice.reducer;
