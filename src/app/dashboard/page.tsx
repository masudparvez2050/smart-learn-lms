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
import {
  Bell,
  BookOpen,
  Calendar,
  Clock,
  Play,
  Search,
  Settings,
  User,
} from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("my-courses");

  // Mock data for enrolled courses
  const enrolledCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      progress: 65,
      lastAccessed: "2 days ago",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80",
    },
    {
      id: 2,
      title: "Advanced UI/UX Design Masterclass",
      instructor: "Michael Chen",
      progress: 32,
      lastAccessed: "1 week ago",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&q=80",
    },
    {
      id: 3,
      title: "Python Programming: From Beginner to Advanced",
      instructor: "David Miller",
      progress: 78,
      lastAccessed: "Yesterday",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&q=80",
    },
  ];

  // Mock data for recommended courses
  const recommendedCourses = [
    {
      id: 4,
      title: "Data Science and Machine Learning Bootcamp",
      instructor: "Jennifer Lee",
      rating: 4.9,
      students: 12450,
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80",
    },
    {
      id: 5,
      title: "JavaScript: The Complete Guide",
      instructor: "Robert Zhang",
      rating: 4.8,
      students: 18320,
      price: 94.99,
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&q=80",
    },
    {
      id: 6,
      title: "Mobile App Development with React Native",
      instructor: "Emma Wilson",
      rating: 4.7,
      students: 9870,
      price: 84.99,
      image:
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=500&q=80",
    },
  ];

  // Mock data for upcoming sessions
  const upcomingSessions = [
    {
      id: 1,
      title: "Advanced CSS Techniques",
      instructor: "Sarah Johnson",
      date: "Tomorrow",
      time: "10:00 AM - 11:30 AM",
      course: "Complete Web Development Bootcamp",
    },
    {
      id: 2,
      title: "Responsive Design Workshop",
      instructor: "Michael Chen",
      date: "May 15, 2023",
      time: "2:00 PM - 4:00 PM",
      course: "Advanced UI/UX Design Masterclass",
    },
    {
      id: 3,
      title: "Python Data Structures",
      instructor: "David Miller",
      date: "May 18, 2023",
      time: "11:00 AM - 12:30 PM",
      course: "Python Programming: From Beginner to Advanced",
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
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-medium">John Doe</h3>
                  <p className="text-sm text-muted-foreground">Student</p>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <User className="mr-2 h-4 w-4" />
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <nav className="space-y-1">
                <Link
                  href="/dashboard"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-orange-500 text-white"
                >
                  <BookOpen className="mr-3 h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/courses"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-muted"
                >
                  <BookOpen className="mr-3 h-5 w-5" />
                  My Courses
                </Link>
                <Link
                  href="/dashboard/sessions"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-muted"
                >
                  <Calendar className="mr-3 h-5 w-5" />
                  Live Sessions
                </Link>
                <Link
                  href="/dashboard/notifications"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-muted"
                >
                  <Bell className="mr-3 h-5 w-5" />
                  Notifications
                  <Badge className="ml-auto bg-orange-500">3</Badge>
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-muted"
                >
                  <Settings className="mr-3 h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Web Development</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>UI/UX Design</span>
                    <span className="font-medium">32%</span>
                  </div>
                  <Progress value={32} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Python Programming</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
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
                  <h2 className="text-2xl font-bold">Welcome back, John!</h2>
                  <p className="text-muted-foreground">
                    Continue your learning journey
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex items-center">
                    <Search className="mr-2 h-4 w-4" />
                    Find Courses
                  </Button>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Resume Learning
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="my-courses" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="my-courses">My Courses</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
            </TabsList>

            {/* My Courses Tab */}
            <TabsContent value="my-courses" className="space-y-4 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
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
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button
                          size="icon"
                          className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        >
                          <Play className="h-6 w-6 text-white" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold line-clamp-1 mb-1">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {course.instructor}
                      </p>
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>Progress</span>
                            <span className="font-medium">
                              {course.progress}%
                            </span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            Last accessed {course.lastAccessed}
                          </div>
                          <Link
                            href={`/courses/${course.id}`}
                            className="text-primary hover:underline"
                          >
                            Continue
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-4">
                <Button variant="outline">View All My Courses</Button>
              </div>
            </TabsContent>

            {/* Recommended Tab */}
            <TabsContent value="recommended" className="space-y-4 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedCourses.map((course) => (
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
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button
                          size="icon"
                          className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        >
                          <Play className="h-6 w-6 text-white" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold line-clamp-1 mb-1">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {course.instructor}
                      </p>
                      <div className="flex items-center mb-2">
                        <div className="text-amber-500 text-sm mr-1">★</div>
                        <span className="text-xs font-medium">
                          {course.rating}
                        </span>
                        <span className="text-xs text-muted-foreground ml-2">
                          ({course.students.toLocaleString()})
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="font-bold">${course.price.toFixed(2)}</p>
                        <Button
                          size="sm"
                          className="bg-orange-500 hover:bg-orange-600"
                        >
                          Enroll
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-4">
                <Button variant="outline">Browse More Courses</Button>
              </div>
            </TabsContent>

            {/* Upcoming Sessions Tab */}
            <TabsContent value="upcoming" className="space-y-4 mt-6">
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <Card key={session.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="space-y-1">
                          <h3 className="font-semibold">{session.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {session.course}
                          </p>
                          <p className="text-sm">
                            Instructor: {session.instructor}
                          </p>
                        </div>
                        <div className="space-y-1 md:text-right">
                          <div className="flex items-center md:justify-end text-sm">
                            <Calendar className="mr-1 h-4 w-4 md:order-last md:ml-1 md:mr-0" />
                            {session.date}
                          </div>
                          <div className="flex items-center md:justify-end text-sm">
                            <Clock className="mr-1 h-4 w-4 md:order-last md:ml-1 md:mr-0" />
                            {session.time}
                          </div>
                          <Button
                            size="sm"
                            className="mt-2 bg-orange-500 hover:bg-orange-600"
                          >
                            Join Session
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-4">
                <Button variant="outline">View All Sessions</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
