import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from '../routesConfig/PrivateRoute.jsx';
import PublicRoute from '../routesConfig/PublicRoute';
import MainLayout from './MainLayout/MainLayout.jsx';
import RegisterForm from 'pages/RegisterPage.jsx';
import LoginForm from 'pages/LoginPage.jsx';
import Home from './Home/Home.jsx';
import Loader from './Loader/Loader.jsx';
import CurrencyPage from 'pages/CurrencyPage.jsx';
import { useMediaQuery } from 'react-responsive';
import NotFound from 'pages/NotFound.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from '../redux/auth/operations.js';
import Statistics from './Statistics/Statistics.jsx';
import {
  loadingAuthSelector,
  loadingTransactionsSelector,
} from '../redux/selectors.js';

export const App = () => {
  const loadingTransaction = useSelector(loadingTransactionsSelector);
  const loadingAuth = useSelector(loadingAuthSelector);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      {(loadingTransaction || loadingAuth) && <Loader />}
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="home" element={<Home />} />
        </Route>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterForm />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginForm />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/currency"
          element={
            <PrivateRoute>
              {isMobile ? <CurrencyPage /> : <Navigate to="/" />}
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
