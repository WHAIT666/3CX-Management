import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/Notfound/404';
import Users from './pages/Dashboard/Users';
import Chat from './pages/Dashboard/Chat';
import Conferences from './pages/Dashboard/Conferences';
import CallHistory from './pages/Dashboard/CallHistory';
import Panel from './pages/Dashboard/Panel';
import Contacts from './pages/Dashboard/Contacts';
import Office from './pages/Dashboard/Office';
import Dasboardtest from './pages/Dashboard/Dashboardtest';
import ForgotPassword from './pages/Login/ForgotPassword'; // Import ForgotPassword component

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/call_history" element={<CallHistory />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/office" element={<Office />} />
        <Route path="/dashboardtest" element={<Dasboardtest />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
