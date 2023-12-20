import { createSlice } from "@reduxjs/toolkit";

export const FunctionalSlice = createSlice({
  name: "funactionality",
  initialState: {
    sideBarToggle: true,
    profileEditMode: false,
    searchInput: "",
    greetings: "",
    activeStep: 0,
    showPassword: false,
    skipped: new Set()
  },
  reducers: {
    setProfileEditMode: (state, action) => {
      state.profileEditMode = action.payload;
      return state;
    },
    setSideBarToggle: (state, action) => {
      state.sideBarToggle = action.payload;
      return state;
    },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
      return state;
    },
    setGreetings: (state, action) => {
      state.greetings = action.payload;
      return state;
    },
    setShowPassword:(state,action)=>{
      state.showPassword = action.payload;
      return state;
    },
    setActiveStep:(state,action)=> {
      state.activeStep = action.payload
    },
    setSkipped:(state,action)=>{
      state.skipped = action.payload
    }
  },
});

export const {
  sideBarToggle,
  setSideBarToggle,
  setProfileEditMode,
  setSearchInput,
  setGreetings,
  setShowPassword,
  setActiveStep,
  setSkipped
} = FunctionalSlice.actions;
export default FunctionalSlice.reducer;
