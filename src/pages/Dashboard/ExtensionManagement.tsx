import React from 'react';
import Sidebar from '../../components/ui/SideBar/SidebarComponent';
import Topbar from '../../components/ui/Topbar/TopbarComponent';
import ExtensionManagementComponent from '../../components/ui/Dashboard/ExtensionManagementComponent';
import MobileSidebarComponent from '../../components/ui/SideBar/MobileSideBarComponent'; // I Import the Mobile Sidebar

const ExtensionManagement = () => {
  return (
    <div className="flex min-h-screen">
      {/* Mobile Sidebar for smaller screens */}
      <MobileSidebarComponent />

      {/* Regular Sidebar for larger screens */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-4">
          <ExtensionManagementComponent />
        </div>
      </div>
    </div>
  );
};

export default ExtensionManagement;
