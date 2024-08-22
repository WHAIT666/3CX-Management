import React from 'react';
import Sidebar from '../../components/ui/SideBar/SidebarComponent';
import Topbar from '../../components/ui/Topbar/TopbarComponent';
import ProfileComponent from '../../components/ui/Profile/ProfileComponent';
import MobileSidebarComponent from '../../components/ui/SideBar/MobileSideBarComponent'; // Import the Mobile Sidebar

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <MobileSidebarComponent /> {/* Mobile Sidebar for smaller screens */}
      <Sidebar /> {/* Regular Sidebar for larger screens */}
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-4">
          <ProfileComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
