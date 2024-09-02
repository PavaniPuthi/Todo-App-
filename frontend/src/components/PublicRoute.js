// src/components/PublicRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element, restricted }) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;

  return isAuthenticated && restricted ? <Navigate to="/todos" /> : element;
};

export default PublicRoute;