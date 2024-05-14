/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7Tm8s7PftRr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

export default function Component() {
  return (
    <div className="flex flex-col p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          <PlusIcon className="h-4 w-4 mr-2" />
          Add
        </Button>
        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Queue
        </Button>
        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Digital Receptionist
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
            <TableHead>Name</TableHead>
            <TableHead>Extension</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>DIDs</TableHead>
            <TableHead>Destination if no answer</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell className="font-medium">rqwrqw (Queue)</TableCell>
            <TableCell>101</TableCell>
            <TableCell>Sales</TableCell>
            <TableCell>555-1234, 555-5678</TableCell>
            <TableCell>Voicemail</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <EllipsisVerticalIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle row actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit Queue</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">Delete Queue</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell className="font-medium">DEFAULT (Live Chat - Text - Calls Menu)</TableCell>
            <TableCell>102</TableCell>
            <TableCell>Marketing</TableCell>
            <TableCell>555-9876, 555-2345</TableCell>
            <TableCell>Forward to Mobile</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <EllipsisVerticalIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle row actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell className="font-medium">Bob Johnson</TableCell>
            <TableCell>103</TableCell>
            <TableCell>IT</TableCell>
            <TableCell>555-7890, 555-6789</TableCell>
            <TableCell>Ring Group</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <EllipsisVerticalIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle row actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell className="font-medium">Sarah Lee</TableCell>
            <TableCell>104</TableCell>
            <TableCell>Finance</TableCell>
            <TableCell>555-3456, 555-7890</TableCell>
            <TableCell>Queue</TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <EllipsisVerticalIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle row actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
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