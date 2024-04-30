import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="flex h-screen bg-[#111b21]">
          <aside className="w-64 flex-shrink-0 px-2 py-4 bg-[#2A2F32]">
            <div className="flex items-center px-4 mb-5">
              <QrCodeIcon className="text-white h-6 w-6" />
              <h1 className="ml-2 text-xl font-semibold text-white">3CX</h1>
            </div>
            <nav className="space-y-2 text-white">
              <Link className="flex items-center px-4 py-2 hover:bg-[#373E42]" to="/equipe">
                <UserIcon className="h-6 w-6" />
                <span className="ml-3">Team</span>
              </Link>
              <Link className="flex items-center px-4 py-2 hover:bg-[#373E42]" to="/chat">
                <MessageCircleIcon className="h-6 w-6" />
                <span className="ml-3">Chat</span>
              </Link>
              <Link className="flex items-center px-4 py-2 hover:bg-[#373E42]" to="/reuniao">
                <CalendarIcon className="h-6 w-6" />
                <span className="ml-3">Meet</span>
              </Link>
              <Link className="flex items-center px-4 py-2 hover:bg-[#373E42]" to="/chamadas">
                <PhoneIcon className="h-6 w-6" />
                <span className="ml-3">Calls</span>
              </Link>
              <Link className="flex items-center px-4 py-2 hover:bg-[#373E42]" to="/painel">
                <BarChartIcon className="h-6 w-6" />
                <span className="ml-3">Panel</span>
              </Link>
              <Link className="flex items-center px-4 py-2 hover:bg-[#373E42]" to="/contatos">
                <ContactIcon className="h-6 w-6" />
                <span className="ml-3">Contacts</span>
              </Link>
              <Link className="flex items-center px-4 py-2 hover:bg-[#373E42]" to="/admin">
                <GaugeIcon className="h-6 w-6" />
                <span className="ml-3">Admin</span>
              </Link>
            </nav>
          </aside>
          <main className="flex-1 p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2 items-center bg-[#323739] rounded-md p-2">
                <Button className="text-white" variant="ghost">
                  <PlusIcon className="h-6 w-6" />
                </Button>
                <Input
                  className="bg-transparent text-white placeholder-white border-none w-full"
                  placeholder="Pesquise pessoas ou digite o número"
                  type="text"
                />
              </div>
              <div className="flex space-x-4">
                <Button className="text-white" variant="ghost">
                  <PhoneIcon className="h-6 w-6" />
                </Button>
                <Button className="text-white" variant="ghost">
                  <CircleIcon className="h-6 w-6" />
                </Button>
                <Button className="text-white" variant="ghost">
                  <QrCodeIcon className="h-6 w-6" />
                </Button>
                <Button className="text-white" variant="ghost">
                  <UserIcon className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center h-full">
              <span className="text-white opacity-50">Todas</span>
            </div>
          </main>
        </div>
      )
    }
    
    function BarChartIcon(props) {
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
          <line x1="12" x2="12" y1="20" y2="10" />
          <line x1="18" x2="18" y1="20" y2="4" />
          <line x1="6" x2="6" y1="20" y2="16" />
        </svg>
      )
    }
    
    
    function CalendarIcon(props) {
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
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
      )
    }
    
    
    function CircleIcon(props) {
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
    
    
    function GaugeIcon(props) {
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
          <path d="m12 14 4-4" />
          <path d="M3.34 19a10 10 0 1 1 17.32 0" />
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
    
    
    function UserIcon(props) {
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
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    }

export default Dashboard;