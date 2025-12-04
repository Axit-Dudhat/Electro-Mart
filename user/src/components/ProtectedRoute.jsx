// components/ProtectedRoute.js
import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem('token') // Replace with actual logic

  return isLoggedIn ? children : <Navigate to="./login" />
}

export default ProtectedRoute
