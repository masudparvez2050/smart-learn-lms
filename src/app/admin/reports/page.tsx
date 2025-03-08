"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import {
  Download,
  Calendar,
  FileText,
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
} from "lucide-react";

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("last-30-days");
  const [selectedReport, setSelectedReport] = useState("revenue");

  // Sample data for charts
  const revenueData = [
    { name: "Jan", revenue: 12500 },
    { name: "Feb", revenue: 15000 },
    { name: "Mar", revenue: 18000 },
    { name: "Apr", revenue: 22000 },
    { name: "May", revenue: 25000 },
    { name: "Jun", revenue: 30000 },
    { name: "Jul", revenue: 35000 },
  ];

  const enrollmentData = [
    { name: "Jan", enrollments: 850 },
    { name: "Feb", enrollments: 940 },
    { name: "Mar", enrollments: 1120 },
    { name: "Apr", enrollments: 1380 },
    { name: "May", enrollments: 1560 },
    { name: "Jun", enrollments: 1780 },
    { name: "Jul", enrollments: 2050 },
  ];

  const categoryData = [
    { name: "Development", value: 35 },
    { name: "Business", value: 25 },
    { name: "Design", value: 15 },
    { name: "Marketing", value: 10 },
    { name: "IT & Software", value: 15 },
  ];

  const userGrowthData = [
    { name: "Jan", students: 1200, instructors: 45 },
    { name: "Feb", students: 1350, instructors: 48 },
    { name: "Mar", students: 1500, instructors: 52 },
    { name: "Apr", students: 1750, instructors: 56 },
    { name: "May", students: 2000, instructors: 60 },
    { name: "Jun", students: 2300, instructors: 65 },
    { name: "Jul", students: 2600, instructors: 72 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  // Stats for the top cards
  const stats = [
    {
      title: "Total Revenue",
      value: "$235,492",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      title: "Total Enrollments",
      value: "45,672",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      title: "Active Students",
      value: "24,521",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Active Courses",
      value: "1,234",
      icon: <BookOpen className="h-5 w-5" />,
    },
  ];

  // Available reports
  const reports = [
    {
      id: "revenue",
      name: "Revenue Report",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      id: "enrollments",
      name: "Enrollment Report",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      id: "categories",
      name: "Category Distribution",
      icon: <PieChart className="h-5 w-5" />,
    },
    {
      id: "user-growth",
      name: "User Growth",
      icon: <Users className="h-5 w-5" />,
    },
  ];

  // Render the selected report
  const renderReport = () => {
    switch (selectedReport) {
      case "revenue":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
                    <Bar
                      dataKey="revenue"
                      fill="#f97316"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold">$235,492</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Avg. Order Value
                  </p>
                  <p className="text-2xl font-bold">$127.64</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Refund Rate</p>
                  <p className="text-2xl font-bold">2.3%</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Growth (YoY)</p>
                  <p className="text-2xl font-bold">+18.5%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      case "enrollments":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Enrollment Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={enrollmentData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="enrollments"
                      stroke="#f97316"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Total Enrollments
                  </p>
                  <p className="text-2xl font-bold">45,672</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Completion Rate
                  </p>
                  <p className="text-2xl font-bold">67.8%</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Avg. Course Length
                  </p>
                  <p className="text-2xl font-bold">6.2 hrs</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Growth (MoM)</p>
                  <p className="text-2xl font-bold">+15.2%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      case "categories":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Course Category Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {categoryData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Total Categories
                  </p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Most Popular</p>
                  <p className="text-2xl font-bold">Development</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Fastest Growing
                  </p>
                  <p className="text-2xl font-bold">Data Science</p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      case "user-growth":
        return (
          <Card>
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="students"
                      stroke="#f97316"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="instructors"
                      stroke="#3b82f6"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Total Students
                  </p>
                  <p className="text-2xl font-bold">24,521</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Total Instructors
                  </p>
                  <p className="text-2xl font-bold">72</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Student Growth
                  </p>
                  <p className="text-2xl font-bold">+12.4%</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Instructor Growth
                  </p>
                  <p className="text-2xl font-bold">+8.7%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

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
              </div>
              <div className="mt-3">
                <h3 className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Report Controls */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {reports.map((report) => (
                <Button
                  key={report.id}
                  variant={selectedReport === report.id ? "default" : "outline"}
                  className={
                    selectedReport === report.id
                      ? "bg-orange-500 hover:bg-orange-600"
                      : ""
                  }
                  onClick={() => setSelectedReport(report.id)}
                >
                  {report.icon}
                  <span className="ml-2">{report.name}</span>
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-7-days">Last 7 Days</SelectItem>
                  <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                  <SelectItem value="last-90-days">Last 90 Days</SelectItem>
                  <SelectItem value="year-to-date">Year to Date</SelectItem>
                  <SelectItem value="all-time">All Time</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Custom Range</span>
              </Button>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Report Content */}
      {renderReport()}

      {/* Additional Reports */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Complete Web Development Bootcamp",
                  revenue: "$42,580",
                  students: 1250,
                },
                {
                  name: "Advanced UI/UX Design Masterclass",
                  revenue: "$38,920",
                  students: 980,
                },
                {
                  name: "Python Programming: From Beginner to Advanced",
                  revenue: "$35,450",
                  students: 1120,
                },
                {
                  name: "Digital Marketing Strategy Masterclass",
                  revenue: "$28,750",
                  students: 850,
                },
                {
                  name: "Data Science: Complete Data Analysis Course",
                  revenue: "$25,320",
                  students: 720,
                },
              ].map((course, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-2 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium line-clamp-1">{course.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {course.students} students
                    </p>
                  </div>
                  <p className="font-bold">{course.revenue}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Instructors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Sarah Johnson",
                  courses: 12,
                  students: 15420,
                  revenue: "$125,000",
                },
                {
                  name: "Michael Chen",
                  courses: 8,
                  students: 8320,
                  revenue: "$98,000",
                },
                {
                  name: "David Miller",
                  courses: 10,
                  students: 12150,
                  revenue: "$115,000",
                },
                {
                  name: "Emma Roberts",
                  courses: 7,
                  students: 9870,
                  revenue: "$87,000",
                },
                {
                  name: "Robert Zhang",
                  courses: 6,
                  students: 7650,
                  revenue: "$72,000",
                },
              ].map((instructor, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-2 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{instructor.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {instructor.courses} courses,{" "}
                      {instructor.students.toLocaleString()} students
                    </p>
                  </div>
                  <p className="font-bold">{instructor.revenue}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Available Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Financial Summary",
                description:
                  "Complete financial overview with revenue, refunds, and taxes",
                icon: <DollarSign className="h-5 w-5" />,
              },
              {
                title: "Student Engagement",
                description:
                  "Detailed analysis of student activity and course completion rates",
                icon: <Users className="h-5 w-5" />,
              },
              {
                title: "Content Performance",
                description:
                  "Insights into which courses and content perform best",
                icon: <BookOpen className="h-5 w-5" />,
              },
              {
                title: "Instructor Performance",
                description:
                  "Metrics on instructor ratings, engagement, and revenue",
                icon: <Users className="h-5 w-5" />,
              },
              {
                title: "Sales & Marketing",
                description:
                  "Conversion rates, traffic sources, and campaign performance",
                icon: <TrendingUp className="h-5 w-5" />,
              },
              {
                title: "Custom Report Builder",
                description:
                  "Create custom reports with the metrics that matter to you",
                icon: <FileText className="h-5 w-5" />,
              },
            ].map((report, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 hover:border-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-orange-100 dark:bg-orange-900/20 p-2 rounded-lg">
                    {report.icon}
                  </div>
                  <h3 className="font-medium">{report.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {report.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
