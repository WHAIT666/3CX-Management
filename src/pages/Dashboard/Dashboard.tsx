import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/ui/SideBar/SidebarComponent';
import Topbar from '../../components/ui/Topbar/TopbarComponent';
import DashboardComponent from '../../components/ui/Dashboard/DashboardComponent';
import ThreeCXLoginModal from '../../components/ui/Popup/3CXLoginModal'; // Adjust the import path as necessary

const Dashboard = () => {
  const [is3CXModalOpen, setIs3CXModalOpen] = useState(false);

  useEffect(() => {
    const threeCXAccessToken = localStorage.getItem('threeCXAccessToken');
    if (!threeCXAccessToken) {
      setIs3CXModalOpen(true);
    }
  }, []);

  const handleCloseModal = () => {
    setIs3CXModalOpen(false);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-4">
          <DashboardComponent />
        </div>
      </div>
      <ThreeCXLoginModal isOpen={is3CXModalOpen} onRequestClose={handleCloseModal} />
    </div>
  );
};

export default Dashboard;
