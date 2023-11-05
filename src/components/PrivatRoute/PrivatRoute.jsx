import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthIsAuthenticated } from 'redux/authSelectors';

const PrivateRoute = ({ children, redirecTo = '/login' }) => {
  const authenticated = useSelector(selectAuthIsAuthenticated);

  return authenticated ? children : <Navigate to={redirecTo} replace />;
};

export default PrivateRoute;
