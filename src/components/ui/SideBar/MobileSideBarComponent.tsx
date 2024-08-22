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
        className="fixed top-4 left-4 z-30 lg:hidden"
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
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-gray-100 border-r p-4 transform transition-transform duration-300 ${
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
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/ExtensionManagement') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/ExtensionManagement"
            onClick={toggleSidebar}
          >
            <LayoutDashboardIcon className="h-6 w-6" />
            Extension Management
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/users') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/users"
            onClick={toggleSidebar}
          >
            <UsersIcon className="h-6 w-6" />
            Users
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/phones') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/phones"
            onClick={toggleSidebar}
          >
            <PhoneIcon className="h-6 w-6" />
            Phones
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/groups') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/groups"
            onClick={toggleSidebar}
          >
            <BuildingIcon className="h-6 w-6" />
            Departments
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/office-hours') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/office-hours"
            onClick={toggleSidebar}
          >
            <ClockIcon className="h-6 w-6" />
            Office Hours
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/reports') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/reports"
            onClick={toggleSidebar}
          >
            <BarChartIcon className="h-6 w-6" />
            Reports
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/event-log') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/event-log"
            onClick={toggleSidebar}
          >
            <ActivityIcon className="h-6 w-6" />
            Event Log
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/recordings') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/recordings"
            onClick={toggleSidebar}
          >
            <HeadphonesIcon className="h-6 w-6" />
            Recordings
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/backup') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/backup"
            onClick={toggleSidebar}
          >
            <DatabaseBackupIcon className="h-6 w-6" />
            Backup
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/integrations') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/integrations"
            onClick={toggleSidebar}
          >
            <ImportIcon className="h-6 w-6" />
            Integrations
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/advanced') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/advanced"
            onClick={toggleSidebar}
          >
            <SettingsIcon className="h-6 w-6" />
            Advanced
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/system') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/system"
            onClick={toggleSidebar}
          >
            <ServerIcon className="h-6 w-6" />
            System
          </Link>
        </nav>
      </div>
    </>
  );
};

export default MobileSidebarComponent;
