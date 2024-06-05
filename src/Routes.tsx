import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/Notfound/404';
import Users from './pages/Dashboard/Users';
import Phones from './pages/Dashboard/Phones';
import Groups from './pages/Dashboard/Groups';
import Office from './pages/Dashboard/Office';
import ForgotPassword from './pages/Login/ForgotPassword'; // Import ForgotPassword component

// Custom route component for protecting routes
function ProtectedRoute({ element, ...rest }) {
  const isLoggedIn = localStorage.getItem('sessionToken'); // Check if user is logged in
  return isLoggedIn ? element : <Navigate to="/login" />;
}

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} /> {/* Redirect to dashboard if root is accessed */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Protect dashboard and its nested routes */}
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />}>
          <Route path="users" element={<ProtectedRoute element={<Users />} />} />
          <Route path="phones" element={<ProtectedRoute element={<Phones />} />} />
          <Route path="groups" element={<ProtectedRoute element={<Groups />} />} />
        </Route>
        <Route path="/office" element={<ProtectedRoute element={<Office />} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
