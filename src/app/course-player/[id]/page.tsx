"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  MessageSquare,
  Paperclip,
  Play,
  ThumbsUp,
  Video,
} from "lucide-react";

export default function CoursePlayerPage({
  params,
}: {
  params: { id: string };
}) {
  const [activeTab, setActiveTab] = useState("content");
  const [currentLecture, setCurrentLecture] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [noteText, setNoteText] = useState("");
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Mock course data
  const course = {
    id: parseInt(params.id),
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    progress: 35,
    totalLectures: 164,
    completedLectures: 58,
    sections: [
      {
        id: 1,
        title: "Introduction to Web Development",
        isCompleted: true,
        lectures: [
          {
            id: 1,
            title: "Welcome to the Course",
            duration: "5:22",
            isCompleted: true,
            type: "video",
          },
          {
            id: 2,
            title: "How the Internet Works",
            duration: "12:18",
            isCompleted: true,
            type: "video",
          },
          {
            id: 3,
            title: "Setting Up Your Development Environment",
            duration: "18:42",
            isCompleted: true,
            type: "video",
          },
          {
            id: 4,
            title: "Web Development Overview",
            duration: "15:10",
            isCompleted: true,
            type: "video",
          },
          {
            id: 5,
            title: "Introduction Resources",
            duration: "",
            isCompleted: true,
            type: "file",
          },
        ],
      },
      {
        id: 2,
        title: "HTML Fundamentals",
        isCompleted: false,
        lectures: [
          {
            id: 6,
            title: "Introduction to HTML",
            duration: "10:45",
            isCompleted: true,
            type: "video",
          },
          {
            id: 7,
            title: "HTML Document Structure",
            duration: "15:32",
            isCompleted: true,
            type: "video",
          },
          {
            id: 8,
            title: "Working with Text Elements",
            duration: "18:20",
            isCompleted: true,
            type: "video",
          },
          {
            id: 9,
            title: "HTML Lists",
            duration: "12:15",
            isCompleted: false,
            type: "video",
          },
          {
            id: 10,
            title: "HTML Links and Navigation",
            duration: "20:18",
            isCompleted: false,
            type: "video",
          },
          {
            id: 11,
            title: "HTML Cheat Sheet",
            duration: "",
            isCompleted: false,
            type: "file",
          },
          {
            id: 12,
            title: "HTML Practice Exercise",
            duration: "",
            isCompleted: false,
            type: "quiz",
          },
        ],
      },
      {
        id: 3,
        title: "CSS Fundamentals",
        isCompleted: false,
        lectures: [
          {
            id: 13,
            title: "Introduction to CSS",
            duration: "12:30",
            isCompleted: false,
            type: "video",
          },
          {
            id: 14,
            title: "CSS Selectors",
            duration: "18:45",
            isCompleted: false,
            type: "video",
          },
          {
            id: 15,
            title: "Working with Colors",
            duration: "15:20",
            isCompleted: false,
            type: "video",
          },
          {
            id: 16,
            title: "CSS Box Model",
            duration: "22:15",
            isCompleted: false,
            type: "video",
          },
          {
            id: 17,
            title: "Typography and Text Styling",
            duration: "20:10",
            isCompleted: false,
            type: "video",
          },
          {
            id: 18,
            title: "CSS Resources and Examples",
            duration: "",
            isCompleted: false,
            type: "file",
          },
        ],
      },
    ],
    currentSection: 1,
    currentLecture: 8,
  };

  // Mock quiz data
  const quiz = {
    title: "HTML Practice Exercise",
    description: "Test your knowledge of HTML fundamentals with this quiz.",
    timeLimit: 15, // minutes
    questions: [
      {
        id: 1,
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ol>", "<ul>", "<li>", "<dl>"],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Which attribute is used to define inline styles in HTML?",
        options: ["class", "styles", "style", "font"],
        correctAnswer: 2,
      },
      {
        id: 3,
        question:
          "Which HTML element is used to specify a header for a document or section?",
        options: ["<head>", "<header>", "<top>", "<heading>"],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "Which HTML tag is used to define a table row?",
        options: ["<tr>", "<td>", "<th>", "<table>"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "Which HTML element is used to define important text?",
        options: ["<important>", "<b>", "<strong>", "<em>"],
        correctAnswer: 2,
      },
    ],
  };

  // Flatten lectures for easy navigation
  const allLectures = course.sections.flatMap((section) =>
    section.lectures.map((lecture) => ({
      ...lecture,
      sectionId: section.id,
      sectionTitle: section.title,
    })),
  );

  // Find current lecture
  const activeLecture = allLectures[currentLecture];

  // Mock notes data
  const notes = [
    {
      id: 1,
      timestamp: "2:15",
      text: "Important concept about HTML structure",
      createdAt: "2 days ago",
    },
    {
      id: 2,
      timestamp: "8:30",
      text: "Remember to use semantic HTML elements for better accessibility",
      createdAt: "2 days ago",
    },
  ];

  // Mock Q&A data
  const questions = [
    {
      id: 1,
      user: "John Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      question: "How do I fix the CSS layout issue when elements overlap?",
      timestamp: "2 days ago",
      replies: 3,
      upvotes: 5,
      isInstructor: false,
    },
    {
      id: 2,
      user: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      question:
        "Important note about flexbox: Remember that flex-direction changes the main axis",
      timestamp: "1 week ago",
      replies: 2,
      upvotes: 12,
      isInstructor: true,
    },
  ];

  // Simulate video progress
  useEffect(() => {
    if (isVideoPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsVideoPlaying(false);
            return 100;
          }
          return prev + 1;
        });
      }, 300);

      return () => clearInterval(interval);
    }
  }, [isVideoPlaying]);

  const togglePlayPause = () => {
    setIsVideoPlaying(!isVideoPlaying);
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const goToNextLecture = () => {
    if (currentLecture < allLectures.length - 1) {
      setCurrentLecture(currentLecture + 1);
      setProgress(0);
      setIsVideoPlaying(false);
      setShowQuiz(false);
    }
  };

  const goToPreviousLecture = () => {
    if (currentLecture > 0) {
      setCurrentLecture(currentLecture - 1);
      setProgress(0);
      setIsVideoPlaying(false);
      setShowQuiz(false);
    }
  };

  const handleLectureClick = (index: number) => {
    setCurrentLecture(index);
    setProgress(0);
    setIsVideoPlaying(false);
    setShowQuiz(false);

    // If the lecture is a quiz, show the quiz interface
    if (allLectures[index].type === "quiz") {
      setShowQuiz(true);
      setSelectedAnswers({});
      setQuizSubmitted(false);
    }
  };

  const handleAddNote = () => {
    if (noteText.trim()) {
      // In a real app, you would save the note to a database
      console.log("Adding note:", noteText);
      setNoteText("");
    }
  };

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    if (!quizSubmitted) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionId]: answerIndex,
      }));
    }
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
    // In a real app, you would save the quiz results to a database
    console.log("Quiz submitted with answers:", selectedAnswers);
  };

  const calculateQuizScore = () => {
    if (!quizSubmitted) return null;

    let correctAnswers = 0;
    quiz.questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    return {
      score: correctAnswers,
      total: quiz.questions.length,
      percentage: Math.round((correctAnswers / quiz.questions.length) * 100),
    };
  };

  const quizScore = calculateQuizScore();

  return (
    <div className="bg-background min-h-screen">
      <div className="container py-4">
        <div className="flex items-center mb-4">
          <Link
            href={`/courses/${course.id}`}
            className="flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to course
          </Link>
          <div className="ml-auto flex items-center space-x-2">
            <Badge variant="outline" className="text-xs">
              {course.completedLectures}/{course.totalLectures} completed
            </Badge>
            <Progress
              value={(course.completedLectures / course.totalLectures) * 100}
              className="w-32 h-2"
            />
          </div>
        </div>

        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[calc(100vh-10rem)]"
        >
          {/* Sidebar */}
          <ResizablePanel
            defaultSize={25}
            minSize={20}
            maxSize={30}
            className="bg-card rounded-l-lg border"
          >
            <div className="p-4 border-b">
              <h2 className="font-semibold">Course Content</h2>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-14rem)]">
              <Accordion
                type="multiple"
                defaultValue={[`section-${course.currentSection}`]}
                className="w-full"
              >
                {course.sections.map((section, sectionIndex) => (
                  <AccordionItem
                    key={section.id}
                    value={`section-${section.id}`}
                  >
                    <AccordionTrigger className="px-4 py-2 hover:no-underline">
                      <div className="flex items-start text-left">
                        <div className="flex-1">
                          <div className="flex items-center">
                            <span className="text-sm font-medium">
                              {section.title}
                            </span>
                            {section.isCompleted && (
                              <CheckCircle className="h-4 w-4 ml-2 text-green-500" />
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {section.lectures.length} lectures
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-0 pb-1">
                      <ul className="space-y-1">
                        {section.lectures.map((lecture, lectureIndex) => {
                          const globalIndex = allLectures.findIndex(
                            (l) => l.id === lecture.id,
                          );
                          return (
                            <li
                              key={lecture.id}
                              className={`flex items-center px-4 py-2 text-sm cursor-pointer ${globalIndex === currentLecture ? "bg-muted font-medium" : "hover:bg-muted/50"}`}
                              onClick={() => handleLectureClick(globalIndex)}
                            >
                              <div className="flex items-center flex-1">
                                {lecture.type === "video" ? (
                                  <Video className="h-4 w-4 mr-2 text-muted-foreground" />
                                ) : lecture.type === "file" ? (
                                  <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                                ) : (
                                  <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                                )}
                                <span className="flex-1 truncate">
                                  {lecture.title}
                                </span>
                              </div>
                              <div className="flex items-center">
                                {lecture.isCompleted && (
                                  <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                                )}
                                {lecture.duration && (
                                  <span className="text-xs text-muted-foreground">
                                    {lecture.duration}
                                  </span>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ResizablePanel>

          <ResizableHandle />

          {/* Main Content */}
          <ResizablePanel defaultSize={75}>
            <div className="h-full flex flex-col">
              {/* Video Player or Quiz */}
              <div className="bg-black relative">
                {showQuiz ? (
                  <div className="bg-card p-6 min-h-[30rem]">
                    <div className="max-w-3xl mx-auto">
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-2">
                          {quiz.title}
                        </h2>
                        <p className="text-muted-foreground">
                          {quiz.description}
                        </p>
                        <div className="flex items-center mt-4">
                          <Badge variant="outline" className="mr-2">
                            {quiz.questions.length} Questions
                          </Badge>
                          <Badge variant="outline">
                            Time Limit: {quiz.timeLimit} minutes
                          </Badge>
                        </div>
                      </div>

                      {quizSubmitted && quizScore && (
                        <div
                          className={`mb-6 p-4 rounded-md ${quizScore.percentage >= 70 ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200"}`}
                        >
                          <h3 className="font-semibold text-lg mb-2">
                            Quiz Result: {quizScore.score}/{quizScore.total} (
                            {quizScore.percentage}%)
                          </h3>
                          <p>
                            {quizScore.percentage >= 70
                              ? "Congratulations! You passed the quiz."
                              : "You need to score at least 70% to pass. Please review the material and try again."}
                          </p>
                        </div>
                      )}

                      <div className="space-y-8">
                        {quiz.questions.map((question, index) => (
                          <div
                            key={question.id}
                            className="border rounded-md p-4"
                          >
                            <h3 className="font-medium mb-3">
                              Question {index + 1}: {question.question}
                            </h3>
                            <div className="space-y-2">
                              {question.options.map((option, optionIndex) => {
                                const isSelected =
                                  selectedAnswers[question.id] === optionIndex;
                                const isCorrect =
                                  quizSubmitted &&
                                  optionIndex === question.correctAnswer;
                                const isWrong =
                                  quizSubmitted && isSelected && !isCorrect;

                                return (
                                  <div
                                    key={optionIndex}
                                    className={`flex items-center p-3 rounded-md cursor-pointer border ${isSelected ? "border-primary" : "border-border"} ${
                                      quizSubmitted
                                        ? isCorrect
                                          ? "bg-green-50 border-green-200"
                                          : isWrong
                                            ? "bg-red-50 border-red-200"
                                            : ""
                                        : "hover:bg-muted/50"
                                    }`}
                                    onClick={() =>
                                      handleAnswerSelect(
                                        question.id,
                                        optionIndex,
                                      )
                                    }
                                  >
                                    <div
                                      className={`w-5 h-5 rounded-full border ${isSelected ? "bg-primary border-primary" : "border-muted-foreground"} flex items-center justify-center mr-3`}
                                    >
                                      {isSelected && (
                                        <div className="w-2 h-2 rounded-full bg-white"></div>
                                      )}
                                    </div>
                                    <span>{option}</span>
                                    {quizSubmitted && isCorrect && (
                                      <CheckCircle className="ml-auto h-5 w-5 text-green-500" />
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>

                      {!quizSubmitted ? (
                        <Button
                          className="mt-6 bg-orange-500 hover:bg-orange-600"
                          onClick={handleQuizSubmit}
                          disabled={
                            Object.keys(selectedAnswers).length !==
                            quiz.questions.length
                          }
                        >
                          Submit Quiz
                        </Button>
                      ) : (
                        <div className="flex space-x-3 mt-6">
                          <Button
                            variant="outline"
                            onClick={() => {
                              setSelectedAnswers({});
                              setQuizSubmitted(false);
                            }}
                          >
                            Retake Quiz
                          </Button>
                          <Button
                            className="bg-orange-500 hover:bg-orange-600"
                            onClick={goToNextLecture}
                          >
                            Continue to Next Lecture
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : activeLecture.type === "file" ? (
                  <div className="bg-card p-6 min-h-[30rem] flex items-center justify-center">
                    <div className="text-center max-w-md">
                      <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                      <h2 className="text-xl font-semibold mb-2">
                        {activeLecture.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        This lecture contains downloadable resources for your
                        reference.
                      </p>
                      <Button className="bg-orange-500 hover:bg-orange-600">
                        <Download className="mr-2 h-4 w-4" />
                        Download Resources
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-black relative">
                    <video
                      ref={videoRef}
                      className="w-full h-full"
                      poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80"
                      controls
                    >
                      <source src="#" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {!isVideoPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <Button
                          size="icon"
                          className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 h-16 w-16"
                          onClick={togglePlayPause}
                        >
                          <Play className="h-8 w-8 text-white" />
                        </Button>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex justify-between items-center text-white mb-2">
                        <h2 className="text-lg font-medium">
                          {activeLecture.title}
                        </h2>
                        <div className="text-sm">{activeLecture.duration}</div>
                      </div>
                      <Progress value={progress} className="h-1" />
                    </div>
                  </div>
                )}
              </div>

              {/* Lecture Navigation */}
              <div className="bg-card border-t border-b p-3 flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToPreviousLecture}
                  disabled={currentLecture === 0}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                <div className="text-sm">
                  Lecture {currentLecture + 1} of {allLectures.length}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToNextLecture}
                  disabled={currentLecture === allLectures.length - 1}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>

              {/* Tabs */}
              <div className="flex-1 overflow-y-auto">
                <Tabs
                  defaultValue="content"
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <div className="border-b sticky top-0 bg-background z-10">
                    <div className="container">
                      <TabsList className="w-full justify-start h-12">
                        <TabsTrigger
                          value="content"
                          className="flex-1 max-w-[150px]"
                        >
                          Overview
                        </TabsTrigger>
                        <TabsTrigger
                          value="notes"
                          className="flex-1 max-w-[150px]"
                        >
                          Notes
                        </TabsTrigger>
                        <TabsTrigger
                          value="questions"
                          className="flex-1 max-w-[150px]"
                        >
                          Q&A
                        </TabsTrigger>
                        <TabsTrigger
                          value="resources"
                          className="flex-1 max-w-[150px]"
                        >
                          Resources
                        </TabsTrigger>
                      </TabsList>
                    </div>
                  </div>

                  <div className="container py-6">
                    <TabsContent value="content" className="mt-0">
                      <div className="max-w-3xl">
                        <h1 className="text-2xl font-bold mb-2">
                          {activeLecture.title}
                        </h1>
                        <p className="text-muted-foreground mb-6">
                          {activeLecture.sectionTitle} •{" "}
                          {activeLecture.duration || "Resource"}
                        </p>

                        <div className="prose max-w-none">
                          <h2>About this lecture</h2>
                          <p>
                            In this lecture, you will learn about the
                            fundamentals of {activeLecture.title.toLowerCase()}.
                            This is an essential concept that will help you
                            build a strong foundation in web development.
                          </p>

                          <h3>Key Learning Points</h3>
                          <ul>
                            <li>
                              Understanding the core concepts of{" "}
                              {activeLecture.title.toLowerCase()}
                            </li>
                            <li>
                              Practical implementation with real-world examples
                            </li>
                            <li>Best practices and common pitfalls to avoid</li>
                            <li>
                              How this fits into the larger web development
                              ecosystem
                            </li>
                          </ul>

                          <h3>Additional Resources</h3>
                          <p>
                            Be sure to download the supplementary materials for
                            this lecture to get the most out of your learning
                            experience. Practice exercises are included to help
                            reinforce what you've learned.
                          </p>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="notes" className="mt-0">
                      <div className="max-w-3xl">
                        <h2 className="text-xl font-bold mb-4">Your Notes</h2>

                        <div className="mb-6">
                          <Textarea
                            placeholder="Add a new note..."
                            className="min-h-24 mb-2"
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                          />
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-muted-foreground">
                              Notes are private and only visible to you
                            </div>
                            <Button
                              size="sm"
                              className="bg-orange-500 hover:bg-orange-600"
                              onClick={handleAddNote}
                              disabled={!noteText.trim()}
                            >
                              Add Note
                            </Button>
                          </div>
                        </div>

                        <Separator className="my-6" />

                        {notes.length > 0 ? (
                          <div className="space-y-4">
                            {notes.map((note) => (
                              <Card key={note.id}>
                                <CardContent className="p-4">
                                  <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center">
                                      <Badge variant="outline" className="mr-2">
                                        {note.timestamp}
                                      </Badge>
                                      <span className="text-xs text-muted-foreground">
                                        {note.createdAt}
                                      </span>
                                    </div>
                                    <Button variant="ghost" size="sm">
                                      <Paperclip className="h-4 w-4" />
                                    </Button>
                                  </div>
                                  <p>{note.text}</p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-12">
                            <p className="text-muted-foreground">
                              You haven't added any notes for this lecture yet.
                            </p>
                          </div>
                        )}
                      </div>
                    </TabsContent>

                    <TabsContent value="questions" className="mt-0">
                      <div className="max-w-3xl">
                        <div className="flex justify-between items-center mb-6">
                          <h2 className="text-xl font-bold">
                            Questions & Answers
                          </h2>
                          <Button className="bg-orange-500 hover:bg-orange-600">
                            Ask a Question
                          </Button>
                        </div>

                        <div className="mb-6">
                          <Input
                            placeholder="Search questions..."
                            className="max-w-md"
                          />
                        </div>

                        {questions.length > 0 ? (
                          <div className="space-y-6">
                            {questions.map((question) => (
                              <Card key={question.id}>
                                <CardContent className="p-4">
                                  <div className="flex items-start space-x-4">
                                    <Image
                                      src={question.avatar}
                                      alt={question.user}
                                      width={40}
                                      height={40}
                                      className="rounded-full"
                                    />
                                    <div className="flex-1">
                                      <div className="flex items-center mb-1">
                                        <span className="font-medium mr-2">
                                          {question.user}
                                        </span>
                                        {question.isInstructor && (
                                          <Badge className="bg-orange-500 text-xs">
                                            Instructor
                                          </Badge>
                                        )}
                                        <span className="text-xs text-muted-foreground ml-auto">
                                          {question.timestamp}
                                        </span>
                                      </div>
                                      <p className="mb-3">
                                        {question.question}
                                      </p>
                                      <div className="flex items-center text-sm">
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className="text-muted-foreground"
                                        >
                                          <MessageSquare className="h-4 w-4 mr-1" />
                                          {question.replies}{" "}
                                          {question.replies === 1
                                            ? "reply"
                                            : "replies"}
                                        </Button>
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className="text-muted-foreground"
                                        >
                                          <ThumbsUp className="h-4 w-4 mr-1" />
                                          {question.upvotes}
                                        </Button>
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className="text-muted-foreground ml-auto"
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
                        ) : (
                          <div className="text-center py-12">
                            <p className="text-muted-foreground">
                              No questions have been asked about this lecture
                              yet.
                            </p>
                          </div>
                        )}
                      </div>
                    </TabsContent>

                    <TabsContent value="resources" className="mt-0">
                      <div className="max-w-3xl">
                        <h2 className="text-xl font-bold mb-6">
                          Lecture Resources
                        </h2>

                        <div className="space-y-4">
                          <Card>
                            <CardContent className="p-4 flex items-center">
                              <FileText className="h-8 w-8 mr-4 text-muted-foreground" />
                              <div className="flex-1">
                                <h3 className="font-medium">
                                  Lecture Slides - {activeLecture.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  PDF • 2.4 MB
                                </p>
                              </div>
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardContent className="p-4 flex items-center">
                              <FileText className="h-8 w-8 mr-4 text-muted-foreground" />
                              <div className="flex-1">
                                <h3 className="font-medium">Code Examples</h3>
                                <p className="text-sm text-muted-foreground">
                                  ZIP • 1.8 MB
                                </p>
                              </div>
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardContent className="p-4 flex items-center">
                              <FileText className="h-8 w-8 mr-4 text-muted-foreground" />
                              <div className="flex-1">
                                <h3 className="font-medium">
                                  Practice Exercises
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  PDF • 1.2 MB
                                </p>
                              </div>
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                            </CardContent>
                          </Card>

                          <Card>
                            <CardContent className="p-4 flex items-center">
                              <FileText className="h-8 w-8 mr-4 text-muted-foreground" />
                              <div className="flex-1">
                                <h3 className="font-medium">
                                  Additional Reading
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  PDF • 3.5 MB
                                </p>
                              </div>
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
