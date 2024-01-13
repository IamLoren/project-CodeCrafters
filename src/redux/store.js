import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { transactionsReducer } from './transactions/transactionsSlice.js';
import { authReducer } from './auth/authSlice.js';
import { currencyReducer } from './currency/currencySlice.js';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};

const currencyPersistConfig = {
  key: 'currencyLS',
  storage,
  whitelist: ['data'],
};

const transactionsPersistConfig = {
  key: 'transactionsLS',
  storage,
  whitelist: ['modal', 'categories', 'transactionslist', 'balance'],
};

const rootReducer = combineReducers({
  transactionsSlice: persistReducer(transactionsPersistConfig, transactionsReducer),
  authSlice: persistReducer(authPersistConfig, authReducer),
  currencySlice: persistReducer(currencyPersistConfig, currencyReducer),
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    version: 1,
    storage,
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});
export let persistor = persistStore(store);
