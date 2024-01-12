import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addTransactionThunk, fetchAllTransactionsThunk } from './operations';

import { fetchTransactionSummaryThunk } from './operations';

import { deleteTransactionThunk } from './operations';

export const transactionsSlice = createSlice({
  name: 'transactionsSlice',
  initialState: {
    modal: {
      modalIsOpen: false,
      modalEditForm: false,
      modalAddForm: false,
      toggleState: true,
    },
    categories: [],
    transactionslist: [],
    balance: 0, // записати з поля data.balanceAfter останнього обєкта із [transactionslist]
    isLoading: false,
    transactionSummary: [],
  },
  reducers: {
    changeModalClose: (state, { payload }) => {
      state.modal.modalIsOpen = payload;
      state.modal.modalAddForm = payload;
      state.modal.modalEditForm = payload;
    },
    changeModalAddForm: (state, { payload }) => {
      state.modal.modalIsOpen = payload;
      state.modal.modalAddForm = payload;
    },
    changeModalEditForm: (state, { payload }) => {
      state.modal.modalIsOpen = payload;
      state.modal.modalEditForm = payload;
    },
    changeToggleState: (state, { payload }) => {
      state.modal.toggleState = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllTransactionsThunk.fulfilled, (state, { payload }) => {
        state.transactionsList = payload;
        state.balance =
          payload.length > 0 ? payload[payload.length - 1].balanceAfter : 0;
        state.isLoading = false;
      })
      .addCase(fetchAllTransactionsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTransactionSummaryThunk.fulfilled, (state, { payload }) => {
        state.transactionslist = payload;
        state.isLoading = false;
      })
      .addCase(deleteTransactionThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const index = state.transactionsList.findIndex(
          item => item.id === payload
        );
        if (index !== -1) {
          state.transactionsList.splice(index, 1);
        }
      })
      .addCase(deleteTransactionThunk.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addTransactionThunk.fulfilled, (state, { payload }) => {
        state.transactionslist.push(payload);
        toast.success('Your transaction was added succesfully!');
      });
  },
});

export const transactionsReducer = transactionsSlice.reducer;
export const {
  changeModalAddForm,
  changeModalEditForm,
  changeModalClose,
  changeToggleState,
} = transactionsSlice.actions;
