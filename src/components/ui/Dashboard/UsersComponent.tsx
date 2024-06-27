import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { UserPlusIcon, TrashIcon, UploadIcon, DownloadIcon, LockIcon, ComputerIcon, ChromeIcon, CopyIcon, RefreshCwIcon, CheckIcon, EllipsisVerticalIcon } from "lucide-react"

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

