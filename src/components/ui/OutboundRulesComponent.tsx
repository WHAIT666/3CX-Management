/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PdAmuaRlNms
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function Component() {
  return (
    <div key="1" className="flex flex-col p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          <PlusIcon className="h-4 w-4 mr-2" />
          Add
        </Button>
        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          <PencilIcon className="h-4 w-4 mr-2" />
          Edit
        </Button>
        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          <TrashIcon className="h-4 w-4 mr-2" />
          Delete
        </Button>
        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          <ArrowUpIcon className="h-4 w-4 mr-2" />
          Move Up
        </Button>
        <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          <ArrowDownIcon className="h-4 w-4 mr-2" />
          Move Down
        </Button>
      </div>
      <Input
        className="mb-4 bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:focus:ring-blue-500"
        placeholder="Search ..."
      />
      <Table className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
        <TableHeader>
          <TableRow>
            <TableHead>OutBound Rule Name</TableHead>
            <TableHead>Prefix</TableHead>
            <TableHead>Call from</TableHead>
            <TableHead>Ext. Length</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Route 1</TableHead>
            <TableHead>Route 2</TableHead>
            <TableHead>Route 3</TableHead>
            <TableHead>Route 4</TableHead>
            <TableHead>Route 5</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Rule 1</TableCell>
            <TableCell>1</TableCell>
            <TableCell>Any</TableCell>
            <TableCell>Any</TableCell>
            <TableCell>Any</TableCell>
            <TableCell>Trunk 1</TableCell>
            <TableCell>Trunk 2</TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Rule 2</TableCell>
            <TableCell>011</TableCell>
            <TableCell>Any</TableCell>
            <TableCell>Any</TableCell>
            <TableCell>Any</TableCell>
            <TableCell>Trunk 3</TableCell>
            <TableCell>Trunk 4</TableCell>
            <TableCell>Trunk 5</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Rule 3</TableCell>
            <TableCell>00</TableCell>
            <TableCell>Any</TableCell>
            <TableCell>Any</TableCell>
            <TableCell>Any</TableCell>
            <TableCell>Trunk 6</TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

function ArrowDownIcon(props) {
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
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  )
}


function ArrowUpIcon(props) {
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
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}


function PencilIcon(props) {
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
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