import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { selectIsLogged } from '../redux/selectors.js'

const PrivateRoute = ({children}) => {
    const isLogedIn = useSelector(selectIsLogged);
    if (isLogedIn) {
        return (
    children
  )
    } else {
        return  <Navigate to='/login'/>
    }
  
}

export default PrivateRoute