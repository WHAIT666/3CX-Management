import React from 'react';
import Sidebar from '../../components/ui/SideBar/SidebarComponent';
import Topbar from '../../components/ui/Topbar/TopbarComponent';
import UsersComponent from '../../components/ui/Dashboard/UsersComponent';
import MobileSidebarComponent from '../../components/ui/SideBar/MobileSideBarComponent'; //mport the Mobile Sidebar

const Users = () => {
  return (
    <div className="flex min-h-screen">
      <MobileSidebarComponent /> {/* Mobile Sidebar for smaller screens */}
      <Sidebar /> {/* Regular Sidebar for larger screens */}
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-4">
          <UsersComponent />
        </div>
      </div>
    </div>
  );
};

export default Users;
