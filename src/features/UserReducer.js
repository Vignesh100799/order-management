import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "../config/config";

export const ftechPricing = createAsyncThunk('userData/ftechPricing', async () => {
    try {
        const response = await axios.get(`${config.packageApi}/Package`)
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;  // Make sure to rethrow the error after logging it
    }
})

export const userSlice = createSlice({
    name: 'users_info', 
    initialState: {
        user:{},
        pricing: [],
        loading: false
    },
    reducers:{
        setUser:(state,action) =>{
            state.user = action.payload
            return state
        }

    },
    extraReducers: (builder) => {
        builder
        .addCase(ftechPricing.pending, (state) => {
            state.loading = true;
        })
        .addCase(ftechPricing.fulfilled, (state, action) => {
            state.loading = false;
            state.pricing = action.payload;
        })
        .addCase(ftechPricing.rejected, (state, action) => {
            state.loading = false;
            state.pricing = action.error.message;
        });
    }
});

export const {setUser} = userSlice.actions
export default userSlice.reducer;
