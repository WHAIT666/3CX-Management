import { Link } from 'react-router-dom';
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
  return (
    <div className="hidden lg:block border-r bg-gray-100/40 dark:bg-gray-800/40 w-64 p-4">
      <div className="flex flex-col gap-4">
        <Link className="flex items-center gap-2 font-semibold" to="#">
          <Package2Icon className="h-8 w-8" />
          <span>3CX Management</span>
        </Link>
        <nav className="grid gap-1">
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="/dashboard"
          >
            <LayoutDashboardIcon className="h-6 w-6" />
            Dashboard
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="/dashboard/ExtensionManagement"
          >
            <LayoutDashboardIcon className="h-6 w-6" />
            Extension Management
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="/dashboard/users"
          >
            <UsersIcon className="h-6 w-6" />
            Users
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="/dashboard/phones"
          >
            <PhoneIcon className="h-6 w-6" />
            Phones
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="/dashboard/groups"
          >
            <BuildingIcon className="h-6 w-6" />
            Departments
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to=""
          >
            <ClockIcon className="h-6 w-6" />
            Office Hours
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="#"
          >
            <BarChartIcon className="h-6 w-6" />
            Reports
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="#"
          >
            <ActivityIcon className="h-6 w-6" />
            Event Log
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="#"
          >
            <HeadphonesIcon className="h-6 w-6" />
            Recordings
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="#"
          >
            <DatabaseBackupIcon className="h-6 w-6" />
            Backup
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="#"
          >
            <ImportIcon className="h-6 w-6" />
            Integrations
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="#"
          >
            <SettingsIcon className="h-6 w-6" />
            Advanced
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="#"
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
