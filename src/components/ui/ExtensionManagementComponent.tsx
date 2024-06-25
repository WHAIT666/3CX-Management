import { useState, useEffect, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { fetchExtensions } from "../../services/api"

export default function Component() {
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState({ key: "name", order: "asc" })
  const [filters, setFilters] = useState({
    status: [],
    location: [],
    version: [],
  })
  const [selectedRows, setSelectedRows] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingCentral, setEditingCentral] = useState(null)
  const [centrals, setCentrals] = useState([])

  useEffect(() => {
    async function loadExtensions() {
      try {
        const data = await fetchExtensions()
        setCentrals(data)
      } catch (error) {
        console.error('Failed to fetch extensions:', error)
      }
    }
    loadExtensions()
  }, [])

  const filteredCentrals = useMemo(() => {
    return centrals
      .filter((central) => {
        const searchValue = search.toLowerCase()
        return (
          central.name.toLowerCase().includes(searchValue) ||
          central.status.toLowerCase().includes(searchValue) ||
          central.type.toLowerCase().includes(searchValue) ||
          central.id.toLowerCase().includes(searchValue)
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
  }, [search, sort, filters, centrals])

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
  const totalCentrals = filteredCentrals.length
  const paginatedCentrals = filteredCentrals

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
              checked={filters.status.includes("Registered")}
              onCheckedChange={() => handleFilterChange("status", "Registered")}
            >
              Registered
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filters.status.includes("Unregistered")}
              onCheckedChange={() => handleFilterChange("status", "Unregistered")}
            >
              Unregistered
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
              <TableHead className="cursor-pointer" onClick={() => handleSort("type")}>
                Type
                {sort.key === "type" && <span className="ml-1">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>}
              </TableHead>
              <TableHead className="w-[120px] text-center">Actions</TableHead>
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
                <TableCell className="font-medium">{central.name} ({central.id})</TableCell>
                <TableCell className={central.status === "Registered" ? "text-green-500" : "text-red-500"}>
                  {central.status}
                </TableCell>
                <TableCell>{central.type}</TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <EllipsisVerticalIcon className="w-4 h-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEditCentral(central)}>
                          <FilePenIcon className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDeleteCentral(central.id)}>
                          <TrashIcon className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">Showing {filteredCentrals.length} 3CX Centrals</div>
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
          <div className="grid gap-4 py-4" />
          <DialogFooter>
            <Button onClick={() => setShowEditModal(false)}>Cancel</Button>
            <Button>Save</Button>
          </DialogFooter>
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
