import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    return localStorage.getItem("isUserSignedIn") ? (
        children
      ) : (
        <Navigate to="/login" />
      );
    };

export default ProtectedRoute