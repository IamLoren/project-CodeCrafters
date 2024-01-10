import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {transactionsReducer} from './transactions/transactionsSlice.js';
import { authReducer } from "./auth/authSlice.js";
import { currencyReducer } from "./currency/currencySlice.js";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

  const persistConfig = {
    key: 'auth',
    version: 1,
    storage,
    whitelist: ['token', 'currentDate']
  }


const rootReducer = combineReducers({
    transactionsSlice: transactionsReducer,
    authSlice: authReducer,
    currencySlice: currencyReducer
})


 const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV !== 'production',
})
export let persistor = persistStore(store)