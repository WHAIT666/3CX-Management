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
import NoAccessPage from "./pages/NoAccessPage"; // New NoAccessPage
import { useAuthStore } from "../src/Store/AuthStore"; // Zustand store for authentication state

function AppRouter() {
  const { isAuthenticated, isVerified, checkAuth, user } = useAuthStore();
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

  const isAdmin = user?.role === "Admin"; // Check if the user is an admin

  // Admin route protection
  const AdminRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />; // Redirect to login if not authenticated
    }

    if (!isVerified) {
      return <Navigate to="/verify-email" />; // Redirect to email verification if not verified
    }

    if (!isAdmin) {
      return <Navigate to="/no-access" />; // Redirect to "no access" page if not an admin
    }

    return children;
  };

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

        {/* Admin Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/profile"
          element={isAuthenticated && isVerified ? <Profile /> : <Navigate to={isAuthenticated ? "/verify-email" : "/login"} />}
        />
        <Route
          path="/dashboard/ExtensionManagement"
          element={
            <AdminRoute>
              <ExtensionManagement />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/users"
          element={
            <AdminRoute>
              <Users />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/phones"
          element={
            <AdminRoute>
              <Phones />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard/groups"
          element={
            <AdminRoute>
              <Groups />
            </AdminRoute>
          }
        />

        {/* No access route for non-admins */}
        <Route path="/no-access" element={<NoAccessPage />} />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
