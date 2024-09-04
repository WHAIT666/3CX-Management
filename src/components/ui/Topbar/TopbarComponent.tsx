import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { UserIcon, ShieldCheckIcon, FileTextIcon, LogOutIcon, MountainIcon } from 'lucide-react';
import { useAuthStore } from "../../../Store/AuthStore"; // Import your auth store
import toast from 'react-hot-toast'; // Import the toast for notifications

const TopBarComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuthStore(); // Access user and logout function from Zustand store
  const [localUser, setLocalUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      // Assuming user data is already fetched by Zustand store
      setLocalUser(user); 
    };
    getUser();
  }, [user]);

  const getInitials = (firstName, lastName) => {
    if (!firstName || !lastName) return 'JD'; // Fallback initials
    return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/dashboard/ExtensionManagement':
        return 'Extension Management';
      case '/dashboard/users':
        return 'Users';
      case '/dashboard/phones':
        return 'Phones';
      case '/dashboard/groups':
        return 'Departments';
      case '/dashboard/office-hours':
        return 'Office Hours';
      case '/dashboard/reports':
        return 'Reports';
      case '/dashboard/event-log':
        return 'Event Log';
      case '/dashboard/recordings':
        return 'Recordings';
      case '/dashboard/backup':
        return 'Backup';
      case '/dashboard/integrations':
        return 'Integrations';
      case '/dashboard/advanced':
        return 'Advanced';
      case '/dashboard/system':
        return 'System';
      default:
        return 'Profile';
    }
  };

  const handleLogout = () => {
    logout(); // Call the logout function from Zustand store
    toast.success("You have been logged out successfully!"); // Show success toast
    navigate('/login'); // Redirect to login after logging out
  };

  return (
    <header className="flex h-16 items-center justify-between border-b bg-gray-100 px-4 sm:px-6 md:h-20 md:px-8">
      <div className="flex items-center gap-2">
        <MountainIcon className="h-6 w-6 text-primary" />
        <span className="text-lg font-semibold tracking-tight md:text-xl">{getPageTitle()}</span>
      </div>

      <nav className="hidden gap-4 md:flex">
        <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"></Link>
        <Link to="/compass" className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"></Link>
        <Link to="/bookmark" className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"></Link>
        <Link to="/user" className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"></Link>
        <Link to="/settings" className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"></Link>
      </nav>

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="cursor-pointer">
              <Avatar className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                <AvatarImage src="" className="hidden" />
                <AvatarFallback className="uppercase">{localUser ? getInitials(localUser.firstName, localUser.lastName) : 'JD'}</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="end" className="w-64 mt-2 rounded-lg shadow-lg border border-gray-200 bg-white">
            <div className="p-4">
              <div className="flex items-center space-x-3">
                <Avatar className="w-12 h-12 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                  <AvatarImage src="" className="hidden" />
                  <AvatarFallback className="uppercase">{localUser ? getInitials(localUser.firstName, localUser.lastName) : 'JD'}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900">{localUser ? `${localUser.firstName} ${localUser.lastName}` : 'André Santos'}</span>
                  <span className="text-sm text-gray-500">{localUser ? localUser.email : 'andresantosuwu@gmail.com'}</span>
                </div>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate('/dashboard/profile')}>
              <UserIcon className="w-4 h-4 mr-2 text-gray-500" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <ShieldCheckIcon className="w-4 h-4 mr-2 text-gray-500" />
              Privacy Policy
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FileTextIcon className="w-4 h-4 mr-2 text-gray-500" />
              Terms of Use
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600" onClick={handleLogout}>
              <LogOutIcon className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopBarComponent;
