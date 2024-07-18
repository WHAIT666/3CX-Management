import React from 'react';
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
} from 'lucide-react';

const SidebarComponent = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="hidden lg:block border-r bg-gray-100 w-64 p-4">
      <div className="flex flex-col gap-4">
        <Link className="flex items-center gap-2 font-semibold" to="/">
          <Package2Icon className="h-8 w-8" />
          <span>3CX Management</span>
        </Link>
        <nav className="grid gap-1">
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard"
          >
            <LayoutDashboardIcon className="h-6 w-6" />
            Dashboard
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/ExtensionManagement') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/ExtensionManagement"
          >
            <LayoutDashboardIcon className="h-6 w-6" />
            Extension Management
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/users') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/users"
          >
            <UsersIcon className="h-6 w-6" />
            Users
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/phones') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/phones"
          >
            <PhoneIcon className="h-6 w-6" />
            Phones
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/groups') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/groups"
          >
            <BuildingIcon className="h-6 w-6" />
            Departments
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/office-hours') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/office-hours"
          >
            <ClockIcon className="h-6 w-6" />
            Office Hours
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/reports') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/reports"
          >
            <BarChartIcon className="h-6 w-6" />
            Reports
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/event-log') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/event-log"
          >
            <ActivityIcon className="h-6 w-6" />
            Event Log
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/recordings') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/recordings"
          >
            <HeadphonesIcon className="h-6 w-6" />
            Recordings
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/backup') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/backup"
          >
            <DatabaseBackupIcon className="h-6 w-6" />
            Backup
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/integrations') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/integrations"
          >
            <ImportIcon className="h-6 w-6" />
            Integrations
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/advanced') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/advanced"
          >
            <SettingsIcon className="h-6 w-6" />
            Advanced
          </Link>
          <Link
            className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
              isActive('/dashboard/system') ? 'bg-orange-500 text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
            to="/dashboard/system"
          >
            <ServerIcon className="h-6 w-6" />
            System
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SidebarComponent;
