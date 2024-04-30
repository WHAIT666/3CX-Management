import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
function Dashboard() {

    return (
        <div key="1" className="flex h-screen w-full">
          <div className="bg-gray-900 text-white p-6 flex flex-col gap-4 w-64 hidden md:flex">
            <Link to="/dashboard" className="flex items-center gap-2 text-lg font-semibold">
              <Clock3Icon className="w-6 h-6" />
              <span>3CX</span>
            </Link>
            <nav className="flex flex-col gap-2">
          <Link to="/dashboard/team" className="flex items-center gap-2 text-sm font-medium hover:bg-gray-800 px-3 py-2 rounded-md"> {/* Fix the Link component */}
            <UsersIcon className="w-5 h-5" />
            <span>Team</span>
              </Link>
              <Link to="/dashboard/chat" className="flex items-center gap-2 text-sm font-medium hover:bg-gray-800 px-3 py-2 rounded-md">
                <MessageCircleIcon className="w-5 h-5" />
                <span>Chat</span>
              </Link>
              <Link to="/dashboard/conferences"  className="flex items-center gap-2 text-sm font-medium hover:bg-gray-800 px-3 py-2 rounded-md">
                <VideoIcon className="w-5 h-5" />
                <span>Meet</span>
              </Link>
              <Link to="/dashboard/call_history" className="flex items-center gap-2 text-sm font-medium hover:bg-gray-800 px-3 py-2 rounded-md">
                <PhoneIcon className="w-5 h-5" />
                <span>Calls</span>
              </Link>
              <Link to="/dashboard/panel" className="flex items-center gap-2 text-sm font-medium hover:bg-gray-800 px-3 py-2 rounded-md">
                <LayoutGridIcon className="w-5 h-5" />
                <span>Panel</span>
              </Link>
              <Link to="/dashboard/contacts" className="flex items-center gap-2 text-sm font-medium hover:bg-gray-800 px-3 py-2 rounded-md">
                <ContactIcon className="w-5 h-5" />
                <span>Contacts</span>
              </Link>
              <Link to="/dashboard/office" className="flex items-center gap-2 text-sm font-medium hover:bg-gray-800 px-3 py-2 rounded-md">
                <SettingsIcon className="w-5 h-5" />
                <span>Admin</span>
              </Link>
            </nav>
          </div>
          <div className="flex-1 flex flex-col">
            <header className="bg-white border-b px-6 py-4 flex items-center justify-between shadow">
              <div className="flex items-center gap-4">
                <Button className="md:hidden" size="icon" variant="ghost">
                  <MenuIcon className="w-6 h-6" />
                </Button>
                <div className="text-lg font-semibold">3CX Management Dashboard</div>
              </div>
              <div className="flex items-center gap-4">
                <Button size="icon" variant="ghost">
                  <PhoneCallIcon className="w-6 h-6" />
                </Button>
                <Button size="icon" variant="ghost">
                  <QrCodeIcon className="w-6 h-6" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <img
                        alt="Profile"
                        className="rounded-full"
                        height={32}
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "32/32",
                          objectFit: "cover",
                        }}
                        width={32}
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </header>
            <main className="flex-1 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <Input
                      className="pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Search..."
                      type="search"
                    />
                  </div>
                  <Button size="sm" variant="primary">
                    <PlusIcon className="w-5 h-5 mr-2" />
                    Add
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex items-center justify-between">
                    <CardTitle>Team</CardTitle>
                    <UsersIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">125</div>
                    <p className="text-gray-500 dark:text-gray-400">Members</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex items-center justify-between">
                    <CardTitle>Chat</CardTitle>
                    <MessageCircleIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,234</div>
                    <p className="text-gray-500 dark:text-gray-400">Conversations</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex items-center justify-between">
                    <CardTitle>Meet</CardTitle>
                    <VideoIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">78</div>
                    <p className="text-gray-500 dark:text-gray-400">Meetings</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex items-center justify-between">
                    <CardTitle>Calls</CardTitle>
                    <PhoneIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3,456</div>
                    <p className="text-gray-500 dark:text-gray-400">Calls</p>
                  </CardContent>
                </Card>
              </div>
            </main>
          </div>
        </div>
      )
    }
    
    function Clock3Icon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16.5 12" />
        </svg>
      )
    }
    
    
    function ContactIcon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <circle cx="12" cy="10" r="2" />
          <line x1="8" x2="8" y1="2" y2="4" />
          <line x1="16" x2="16" y1="2" y2="4" />
        </svg>
      )
    }
    
    
    function LayoutGridIcon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="7" height="7" x="3" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="14" rx="1" />
          <rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
      )
    }
    
    
    function MenuIcon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      )
    }
    
    
    function MessageCircleIcon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
        </svg>
      )
    }
    
    
    function PhoneCallIcon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          <path d="M14.05 2a9 9 0 0 1 8 7.94" />
          <path d="M14.05 6A5 5 0 0 1 18 10" />
        </svg>
      )
    }
    
    
    function PhoneIcon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    }
    
    
    function PlusIcon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      )
    }
    
    
    function QrCodeIcon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="5" height="5" x="3" y="3" rx="1" />
          <rect width="5" height="5" x="16" y="3" rx="1" />
          <rect width="5" height="5" x="3" y="16" rx="1" />
          <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
          <path d="M21 21v.01" />
          <path d="M12 7v3a2 2 0 0 1-2 2H7" />
          <path d="M3 12h.01" />
          <path d="M12 3h.01" />
          <path d="M12 16v.01" />
          <path d="M16 12h1" />
          <path d="M21 12v.01" />
          <path d="M12 21v-1" />
        </svg>
      )
    }
    
    
    function SearchIcon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      )
    }
    
    
    function SettingsIcon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    }
    
    
    function UsersIcon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
    
    
    function VideoIcon(props) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m22 8-6 4 6 4V8Z" />
          <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
        </svg>
      )
    }

export default Dashboard;