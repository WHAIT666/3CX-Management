import React from 'react';
import Sidebar from '../../components/ui/SideBar/SidebarComponent';
import Topbar from '../../components/ui/Topbar/TopbarComponent';
import AdminComponent from '../../components/ui/Admin/AdminPanelComponent'; // Admin Dashboard Component
import MobileSidebarComponent from '../../components/ui/SideBar/MobileSideBarComponent'; // Import the Mobile Sidebar

const AdminPanel = () => {
  return (
    <div className="flex min-h-screen">
      {/* Mobile Sidebar for smaller screens */}
      <MobileSidebarComponent />

      {/* Regular Sidebar for larger screens */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-4">
          <AdminComponent /> {/* Admin Panel Component */}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
