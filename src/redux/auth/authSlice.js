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
  editTransactionThunk,
} from '../../redux/transactions/operations.js';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: '',
      name: '',
      balance: 0,
    },
    token: '',
    isLogged: false,
    isLoading: false,
    isRefresh: false,
    isError: null,
  },
  reducers: {
    changeBalanceValue: (state, { payload }) => {
      state.user.balance = state.user.balance - payload;
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
        state.isLoading = false;
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.user = {
          email: '',
          name: '',
          balance: 0,
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
        state.user.balance = payload.balance;
        state.isLogged = true;
        state.isLoading = false;
      })
      .addCase(refreshThunk.pending, state => {
        state.isLogged = true;
        state.isLoading = true;
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        toast.error('You need to logIn!');
        state.isLogged = false;
      })
      .addCase(addTransactionThunk.fulfilled, (state, { payload }) => {
        state.user.balance = payload.balanceAfter;
      })
      .addCase(editTransactionThunk.fulfilled, (state, { payload }) => {
        state.user.balance = payload.balanceAfter;
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
export const { changeBalanceValue } = authSlice.actions;
