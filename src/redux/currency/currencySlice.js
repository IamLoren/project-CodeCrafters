// [{"currencyCodeA":840,"currencyCodeB":980,"date":1704837673,"rateBuy":38.15,"rateSell":38.5996},
// {"currencyCodeA":978,"currencyCodeB":980,"date":1704879373,"rateBuy":41.7,"rateSell":42.2994}]

import { createSlice } from '@reduxjs/toolkit';
import { currencyThunk } from './operations.js';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  // currentTime: new Data(),
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
