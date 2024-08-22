import React, { useState, useEffect } from 'react';
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
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('accessToken'));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem('accessToken'));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login setIsAuthenticated={setIsAuthenticated} />} 
        />
        <Route 
          path="/register" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register />} 
        />
        <Route 
          path="/forgot-password" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <ForgotPassword />} 
        />
        <Route 
          path="/reset-password" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <ResetPassword />} 
        />
        <Route 
          path="/verify-email" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <VerifyEmail />} 
        />
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/dashboard/ExtensionManagement" 
          element={isAuthenticated ? <ExtensionManagement /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/dashboard/Users" 
          element={isAuthenticated ? <Users /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/dashboard/Phones" 
          element={isAuthenticated ? <Phones /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/dashboard/Groups" 
          element={isAuthenticated ? <Groups /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/dashboard/profile" 
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
