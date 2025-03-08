"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Download, RefreshCw } from "lucide-react";

export default function QuizResultsPage() {
  const params = useParams();
  const quizId = params.id;

  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [quizData, setQuizData] = useState<any>(null);
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    // In a real app, you would fetch the quiz data and results from your API
    // Simulating API call
    setTimeout(() => {
      // Sample quiz data
      setQuizData({
        id: quizId,
        title: "Web Development Fundamentals",
        course: "Complete Web Development Bootcamp",
        questions: 10,
        totalAttempts: 1250,
        avgScore: 78,
      });

      // Sample results data
      setResults([
        {
          id: 1,
          user: "John Doe",
          email: "john@example.com",
          score: 9,
          percentage: 90,
          timeTaken: "8m 45s",
          date: "2023-07-15",
        },
        {
          id: 2,
          user: "Jane Smith",
          email: "jane@example.com",
          score: 8,
          percentage: 80,
          timeTaken: "10m 20s",
          date: "2023-07-14",
        },
        {
          id: 3,
          user: "Robert Johnson",
          email: "robert@example.com",
          score: 7,
          percentage: 70,
          timeTaken: "12m 05s",
          date: "2023-07-14",
        },
        {
          id: 4,
          user: "Emily Davis",
          email: "emily@example.com",
          score: 10,
          percentage: 100,
          timeTaken: "7m 30s",
          date: "2023-07-13",
        },
        {
          id: 5,
          user: "Michael Brown",
          email: "michael@example.com",
          score: 6,
          percentage: 60,
          timeTaken: "15m 10s",
          date: "2023-07-12",
        },
        {
          id: 6,
          user: "Sarah Wilson",
          email: "sarah@example.com",
          score: 8,
          percentage: 80,
          timeTaken: "9m 55s",
          date: "2023-07-11",
        },
        {
          id: 7,
          user: "David Lee",
          email: "david@example.com",
          score: 5,
          percentage: 50,
          timeTaken: "11m 40s",
          date: "2023-07-10",
        },
        {
          id: 8,
          user: "Lisa Taylor",
          email: "lisa@example.com",
          score: 9,
          percentage: 90,
          timeTaken: "8m 15s",
          date: "2023-07-09",
        },
        {
          id: 9,
          user: "James Anderson",
          email: "james@example.com",
          score: 7,
          percentage: 70,
          timeTaken: "10m 30s",
          date: "2023-07-08",
        },
        {
          id: 10,
          user: "Jennifer Martin",
          email: "jennifer@example.com",
          score: 8,
          percentage: 80,
          timeTaken: "9m 20s",
          date: "2023-07-07",
        },
      ]);

      setLoading(false);
    }, 1000);
  }, [quizId]);

  // Filter results based on search query
  const filteredResults = results.filter((result) => {
    return (
      result.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Calculate stats
  const getPassRate = () => {
    if (results.length === 0) return 0;
    const passCount = results.filter(
      (result) => result.percentage >= 70,
    ).length;
    return Math.round((passCount / results.length) * 100);
  };

  const getAverageScore = () => {
    if (results.length === 0) return 0;
    const totalScore = results.reduce(
      (sum, result) => sum + result.percentage,
      0,
    );
    return Math.round(totalScore / results.length);
  };

  const getAverageTime = () => {
    if (results.length === 0) return "0m 0s";

    // Convert time strings to seconds
    const totalSeconds = results.reduce((sum, result) => {
      const [minutes, seconds] = result.timeTaken
        .replace("m ", ":")
        .replace("s", "")
        .split(":");
      return sum + (parseInt(minutes) * 60 + parseInt(seconds));
    }, 0);

    const avgSeconds = Math.round(totalSeconds / results.length);
    const minutes = Math.floor(avgSeconds / 60);
    const seconds = avgSeconds % 60;

    return `${minutes}m ${seconds}s`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="p-8">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p>Loading quiz results...</p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{quizData.title} - Results</h1>
        <p className="text-muted-foreground">
          View and analyze student performance on this quiz
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                Total Attempts
              </p>
              <p className="text-2xl font-bold">{quizData.totalAttempts}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                Average Score
              </p>
              <p className="text-2xl font-bold">{getAverageScore()}%</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                Pass Rate
              </p>
              <p className="text-2xl font-bold">{getPassRate()}%</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                Average Time
              </p>
              <p className="text-2xl font-bold">{getAverageTime()}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Results Table */}
      <Card>
        <CardHeader>
          <CardTitle>Student Results</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters and Search */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex flex-1 items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name or email..."
                  className="pl-8 w-full md:w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>

            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <span>Export Results</span>
            </Button>
          </div>

          {/* Table */}
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Percentage</TableHead>
                  <TableHead>Time Taken</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredResults.length > 0 ? (
                  filteredResults.map((result) => (
                    <TableRow key={result.id}>
                      <TableCell className="font-medium">
                        {result.user}
                      </TableCell>
                      <TableCell>{result.email}</TableCell>
                      <TableCell>
                        {result.score}/{quizData.questions}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${
                            result.percentage >= 80
                              ? "bg-green-500"
                              : result.percentage >= 70
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }`}
                        >
                          {result.percentage}%
                        </Badge>
                      </TableCell>
                      <TableCell>{result.timeTaken}</TableCell>
                      <TableCell>{result.date}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No results found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
