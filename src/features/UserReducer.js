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

export const fetchFeedback = createAsyncThunk('userData/fetchFeedback',async()=>{
    try {
        const response = await axios.get('https://65615e6adcd355c08323c948.mockapi.io/users');
        return response.data
    } catch (error) {
        console.error(error);
    }
})
export const postFeedback = createAsyncThunk('userData/postFeedback',async(values)=>{
    try {
        const response = await axios.post('https://65615e6adcd355c08323c948.mockapi.io/users',values);
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
        })
        .addCase(fetchFeedback.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchFeedback.fulfilled, (state, action) => {
            state.loading = false;
            state.feedback = action.payload;
        })
        .addCase(fetchFeedback.rejected, (state, action) => {
            state.loading = false;
            state.feedback = action.error.message;
        })
        .addCase(postFeedback.pending, (state) => {
            state.loading = true;
        })
        .addCase(postFeedback.fulfilled, (state, action) => {
            state.feedback = [...state.feedback, action.payload];
            state.loading = false;
        })
        .addCase(postFeedback.rejected, (state, action) => {
            state.loading = false;
            state.feedback = action.error.message;
        })
    }
});

export const {setUser,setFeedback} = userSlice.actions
export default userSlice.reducer;
