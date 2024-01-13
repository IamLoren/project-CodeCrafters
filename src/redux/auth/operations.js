import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, clearToken, setToken } from '../../configAxios/configAxios';
import { toast } from 'react-toastify';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post('/api/auth/sign-up', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post('/api/auth/sign-in', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await api.delete('/api/auth/sign-out');
      localStorage.removeItem("auth");
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    console.log(savedToken);
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkApi.rejectWithValue("Token doesn't exist");
    }

    try {
      const { data } = await api.get('/api/users/current');
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
