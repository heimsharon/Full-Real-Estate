import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem('token'); // Retrieve the JWT token from localStorage

  if (!token) {
    // If no token is found, redirect to the login page
    return <Navigate to="/" replace />;
  }

  return <>{children}</>; // Render the protected content if authenticated
};

export default ProtectedRoute;