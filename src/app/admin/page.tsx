import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

export default function AdminDashboard() {
  // Sample data for stats
  const stats = [
    {
      title: "Total Users",
      value: "24,521",
      change: "+12%",
      trend: "up",
      icon: <Users className="h-5 w-5" />,
      link: "/admin/users",
    },
    {
      title: "Total Courses",
      value: "1,234",
      change: "+7%",
      trend: "up",
      icon: <BookOpen className="h-5 w-5" />,
      link: "/admin/courses",
    },
    {
      title: "Revenue",
      value: "$235,492",
      change: "+18%",
      trend: "up",
      icon: <DollarSign className="h-5 w-5" />,
      link: "/admin/sales",
    },
    {
      title: "Enrollments",
      value: "45,672",
      change: "-3%",
      trend: "down",
      icon: <TrendingUp className="h-5 w-5" />,
      link: "/admin/reports",
    },
  ];

  const recentUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      date: "2023-07-15",
      type: "Student",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      date: "2023-07-14",
      type: "Instructor",
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert@example.com",
      date: "2023-07-14",
      type: "Student",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      date: "2023-07-13",
      type: "Student",
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael@example.com",
      date: "2023-07-12",
      type: "Instructor",
    },
  ];

  const recentCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      price: "$94.99",
      date: "2023-07-15",
      status: "Active",
    },
    {
      id: 2,
      title: "Advanced UI/UX Design Masterclass",
      instructor: "Michael Chen",
      price: "$89.99",
      date: "2023-07-14",
      status: "Active",
    },
    {
      id: 3,
      title: "Python Programming: From Beginner to Advanced",
      instructor: "David Miller",
      price: "$84.99",
      date: "2023-07-13",
      status: "Pending",
    },
    {
      id: 4,
      title: "Digital Marketing Strategy Masterclass",
      instructor: "Emma Roberts",
      price: "$79.99",
      date: "2023-07-12",
      status: "Active",
    },
    {
      id: 5,
      title: "Data Science: Complete Data Analysis Course",
      instructor: "Robert Zhang",
      price: "$94.99",
      date: "2023-07-11",
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="bg-orange-100 dark:bg-orange-900/20 p-2 rounded-lg">
                  {stat.icon}
                </div>
                <span
                  className={`flex items-center text-sm font-medium ${
                    stat.trend === "up"
                      ? "text-green-600 dark:text-green-500"
                      : "text-red-600 dark:text-red-500"
                  }`}
                >
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="mr-1 h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="mr-1 h-4 w-4" />
                  )}
                  {stat.change}
                </span>
              </div>
              <div className="mt-3">
                <h3 className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <div className="mt-4">
                <Link
                  href={stat.link}
                  className="text-sm text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
                >
                  View details
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Users */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">{user.date}</p>
                    <p className="text-xs text-muted-foreground">{user.type}</p>
                  </div>
                </div>
              ))}
              <div className="pt-2">
                <Link
                  href="/admin/users"
                  className="text-sm text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
                >
                  View all users
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Courses */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium line-clamp-1">{course.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {course.instructor}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{course.price}</p>
                    <p
                      className={`text-xs ${
                        course.status === "Active"
                          ? "text-green-600 dark:text-green-500"
                          : "text-yellow-600 dark:text-yellow-500"
                      }`}
                    >
                      {course.status}
                    </p>
                  </div>
                </div>
              ))}
              <div className="pt-2">
                <Link
                  href="/admin/courses"
                  className="text-sm text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
                >
                  View all courses
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Active Students
                  </p>
                  <p className="text-2xl font-bold">18,652</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Course Completion
                  </p>
                  <p className="text-2xl font-bold">67.8%</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Avg. Rating</p>
                  <p className="text-2xl font-bold">4.7/5</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    New Users (30d)
                  </p>
                  <p className="text-2xl font-bold">+2,156</p>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/admin/reports"
                  className="text-sm text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
                >
                  View detailed reports
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/admin/courses/new">
              <div className="bg-orange-100 dark:bg-orange-900/20 p-4 rounded-lg text-center hover:bg-orange-200 dark:hover:bg-orange-900/30 transition-colors cursor-pointer">
                <BookOpen className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <p className="font-medium">Add Course</p>
              </div>
            </Link>
            <Link href="/admin/users/new">
              <div className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded-lg text-center hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors cursor-pointer">
                <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <p className="font-medium">Add User</p>
              </div>
            </Link>
            <Link href="/admin/sales/discounts">
              <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-lg text-center hover:bg-green-200 dark:hover:bg-green-900/30 transition-colors cursor-pointer">
                <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <p className="font-medium">Create Discount</p>
              </div>
            </Link>
            <Link href="/admin/reports/generate">
              <div className="bg-purple-100 dark:bg-purple-900/20 p-4 rounded-lg text-center hover:bg-purple-200 dark:hover:bg-purple-900/30 transition-colors cursor-pointer">
                <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <p className="font-medium">Generate Report</p>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
