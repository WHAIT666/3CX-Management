// UsersComponent.tsx
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from '@/components/ui/table';
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from '@/components/ui/dropdown-menu';
import { UserPlusIcon, TrashIcon, UploadIcon, DownloadIcon, LockIcon, ComputerIcon, ChromeIcon, CopyIcon, RefreshCwIcon, CheckIcon, EllipsisVerticalIcon } from 'lucide-react';
import { fetchUsers, deleteUser } from '@/services/api'; // Adjust import path as needed

export default function UsersComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    loadUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter(user => user.Id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

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
            {users.map(user => (
              <TableRow key={user.Id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">{user.DisplayName}</TableCell>
                <TableCell>{user.EmailAddress}</TableCell>
                <TableCell>{user.Number}</TableCell>
                <TableCell>{user.Groups?.[0]?.Name || 'N/A'}</TableCell>
                <TableCell>Placeholder</TableCell>
                <TableCell>Placeholder</TableCell>
                <TableCell>
                  {user.Require2FA ? <CheckIcon className="text-green-500" /> : null}
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
                      <DropdownMenuItem onClick={() => handleDeleteUser(user.Id)}>Remove User</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
