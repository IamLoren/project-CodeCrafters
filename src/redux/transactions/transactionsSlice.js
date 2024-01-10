import { createSlice } from '@reduxjs/toolkit';
// import { toast } from "react-toastify";
import { fetchAllTransactionsThunk } from './operations';

export const transactionsSlice = createSlice({
  name: 'transactionsSlice',
  initialState: {
    categories: [],
    transactionslist: [],
    balance: 0, // записати з поля data.balanceAfter останнього обєкта із [transactionslist]
    modalIsOpen: true,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchAllTransactionsThunk.fulfilled,
      (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.isLoading = false;
      }
    );
  },
});

export const transactionsReducer = transactionsSlice.reducer;
