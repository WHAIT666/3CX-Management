import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ActivityIcon,
  BarChartIcon,
  BuildingIcon,
  ClockIcon,
  DatabaseBackupIcon,
  HeadphonesIcon,
  ImportIcon,
  LayoutDashboardIcon,
  Package2Icon,
  PhoneIcon,
  ServerIcon,
  SettingsIcon,
  UsersIcon,
  MenuIcon,
  XIcon
} from 'lucide-react';

const MobileSidebarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="fixed top-4 left-4 z-30 lg:hidden"  // Ensure this button is visible on mobile
        onClick={toggleSidebar}
      >
        <MenuIcon className="h-8 w-8" />
      </button>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-gray-100 border-r p-4 transform transition-transform duration-300 ${  // Ensure the sidebar is visible and toggled correctly
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={toggleSidebar}>
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard"
            onClick={toggleSidebar}
          >
            <LayoutDashboardIcon className="h-6 w-6" />
            Dashboard
          </Link>
          {/* Additional Links */}
        </nav>
      </div>
    </>
  );
};

export default MobileSidebarComponent;
