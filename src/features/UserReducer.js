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

export const ftechFeedback = createAsyncThunk('userData/ftechFeedback',async()=>{
    try {
        const response = await axios.get('https://65615e6adcd355c08323c948.mockapi.io/users');
        return response.data
    } catch (error) {
        console.error(error);
    }
})

export const userSlice = createSlice({
    name: 'users_info', 
    initialState: {
        user:{},
        pricing: [],
        feedback:[],
        loading: false
    },
    reducers:{
        setUser:(state,action) =>{
            state.user = action.payload
            return state;
        },
        setFeedback:(state,action)=>{
            state.feedback = [...state.feedback,action.payload]
            return state;
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
        })
        .addCase(ftechFeedback.pending, (state) => {
            state.loading = true;
        })
        .addCase(ftechFeedback.fulfilled, (state, action) => {
            state.loading = false;
            state.feedback = action.payload;
        })
        .addCase(ftechFeedback.rejected, (state, action) => {
            state.loading = false;
            state.feedback = action.error.message;
        })
    }
});

export const {setUser,setFeedback} = userSlice.actions
export default userSlice.reducer;
