import { createSlice } from '@reduxjs/toolkit';

// [{"currencyCodeA":840,"currencyCodeB":980,"date":1704837673,"rateBuy":38.15,"rateSell":38.5996},
// {"currencyCodeA":978,"currencyCodeB":980,"date":1704879373,"rateBuy":41.7,"rateSell":42.2994}]

const initialState = {
  currency: {
    usdRate: {
      buy: null,
      sell: null,
    },
    euroRate: {
      buy: null,
      sell: null,
    },
  },
  time: '',
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'currencySlice',
  initialState,
  //   initialState: {
  //     currentDate: 0,
  //     storageDate: 0,
  //     currency: [],
  //   },
  reducers: {},
});

export const currencyReducer = slice.reducer;
