import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from '../routesConfig/PrivateRoute.jsx';
import PublicRoute from '../routesConfig/PublicRoute';
import MainLayout from './MainLayout/MainLayout.jsx';
import RegisterForm from 'pages/RegisterPage.jsx';
import LoginForm from 'pages/LoginPage.jsx';
import Home from './Home/Home.jsx';
import Statistics from './Statistics/Statistics.jsx';
import { modalIsOpen } from '../redux/selectors.js';
import TransactionsModal from './TransactionsModal/TransactionsModal.jsx';

export const App = () => {
  return (
    <Routes>
    <Route path='/' element={<PrivateRoute><MainLayout /></PrivateRoute>}>
    <Route index element={<Home />} />
    <Route path='statistics' element={<Statistics />} />
    <Route path='home' element={<Home />} />
    {modalIsOpen && <Route path='home' element={<TransactionsModal />} />}
    </Route>
    <Route path='/register' element={<PublicRoute><RegisterForm /></PublicRoute>}/>
    <Route path='/login' element={<PublicRoute><LoginForm /></PublicRoute>}/>
    <Route path="*" element={<Navigate to="/" />} /> 
  </Routes>
  );
};
