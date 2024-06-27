import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuItem, DropdownMenuContent } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { SettingsIcon, PhoneIcon, RefreshCwIcon, ArrowRightIcon, UploadIcon, EllipsisVerticalIcon } from "lucide-react"

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

