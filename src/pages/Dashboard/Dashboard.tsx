// src/pages/Dashboard/Dashboard.tsx
import React from 'react';
import Sidebar from '../../components/ui/SideBar/SidebarComponent';
import Topbar from '../../components/ui/Topbar/TopbarComponent';
import DashboardComponent from '../../components/ui/Dashboard/DashboardComponent';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-4">
          <DashboardComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
