import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from '../routesConfig/PrivateRoute.jsx';
import PublicRoute from '../routesConfig/PublicRoute';
import RegisterForm from 'pages/RegisterPage.jsx';
import LoginForm from 'pages/LoginPage.jsx';
import HomePage from 'pages/HomePage.jsx';
import StatisticsPage from 'pages/StatisticsPage.jsx';
import CurrencyPage from 'pages/CurrencyPage.jsx';

export const App = () => {
  return (
    <Routes>
      {/* <Route index element={<HomePage />} /> */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />

      <Route
        path="/statistics"
        element={
          <PrivateRoute>
            <StatisticsPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/currency"
        element={
          <PrivateRoute>
            <CurrencyPage />
          </PrivateRoute>
        }
      />

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
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
