import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function Component() {
  return (
    <div key="1" className="flex flex-col p-6">
      <div className="flex items-center space-x-2 mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
              <PlusIcon className="h-4 w-4 mr-2" />
              Add SIP Trunk
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Add Trunk</DropdownMenuItem>
            <DropdownMenuItem>Add Gateway</DropdownMenuItem>
            <DropdownMenuItem>Import Provider</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Messaging
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Add WhatsApp</DropdownMenuItem>
            <DropdownMenuItem>Add Facebook</DropdownMenuItem>
            <DropdownMenuItem>Add Live Chat</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Bridge
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Master Bridge</DropdownMenuItem>
            <DropdownMenuItem>Slave Bridge</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          <PlusIcon className="h-4 w-4 mr-2" />
          Add SBC
        </Button>
        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          <PlusIcon className="h-4 w-4 mr-2" />
          Add DECT / FXS
        </Button>
      </div>
      <Input
        className="mb-4 bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:focus:ring-blue-500"
        placeholder="Search ..."
      />
      <Table className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Information</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Route to</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">WebMeeting bridge (Master Bridge)</TableCell>
            <TableCell>suporte@techbase.pt</TableCell>
            <TableCell>DEFAULT</TableCell>
            <TableCell>-</TableCell>
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
            <TableCell className="font-medium">Generic SIP Trunk (Trunk)</TableCell>
            <TableCell>8220440@estg.ipp.pt</TableCell>
            <TableCell>DEFAULT</TableCell>
            <TableCell>123</TableCell>
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
            <TableCell className="font-medium">teste, teste (User)</TableCell>
            <TableCell>whatil0123@gmail.com</TableCell>
            <TableCell>DEFAULT</TableCell>
            <TableCell>-</TableCell>
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