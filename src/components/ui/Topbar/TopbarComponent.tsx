// src/components/ui/Topbar/TopbarComponent.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircleQuestionIcon } from 'lucide-react';

const Topbar = () => {
  const location = useLocation();

  const getTitle = () => {
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
      // Add other cases as necessary
      default:
        return '3CX Management';
    }
  };

  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      <div className="flex-1">
        <h1 className="font-semibold text-lg">{getTitle()}</h1>
      </div>
      <div className="flex items-center gap-2">
        <span>Help</span>
        <MessageCircleQuestionIcon className="h-6 w-6" />
      </div>
    </header>
  );
};

export default Topbar;
