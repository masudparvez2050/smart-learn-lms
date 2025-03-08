"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Eye,
  Edit,
  Trash2,
} from "lucide-react";

export default function InstructorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Sample instructor data
  const instructors = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      specialty: "Web Development",
      courses: 12,
      students: 15420,
      earnings: 125000,
      rating: 4.8,
      status: "Active",
      joinDate: "2021-05-15",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael@example.com",
      specialty: "UI/UX Design",
      courses: 8,
      students: 8320,
      earnings: 98000,
      rating: 4.9,
      status: "Active",
      joinDate: "2021-07-22",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      id: 3,
      name: "David Miller",
      email: "david@example.com",
      specialty: "Python & Data Science",
      courses: 10,
      students: 12150,
      earnings: 115000,
      rating: 4.7,
      status: "Active",
      joinDate: "2021-03-10",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
    {
      id: 4,
      name: "Emma Roberts",
      email: "emma@example.com",
      specialty: "Digital Marketing",
      courses: 7,
      students: 9870,
      earnings: 87000,
      rating: 4.8,
      status: "Active",
      joinDate: "2022-01-05",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
    {
      id: 5,
      name: "Robert Zhang",
      email: "robert@example.com",
      specialty: "Data Analysis",
      courses: 6,
      students: 7650,
      earnings: 72000,
      rating: 4.9,
      status: "Inactive",
      joinDate: "2022-02-18",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
    },
    {
      id: 6,
      name: "Jennifer Lopez",
      email: "jennifer@example.com",
      specialty: "Business & Entrepreneurship",
      courses: 9,
      students: 11200,
      earnings: 105000,
      rating: 4.7,
      status: "Active",
      joinDate: "2021-09-30",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer",
    },
    {
      id: 7,
      name: "James Wilson",
      email: "james@example.com",
      specialty: "Mobile App Development",
      courses: 5,
      students: 6800,
      earnings: 65000,
      rating: 4.8,
      status: "Pending",
      joinDate: "2022-04-12",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    },
    {
      id: 8,
      name: "Sophia Garcia",
      email: "sophia@example.com",
      specialty: "Photography & Videography",
      courses: 6,
      students: 5400,
      earnings: 58000,
      rating: 4.9,
      status: "Active",
      joinDate: "2022-03-25",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
    },
  ];

  // Filter instructors based on search query and filters
  const filteredInstructors = instructors.filter((instructor) => {
    const matchesSearch =
      instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      instructor.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      instructor.specialty.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatus === "all" ||
      instructor.status.toLowerCase() === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  // Stats for the top cards
  const stats = [
    {
      title: "Total Instructors",
      value: instructors.length,
    },
    {
      title: "Active Instructors",
      value: instructors.filter((instructor) => instructor.status === "Active")
        .length,
    },
    {
      title: "Total Courses",
      value: instructors.reduce(
        (sum, instructor) => sum + instructor.courses,
        0,
      ),
    },
    {
      title: "Total Students",
      value: instructors
        .reduce((sum, instructor) => sum + instructor.students, 0)
        .toLocaleString(),
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

      {/* Instructors Table Card */}
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <CardTitle>Instructors Management</CardTitle>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Plus className="mr-2 h-4 w-4" /> Add New Instructor
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
                  placeholder="Search instructors..."
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
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Instructors Table */}
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Specialty</TableHead>
                  <TableHead>Courses</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Earnings</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInstructors.length > 0 ? (
                  filteredInstructors.map((instructor) => (
                    <TableRow key={instructor.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden">
                            <Image
                              src={instructor.image}
                              alt={instructor.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{instructor.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {instructor.email}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{instructor.specialty}</TableCell>
                      <TableCell>{instructor.courses}</TableCell>
                      <TableCell>
                        {instructor.students.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        ${instructor.earnings.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <span className="text-amber-500 mr-1">★</span>
                          <span>{instructor.rating}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${
                            instructor.status === "Active"
                              ? "bg-green-500"
                              : instructor.status === "Inactive"
                                ? "bg-gray-500"
                                : "bg-yellow-500"
                          }`}
                        >
                          {instructor.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} className="h-24 text-center">
                      No instructors found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-muted-foreground">
              Showing <strong>1</strong> to <strong>8</strong> of{" "}
              <strong>{instructors.length}</strong> instructors
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
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
