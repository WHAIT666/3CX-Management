"use client"

import React, { useState, useMemo, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusIcon, Pencil, Trash2, Users, UserPlus, UserMinus, BarChart2, TrendingUp, PieChart as PieChartIcon } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts"
import { fetchUserStatistics, fetchUsers, deleteUser, updateUserRole } from "@/services/api" // Importing API services

type User = {
  _id: string
  name: string
  email: string
  role: string
  createdAt: string
}

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']

export default function EnhancedAdminPanel() {
  const [users, setUsers] = useState<User[]>([])  // Initialize with an empty array
  const [newUser, setNewUser] = useState<Omit<User, "_id" | "createdAt">>({ name: "", email: "", role: "" })
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [showStatistics, setShowStatistics] = useState(false)
  const [stats, setStats] = useState({ totalUsers: 0, adminUsers: 0, regularUsers: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Fetch users and statistics on component mount
    const loadStatistics = async () => {
      try {
        const statsData = await fetchUserStatistics()
        setStats(statsData)
      } catch (err) {
        setError('Failed to load user statistics')
      } finally {
        setLoading(false)
      }
    }

    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();  // Fetch users from API
        setUsers(usersData);  // Set the fetched users
      } catch (err) {
        setError('Failed to load users')
      }
    }

    loadStatistics()
    loadUsers()
  }, [])

  const addUser = () => {
    const currentDate = new Date().toISOString().split('T')[0]
    setUsers([...users, { ...newUser, _id: `${users.length + 1}`, createdAt: currentDate }])
    setNewUser({ name: "", email: "", role: "" })
  }

  const updateUser = async () => {
    if (editingUser) {
      try {
        const updatedUserData = await updateUserRole(editingUser._id, editingUser.role);  // Update user role via API
        setUsers(users.map((user) => (user._id === updatedUserData._id ? updatedUserData : user)))  // Update UI
        setEditingUser(null)
      } catch (err) {
        setError("Failed to update user")
      }
    }
  }

  const handleDeleteUser = async (id: string) => {
    try {
      await deleteUser(id);  // Call API to delete user
      setUsers(users.filter((user) => user._id !== id))  // Update UI after deletion
    } catch (err) {
      setError("Failed to delete user");
      console.error("Error deleting user:", err);
    }
  }

  const roleDistribution = useMemo(() => {
    const distribution: { [key: string]: number } = {}
    users.forEach(user => {
      distribution[user.role] = (distribution[user.role] || 0) + 1
    })
    return Object.entries(distribution).map(([name, value]) => ({ name, value }))
  }, [users])

  const userGrowth = useMemo(() => {
    const growth: { [key: string]: number } = {}
    users.forEach(user => {
      const month = user.createdAt.substring(0, 7) // YYYY-MM
      growth[month] = (growth[month] || 0) + 1
    })
    return Object.entries(growth).map(([date, count]) => ({ date, count })).sort((a, b) => a.date.localeCompare(b.date))
  }, [users])

  const cumulativeGrowth = useMemo(() => {
    let total = 0
    return userGrowth.map(({ date, count }) => {
      total += count
      return { date, total }
    })
  }, [userGrowth])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <Button onClick={() => setShowStatistics(!showStatistics)}>
          {showStatistics ? <Users className="mr-2 h-4 w-4" /> : <BarChart2 className="mr-2 h-4 w-4" />}
          {showStatistics ? "Manage Users" : "View Statistics"}
        </Button>
      </div>

      <div className="p-6 overflow-auto h-[calc(100vh-64px)]">
        {showStatistics ? (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-gradient-to-br from-pink-500 to-rose-500 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                  <Users className="h-4 w-4 text-white" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalUsers}</div>
                  <p className="text-xs text-rose-100">+{stats.totalUsers} from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Admins</CardTitle>
                  <UserPlus className="h-4 w-4 text-white" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.adminUsers}</div>
                  <p className="text-xs text-blue-100">+{stats.adminUsers} from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Regular Users</CardTitle>
                  <UserMinus className="h-4 w-4 text-white" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.regularUsers}</div>
                  <p className="text-xs text-green-100">+{stats.regularUsers} from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChartIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                    User Role Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={roleDistribution}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {roleDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart2 className="mr-2 h-4 w-4 text-muted-foreground" />
                    Monthly User Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={userGrowth}>
                        <XAxis dataKey="date" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Bar dataKey="count" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-4 w-4 text-muted-foreground" />
                  Cumulative User Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={cumulativeGrowth}>
                      <XAxis dataKey="date" />
                      <YAxis allowDecimals={false} />
                      <Tooltip />
                      <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">User List</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <PlusIcon className="mr-2 h-4 w-4" /> Add User
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <Input
                        id="email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="role" className="text-right">
                        Role
                      </Label>
                      <select
                        id="edit-role"
                        value={newUser.role}
                        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                        className="col-span-3 px-2 py-2 border rounded-md focus:outline-none"
                      >
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                      </select>
                    </div>
                  </div>
                  <Button onClick={addUser}>Add User</Button>
                </DialogContent>
              </Dialog>
            </div>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user._id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.createdAt}</TableCell>
                      <TableCell className="text-right">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon" onClick={() => setEditingUser(user)}>
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Edit User</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-name" className="text-right">
                                  Name
                                </Label>
                                <Input
                                  id="edit-name"
                                  value={editingUser?.name}
                                  onChange={(e) => setEditingUser({ ...editingUser!, name: e.target.value })}
                                  className="col-span-3"
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-email" className="text-right">
                                  Email
                                </Label>
                                <Input
                                  id="edit-email"
                                  value={editingUser?.email}
                                  onChange={(e) => setEditingUser({ ...editingUser!, email: e.target.value })}
                                  className="col-span-3"
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="edit-role" className="text-right">
                                  Role
                                </Label>
                                <select
                                  id="edit-role"
                                  value={editingUser?.role}
                                  onChange={(e) => setEditingUser({ ...editingUser!, role: e.target.value })}
                                  className="col-span-3 px-2 py-2 border rounded-md focus:outline-none"
                                >
                                  <option value="User">User</option>
                                  <option value="Admin">Admin</option>
                                </select>
                              </div>
                            </div>
                            <Button onClick={updateUser}>Update User</Button>
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteUser(user._id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
