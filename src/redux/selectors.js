export const selectIsLogged = state => state.authSlice.isLogged;
export const modalIsOpen = state => state.transactionsSlice.modalIsOpen;
export const selectTransactionsList = state => state.transactionsSlice.transactionslist;
export const selectBalance = state => state.transactionsSlice.balance;
export const currencySelector = state => state.currencySlice.data;
export const selectUserName = state => state.authSlice.user.name;

