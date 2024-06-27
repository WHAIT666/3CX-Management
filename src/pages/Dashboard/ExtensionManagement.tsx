// src/pages/Dashboard/ExtensionManagement.tsx
import React from 'react';
import Sidebar from '../../components/ui/SideBar/SidebarComponent';
import Topbar from '../../components/ui/Topbar/TopbarComponent';
import ExtensionManagementComponent from '../../components/ui/Dashboard/ExtensionManagementComponent';

const ExtensionManagement = () => {
  return (
    <div className="flex min-h-screen">
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
