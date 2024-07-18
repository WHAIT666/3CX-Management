import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { fetchUser } from '../../../services/api';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { UserIcon, ShieldCheckIcon, FileTextIcon, LogOutIcon, BookmarkIcon, CompassIcon, HomeIcon, MenuIcon, MountainIcon, SettingsIcon } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const TopBarComponent = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await fetchUser();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };

    getUser();
  }, []);

  const getInitials = (firstName, lastName) => {
    if (!firstName || !lastName) return 'JD'; // Fallback initials
    return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
  };

  return (
    <header className="flex h-16 items-center justify-between border-b bg-gray-100 px-4 sm:px-6 md:h-20 md:px-8">
      <Link to="/" className="flex items-center gap-2">
        <MountainIcon className="h-6 w-6 text-primary" />
        <span className="text-lg font-semibold tracking-tight md:text-xl">Acme Inc</span>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="md:hidden">
          <nav className="grid gap-4 px-4 py-6 sm:px-6">
            <Link to="/" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground">
              <HomeIcon className="h-5 w-5" />
            </Link>
            <Link to="/compass" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground">
              <CompassIcon className="h-5 w-5" />
            </Link>
            <Link to="/bookmark" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground">
              <BookmarkIcon className="h-5 w-5" />
            </Link>
            <Link to="/user" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground">
              <UserIcon className="h-5 w-5" />
            </Link>
            <Link to="/settings" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground">
              <SettingsIcon className="h-5 w-5" />
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
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
                <AvatarFallback className="uppercase">{user ? getInitials(user.firstName, user.lastName) : 'JD'}</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="end" className="w-64 mt-2 rounded-lg shadow-lg border border-gray-200 bg-white">
            <div className="p-4">
              <div className="flex items-center space-x-3">
                <Avatar className="w-12 h-12 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                  <AvatarImage src="" className="hidden" />
                  <AvatarFallback className="uppercase">{user ? getInitials(user.firstName, user.lastName) : 'JD'}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900">{user ? `${user.firstName} ${user.lastName}` : 'André Santos'}</span>
                  <span className="text-sm text-gray-500">{user ? user.email : 'andresantosuwu@gmail.com'}</span>
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
            <DropdownMenuItem className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600" onClick={() => {
              localStorage.removeItem('accessToken');
              navigate('/login');
            }}>
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
