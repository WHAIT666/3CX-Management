/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qimEMRnUcXS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuItem, DropdownMenuContent } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function Component() {
  return (
    <div key="1" className="flex flex-col p-6">
      <div className="flex items-center space-x-2 mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
              <SettingsIcon className="h-4 w-4 mr-2" />
              Options
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          <PhoneIcon className="h-4 w-4 mr-2" />
          PnP Phones
        </Button>
        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          <PhoneIcon className="h-4 w-4 mr-2" />
          Hot Desking Phones
        </Button>
        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          <RefreshCwIcon className="h-4 w-4 mr-2" />
          Reboot
        </Button>
        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          <ArrowRightIcon className="h-4 w-4 mr-2" />
          Reprovision
        </Button>
        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          <UploadIcon className="h-4 w-4 mr-2" />
          Upgrade
        </Button>
      </div>
      <Input
        className="mb-4 bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:focus:ring-blue-500"
        placeholder="Search ..."
      />
      <Table className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox />
            </TableHead>
            <TableHead>Ext</TableHead>
            <TableHead>Vendor</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Fw Version</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>MAC</TableHead>
            <TableHead>IP</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell className="font-medium">101</TableCell>
            <TableCell>Polycom</TableCell>
            <TableCell>VVX 501</TableCell>
            <TableCell>5.9.6</TableCell>
            <TableCell className="font-medium">WebMeeting bridge (Master Bridge)</TableCell>
            <TableCell>00:00:00:00:00:00</TableCell>
            <TableCell>192.168.1.100</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <EllipsisVerticalIcon className="w-4 h-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit User</DropdownMenuItem>
                  <DropdownMenuItem>Remove User</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell className="font-medium">102</TableCell>
            <TableCell>Yealink</TableCell>
            <TableCell>T46S</TableCell>
            <TableCell>58.83.0.15</TableCell>
            <TableCell className="font-medium">Generic SIP Trunk (Trunk)</TableCell>
            <TableCell>00:15:65:AB:CD:EF</TableCell>
            <TableCell>192.168.1.101</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <EllipsisVerticalIcon className="w-4 h-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit User</DropdownMenuItem>
                  <DropdownMenuItem>Remove User</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell className="font-medium">103</TableCell>
            <TableCell>Grandstream</TableCell>
            <TableCell>GXP2170</TableCell>
            <TableCell>1.0.7.27</TableCell>
            <TableCell className="font-medium">teste, teste (User)</TableCell>
            <TableCell>00:0B:82:AB:CD:EF</TableCell>
            <TableCell>192.168.1.102</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <EllipsisVerticalIcon className="w-4 h-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit User</DropdownMenuItem>
                  <DropdownMenuItem>Remove User</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

function ArrowRightIcon(props) {
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
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function EllipsisVerticalIcon(props) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
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


function RefreshCwIcon(props) {
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
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
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


function UploadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}