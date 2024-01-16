import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../configAxios/configAxios';

export const fetchAllTransactionsThunk = createAsyncThunk(
  'fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await api.get('/api/transactions');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchTransactionsCategoriesThunk = createAsyncThunk(
  'fetchTransactionsCategories',
  async (_, thunkApi) => {
    try {
      const { data } = await api.get('/api/transaction-categories');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'deleteTransaction',
  async (id, thunkApi) => {
    try {
      await api.delete(`/api/transactions/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


export const addTransactionThunk = createAsyncThunk(
  'addTransaction',
  async (transaction, thunkApi) => {
    try {
      const { data } = await api.post('/api/transactions', transaction);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editTransactionThunk = createAsyncThunk(
  'editTransaction',
  async ({id, transaction}, thunkApi) => {
    try {
      const { data } = await api.patch(`/api/transactions/${id}`, transaction);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchTransactionSummaryThunk = createAsyncThunk(
  'fetchTransactionSummary',
  async (params, thunkApi) => {
    const options = {
      params,
    };
    try {
      const { data } = await api.get('/api/transactions-summary', options);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchTransSumThunk = createAsyncThunk(
  'fetchTransSummary',
  async (params, thunkApi) => {
    try {
      const { data } = await api.get('/api/transactions-summary', {
        params: {
          ...(params?.month !== undefined && { month: params.month }),
          ...(params?.year !== undefined && { year: params.year }),
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
