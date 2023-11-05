import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthIsAuthenticated } from 'redux/authSelectors';

const RestrictedRoute = ({ children, redirecTo = '/contacts' }) => {
    const authenticated = useSelector(selectAuthIsAuthenticated);
  
    return authenticated ? <Navigate to={redirecTo} replace /> : children;       
  
}

export default RestrictedRoute