import { useState } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "@/components/ui/pagination"
import { FilterIcon, CheckIcon, EllipsisVerticalIcon, TrashIcon, FilePenIcon } from "lucide-react"

export default function Component() {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", status: "Active", type: "Customer" },
    { id: 2, name: "Jane Smith", status: "Inactive", type: "Vendor" },
    { id: 3, name: "Bob Johnson", status: "Active", type: "Customer" },
    { id: 4, name: "Alice Williams", status: "Inactive", type: "Customer" },
    { id: 5, name: "Tom Davis", status: "Active", type: "Vendor" },
    { id: 6, name: "Sara Lee", status: "Inactive", type: "Customer" },
    { id: 7, name: "Mike Brown", status: "Active", type: "Customer" },
    { id: 8, name: "Emily Wilson", status: "Inactive", type: "Vendor" },
    { id: 9, name: "David Taylor", status: "Active", type: "Customer" },
    { id: 10, name: "Sophia Anderson", status: "Inactive", type: "Customer" },
  ])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState({ key: null, order: null })
  const [currentPage, setCurrentPage] = useState(1)
  const [entriesPerPage, setEntriesPerPage] = useState(5)
  const [filter, setFilter] = useState(null)
  const [selectedEntries, setSelectedEntries] = useState([])
  const handleSearch = (e) => setSearch(e.target.value)
  const handleSort = (key) => {
    if (sort.key === key) {
      setSort({ key, order: sort.order === "asc" ? "desc" : "asc" })
    } else {
      setSort({ key, order: "asc" })
    }
  }
  const handleDelete = (id) => {
    setData(data.filter((entry) => entry.id !== id))
    setSelectedEntries(selectedEntries.filter((entryId) => entryId !== id))
  }
  const handleFilter = (status) => {
    setFilter(status)
  }
  const handleSelectAll = () => {
    if (selectedEntries.length === filteredData.length) {
      setSelectedEntries([])
    } else {
      setSelectedEntries(filteredData.map((entry) => entry.id))
    }
  }
  const handleSelectEntry = (id) => {
    if (selectedEntries.includes(id)) {
      setSelectedEntries(selectedEntries.filter((entryId) => entryId !== id))
    } else {
      setSelectedEntries([...selectedEntries, id])
    }
  }
  const filteredData = data.filter(
    (entry) =>
      (filter === null ||
        entry.status.toLowerCase() === filter.toLowerCase() ||
        entry.type.toLowerCase() === filter.toLowerCase()) &&
      (entry.name.toLowerCase().includes(search.toLowerCase()) ||
        entry.status.toLowerCase().includes(search.toLowerCase()) ||
        entry.type.toLowerCase().includes(search.toLowerCase())),
  )
  const sortedData = sort.key
    ? filteredData.sort((a, b) => {
        if (a[sort.key] < b[sort.key]) return sort.order === "asc" ? -1 : 1
        if (a[sort.key] > b[sort.key]) return sort.order === "asc" ? 1 : -1
        return 0
      })
    : filteredData
  const indexOfLastEntry = currentPage * entriesPerPage
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage
  const currentEntries = sortedData.slice(indexOfFirstEntry, indexOfLastEntry)
  const totalPages = Math.ceil(sortedData.length / entriesPerPage)
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Input type="text" placeholder="Search..." value={search} onChange={handleSearch} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <FilterIcon className="h-4 w-4 mr-2" /> Filters
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleFilter(null)}>
              All {filter === null && <CheckIcon className="h-4 w-4 ml-2" />}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleFilter("active")}>
              Active {filter === "active" && <CheckIcon className="h-4 w-4 ml-2" />}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleFilter("inactive")}>
              Inactive {filter === "inactive" && <CheckIcon className="h-4 w-4 ml-2" />}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleFilter("customer")}>
              Customer {filter === "customer" && <CheckIcon className="h-4 w-4 ml-2" />}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleFilter("vendor")}>
              Vendor {filter === "vendor" && <CheckIcon className="h-4 w-4 ml-2" />}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button onClick={() => setData([...data, { id: data.length + 1 }])}>Add Entry</Button>
      </div>
      <div className="overflow-x-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Checkbox checked={selectedEntries.length === filteredData.length} onCheckedChange={handleSelectAll} />
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("id")}>
                ID
                {sort.key === "id" && <span className="ml-1">{sort.order === "asc" ? "\u25B2" : "\u25BC"}</span>}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
                Name
                {sort.key === "name" && <span className="ml-1">{sort.order === "asc" ? "\u25B2" : "\u25BC"}</span>}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("status")}>
                Status
                {sort.key === "status" && <span className="ml-1">{sort.order === "asc" ? "\u25B2" : "\u25BC"}</span>}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("type")}>
                Type
                {sort.key === "type" && <span className="ml-1">{sort.order === "asc" ? "\u25B2" : "\u25BC"}</span>}
              </TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentEntries.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedEntries.includes(entry.id)}
                    onCheckedChange={() => handleSelectEntry(entry.id)}
                  />
                </TableCell>
                <TableCell>{entry.id}</TableCell>
                <TableCell>{entry.name}</TableCell>
                <TableCell className={entry.status.toLowerCase() === "active" ? "text-green-500" : "text-red-500"}>
                  {entry.status}
                </TableCell>
                <TableCell>{entry.type}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <EllipsisVerticalIcon className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleDelete(entry.id)}>
                        <TrashIcon className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FilePenIcon className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-end">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink href="#" isActive={page === currentPage} onClick={() => setCurrentPage(page)}>
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

