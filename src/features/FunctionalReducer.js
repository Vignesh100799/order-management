import { createSlice } from "@reduxjs/toolkit";


export const FunctionalSlice = createSlice({
    name:'funactionality',
    initialState:{
        sideBarToggle: true,
    },
    reducers :{
        setSideBarToggle: (state, action) => {
            state.sideBarToggle = action.payload;
          },
    }
})

export const {sideBarToggle,setSideBarToggle} = FunctionalSlice.actions
export default FunctionalSlice.reducer