import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
    name: 'currencySlice',
    initialState: {
        currentDate: 0,
        storageDate: 0,
       currency: [],
    },
    reducers: {},
})

export const currencyReducer = currencySlice.reducer