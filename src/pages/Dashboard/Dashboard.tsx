import React from 'react';
import Sidebar from '../../components/ui/SideBar/SidebarComponent';
import Topbar from '../../components/ui/Topbar/TopbarComponent';
import DashboardComponent from '../../components/ui/Dashboard/DashboardComponent';
import MobileSidebarComponent from '../../components/ui/SideBar/MobileSideBarComponent'; // Import the Mobile Sidebar

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Mobile Sidebar for smaller screens */}
      <MobileSidebarComponent />

      {/* Regular Sidebar for larger screens */}
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
