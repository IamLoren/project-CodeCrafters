import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from "./operations";
import { toast } from "react-toastify";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            email: '',
            name: '',
        },
        token:'',
        isLogged: true,
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(registerThunk.fulfilled, (state, {payload}) => {
            state.user = payload.user
            state.token = payload.token
            state.isLogged = true
        })
        .addCase(registerThunk.rejected, (state, {payload}) => {
           toast.error('Error! User exist!')
            state.isLogged = false
        })
        .addCase(loginThunk.fulfilled, (state, {payload}) => {
            state.user = payload.user
            state.token = payload.token
            state.isLogged = true
        })
        .addCase(logoutThunk.fulfilled, (state) => {
            state.user = {
                email: '',
                name: '',
            }
            state.token = ''
            state.isLogged = false
        })
        .addCase(refreshThunk.fulfilled, (state, {payload}) => {
            console.log('payload', {payload})
            state.user.name = payload.name
            state.user.email = payload.email
            state.isLogged = true
        })
    }
})

export const authReducer = authSlice.reducer