import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const currencyThunk = createAsyncThunk(
  'currency',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://api.monobank.ua/bank/currency');
      if (response.data?.length) {
        const filteredArray = response.data.filter(
          item =>
            (item.currencyCodeA === 840 && item.currencyCodeB === 980) ||
            (item.currencyCodeA === 978 && item.currencyCodeB === 980)
        );
        const popularСurrencyArray = filteredArray.map(item => ({
          ...item,
          currencyType: item.currencyCodeA === 840 ? 'USD' : 'EUR',
        }));
        return popularСurrencyArray;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
