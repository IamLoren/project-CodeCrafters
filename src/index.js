import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import Global from './css/common.js';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/project-CodeCrafters">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Global />
      </PersistGate>
      <ToastContainer autoClose={1500} />
    </Provider>
  </BrowserRouter>
);
