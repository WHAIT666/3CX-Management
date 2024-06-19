import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Pagination } from "@/components/ui/pagination"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"

export default function Component() {
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState({ key: "name", order: "asc" })
  const [filters, setFilters] = useState({
    status: [],
    location: [],
    version: [],
  })
  const [page, setPage] = useState(1)
  const [selectedRows, setSelectedRows] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingCentral, setEditingCentral] = useState(null)
  const centrals = [
    {
      id: 1,
      name: "3CX Central 1",
      status: "Active",
      location: "New York",
      version: "16.0",
      users: 50,
      created: "2022-03-15",
    },
    {
      id: 2,
      name: "3CX Central 2",
      status: "Inactive",
      location: "Los Angeles",
      version: "15.5",
      users: 30,
      created: "2021-09-01",
    },
    {
      id: 3,
      name: "3CX Central 3",
      status: "Active",
      location: "Chicago",
      version: "16.0",
      users: 75,
      created: "2023-01-01",
    },
    {
      id: 4,
      name: "3CX Central 4",
      status: "Inactive",
      location: "Miami",
      version: "15.0",
      users: 20,
      created: "2020-06-30",
    },
    {
      id: 5,
      name: "3CX Central 5",
      status: "Active",
      location: "Seattle",
      version: "16.0",
      users: 60,
      created: "2022-11-15",
    },
    {
      id: 6,
      name: "3CX Central 6",
      status: "Active",
      location: "Boston",
      version: "15.5",
      users: 40,
      created: "2021-04-01",
    },
    {
      id: 7,
      name: "3CX Central 7",
      status: "Inactive",
      location: "Atlanta",
      version: "16.0",
      users: 25,
      created: "2023-03-01",
    },
    {
      id: 8,
      name: "3CX Central 8",
      status: "Active",
      location: "Dallas",
      version: "15.0",
      users: 55,
      created: "2020-12-15",
    },
    {
        id: 9,
        name: "3CX Central 9",
        status: "Inactive",
        location: "Porto",
        version: "69.0",
        users: 55,
        created: "2026-12-15",
      },
      {
        id: 10,
        name: "3CX Central 10",
        status: "Active",
        location: "Porto",
        version: "69.0",
        users: 555,
        created: "2020-12-15",
      },
      {
        id: 11,
        name: "3CX Central 11",
        status: "Active",
        location: "Porto",
        version: "69.0",
        users: 555,
        created: "2020-12-16",
      },
  ]
  const filteredCentrals = useMemo(() => {
    return centrals
      .filter((central) => {
        const searchValue = search.toLowerCase()
        return (
          central.name.toLowerCase().includes(searchValue) ||
          central.status.toLowerCase().includes(searchValue) ||
          central.location.toLowerCase().includes(searchValue) ||
          central.version.toLowerCase().includes(searchValue)
        )
      })
      .filter((central) => {
        if (filters.status.length > 0 && !filters.status.includes(central.status)) {
          return false
        }
        if (filters.location.length > 0 && !filters.location.includes(central.location)) {
          return false
        }
        if (filters.version.length > 0 && !filters.version.includes(central.version)) {
          return false
        }
        return true
      })
      .sort((a, b) => {
        if (sort.order === "asc") {
          return a[sort.key] > b[sort.key] ? 1 : -1
        } else {
          return a[sort.key] < b[sort.key] ? 1 : -1
        }
      })
  }, [search, sort, filters])
  const handleSearch = (e) => setSearch(e.target.value)
  const handleSort = (key) => {
    if (sort.key === key) {
      setSort({ key, order: sort.order === "asc" ? "desc" : "asc" })
    } else {
      setSort({ key, order: "asc" })
    }
  }
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value],
    }))
  }
  const handlePageChange = (newPage) => {
    setPage(newPage)
  }
  const handleSelectAll = () => {
    if (selectedRows.length === filteredCentrals.length) {
      setSelectedRows([])
    } else {
      setSelectedRows(filteredCentrals.map((central) => central.id))
    }
  }
  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id))
    } else {
      setSelectedRows([...selectedRows, id])
    }
  }
  const handleAddCentral = () => {
    setShowAddModal(true)
  }
  const handleEditCentral = (central) => {
    setEditingCentral(central)
    setShowEditModal(true)
  }
  const handleDeleteCentral = (id) => {
    console.log(`Deleting 3CX Central with ID: ${id}`)
  }
  const itemsPerPage = 10
  const totalPages = Math.ceil(filteredCentrals.length / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedCentrals = filteredCentrals.slice(startIndex, endIndex)
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-4">
        <Input
          placeholder="Search 3CX Centrals..."
          className="bg-white dark:bg-gray-950"
          value={search}
          onChange={handleSearch}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="shrink-0">
              <FilterIcon className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px]">
            <DropdownMenuLabel>Filters</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={filters.status.includes("Active")}
              onCheckedChange={() => handleFilterChange("status", "Active")}
            >
              Active
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.status.includes("Inactive")}
              onCheckedChange={() => handleFilterChange("status", "Inactive")}
            >
              Inactive
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={filters.location.includes("New York")}
              onCheckedChange={() => handleFilterChange("location", "New York")}
            >
              New York
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.location.includes("Los Angeles")}
              onCheckedChange={() => handleFilterChange("location", "Los Angeles")}
            >
              Los Angeles
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.location.includes("Chicago")}
              onCheckedChange={() => handleFilterChange("location", "Chicago")}
            >
              Chicago
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.location.includes("Miami")}
              onCheckedChange={() => handleFilterChange("location", "Miami")}
            >
              Miami
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.location.includes("Seattle")}
              onCheckedChange={() => handleFilterChange("location", "Seattle")}
            >
              Seattle
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.location.includes("Boston")}
              onCheckedChange={() => handleFilterChange("location", "Boston")}
            >
              Boston
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.location.includes("Atlanta")}
              onCheckedChange={() => handleFilterChange("location", "Atlanta")}
            >
              Atlanta
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.location.includes("Dallas")}
              onCheckedChange={() => handleFilterChange("location", "Dallas")}
            >
              Dallas
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={filters.version.includes("16.0")}
              onCheckedChange={() => handleFilterChange("version", "16.0")}
            >
              Version 16.0
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.version.includes("15.5")}
              onCheckedChange={() => handleFilterChange("version", "15.5")}
            >
              Version 15.5
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.version.includes("15.0")}
              onCheckedChange={() => handleFilterChange("version", "15.0")}
            >
              Version 15.0
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button onClick={handleAddCentral}>Add 3CX Central</Button>
      </div>
      <div className="overflow-auto border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[32px]">
                <Checkbox checked={selectedRows.length === filteredCentrals.length} onCheckedChange={handleSelectAll} />
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
                Name
                {sort.key === "name" && <span className="ml-1">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("status")}>
                Status
                {sort.key === "status" && <span className="ml-1">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("location")}>
                Location
                {sort.key === "location" && <span className="ml-1">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("version")}>
                Version
                {sort.key === "version" && <span className="ml-1">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>}
              </TableHead>
              <TableHead className="text-right cursor-pointer" onClick={() => handleSort("users")}>
                Users
                {sort.key === "users" && <span className="ml-1">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>}
              </TableHead>
              <TableHead className="text-right cursor-pointer" onClick={() => handleSort("created")}>
                Created
                {sort.key === "created" && <span className="ml-1">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>}
              </TableHead>
              <TableHead className="w-[120px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedCentrals.map((central) => (
              <TableRow key={central.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(central.id)}
                    onCheckedChange={() => handleRowSelect(central.id)}
                  />
                </TableCell>
                <TableCell className="font-medium">{central.name}</TableCell>
                <TableCell>{central.status}</TableCell>
                <TableCell>{central.location}</TableCell>
                <TableCell>{central.version}</TableCell>
                <TableCell className="text-right">{central.users}</TableCell>
                <TableCell className="text-right">{new Date(central.created).toLocaleDateString()}</TableCell>
                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleEditCentral(central)}>
                      <FilePenIcon className="w-4 h-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteCentral(central.id)}>
                      <TrashIcon className="w-4 h-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing {startIndex + 1} to {endIndex} of {filteredCentrals.length} 3CX Centrals
        </div>
        <Pagination
          currentPage={page}
          totalCount={filteredCentrals.length}
          pageSize={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
      <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add 3CX Central</DialogTitle>
            <DialogDescription>Enter the details for the new 3CX Central.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4" />
          <DialogFooter>
            <Button onClick={() => setShowAddModal(false)}>Cancel</Button>
            <Button>Add 3CX Central</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit 3CX Central</DialogTitle>
            <DialogDescription>Update the details for the selected 3CX Central.</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function FilePenIcon(props) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
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