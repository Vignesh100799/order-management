import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { isAuthenticated } from './authService';

const ProtectedRoute = ({ element, ...rest }) => {
    const navigate = useNavigate();
  
    if (isAuthenticated()) {
      return <Route {...rest} element={element} />;
    } else {
      navigate('/login');
      return null;
    }
  };
  
  export default ProtectedRoute;