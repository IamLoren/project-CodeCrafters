import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './operations';
import { toast } from 'react-toastify';
import {
  addTransactionThunk,
  deleteTransactionThunk,
  editTransactionThunk,
} from '../../redux/transactions/operations.js';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: '',
      name: '',
    },
    token: '',
    isLogged: false,
    isLoading: false,
    isRefresh: false,
    isError: null,
    balance: 0,
  },
  reducers: {
    changeBalance: (state, { payload }) => {
      state.user.balance = state.user.balance + payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogged = true;
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        toast.error('Error! User exist!');
        state.isLogged = false;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        toast.error('Error! Something went wrong!');
        state.isLogged = false;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogged = true;
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.user = {
          email: '',
          name: '',
        };
        state.token = '';
        state.isLogged = false;
        state.isLoading = false;
      })
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        console.log('payload', { payload });
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.balance = payload.balance;
        state.isLogged = true;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        toast.error('You need to logIn!');
        state.isLogged = false;
      })
      .addCase(addTransactionThunk.fulfilled, (state, { payload }) => {
        state.balance = payload.balanceAfter;
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, { payload }) => {
        state.balance = payload.balanceAfter;
      })
      .addCase(editTransactionThunk.fulfilled, (state, { payload }) => {
        state.balance = payload.balanceAfter;
      })
      .addMatcher(
        isAnyOf(loginThunk.pending, logoutThunk.pending, registerThunk.pending),
        state => {
          state.isLoading = true;
          state.isError = null;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
export const { changeBalance } = authSlice.actions;
