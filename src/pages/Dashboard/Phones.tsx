import React from 'react';
import Sidebar from '../../components/ui/SideBar/SidebarComponent';
import Topbar from '../../components/ui/Topbar/TopbarComponent';
import PhonesComponent from '../../components/ui/Dashboard/PhonesComponent';
import MobileSidebarComponent from '../../components/ui/SideBar/MobileSideBarComponent'; //port the Mobile Sidebar

const Phones = () => {
  return (
    <div className="flex min-h-screen">
      <MobileSidebarComponent /> {/* Mobile Sidebar for smaller screens */}
      <Sidebar /> {/* Regular Sidebar for larger screens */}
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-4">
          <PhonesComponent />
        </div>
      </div>
    </div>
  );
};

export default Phones;
