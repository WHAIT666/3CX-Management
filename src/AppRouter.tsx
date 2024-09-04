import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/LoginPage";
import Register from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Dashboard/Profile";
import ExtensionManagement from "./pages/Dashboard/ExtensionManagement";
import Users from "./pages/Dashboard/Users";
import Phones from "./pages/Dashboard/Phones";
import Groups from "./pages/Dashboard/Groups";
import ForgotPassword from "./pages/ForgotPasswordPage";
import ResetPassword from "./pages/ResetPasswordPage";
import VerifyEmail from "./pages/EmailVerificationPage";
import NotFound from "./pages/404";
import { useAuthStore } from "../src/Store/AuthStore"; // Zustand store for authentication state

function AppRouter() {
  const { isAuthenticated, isVerified, checkAuth } = useAuthStore();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const verifyAuth = async () => {
      await checkAuth(); // Call to ensure authentication status is checked
      setAuthChecked(true); // Set to true after the check is complete
    };

    verifyAuth();
  }, [checkAuth]);

  if (!authChecked) {
    return <div>Loading...</div>; // Display loading spinner while checking authentication
  }

  return (
    <Router>
      <Routes>
        {/* Redirect to dashboard or login based on authentication and verification status */}
        <Route path="/" element={<Navigate to={isAuthenticated && isVerified ? "/dashboard" : "/login"} />} />

        {/* Authentication-related routes */}
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
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
          path="/reset-password/:token"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <ResetPassword />}
        />
        <Route
          path="/verify-email"
          element={isAuthenticated && !isVerified ? <VerifyEmail /> : <Navigate to="/dashboard" />}
        />

        {/* Protected Dashboard routes */}
        <Route
          path="/dashboard"
          element={isAuthenticated && isVerified ? <Dashboard /> : <Navigate to={isAuthenticated ? "/verify-email" : "/login"} />}
        />
        <Route
          path="/dashboard/profile"
          element={isAuthenticated && isVerified ? <Profile /> : <Navigate to={isAuthenticated ? "/verify-email" : "/login"} />}
        />
        <Route
          path="/dashboard/ExtensionManagement"
          element={isAuthenticated && isVerified ? <ExtensionManagement /> : <Navigate to={isAuthenticated ? "/verify-email" : "/login"} />}
        />
        <Route
          path="/dashboard/users"
          element={isAuthenticated && isVerified ? <Users /> : <Navigate to={isAuthenticated ? "/verify-email" : "/login"} />}
        />
        <Route
          path="/dashboard/phones"
          element={isAuthenticated && isVerified ? <Phones /> : <Navigate to={isAuthenticated ? "/verify-email" : "/login"} />}
        />
        <Route
          path="/dashboard/groups"
          element={isAuthenticated && isVerified ? <Groups /> : <Navigate to={isAuthenticated ? "/verify-email" : "/login"} />}
        />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
