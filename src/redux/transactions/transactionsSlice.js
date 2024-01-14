import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  addTransactionThunk,
  editTransactionThunk,
  fetchAllTransactionsThunk,
  fetchTransactionsCategoriesThunk,
} from './operations';

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
      select: '',
      transactionForEdit: '',
    },
    categories: [],
    transactionslist: [],
    balance: 0, // записати з поля data.balanceAfter останнього обєкта із [transactionslist]
    isLoading: false,
    transactionSummary: {},
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
    changeEditTransaction: (state, { payload }) => {
      state.modal.transactionForEdit = payload;
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
        state.isLoading = false;
        toast.success('Your transaction was added successfully!');
      })
      .addCase(addTransactionThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTransactionThunk.rejected, (state, action) => {
        toast.error(`Failed to add transaction: ${action.payload}`);
      })
      .addCase(editTransactionThunk.fulfilled, (state, { payload }) => {
        state.transactionslist.push(payload);
        state.isLoading = false;
        toast.success('Your transaction was edited successfully');
      })
      .addCase(editTransactionThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(editTransactionThunk.rejected, (state, action) => {
        toast.error(`Failed to edit transaction: ${action.payload}`);
      })
      .addCase(
        fetchTransactionsCategoriesThunk.fulfilled,
        (state, { payload }) => {
          state.categories = payload;
          state.isLoading = false;
        }
      )
      .addCase(fetchTransactionsCategoriesThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTransactionsCategoriesThunk.rejected, (state, action) => {
        toast.error(`Failed to select this category: ${action.payload}`);
      });
  },
});

export const transactionsReducer = transactionsSlice.reducer;
export const {
  changeModalAddForm,
  changeModalEditForm,
  changeModalClose,
  changeToggleState,
  changeSelectOption,
  changeEditTransaction,
} = transactionsSlice.actions;
