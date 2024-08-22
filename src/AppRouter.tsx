import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Dashboard/Profile';
import Dashboard from './pages/Dashboard/Dashboard';
import ExtensionManagement from './pages/Dashboard/ExtensionManagement';
import Users from './pages/Dashboard/Users';
import Phones from './pages/Dashboard/Phones';
import Groups from './pages/Dashboard/Groups';
import ResetPassword from './pages/Login/ResetPassword';
import ForgotPassword from './pages/Login/ForgotPassword';
import VerifyEmail from './pages/Login/VerifyEmail';
import NotFound from './pages/Notfound/404';

function AppRouter() {
  const accessToken = localStorage.getItem('accessToken');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={accessToken ? "/dashboard" : "/login"} />} />
        <Route 
          path="/login" 
          element={accessToken ? <Navigate to="/dashboard" /> : <Login />} 
        />
        <Route 
          path="/register" 
          element={accessToken ? <Navigate to="/dashboard" /> : <Register />} 
        />
        <Route 
          path="/forgot-password" 
          element={accessToken ? <Navigate to="/dashboard" /> : <ForgotPassword />} 
        />
        <Route 
          path="/reset-password" 
          element={accessToken ? <Navigate to="/dashboard" /> : <ResetPassword />} 
        />
        <Route 
          path="/verify-email" 
          element={accessToken ? <Navigate to="/dashboard" /> : <VerifyEmail />} 
        />
        <Route 
          path="/dashboard" 
          element={accessToken ? <Dashboard /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/dashboard/ExtensionManagement" 
          element={accessToken ? <ExtensionManagement /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/dashboard/Users" 
          element={accessToken ? <Users /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/dashboard/Phones" 
          element={accessToken ? <Phones /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/dashboard/Groups" 
          element={accessToken ? <Groups /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/dashboard/profile" 
          element={accessToken ? <Profile /> : <Navigate to="/login" />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
