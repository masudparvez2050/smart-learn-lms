"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookOpen,
  Award,
  Edit,
  Facebook,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    role: "Student",
    bio: "Frontend developer passionate about creating beautiful and functional web applications. Currently learning React and Next.js to expand my skillset.",
    location: "New York, USA",
    website: "https://johndoe.com",
    joinDate: "January 2023",
    socialLinks: {
      twitter: "johndoe",
      linkedin: "johndoe",
      github: "johndoe",
      facebook: "",
      instagram: "",
    },
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    interests: ["Web Development", "UI/UX Design", "Mobile Development"],
    enrolledCourses: 5,
    completedCourses: 2,
    certificates: 2,
    notifications: {
      emailUpdates: true,
      courseAnnouncements: true,
      newCourses: false,
      promotions: false,
    },
    privacy: {
      profileVisibility: "public",
      showCourses: true,
      showCertificates: true,
    },
  };

  // Mock certificates data
  const certificates = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      issueDate: "March 15, 2023",
      instructor: "Sarah Johnson",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80",
    },
    {
      id: 2,
      title: "Advanced UI/UX Design Masterclass",
      issueDate: "May 22, 2023",
      instructor: "Michael Chen",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&q=80",
    },
  ];

  // Mock purchase history
  const purchaseHistory = [
    {
      id: "ORD-12345",
      date: "March 10, 2023",
      course: "Complete Web Development Bootcamp",
      amount: 94.99,
      status: "Completed",
    },
    {
      id: "ORD-12346",
      date: "May 18, 2023",
      course: "Advanced UI/UX Design Masterclass",
      amount: 89.99,
      status: "Completed",
    },
    {
      id: "ORD-12347",
      date: "July 5, 2023",
      course: "Python Programming: From Beginner to Advanced",
      amount: 84.99,
      status: "Completed",
    },
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    // In a real app, you would save the profile data to a database
    console.log("Saving profile data");
  };

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-80 space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  {isEditing && (
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute bottom-0 right-0 rounded-full"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-muted-foreground">{user.role}</p>
                <div className="flex items-center mt-2">
                  <Badge variant="secondary" className="mr-2">
                    <BookOpen className="h-3 w-3 mr-1" />
                    {user.enrolledCourses} Courses
                  </Badge>
                  <Badge variant="secondary">
                    <Award className="h-3 w-3 mr-1" />
                    {user.certificates} Certificates
                  </Badge>
                </div>
                <div className="mt-4 flex space-x-2">
                  {user.socialLinks.twitter && (
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full"
                      asChild
                    >
                      <a
                        href={`https://twitter.com/${user.socialLinks.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {user.socialLinks.linkedin && (
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full"
                      asChild
                    >
                      <a
                        href={`https://linkedin.com/in/${user.socialLinks.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {user.socialLinks.github && (
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full"
                      asChild
                    >
                      <a
                        href={`https://github.com/${user.socialLinks.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {user.socialLinks.facebook && (
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full"
                      asChild
                    >
                      <a
                        href={`https://facebook.com/${user.socialLinks.facebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {user.socialLinks.instagram && (
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full"
                      asChild
                    >
                      <a
                        href={`https://instagram.com/${user.socialLinks.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    Bio
                  </h3>
                  <p className="text-sm">{user.bio}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    Location
                  </h3>
                  <p className="text-sm">{user.location}</p>
                </div>
                {user.website && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      Website
                    </h3>
                    <a
                      href={user.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      <Globe className="h-3 w-3 mr-1" />
                      {user.website.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    Member Since
                  </h3>
                  <p className="text-sm">{user.joinDate}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Skills & Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {user.interests.map((interest, index) => (
                      <Badge key={index} variant="outline">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <Tabs defaultValue="profile" onValueChange={setActiveTab}>
            <TabsList className="w-full grid grid-cols-3 mb-8">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="purchases">Purchase History</TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      Manage your personal information
                    </CardDescription>
                  </div>
                  <Button
                    variant={isEditing ? "default" : "outline"}
                    onClick={() =>
                      isEditing ? handleSaveProfile() : setIsEditing(true)
                    }
                    className={
                      isEditing ? "bg-orange-500 hover:bg-orange-600" : ""
                    }
                  >
                    {isEditing ? "Save Changes" : "Edit Profile"}
                  </Button>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        defaultValue={user.name}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue={user.email}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        defaultValue={user.bio}
                        disabled={!isEditing}
                        className="min-h-24"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        defaultValue={user.location}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        defaultValue={user.website}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Social Links</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="twitter" className="flex items-center">
                          <Twitter className="h-4 w-4 mr-2" />
                          Twitter
                        </Label>
                        <Input
                          id="twitter"
                          defaultValue={user.socialLinks.twitter}
                          disabled={!isEditing}
                          placeholder="username"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedin" className="flex items-center">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Label>
                        <Input
                          id="linkedin"
                          defaultValue={user.socialLinks.linkedin}
                          disabled={!isEditing}
                          placeholder="username"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="github" className="flex items-center">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Label>
                        <Input
                          id="github"
                          defaultValue={user.socialLinks.github}
                          disabled={!isEditing}
                          placeholder="username"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="facebook" className="flex items-center">
                          <Facebook className="h-4 w-4 mr-2" />
                          Facebook
                        </Label>
                        <Input
                          id="facebook"
                          defaultValue={user.socialLinks.facebook}
                          disabled={!isEditing}
                          placeholder="username"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Skills & Interests</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="skills">Skills</Label>
                        <Input
                          id="skills"
                          defaultValue={user.skills.join(", ")}
                          disabled={!isEditing}
                          placeholder="HTML, CSS, JavaScript, etc."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="interests">Interests</Label>
                        <Input
                          id="interests"
                          defaultValue={user.interests.join(", ")}
                          disabled={!isEditing}
                          placeholder="Web Development, UI/UX Design, etc."
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Manage how we contact you</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Updates</h4>
                        <p className="text-sm text-muted-foreground">
                          Receive updates about your account activity
                        </p>
                      </div>
                      <Switch
                        checked={user.notifications.emailUpdates}
                        disabled={!isEditing}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Course Announcements</h4>
                        <p className="text-sm text-muted-foreground">
                          Receive updates from instructors for enrolled courses
                        </p>
                      </div>
                      <Switch
                        checked={user.notifications.courseAnnouncements}
                        disabled={!isEditing}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">
                          New Course Notifications
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Get notified when new courses are available
                        </p>
                      </div>
                      <Switch
                        checked={user.notifications.newCourses}
                        disabled={!isEditing}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Promotional Emails</h4>
                        <p className="text-sm text-muted-foreground">
                          Receive emails about promotions and discounts
                        </p>
                      </div>
                      <Switch
                        checked={user.notifications.promotions}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>
                    Control your profile visibility and data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="profileVisibility">
                        Profile Visibility
                      </Label>
                      <Select
                        defaultValue={user.privacy.profileVisibility}
                        disabled={!isEditing}
                      >
                        <SelectTrigger id="profileVisibility">
                          <SelectValue placeholder="Select visibility" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">
                            Public - Anyone can view your profile
                          </SelectItem>
                          <SelectItem value="students">
                            Students Only - Only enrolled students can view your
                            profile
                          </SelectItem>
                          <SelectItem value="private">
                            Private - Only you can view your profile
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <h4 className="font-medium">Show Enrolled Courses</h4>
                        <p className="text-sm text-muted-foreground">
                          Display your enrolled courses on your profile
                        </p>
                      </div>
                      <Switch
                        checked={user.privacy.showCourses}
                        disabled={!isEditing}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Show Certificates</h4>
                        <p className="text-sm text-muted-foreground">
                          Display your earned certificates on your profile
                        </p>
                      </div>
                      <Switch
                        checked={user.privacy.showCertificates}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Certificates Tab */}
            <TabsContent value="certificates" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Certificates</CardTitle>
                  <CardDescription>
                    Certificates you've earned from completed courses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {certificates.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {certificates.map((certificate) => (
                        <Card key={certificate.id} className="overflow-hidden">
                          <div className="relative aspect-[4/3]">
                            <Image
                              src={certificate.image}
                              alt={certificate.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                              <div className="p-4 text-white">
                                <h3 className="font-bold">
                                  {certificate.title}
                                </h3>
                                <p className="text-sm opacity-90">
                                  Instructor: {certificate.instructor}
                                </p>
                              </div>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  Issued on {certificate.issueDate}
                                </p>
                              </div>
                              <Button
                                size="sm"
                                className="bg-orange-500 hover:bg-orange-600"
                              >
                                View Certificate
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Award className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">
                        No Certificates Yet
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Complete courses to earn certificates and showcase your
                        skills.
                      </p>
                      <Button className="bg-orange-500 hover:bg-orange-600">
                        Browse Courses
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Purchase History Tab */}
            <TabsContent value="purchases" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Purchase History</CardTitle>
                  <CardDescription>
                    Your course purchase history and receipts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {purchaseHistory.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium">
                              Order ID
                            </th>
                            <th className="text-left py-3 px-4 font-medium">
                              Date
                            </th>
                            <th className="text-left py-3 px-4 font-medium">
                              Course
                            </th>
                            <th className="text-right py-3 px-4 font-medium">
                              Amount
                            </th>
                            <th className="text-right py-3 px-4 font-medium">
                              Status
                            </th>
                            <th className="text-right py-3 px-4 font-medium">
                              Receipt
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {purchaseHistory.map((purchase) => (
                            <tr key={purchase.id} className="border-b">
                              <td className="py-3 px-4">{purchase.id}</td>
                              <td className="py-3 px-4">{purchase.date}</td>
                              <td className="py-3 px-4">{purchase.course}</td>
                              <td className="py-3 px-4 text-right">
                                ${purchase.amount.toFixed(2)}
                              </td>
                              <td className="py-3 px-4 text-right">
                                <Badge
                                  variant="outline"
                                  className="bg-green-50 text-green-700 border-green-200"
                                >
                                  {purchase.status}
                                </Badge>
                              </td>
                              <td className="py-3 px-4 text-right">
                                <Button variant="ghost" size="sm">
                                  Download
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">
                        You haven't made any purchases yet.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
