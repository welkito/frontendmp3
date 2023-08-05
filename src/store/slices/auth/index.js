import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { login, keepLogin } from "./slices";

     const INITIAL_STATE = {
        loading : false,
        status : "",
        role : "",
        id : "",
        username : "",
        email : "",
        image: null,
    }

// @create slice
const authSlice = createSlice({
    name : "auth",
    initialState : INITIAL_STATE,
    extraReducers : builder =>{
        builder.addCase(login.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.isVerified = action.payload?.isVerified
            state.status = action.payload?.status
            state.role = action.payload?.role
            state.id = action.payload?.id
            state.username = action.payload?.username
            state.email = action.payload?.email
            state.image = action.payload?.image
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false
        })
        builder.addCase(keepLogin.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(keepLogin.fulfilled, (state, action) => {
            state.loading = false
            state.isVerified = action.payload?.isVerified
            state.status = action.payload?.status
            state.role = action.payload?.role
            state.id = action.payload?.id
            state.username = action.payload?.username
            state.email = action.payload?.email
            state.image = action.payload?.image        
        })
        builder.addCase(keepLogin.rejected, (state, action) => {
            state.loading = false
        })
       
    }
})

// export reducer
export default authSlice.reducer

