import { createSlice } from '@reduxjs/toolkit';
import { currencyThunk } from './operations.js';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  LSTime: '',
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},

  extraReducers: builder =>
    builder
      .addCase(currencyThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(currencyThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(currencyThunk.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      }),
});

export const currencyReducer = currencySlice.reducer;
