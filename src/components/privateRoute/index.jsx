import React from 'react'
import { Navigate } from "react-router-dom"
import { useAuth } from '../../context/authContext';





const PrivateRoute = ({ component }) => {
  const {logged} =useAuth()
    return logged ? component : <Navigate to="/" />;
  };

export default PrivateRoute