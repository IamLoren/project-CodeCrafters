export const selectIsLogged = state => state.authSlice.isLogged;
export const modalIsOpen = state => state.transactionsSlice.modalIsOpen;
export const selectUserName = state => state.authSlice.user.name;