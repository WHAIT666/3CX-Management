
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

export default function Component() {
  return (
    <div>
      <div className="flex flex-col p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            <UserPlusIcon className="h-4 w-4 mr-2" />
            Add User
          </Button>
          <Button className="bg-red-500 text-white hover:bg-red-600 transition-colors">
            <TrashIcon className="h-4 w-4 mr-2" />
            Delete
          </Button>
          <Button className="bg-green-500 text-white hover:bg-green-600 transition-colors">
            <UploadIcon className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button className="bg-yellow-500 text-black hover:bg-yellow-600 transition-colors">
            <DownloadIcon className="h-4 w-4 mr-2" />
            Export (3)
          </Button>
          <Button className="bg-indigo-500 text-white hover:bg-indigo-600 transition-colors">
            <LockIcon className="h-4 w-4 mr-2" />
            2FA
          </Button>
          <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            <ComputerIcon className="h-4 w-4 mr-2" />
            M365
          </Button>
          <Button className="bg-red-500 text-white hover:bg-red-600 transition-colors">
            <ChromeIcon className="h-4 w-4 mr-2" />
            Google
          </Button>
          <Button className="bg-green-500 text-white hover:bg-green-600 transition-colors">
            <CopyIcon className="h-4 w-4 mr-2" />
            Copy
          </Button>
          <Button className="bg-yellow-500 text-black hover:bg-yellow-600 transition-colors">
            <RefreshCwIcon className="h-4 w-4 mr-2" />
            Reset
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
              <TableHead>User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Extension</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>DIDs</TableHead>
              <TableHead>IP Phone</TableHead>
              <TableHead>2FA</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">XAPI, Techbase (System Owner)</TableCell>
              <TableCell>suporte@techbase.pt</TableCell>
              <TableCell>1000</TableCell>
              <TableCell>DEFAULT</TableCell>
              <TableCell>teste</TableCell>
              <TableCell>teste</TableCell>
              <TableCell>
                <CheckIcon className="text-green-500" />
                <ChromeIcon className="text-blue-500" />
              </TableCell>
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
              <TableCell className="font-medium">Santos, André (System Owner)</TableCell>
              <TableCell>8220440@estg.ipp.pt</TableCell>
              <TableCell>1001</TableCell>
              <TableCell>DEFAULT</TableCell>
              <TableCell>123</TableCell>
              <TableCell>teste</TableCell>
              <TableCell>
                <CheckIcon className="text-green-500" />
              </TableCell>
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
              <TableCell className="font-medium">teste, teste (User)</TableCell>
              <TableCell>whatil0123@gmail.com</TableCell>
              <TableCell>1002</TableCell>
              <TableCell>DEFAULT</TableCell>
              <TableCell>teste</TableCell>
              <TableCell>teste</TableCell>
              <TableCell>
                <CheckIcon className="text-green-500" />
                <ChromeIcon className="text-blue-500" />
              </TableCell>
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
    </div>
  )
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function ChromeIcon(props) {
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
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function ComputerIcon(props) {
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
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  )
}


function CopyIcon(props) {
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
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}


function DownloadIcon(props) {
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
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
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


function LockIcon(props) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function MoveHorizontalIcon(props) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
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


function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
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


function UserPlusIcon(props) {
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
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  )
}