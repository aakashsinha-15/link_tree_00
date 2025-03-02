import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function AuthContext() {
    const token = localStorage.getItem('accessToken');

   return token?<Outlet/>:< Navigate to='/login' />
}

export default AuthContext