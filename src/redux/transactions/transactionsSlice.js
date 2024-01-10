import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
import { fetchContactsThunk } from "./operations";

export const transactionsSlice = createSlice({
    name: 'transactionsSlice',
    initialState: {
      categories: [],
      transactionslist: [],
      balance: 0,
      modalIsOpen: true,
    },
    reducers: {
        
    },
    extraReducers: builder => {
        builder.addCase(fetchContactsThunk.fulfilled, (state, {payload}) => {
            state.contacts.items = payload;
            state.contacts.isLoading = false;
          })
    }
})

export const transactionsReducer = transactionsSlice.reducer

