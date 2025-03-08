"use client";

import { useState } from "react";
import Link from "next/link";
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
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  MoreVertical,
  Plus,
  Download,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Eye,
  Edit,
  Trash2,
  FileQuestion,
} from "lucide-react";

export default function QuizzesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample quiz data
  const quizzes = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      course: "Complete Web Development Bootcamp",
      questions: 10,
      attempts: 1250,
      avgScore: 78,
      lastUpdated: "2023-07-15",
    },
    {
      id: 2,
      title: "UI/UX Design Principles",
      course: "Advanced UI/UX Design Masterclass",
      questions: 8,
      attempts: 820,
      avgScore: 82,
      lastUpdated: "2023-07-10",
    },
    {
      id: 3,
      title: "Python Basics",
      course: "Python Programming: From Beginner to Advanced",
      questions: 15,
      attempts: 1540,
      avgScore: 75,
      lastUpdated: "2023-07-08",
    },
    {
      id: 4,
      title: "Digital Marketing Strategies",
      course: "Digital Marketing Strategy Masterclass",
      questions: 12,
      attempts: 950,
      avgScore: 80,
      lastUpdated: "2023-07-05",
    },
    {
      id: 5,
      title: "Data Science Concepts",
      course: "Data Science: Complete Data Analysis Course",
      questions: 20,
      attempts: 780,
      avgScore: 72,
      lastUpdated: "2023-07-01",
    },
    {
      id: 6,
      title: "Financial Accounting Quiz",
      course: "Financial Accounting Fundamentals",
      questions: 15,
      attempts: 620,
      avgScore: 76,
      lastUpdated: "2023-06-28",
    },
    {
      id: 7,
      title: "React Native Essentials",
      course: "Mobile App Development with React Native",
      questions: 10,
      attempts: 480,
      avgScore: 85,
      lastUpdated: "2023-06-25",
    },
    {
      id: 8,
      title: "Photography Techniques",
      course: "Photography Masterclass: A Complete Guide",
      questions: 12,
      attempts: 350,
      avgScore: 88,
      lastUpdated: "2023-06-20",
    },
  ];

  // Filter quizzes based on search query
  const filteredQuizzes = quizzes.filter((quiz) => {
    return (
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.course.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Stats for the top cards
  const stats = [
    {
      title: "Total Quizzes",
      value: quizzes.length,
    },
    {
      title: "Total Questions",
      value: quizzes.reduce((sum, quiz) => sum + quiz.questions, 0),
    },
    {
      title: "Total Attempts",
      value: quizzes
        .reduce((sum, quiz) => sum + quiz.attempts, 0)
        .toLocaleString(),
    },
    {
      title: "Average Score",
      value: `${Math.round(
        quizzes.reduce((sum, quiz) => sum + quiz.avgScore, 0) / quizzes.length,
      )}%`,
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

      {/* Quizzes Table Card */}
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <CardTitle>Quizzes Management</CardTitle>
          <Link href="/admin/quizzes/new">
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Plus className="mr-2 h-4 w-4" /> Create New Quiz
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          {/* Filters and Search */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex flex-1 items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search quizzes..."
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
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quizzes Table */}
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Quiz Title</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Questions</TableHead>
                  <TableHead>Attempts</TableHead>
                  <TableHead>Avg. Score</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredQuizzes.length > 0 ? (
                  filteredQuizzes.map((quiz) => (
                    <TableRow key={quiz.id}>
                      <TableCell className="font-medium">
                        {quiz.title}
                      </TableCell>
                      <TableCell>{quiz.course}</TableCell>
                      <TableCell>{quiz.questions}</TableCell>
                      <TableCell>{quiz.attempts.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge
                          className={`${
                            quiz.avgScore >= 80
                              ? "bg-green-500"
                              : quiz.avgScore >= 70
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }`}
                        >
                          {quiz.avgScore}%
                        </Badge>
                      </TableCell>
                      <TableCell>{quiz.lastUpdated}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-1">
                          <Link href={`/admin/quizzes/${quiz.id}/results`}>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Link href={`/admin/quizzes/${quiz.id}/edit`}>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </Link>
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
                      No quizzes found.
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
              <strong>{filteredQuizzes.length}</strong> of{" "}
              <strong>{quizzes.length}</strong> quizzes
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
