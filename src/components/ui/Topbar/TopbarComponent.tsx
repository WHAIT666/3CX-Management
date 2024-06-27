// src/components/ui/Topbar/TopbarComponent.tsx
import { useLocation } from 'react-router-dom';
import { MessageCircleQuestionIcon } from 'lucide-react';

const TopbarComponent = () => {
  const location = useLocation();

  // Function to get the section title based on the current path
  const getSectionTitle = (path: string) => {
    switch (path) {
      case '/dashboard':
        return 'Dashboard';
      case '/dashboard/ExtensionManagement':
        return 'Extension Management';
      case '/dashboard/Users':
        return 'Users';
      case '/dashboard/Phones':
        return 'Phones';
      case '/dashboard/Groups':
        return 'Groups';
      // Add more cases as needed
      default:
        return '';
    }
  };

  const sectionTitle = getSectionTitle(location.pathname);

  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      <div className="flex-1">
        <h1 className="font-semibold text-lg">{sectionTitle}</h1>
      </div>
      <div className="flex items-center gap-2">
        <span>Help</span>
        <MessageCircleQuestionIcon className="h-6 w-6" />
      </div>
    </header>
  );
};

export default TopbarComponent;