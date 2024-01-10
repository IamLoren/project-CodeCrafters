import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { selectIsLogged } from '../redux/selectors.js'

const PublicRoute = ({children}) => {
    const isLoggedIn = useSelector(selectIsLogged);
    if (isLoggedIn) {
        return <Navigate to='/'/>
    }
  return (
    children
  )
}

export default PublicRoute