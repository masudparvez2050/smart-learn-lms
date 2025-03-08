"use client";

import { useState } from "react";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Search,
  Download,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Calendar,
  DollarSign,
  CreditCard,
  TrendingUp,
  ArrowUpRight,
  ShoppingCart,
  Users,
} from "lucide-react";

export default function SalesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("this-month");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Sample sales data
  const transactions = [
    {
      id: "TRX-001",
      date: "2023-07-15",
      customer: "John Doe",
      course: "Complete Web Development Bootcamp",
      amount: 94.99,
      status: "Completed",
      paymentMethod: "Credit Card",
    },
    {
      id: "TRX-002",
      date: "2023-07-14",
      customer: "Jane Smith",
      course: "Advanced UI/UX Design Masterclass",
      amount: 89.99,
      status: "Completed",
      paymentMethod: "PayPal",
    },
    {
      id: "TRX-003",
      date: "2023-07-14",
      customer: "Robert Johnson",
      course: "Python Programming: From Beginner to Advanced",
      amount: 84.99,
      status: "Completed",
      paymentMethod: "Credit Card",
    },
    {
      id: "TRX-004",
      date: "2023-07-13",
      customer: "Emily Davis",
      course: "Digital Marketing Strategy Masterclass",
      amount: 79.99,
      status: "Completed",
      paymentMethod: "PayPal",
    },
    {
      id: "TRX-005",
      date: "2023-07-12",
      customer: "Michael Brown",
      course: "Data Science: Complete Data Analysis Course",
      amount: 94.99,
      status: "Refunded",
      paymentMethod: "Credit Card",
    },
    {
      id: "TRX-006",
      date: "2023-07-12",
      customer: "Sarah Wilson",
      course: "Financial Accounting Fundamentals",
      amount: 69.99,
      status: "Completed",
      paymentMethod: "Credit Card",
    },
    {
      id: "TRX-007",
      date: "2023-07-11",
      customer: "David Lee",
      course: "Mobile App Development with React Native",
      amount: 89.99,
      status: "Pending",
      paymentMethod: "PayPal",
    },
    {
      id: "TRX-008",
      date: "2023-07-10",
      customer: "Lisa Taylor",
      course: "Photography Masterclass: A Complete Guide",
      amount: 74.99,
      status: "Completed",
      paymentMethod: "Credit Card",
    },
    {
      id: "TRX-009",
      date: "2023-07-10",
      customer: "James Anderson",
      course: "Complete Web Development Bootcamp",
      amount: 94.99,
      status: "Completed",
      paymentMethod: "PayPal",
    },
    {
      id: "TRX-010",
      date: "2023-07-09",
      customer: "Jennifer Martin",
      course: "Advanced UI/UX Design Masterclass",
      amount: 89.99,
      status: "Failed",
      paymentMethod: "Credit Card",
    },
  ];

  // Filter transactions based on search query and filters
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatus === "all" ||
      transaction.status.toLowerCase() === selectedStatus;

    return matchesSearch && matchesStatus;
  });

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

  const salesByCategory = [
    { name: "Development", value: 35 },
    { name: "Business", value: 25 },
    { name: "Design", value: 15 },
    { name: "Marketing", value: 10 },
    { name: "IT & Software", value: 15 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  // Stats for the top cards
  const stats = [
    {
      title: "Total Revenue",
      value: "$235,492",
      change: "+18%",
      trend: "up",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      title: "Sales Count",
      value: "1,845",
      change: "+12%",
      trend: "up",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      title: "Avg. Order Value",
      value: "$127.64",
      change: "+5%",
      trend: "up",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "-0.5%",
      trend: "down",
      icon: <TrendingUp className="h-5 w-5" />,
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
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  {stat.change}
                </span>
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

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Revenue Overview</CardTitle>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="this-year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#f97316" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Sales by Category */}
        <Card>
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={salesByCategory}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {salesByCategory.map((entry, index) => (
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
          </CardContent>
        </Card>
      </div>

      {/* Transactions Table Card */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters and Search */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex flex-1 items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search transactions..."
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
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Filter by Date</span>
              </Button>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="refunded">Refunded</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Payment Method</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">
                        {transaction.id}
                      </TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.customer}</TableCell>
                      <TableCell className="max-w-[200px] truncate">
                        {transaction.course}
                      </TableCell>
                      <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                      <TableCell>{transaction.paymentMethod}</TableCell>
                      <TableCell>
                        <Badge
                          className={`${
                            transaction.status === "Completed"
                              ? "bg-green-500"
                              : transaction.status === "Pending"
                                ? "bg-yellow-500"
                                : transaction.status === "Refunded"
                                  ? "bg-blue-500"
                                  : "bg-red-500"
                          }`}
                        >
                          {transaction.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center">
                      No transactions found.
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
              <strong>{transactions.length}</strong> transactions
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
