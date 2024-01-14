export const selectIsLogged = state => state.authSlice.isLogged;
export const modalIsOpen = state => state.transactionsSlice.modal.modalIsOpen;
export const modalIsEdit = state => state.transactionsSlice.modal.modalEditForm;
export const modalIsAdd = state => state.transactionsSlice.modal.modalAddForm;
export const toggleState = state => state.transactionsSlice.modal.toggleState;
export const categories = state => state.transactionsSlice.categories;
export const selectTransactionsList = state =>
  state.transactionsSlice.transactionslist;
export const selectBalance = state => state.authSlice.balance;
export const currencySelector = state => state.currencySlice.data;
export const loadingCurrencySelector = state => state.currencySlice.isLoading;
export const selectUserName = state => state.authSlice.user.username;
export const IDfromSelect = state => state.transactionsSlice.modal.select;
export const transactionForEdit = state =>
  state.transactionsSlice.modal.transactionForEdit;
export const transactionStatistic = state =>
  state.transactionsSlice.transactionSummary;
