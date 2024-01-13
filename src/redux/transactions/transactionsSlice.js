import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  addTransactionThunk,
  fetchAllTransactionsThunk,
  fetchTransactionsCategoriesThunk,
} from './operations';

import { fetchTransactionSummaryThunk } from './operations';

import { deleteTransactionThunk } from './operations';

export const transactionsSlice = createSlice({
  name: 'transactionsSlice',
  initialState: {
    modal: {
      modalIsOpen: false, //
      modalEditForm: false, //
      modalAddForm: false, //to false
      toggleState: true,
      select: '',
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
    changeSelectOption: (state, { payload }) => {
      state.modal.select = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllTransactionsThunk.fulfilled, (state, { payload }) => {
        state.transactionslist = payload;
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
      //deleteTransactionThunk

      .addCase(deleteTransactionThunk.fulfilled, (state, { payload }) => {
        state.transactionslist = state.transactionslist.filter(
          transaction => transaction.id !== payload
        );
        toast.success('Transaction deleted successfully!');
      })
      .addCase(deleteTransactionThunk.rejected, (state, action) => {
        toast.error(`Failed to delete transaction: ${action.payload}`);
      })
      //
      .addCase(addTransactionThunk.fulfilled, (state, { payload }) => {
        state.transactionslist.push(payload);
        toast.success('Your transaction was added succesfully!');
      })
      .addCase(
        fetchTransactionsCategoriesThunk.fulfilled,
        (state, { payload }) => {
          state.categories = payload;
        }
      );
  },
});

export const transactionsReducer = transactionsSlice.reducer;
export const {
  changeModalAddForm,
  changeModalEditForm,
  changeModalClose,
  changeToggleState,
  changeSelectOption,
} = transactionsSlice.actions;
