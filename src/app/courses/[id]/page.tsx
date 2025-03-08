"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  Clock,
  FileText,
  Globe,
  Play,
  Star,
  Users,
  Video,
} from "lucide-react";

export default function CourseDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock course data
  const course = {
    id: parseInt(params.id),
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    instructorTitle: "Senior Web Developer & Instructor",
    instructorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 4.8,
    students: 15420,
    reviews: 4287,
    price: 94.99,
    discountPrice: 14.99,
    discountEnds: "2 days left at this price!",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    level: "Beginner to Advanced",
    duration: "48 hours",
    lectures: 164,
    lastUpdated: "Last updated 06/2023",
    language: "English",
    description:
      "This comprehensive Web Development Bootcamp course will take you from absolute beginner to professional developer. You'll learn HTML, CSS, JavaScript, React, Node.js, MongoDB, and more. By the end of the course, you'll have the skills to build complete web applications from scratch.",
    whatYouWillLearn: [
      "Build 16 web development projects for your portfolio",
      "Learn HTML5, CSS3, JavaScript, Bootstrap 4, and React 18",
      "Master backend development with Node.js",
      "Learn professional developer best practices",
      "Create a full-fledged e-commerce application",
      "Implement user authentication and authorization",
      "Deploy your applications to production",
      "Understand how to connect to APIs and work with JSON",
    ],
    requirements: [
      "No programming experience needed - I'll teach you everything you need to know",
      "A computer with access to the internet",
      "No paid software required",
      "I'll walk you through, step-by-step how to get all the software installed",
    ],
    curriculum: [
      {
        title: "Introduction to Web Development",
        lectures: 8,
        duration: "1 hour 45 minutes",
        content: [
          { title: "Welcome to the Course", duration: "5:22", preview: true },
          { title: "How the Internet Works", duration: "12:18", preview: true },
          {
            title: "Setting Up Your Development Environment",
            duration: "18:42",
            preview: false,
          },
          {
            title: "Web Development Overview",
            duration: "15:10",
            preview: false,
          },
          {
            title: "Frontend vs Backend Development",
            duration: "14:25",
            preview: false,
          },
          {
            title: "Introduction to Version Control with Git",
            duration: "22:15",
            preview: false,
          },
          {
            title: "Your First GitHub Repository",
            duration: "10:32",
            preview: false,
          },
          {
            title: "Section Project: Setup and Planning",
            duration: "8:15",
            preview: false,
          },
        ],
      },
      {
        title: "HTML Fundamentals",
        lectures: 12,
        duration: "3 hours 20 minutes",
        content: [
          { title: "Introduction to HTML", duration: "10:45", preview: true },
          {
            title: "HTML Document Structure",
            duration: "15:32",
            preview: false,
          },
          {
            title: "Working with Text Elements",
            duration: "18:20",
            preview: false,
          },
          { title: "HTML Lists", duration: "12:15", preview: false },
          {
            title: "HTML Links and Navigation",
            duration: "20:18",
            preview: false,
          },
          { title: "Working with Images", duration: "16:42", preview: false },
          { title: "HTML Tables", duration: "22:10", preview: false },
          { title: "HTML Forms", duration: "28:35", preview: false },
          {
            title: "HTML5 Semantic Elements",
            duration: "19:15",
            preview: false,
          },
          { title: "HTML Validation", duration: "14:22", preview: false },
          { title: "Accessibility Basics", duration: "25:18", preview: false },
          {
            title: "Section Project: Building a Profile Page",
            duration: "35:30",
            preview: false,
          },
        ],
      },
      {
        title: "CSS Fundamentals",
        lectures: 15,
        duration: "4 hours 15 minutes",
        content: [
          { title: "Introduction to CSS", duration: "12:30", preview: true },
          { title: "CSS Selectors", duration: "18:45", preview: false },
          { title: "Working with Colors", duration: "15:20", preview: false },
          { title: "CSS Box Model", duration: "22:15", preview: false },
          {
            title: "Typography and Text Styling",
            duration: "20:10",
            preview: false,
          },
        ],
      },
      {
        title: "JavaScript Basics",
        lectures: 18,
        duration: "5 hours 30 minutes",
        content: [
          {
            title: "Introduction to JavaScript",
            duration: "15:20",
            preview: true,
          },
          {
            title: "Variables and Data Types",
            duration: "22:15",
            preview: false,
          },
          {
            title: "Operators and Expressions",
            duration: "18:40",
            preview: false,
          },
          {
            title: "Control Flow: Conditionals",
            duration: "25:10",
            preview: false,
          },
          { title: "Control Flow: Loops", duration: "20:35", preview: false },
        ],
      },
      {
        title: "Advanced JavaScript",
        lectures: 22,
        duration: "6 hours 45 minutes",
        content: [
          { title: "Functions in Depth", duration: "28:15", preview: false },
          { title: "Working with Arrays", duration: "32:20", preview: false },
          { title: "JavaScript Objects", duration: "35:10", preview: false },
          { title: "DOM Manipulation", duration: "40:25", preview: false },
          { title: "Event Handling", duration: "30:15", preview: false },
        ],
      },
      {
        title: "React Fundamentals",
        lectures: 20,
        duration: "7 hours 15 minutes",
        content: [
          { title: "Introduction to React", duration: "18:30", preview: false },
          {
            title: "Setting Up React Environment",
            duration: "25:15",
            preview: false,
          },
          { title: "Components and Props", duration: "32:40", preview: false },
          { title: "State and Lifecycle", duration: "38:20", preview: false },
          {
            title: "Handling Events in React",
            duration: "28:15",
            preview: false,
          },
        ],
      },
      {
        title: "Backend Development with Node.js",
        lectures: 18,
        duration: "6 hours 30 minutes",
        content: [
          {
            title: "Introduction to Node.js",
            duration: "20:15",
            preview: false,
          },
          {
            title: "Setting Up Node.js Environment",
            duration: "18:30",
            preview: false,
          },
          { title: "Node.js Modules", duration: "25:40", preview: false },
          {
            title: "Building a Web Server with Express",
            duration: "35:20",
            preview: false,
          },
          {
            title: "RESTful API Development",
            duration: "42:15",
            preview: false,
          },
        ],
      },
      {
        title: "Database Integration with MongoDB",
        lectures: 12,
        duration: "4 hours 45 minutes",
        content: [
          {
            title: "Introduction to MongoDB",
            duration: "22:10",
            preview: false,
          },
          { title: "Setting Up MongoDB", duration: "18:35", preview: false },
          {
            title: "CRUD Operations in MongoDB",
            duration: "32:20",
            preview: false,
          },
          { title: "Mongoose ODM", duration: "28:15", preview: false },
          {
            title: "Building a Complete Backend",
            duration: "45:30",
            preview: false,
          },
        ],
      },
      {
        title: "Full Stack Project",
        lectures: 25,
        duration: "8 hours 15 minutes",
        content: [
          {
            title: "Project Overview and Planning",
            duration: "15:20",
            preview: false,
          },
          {
            title: "Setting Up the Project Structure",
            duration: "22:30",
            preview: false,
          },
          {
            title: "Building the Backend API",
            duration: "45:15",
            preview: false,
          },
          {
            title: "Developing the Frontend with React",
            duration: "55:40",
            preview: false,
          },
          {
            title: "Connecting Frontend to Backend",
            duration: "38:20",
            preview: false,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-background">
      {/* Course Header */}
      <div className="bg-muted/30 border-b">
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold">
                  {course.title}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {course.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 items-center text-sm">
                <div className="flex items-center">
                  <div className="flex text-amber-500 mr-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={
                          i < Math.floor(course.rating)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    ))}
                  </div>
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-muted-foreground ml-1">
                    ({course.reviews} reviews)
                  </span>
                </div>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center">
                  <Users size={16} className="mr-1" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{course.duration}</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center">
                  <Video size={16} className="mr-1" />
                  <span>{course.lectures} lectures</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center">
                  <Globe size={16} className="mr-1" />
                  <span>{course.language}</span>
                </div>
              </div>

              <div className="flex items-center">
                <Image
                  src={course.instructorImage}
                  alt={course.instructor}
                  width={40}
                  height={40}
                  className="rounded-full mr-2"
                />
                <div>
                  <p className="font-medium">
                    Created by{" "}
                    <Link href="#" className="text-primary hover:underline">
                      {course.instructor}
                    </Link>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {course.instructorTitle}
                  </p>
                </div>
              </div>

              <div className="text-sm text-muted-foreground">
                {course.lastUpdated}
              </div>
            </div>

            {/* Course Card */}
            <div className="lg:row-start-1 lg:col-start-3">
              <Card className="sticky top-20 overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Button
                      size="icon"
                      className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 h-16 w-16"
                    >
                      <Play className="h-8 w-8 text-white" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-3xl font-bold">
                        ${course.discountPrice}
                      </div>
                      <div className="text-lg text-muted-foreground line-through">
                        ${course.price}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {course.discountEnds}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6">
                      Enroll Now
                    </Button>
                    <Button variant="outline" className="w-full">
                      Try For Free
                    </Button>
                  </div>

                  <div className="text-sm text-center">
                    30-Day Money-Back Guarantee
                  </div>

                  <div className="space-y-3 pt-2">
                    <h3 className="font-medium">This course includes:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Video
                          size={16}
                          className="mr-2 text-muted-foreground"
                        />
                        {course.duration} on-demand video
                      </li>
                      <li className="flex items-center">
                        <FileText
                          size={16}
                          className="mr-2 text-muted-foreground"
                        />
                        75 articles
                      </li>
                      <li className="flex items-center">
                        <FileText
                          size={16}
                          className="mr-2 text-muted-foreground"
                        />
                        120 downloadable resources
                      </li>
                      <li className="flex items-center">
                        <Globe
                          size={16}
                          className="mr-2 text-muted-foreground"
                        />
                        Full lifetime access
                      </li>
                      <li className="flex items-center">
                        <Globe
                          size={16}
                          className="mr-2 text-muted-foreground"
                        />
                        Access on mobile and TV
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2
                          size={16}
                          className="mr-2 text-muted-foreground"
                        />
                        Certificate of completion
                      </li>
                    </ul>
                  </div>

                  <div className="flex justify-center space-x-4 pt-2">
                    <Button variant="ghost" size="sm">
                      Share
                    </Button>
                    <Button variant="ghost" size="sm">
                      Gift this course
                    </Button>
                    <Button variant="ghost" size="sm">
                      Apply Coupon
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container py-8">
        <Tabs
          defaultValue="overview"
          onValueChange={setActiveTab}
          className="space-y-8"
        >
          <TabsList className="w-full max-w-3xl grid grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-xl font-bold">What you'll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 max-w-3xl">
              <h2 className="text-xl font-bold">Requirements</h2>
              <ul className="list-disc pl-5 space-y-2">
                {course.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 max-w-3xl">
              <h2 className="text-xl font-bold">Description</h2>
              <div className="space-y-4">
                <p>{course.description}</p>
                <p>
                  This course is constantly updated with new content, projects,
                  and techniques! Whether you're a complete beginner or looking
                  to refresh your skills, this course is your one-stop-shop for
                  web development.
                </p>
                <p>By the end of this course, you'll be able to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Build real-world websites and web apps using the latest
                    technologies
                  </li>
                  <li>
                    Work with HTML, CSS, JavaScript, React, Node.js, and MongoDB
                  </li>
                  <li>
                    Create responsive websites that look great on any device
                  </li>
                  <li>Implement user authentication and authorization</li>
                  <li>Deploy your applications to production</li>
                  <li>Work with APIs and external data sources</li>
                  <li>
                    Build a portfolio of projects to showcase to potential
                    employers
                  </li>
                </ul>
                <p>
                  Join thousands of successful students who have taken this
                  course and transformed their career!
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Curriculum Tab */}
          <TabsContent value="curriculum" className="space-y-6">
            <div className="max-w-3xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Course Content</h2>
                <div className="text-sm text-muted-foreground">
                  {course.lectures} lectures • {course.duration} total length
                </div>
              </div>

              <Accordion type="multiple" className="w-full">
                {course.curriculum.map((section, index) => (
                  <AccordionItem key={index} value={`section-${index}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex flex-col items-start text-left">
                        <div>{section.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {section.lectures} lectures • {section.duration}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {section.content.map((lecture, lectureIndex) => (
                          <li
                            key={lectureIndex}
                            className="flex items-center justify-between py-2 hover:bg-muted/50 px-2 rounded"
                          >
                            <div className="flex items-center">
                              <Play
                                size={16}
                                className="mr-2 text-muted-foreground"
                              />
                              <span>{lecture.title}</span>
                              {lecture.preview && (
                                <Badge variant="outline" className="ml-2">
                                  Preview
                                </Badge>
                              )}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {lecture.duration}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          {/* Instructor Tab */}
          <TabsContent value="instructor" className="space-y-6">
            <div className="max-w-3xl">
              <div className="flex items-start space-x-4 mb-6">
                <Image
                  src={course.instructorImage}
                  alt={course.instructor}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-xl font-bold">{course.instructor}</h2>
                  <p className="text-muted-foreground">
                    {course.instructorTitle}
                  </p>

                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center">
                      <Star size={16} className="text-amber-500 mr-1" />
                      <span>4.8 Instructor Rating</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      <span>125,000+ Students</span>
                    </div>
                    <div className="flex items-center">
                      <Play size={16} className="mr-1" />
                      <span>15 Courses</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">About the instructor</h3>
                <div className="space-y-3">
                  <p>
                    Sarah Johnson is a senior web developer with over 10 years
                    of experience in the industry. She has worked with companies
                    like Google, Facebook, and Amazon, and has a passion for
                    teaching and sharing her knowledge with others.
                  </p>
                  <p>
                    Sarah specializes in full-stack web development, with
                    expertise in modern JavaScript frameworks like React,
                    Angular, and Vue. She has helped thousands of students learn
                    web development and launch successful careers in tech.
                  </p>
                  <p>
                    Her teaching style focuses on practical, project-based
                    learning that helps students build real-world skills they
                    can apply immediately. Sarah is committed to keeping her
                    courses up-to-date with the latest technologies and best
                    practices.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-6">
            <div className="max-w-3xl">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/3 flex flex-col items-center justify-center text-center">
                  <div className="text-5xl font-bold mb-2">{course.rating}</div>
                  <div className="flex text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        fill={
                          i < Math.floor(course.rating)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    ))}
                  </div>
                  <div className="text-muted-foreground">Course Rating</div>
                </div>

                <div className="md:w-2/3">
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => {
                      const percentage =
                        rating === 5
                          ? 78
                          : rating === 4
                            ? 15
                            : rating === 3
                              ? 5
                              : rating === 2
                                ? 1
                                : 1;
                      return (
                        <div key={rating} className="flex items-center">
                          <div className="flex items-center w-20">
                            <span className="mr-2">{rating}</span>
                            <Star
                              size={14}
                              className="text-amber-500"
                              fill="currentColor"
                            />
                          </div>
                          <Progress
                            value={percentage}
                            className="h-2 flex-1 mx-2"
                          />
                          <div className="w-12 text-right text-sm text-muted-foreground">
                            {percentage}%
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-semibold text-lg">Reviews</h3>

                {/* Sample reviews */}
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b pb-6 last:border-0">
                    <div className="flex items-start space-x-3">
                      <Image
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=User${review}`}
                        alt="Reviewer"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="space-y-1">
                        <h4 className="font-medium">John Doe</h4>
                        <div className="flex items-center">
                          <div className="flex text-amber-500 mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                fill={i < 5 ? "currentColor" : "none"}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            3 weeks ago
                          </span>
                        </div>
                        <p className="mt-2">
                          This course is amazing! I've learned so much and the
                          instructor explains everything clearly. The projects
                          are practical and helped me build a strong portfolio.
                          Highly recommended for anyone looking to get into web
                          development.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                <Button variant="outline" className="w-full">
                  Load More Reviews
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
