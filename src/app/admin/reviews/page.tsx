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
  Search,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Eye,
  Edit,
  Trash2,
  MessageSquare,
  Star,
  Download,
} from "lucide-react";
import Image from "next/image";

export default function ReviewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRating, setSelectedRating] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Sample review data
  const reviews = [
    {
      id: 1,
      course: "Complete Web Development Bootcamp",
      courseImage:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&q=80",
      student: "John Doe",
      studentImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      rating: 5,
      comment:
        "This course was amazing! I learned so much and the instructor was very clear in their explanations.",
      date: "2023-07-15",
      status: "Published",
    },
    {
      id: 2,
      course: "Advanced UI/UX Design Masterclass",
      courseImage:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=100&q=80",
      student: "Jane Smith",
      studentImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
      rating: 4,
      comment:
        "Great course with practical examples. Would have liked more advanced topics towards the end.",
      date: "2023-07-14",
      status: "Published",
    },
    {
      id: 3,
      course: "Python Programming: From Beginner to Advanced",
      courseImage:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=100&q=80",
      student: "Robert Johnson",
      studentImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
      rating: 3,
      comment:
        "Good introduction to Python, but some sections felt rushed. More exercises would be helpful.",
      date: "2023-07-12",
      status: "Published",
    },
    {
      id: 4,
      course: "Digital Marketing Strategy Masterclass",
      courseImage:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=100&q=80",
      student: "Emily Davis",
      studentImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      rating: 5,
      comment:
        "Excellent course! The strategies taught have already helped me improve my marketing campaigns.",
      date: "2023-07-10",
      status: "Published",
    },
    {
      id: 5,
      course: "Data Science: Complete Data Analysis Course",
      courseImage:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&q=80",
      student: "Michael Brown",
      studentImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      rating: 2,
      comment:
        "The content was too basic for a course labeled as 'complete'. Expected more advanced topics.",
      date: "2023-07-08",
      status: "Under Review",
    },
    {
      id: 6,
      course: "Financial Accounting Fundamentals",
      courseImage:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&q=80",
      student: "Sarah Wilson",
      studentImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      rating: 4,
      comment:
        "Very informative and well-structured. The practice problems were particularly helpful.",
      date: "2023-07-05",
      status: "Published",
    },
    {
      id: 7,
      course: "Mobile App Development with React Native",
      courseImage:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&q=80",
      student: "David Lee",
      studentImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      rating: 1,
      comment:
        "Outdated content with many errors. The code examples don't work with the latest version of React Native.",
      date: "2023-07-03",
      status: "Hidden",
    },
    {
      id: 8,
      course: "Photography Masterclass: A Complete Guide",
      courseImage:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&q=80",
      student: "Lisa Taylor",
      studentImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      rating: 5,
      comment:
        "This course transformed my photography skills! The instructor's explanations were clear and the assignments were challenging but fun.",
      date: "2023-07-01",
      status: "Published",
    },
  ];

  // Filter reviews based on search query and filters
  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRating =
      selectedRating === "all" || review.rating.toString() === selectedRating;

    const matchesStatus =
      selectedStatus === "all" ||
      review.status.toLowerCase() === selectedStatus.toLowerCase();

    return matchesSearch && matchesRating && matchesStatus;
  });

  // Stats for the top cards
  const stats = [
    {
      title: "Total Reviews",
      value: reviews.length,
    },
    {
      title: "Average Rating",
      value: `${(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)}/5`,
    },
    {
      title: "Published Reviews",
      value: reviews.filter((review) => review.status === "Published").length,
    },
    {
      title: "Hidden Reviews",
      value: reviews.filter((review) => review.status === "Hidden").length,
    },
  ];

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
          />
        ))}
      </div>
    );
  };

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

      {/* Reviews Table Card */}
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <CardTitle>Reviews Management</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters and Search */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex flex-1 items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search reviews..."
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
              <Select value={selectedRating} onValueChange={setSelectedRating}>
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Filter by rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4 Stars</SelectItem>
                  <SelectItem value="3">3 Stars</SelectItem>
                  <SelectItem value="2">2 Stars</SelectItem>
                  <SelectItem value="1">1 Star</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="under review">Under Review</SelectItem>
                  <SelectItem value="hidden">Hidden</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Reviews Table */}
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Review</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReviews.length > 0 ? (
                  filteredReviews.map((review) => (
                    <TableRow key={review.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="relative h-10 w-10 rounded overflow-hidden">
                            <Image
                              src={review.courseImage}
                              alt={review.course}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="font-medium line-clamp-1 max-w-[200px]">
                            {review.course}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="relative h-8 w-8 rounded-full overflow-hidden">
                            <Image
                              src={review.studentImage}
                              alt={review.student}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="font-medium">{review.student}</div>
                        </div>
                      </TableCell>
                      <TableCell>{renderStars(review.rating)}</TableCell>
                      <TableCell>
                        <div className="max-w-[300px] line-clamp-2">
                          {review.comment}
                        </div>
                      </TableCell>
                      <TableCell>{review.date}</TableCell>
                      <TableCell>
                        <Badge
                          className={`${
                            review.status === "Published"
                              ? "bg-green-500"
                              : review.status === "Under Review"
                                ? "bg-yellow-500"
                                : "bg-gray-500"
                          }`}
                        >
                          {review.status}
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
                    <TableCell colSpan={7} className="h-24 text-center">
                      No reviews found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-muted-foreground">
              Showing <strong>1</strong> to{" "}
              <strong>{filteredReviews.length}</strong> of{" "}
              <strong>{reviews.length}</strong> reviews
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
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                disabled
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
