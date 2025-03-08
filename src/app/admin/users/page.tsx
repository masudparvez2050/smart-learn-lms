"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  MoreVertical,
  Plus,
  Download,
  Filter,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Sample user data
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Student",
      status: "Active",
      joinDate: "2023-01-15",
      courses: 3,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Instructor",
      status: "Active",
      joinDate: "2023-02-20",
      courses: 5,
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert@example.com",
      role: "Student",
      status: "Inactive",
      joinDate: "2023-03-10",
      courses: 0,
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      role: "Student",
      status: "Active",
      joinDate: "2023-04-05",
      courses: 2,
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael@example.com",
      role: "Instructor",
      status: "Active",
      joinDate: "2023-05-12",
      courses: 4,
    },
    {
      id: 6,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      role: "Admin",
      status: "Active",
      joinDate: "2023-06-18",
      courses: 0,
    },
    {
      id: 7,
      name: "David Lee",
      email: "david@example.com",
      role: "Student",
      status: "Suspended",
      joinDate: "2023-07-22",
      courses: 1,
    },
    {
      id: 8,
      name: "Lisa Taylor",
      email: "lisa@example.com",
      role: "Student",
      status: "Active",
      joinDate: "2023-08-30",
      courses: 6,
    },
    {
      id: 9,
      name: "James Anderson",
      email: "james@example.com",
      role: "Instructor",
      status: "Inactive",
      joinDate: "2023-09-14",
      courses: 2,
    },
    {
      id: 10,
      name: "Jennifer Martin",
      email: "jennifer@example.com",
      role: "Student",
      status: "Active",
      joinDate: "2023-10-05",
      courses: 4,
    },
  ];

  // Filter users based on search query and filters
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole =
      selectedRole === "all" || user.role.toLowerCase() === selectedRole;

    const matchesStatus =
      selectedStatus === "all" || user.status.toLowerCase() === selectedStatus;

    return matchesSearch && matchesRole && matchesStatus;
  });

  // Stats for the top cards
  const stats = [
    {
      title: "Total Users",
      value: users.length,
    },
    {
      title: "Active Users",
      value: users.filter((user) => user.status === "Active").length,
    },
    {
      title: "Instructors",
      value: users.filter((user) => user.role === "Instructor").length,
    },
    {
      title: "Students",
      value: users.filter((user) => user.role === "Student").length,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Users Table Card */}
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <CardTitle>Users Management</CardTitle>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Plus className="mr-2 h-4 w-4" /> Add New User
          </Button>
        </CardHeader>
        <CardContent>
          {/* Filters and Search */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex flex-1 items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search users..."
                  className="pl-8 w-full md:w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="instructor">Instructor</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Users Table */}
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Courses</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={`${
                            user.role === "Admin"
                              ? "border-purple-500 text-purple-500"
                              : user.role === "Instructor"
                                ? "border-blue-500 text-blue-500"
                                : "border-gray-500 text-gray-500"
                          }`}
                        >
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${
                            user.status === "Active"
                              ? "bg-green-500"
                              : user.status === "Inactive"
                                ? "bg-gray-500"
                                : "bg-red-500"
                          }`}
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.joinDate}</TableCell>
                      <TableCell>{user.courses}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Edit user</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              Delete user
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center">
                      No users found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-muted-foreground">
              Showing <strong>1</strong> to <strong>10</strong> of{" "}
              <strong>{users.length}</strong> users
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                disabled
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0 bg-orange-100 border-orange-300 dark:bg-orange-900/20 dark:border-orange-700"
              >
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                3
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
