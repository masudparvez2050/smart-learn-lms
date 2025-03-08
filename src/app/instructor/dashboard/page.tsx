"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  BarChart,
  BookOpen,
  DollarSign,
  FileText,
  MessageSquare,
  PlusCircle,
  Star,
  TrendingUp,
  Upload,
  Users,
  Video,
} from "lucide-react";

export default function InstructorDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for instructor courses
  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      students: 15420,
      rating: 4.8,
      reviews: 4287,
      revenue: 154200,
      status: "Published",
      lastUpdated: "2 weeks ago",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80",
    },
    {
      id: 2,
      title: "Advanced JavaScript: From Fundamentals to Functional JS",
      students: 8320,
      rating: 4.9,
      reviews: 2150,
      revenue: 83200,
      status: "Published",
      lastUpdated: "1 month ago",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&q=80",
    },
    {
      id: 3,
      title: "React & Redux Masterclass",
      students: 12150,
      rating: 4.7,
      reviews: 3245,
      revenue: 121500,
      status: "Published",
      lastUpdated: "3 weeks ago",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&q=80",
    },
    {
      id: 4,
      title: "Node.js: The Complete Guide",
      students: 0,
      rating: 0,
      reviews: 0,
      revenue: 0,
      status: "Draft",
      lastUpdated: "Just now",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80",
    },
  ];

  // Mock data for revenue
  const revenueData = {
    total: 358900,
    thisMonth: 42500,
    lastMonth: 38700,
    pending: 12800,
    monthlyTrend: [
      { month: "Jan", amount: 28500 },
      { month: "Feb", amount: 32400 },
      { month: "Mar", amount: 35600 },
      { month: "Apr", amount: 33200 },
      { month: "May", amount: 38700 },
      { month: "Jun", amount: 42500 },
    ],
  };

  // Mock data for student messages
  const messages = [
    {
      id: 1,
      student: "John Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      course: "Complete Web Development Bootcamp",
      message:
        "I'm having trouble with the React section. Can you provide more examples?",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      student: "Emily Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      course: "Advanced JavaScript: From Fundamentals to Functional JS",
      message:
        "Thank you for the detailed explanation on closures. It really helped!",
      time: "1 day ago",
      unread: false,
    },
    {
      id: 3,
      student: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      course: "React & Redux Masterclass",
      message:
        "Could you explain the Redux middleware concept again? I'm still confused.",
      time: "2 days ago",
      unread: false,
    },
  ];

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-64 space-y-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col items-center space-y-3 py-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden bg-muted">
                  <Image
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-medium">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">Instructor</p>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <nav className="space-y-1">
                <Link
                  href="/instructor/dashboard"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-orange-500 text-white"
                >
                  <BarChart className="mr-3 h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="/instructor/courses"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-muted"
                >
                  <BookOpen className="mr-3 h-5 w-5" />
                  My Courses
                </Link>
                <Link
                  href="/instructor/students"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-muted"
                >
                  <Users className="mr-3 h-5 w-5" />
                  Students
                </Link>
                <Link
                  href="/instructor/messages"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-muted"
                >
                  <MessageSquare className="mr-3 h-5 w-5" />
                  Messages
                  <Badge className="ml-auto bg-orange-500">3</Badge>
                </Link>
                <Link
                  href="/instructor/earnings"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-muted"
                >
                  <DollarSign className="mr-3 h-5 w-5" />
                  Earnings
                </Link>
                <Link
                  href="/instructor/reviews"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-muted"
                >
                  <Star className="mr-3 h-5 w-5" />
                  Reviews
                </Link>
              </nav>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Total Students</span>
                  </div>
                  <span className="font-medium">35,890</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Active Courses</span>
                  </div>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Avg. Rating</span>
                  </div>
                  <span className="font-medium">4.8</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Unread Messages</span>
                  </div>
                  <span className="font-medium">12</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Welcome Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold">Welcome back, Sarah!</h2>
                  <p className="text-muted-foreground">
                    Here's what's happening with your courses today.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex items-center">
                    <Upload className="mr-2 h-4 w-4" />
                    Import Course
                  </Button>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create Course
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Total Revenue
                    </p>
                    <h3 className="text-2xl font-bold mt-1">
                      ${revenueData.total.toLocaleString()}
                    </h3>
                    <p className="text-xs text-green-500 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" /> +12% from last
                      month
                    </p>
                  </div>
                  <div className="bg-orange-100 p-3 rounded-full">
                    <DollarSign className="h-5 w-5 text-orange-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Total Students
                    </p>
                    <h3 className="text-2xl font-bold mt-1">35,890</h3>
                    <p className="text-xs text-green-500 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" /> +8% from last
                      month
                    </p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Users className="h-5 w-5 text-blue-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Course Rating
                    </p>
                    <h3 className="text-2xl font-bold mt-1">4.8</h3>
                    <p className="text-xs text-green-500 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" /> +0.2 from last
                      month
                    </p>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Star className="h-5 w-5 text-yellow-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Total Courses
                    </p>
                    <h3 className="text-2xl font-bold mt-1">4</h3>
                    <p className="text-xs text-green-500 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" /> +1 from last month
                    </p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <BookOpen className="h-5 w-5 text-purple-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="overview" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="courses">My Courses</TabsTrigger>
              <TabsTrigger value="messages">Student Messages</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Revenue Overview</CardTitle>
                    <CardDescription>
                      Your earnings over the past 6 months
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-end justify-between">
                      {revenueData.monthlyTrend.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div
                            className="bg-orange-500 w-12 rounded-t-md"
                            style={{
                              height: `${(item.amount / 50000) * 100}%`,
                            }}
                          ></div>
                          <div className="text-xs mt-2">{item.month}</div>
                          <div className="text-xs font-medium">
                            ${(item.amount / 1000).toFixed(1)}k
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Earnings Summary</CardTitle>
                    <CardDescription>Current month earnings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">This Month</span>
                        <span className="font-medium">
                          ${revenueData.thisMonth.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Last Month</span>
                        <span className="font-medium">
                          ${revenueData.lastMonth.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Pending Payout</span>
                        <span className="font-medium">
                          ${revenueData.pending.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>

                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      View Detailed Report
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Latest updates from your courses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Users className="h-4 w-4 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium">New student enrolled</p>
                        <p className="text-sm text-muted-foreground">
                          John Smith enrolled in "Complete Web Development
                          Bootcamp"
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          2 hours ago
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="bg-yellow-100 p-2 rounded-full">
                        <Star className="h-4 w-4 text-yellow-500" />
                      </div>
                      <div>
                        <p className="font-medium">New course review</p>
                        <p className="text-sm text-muted-foreground">
                          Emily Johnson left a 5-star review on "Advanced
                          JavaScript"
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          5 hours ago
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <DollarSign className="h-4 w-4 text-green-500" />
                      </div>
                      <div>
                        <p className="font-medium">New sale</p>
                        <p className="text-sm text-muted-foreground">
                          You earned $94.99 from a sale of "React & Redux
                          Masterclass"
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          1 day ago
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <MessageSquare className="h-4 w-4 text-purple-500" />
                      </div>
                      <div>
                        <p className="font-medium">New message</p>
                        <p className="text-sm text-muted-foreground">
                          Michael Chen sent you a message about "React & Redux
                          Masterclass"
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          2 days ago
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Activity
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Courses Tab */}
            <TabsContent value="courses" className="space-y-6 mt-6">
              <div className="flex justify-between items-center">
                <Input placeholder="Search courses..." className="max-w-sm" />
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Create New Course
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <Card
                    key={course.id}
                    className="overflow-hidden hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                      <Badge
                        className={`absolute top-2 right-2 ${course.status === "Published" ? "bg-green-500" : "bg-amber-500"}`}
                      >
                        {course.status}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold line-clamp-1 mb-2">
                        {course.title}
                      </h3>

                      <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div>
                          <p className="text-muted-foreground">Students</p>
                          <p className="font-medium">
                            {course.students.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Rating</p>
                          <div className="flex items-center">
                            {course.rating > 0 ? (
                              <>
                                <Star
                                  size={14}
                                  className="text-amber-500 mr-1"
                                  fill="currentColor"
                                />
                                <span>
                                  {course.rating} ({course.reviews})
                                </span>
                              </>
                            ) : (
                              <span>No ratings</span>
                            )}
                          </div>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Revenue</p>
                          <p className="font-medium">
                            ${course.revenue.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Updated</p>
                          <p className="font-medium">{course.lastUpdated}</p>
                        </div>
                      </div>

                      <div className="flex justify-between mt-4">
                        <Button variant="outline" size="sm">
                          <FileText className="mr-1 h-4 w-4" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Video className="mr-1 h-4 w-4" />
                          Manage Content
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Create Course Card */}
                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200 border-dashed border-2 flex flex-col items-center justify-center p-6 h-full">
                  <PlusCircle className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="font-semibold text-center mb-2">
                    Create New Course
                  </h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Start building your next course and share your knowledge
                    with students
                  </p>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Get Started
                  </Button>
                </Card>
              </div>
            </TabsContent>

            {/* Messages Tab */}
            <TabsContent value="messages" className="space-y-6 mt-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Student Messages</h3>
                <Button variant="outline">Mark All as Read</Button>
              </div>

              <div className="space-y-4">
                {messages.map((message) => (
                  <Card
                    key={message.id}
                    className={
                      message.unread ? "border-l-4 border-l-orange-500" : ""
                    }
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <Image
                          src={message.avatar}
                          alt={message.student}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{message.student}</h4>
                              <p className="text-xs text-muted-foreground">
                                {message.course}
                              </p>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {message.time}
                            </div>
                          </div>
                          <p className="mt-2 text-sm">{message.message}</p>
                          <div className="flex justify-end mt-3 space-x-2">
                            <Button variant="outline" size="sm">
                              Ignore
                            </Button>
                            <Button
                              size="sm"
                              className="bg-orange-500 hover:bg-orange-600"
                            >
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline">View All Messages</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
