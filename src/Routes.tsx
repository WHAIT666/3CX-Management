import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/Notfound/404';
import Users from './pages/Dashboard/Users';
import ForgotPassword from './pages/Login/ForgotPassword'; // Import ForgotPassword component
import Phones from './pages/Dashboard/Phones';
import Groups from './pages/Dashboard/Groups';
import ExtensionManagement from './pages/Dashboard/ExtensionManagement';
import Register from './pages/Register/Register';

function PrivateRoute({ children }) {
  let navigate = useNavigate();
  let accessToken = localStorage.getItem('accessToken'); // replace this with your actual authentication logic

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return children;
}

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/dashboard/ExtensionManagement" element={<PrivateRoute><ExtensionManagement /></PrivateRoute>} />
        <Route path="/dashboard/Users" element={<PrivateRoute><Users /></PrivateRoute>} />
        <Route path="/dashboard/Phones" element={<PrivateRoute><Phones /></PrivateRoute>} />
        <Route path="/dashboard/Groups" element={<PrivateRoute><Groups /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default AppRouter;