import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, clearToken, setToken } from "../../configAxios/configAxios.js";

export const registerThunk = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
    try {
        const {data} = await api.post('users/signup', credentials)
        setToken(data.token)
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const loginThunk = createAsyncThunk('auth/login', async (credentials, thunkApi) => {
    try {
        const {data} = await api.post('users/login', credentials)
        setToken(data.token)
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const logoutThunk = createAsyncThunk('auth/logout', async (credentials, thunkApi) => {
    try {
       await api.post('users/logout', credentials)
       clearToken()
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const refreshThunk = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
     const savedToken = thunkApi.getState().authSlice.token;
       if (savedToken) {
        setToken(savedToken)
       } else {
        return thunkApi.rejectWithValue('Token is not exist!')
       }
       
       try {
      const {data} = await api.get('users/current')
      return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})