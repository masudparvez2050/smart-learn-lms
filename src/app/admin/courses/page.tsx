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

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Sample course data
  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      category: "Development",
      price: 94.99,
      status: "Published",
      students: 15420,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&q=80",
    },
    {
      id: 2,
      title: "Advanced UI/UX Design Masterclass",
      instructor: "Michael Chen",
      category: "Design",
      price: 89.99,
      status: "Published",
      students: 8320,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=100&q=80",
    },
    {
      id: 3,
      title: "Python Programming: From Beginner to Advanced",
      instructor: "David Miller",
      category: "Development",
      price: 84.99,
      status: "Draft",
      students: 12150,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=100&q=80",
    },
    {
      id: 4,
      title: "Digital Marketing Strategy Masterclass",
      instructor: "Emma Roberts",
      category: "Marketing",
      price: 79.99,
      status: "Published",
      students: 9870,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=100&q=80",
    },
    {
      id: 5,
      title: "Data Science: Complete Data Analysis Course",
      instructor: "Robert Zhang",
      category: "Data Science",
      price: 94.99,
      status: "Draft",
      students: 7650,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&q=80",
    },
    {
      id: 6,
      title: "Financial Accounting Fundamentals",
      instructor: "Jennifer Lopez",
      category: "Finance",
      price: 69.99,
      status: "Published",
      students: 5280,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&q=80",
    },
    {
      id: 7,
      title: "Mobile App Development with React Native",
      instructor: "James Wilson",
      category: "Development",
      price: 89.99,
      status: "Published",
      students: 6800,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&q=80",
    },
    {
      id: 8,
      title: "Photography Masterclass: A Complete Guide",
      instructor: "Sophia Garcia",
      category: "Photography",
      price: 74.99,
      status: "Published",
      students: 5400,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&q=80",
    },
  ];

  // Filter courses based on search query and filters
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      course.category.toLowerCase() === selectedCategory;

    const matchesStatus =
      selectedStatus === "all" ||
      course.status.toLowerCase() === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Stats for the top cards
  const stats = [
    {
      title: "Total Courses",
      value: courses.length,
    },
    {
      title: "Published Courses",
      value: courses.filter((course) => course.status === "Published").length,
    },
    {
      title: "Draft Courses",
      value: courses.filter((course) => course.status === "Draft").length,
    },
    {
      title: "Total Students",
      value: courses
        .reduce((sum, course) => sum + course.students, 0)
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

      {/* Courses Table Card */}
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <CardTitle>Courses Management</CardTitle>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Plus className="mr-2 h-4 w-4" /> Add New Course
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
                  placeholder="Search courses..."
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
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="data science">Data Science</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="photography">Photography</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Courses Table */}
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="relative h-10 w-10 rounded overflow-hidden">
                            <Image
                              src={course.image}
                              alt={course.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{course.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {course.instructor}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{course.category}</Badge>
                      </TableCell>
                      <TableCell>${course.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge
                          className={`${
                            course.status === "Published"
                              ? "bg-green-500"
                              : "bg-yellow-500"
                          }`}
                        >
                          {course.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{course.students.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <span className="text-amber-500 mr-1">★</span>
                          <span>{course.rating}</span>
                        </div>
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
                    <TableCell colSpan={7} className="h-24 text-center">
                      No courses found.
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
              <strong>{courses.length}</strong> courses
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
