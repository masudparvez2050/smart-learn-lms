"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Bell,
  Mail,
  MessageSquare,
  Send,
  Users,
  Calendar,
  CheckCircle,
  AlertCircle,
  Info,
  RefreshCw,
  Search,
  BookOpen,
  DollarSign,
} from "lucide-react";

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample notification data
  const notifications = [
    {
      id: 1,
      title: "New Course Published",
      message:
        "'Advanced UI/UX Design Masterclass' has been published by Michael Chen.",
      type: "course",
      status: "unread",
      date: "2023-07-15T10:30:00",
    },
    {
      id: 2,
      title: "New User Registration",
      message: "10 new users have registered in the last 24 hours.",
      type: "user",
      status: "read",
      date: "2023-07-14T15:45:00",
    },
    {
      id: 3,
      title: "Payment Processing Error",
      message:
        "There was an error processing payment for order #12345. Please check the payment gateway logs.",
      type: "payment",
      status: "unread",
      date: "2023-07-14T09:20:00",
    },
    {
      id: 4,
      title: "Course Review Alert",
      message:
        "A new 1-star review has been submitted for 'Python Programming: From Beginner to Advanced'.",
      type: "review",
      status: "unread",
      date: "2023-07-13T16:10:00",
    },
    {
      id: 5,
      title: "System Update Scheduled",
      message:
        "A system maintenance update is scheduled for July 20, 2023, at 02:00 UTC. The platform will be unavailable for approximately 30 minutes.",
      type: "system",
      status: "read",
      date: "2023-07-12T11:00:00",
    },
    {
      id: 6,
      title: "Instructor Application",
      message:
        "A new instructor application has been submitted by James Wilson. Please review their application.",
      type: "user",
      status: "read",
      date: "2023-07-11T14:30:00",
    },
    {
      id: 7,
      title: "Revenue Milestone",
      message:
        "Congratulations! The platform has reached $200,000 in monthly revenue for the first time.",
      type: "payment",
      status: "read",
      date: "2023-07-10T09:15:00",
    },
    {
      id: 8,
      title: "Content Reported",
      message:
        "A student has reported inappropriate content in 'Digital Marketing Strategy Masterclass'. Please review the report.",
      type: "course",
      status: "unread",
      date: "2023-07-09T17:45:00",
    },
  ];

  // Filter notifications based on active tab and search query
  const filteredNotifications = notifications.filter((notification) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "unread" && notification.status === "unread") ||
      activeTab === notification.type;

    const matchesSearch =
      notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (diffInDays === 0) {
      return (
        "Today, " +
        date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    } else if (diffInDays === 1) {
      return (
        "Yesterday, " +
        date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    } else {
      return (
        date.toLocaleDateString() +
        ", " +
        date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }
  };

  // Function to get icon based on notification type
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "course":
        return <BookOpen className="h-5 w-5 text-blue-500" />;
      case "user":
        return <Users className="h-5 w-5 text-green-500" />;
      case "payment":
        return <DollarSign className="h-5 w-5 text-orange-500" />;
      case "review":
        return <MessageSquare className="h-5 w-5 text-purple-500" />;
      case "system":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Info className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Notifications</h1>
          <p className="text-muted-foreground">
            Manage system notifications and alerts
          </p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Bell className="mr-2 h-4 w-4" />
            Mark All as Read
          </Button>
          <Button variant="outline">
            <Send className="mr-2 h-4 w-4" />
            Send Notification
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full md:w-auto"
            >
              <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full md:w-auto">
                <TabsTrigger value="all" className="text-xs md:text-sm">
                  All
                </TabsTrigger>
                <TabsTrigger value="unread" className="text-xs md:text-sm">
                  Unread
                </TabsTrigger>
                <TabsTrigger value="course" className="text-xs md:text-sm">
                  Courses
                </TabsTrigger>
                <TabsTrigger value="user" className="text-xs md:text-sm">
                  Users
                </TabsTrigger>
                <TabsTrigger value="payment" className="text-xs md:text-sm">
                  Payments
                </TabsTrigger>
                <TabsTrigger value="system" className="text-xs md:text-sm">
                  System
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="relative w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search notifications..."
                className="pl-8 w-full md:w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`border rounded-lg p-4 ${notification.status === "unread" ? "bg-muted/30 border-orange-200" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{notification.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {notification.message}
                          </p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-xs text-muted-foreground">
                            {formatDate(notification.date)}
                          </span>
                          {notification.status === "unread" && (
                            <Badge className="mt-1 bg-orange-500">New</Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-end mt-2">
                        <Button variant="ghost" size="sm" className="h-8">
                          Mark as Read
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium">No notifications found</h3>
                <p className="text-muted-foreground">
                  {activeTab !== "all"
                    ? `No ${activeTab} notifications available`
                    : searchQuery
                      ? "No notifications match your search"
                      : "You're all caught up!"}
                </p>
              </div>
            )}
          </div>

          {filteredNotifications.length > 0 && (
            <div className="flex justify-between items-center mt-6">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <RefreshCw className="h-4 w-4" />
                <span>Refresh</span>
              </Button>
              <div className="text-sm text-muted-foreground">
                Showing {filteredNotifications.length} of {notifications.length}{" "}
                notifications
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>
              Configure how notifications are processed and displayed
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Send important notifications to admin email
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Auto-archive</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically archive notifications after 30 days
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Critical Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Highlight high-priority system notifications
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Send Notification</CardTitle>
            <CardDescription>
              Create and send a new notification to users
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="recipient-type">Recipient Type</Label>
              <Select defaultValue="all-users">
                <SelectTrigger id="recipient-type">
                  <SelectValue placeholder="Select recipient type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-users">All Users</SelectItem>
                  <SelectItem value="students">Students Only</SelectItem>
                  <SelectItem value="instructors">Instructors Only</SelectItem>
                  <SelectItem value="admins">Administrators Only</SelectItem>
                  <SelectItem value="custom">Custom Selection</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notification-title">Notification Title</Label>
              <Input
                id="notification-title"
                placeholder="Enter notification title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notification-message">Message</Label>
              <Textarea
                id="notification-message"
                placeholder="Enter notification message"
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notification-type">Notification Type</Label>
              <Select defaultValue="info">
                <SelectTrigger id="notification-type">
                  <SelectValue placeholder="Select notification type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="info">Information</SelectItem>
                  <SelectItem value="success">Success</SelectItem>
                  <SelectItem value="warning">Warning</SelectItem>
                  <SelectItem value="error">Error</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-orange-500 hover:bg-orange-600">
              <Send className="mr-2 h-4 w-4" />
              Send Notification
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
