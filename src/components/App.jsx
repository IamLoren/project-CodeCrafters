import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../routesConfig/PrivateRoute.jsx';
import PublicRoute from '../routesConfig/PublicRoute';
import RegisterForm from 'pages/RegisterPage.jsx';
import LoginForm from 'pages/LoginPage.jsx';
import HomePage from 'pages/HomePage.jsx';
import StatisticsPage from 'pages/StatisticsPage.jsx';
import CurrencyPage from 'pages/CurrencyPage.jsx';
import MediaQuery from 'react-responsive';
import NotFound from 'pages/NotFound.jsx';

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
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
            <MediaQuery maxWidth={425}>
              <CurrencyPage />
            </MediaQuery>
            <MediaQuery minWidth={426}>
              <NotFound />
            </MediaQuery>
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
