"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Search,
  Filter,
  Star,
  Clock,
  Users,
  ChevronDown,
  ChevronUp,
  ChevronRight,
} from "lucide-react";

export default function CoursesPage() {
  // Mock data for courses
  const coursesData = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.8,
      reviews: 197937,
      students: 15420,
      price: 94.99,
      discount: 0.2, // 20% off
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80",
      level: "Beginner",
      duration: "48 hours",
      category: "Development",
      bestseller: true,
      featured: true,
      lastUpdated: "2023-08-15",
      tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      hotNew: true,
    },
    {
      id: 2,
      title: "Adobe Premiere Pro CC - Advanced Training Course",
      instructor: "Michael Chen",
      rating: 4.6,
      reviews: 236568,
      students: 8320,
      price: 89.99,
      discount: 0.3, // 30% off
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&q=80",
      level: "Advanced",
      duration: "36 hours",
      category: "Development",
      bestseller: false,
      featured: false,
      lastUpdated: "2023-07-20",
      tags: ["Video Editing", "Adobe Premiere", "Video Production"],
      hotNew: false,
    },
    {
      id: 3,
      title: "Ultimate AWS Certified Solutions Architect Associate 2023",
      instructor: "David Miller",
      rating: 4.7,
      reviews: 511233,
      students: 12150,
      price: 84.99,
      discount: 0.15, // 15% off
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&q=80",
      level: "Intermediate",
      duration: "52 hours",
      category: "IT & Software",
      bestseller: false,
      featured: true,
      lastUpdated: "2023-06-10",
      tags: ["AWS", "Cloud Computing", "Solutions Architect"],
      hotNew: false,
    },
    {
      id: 4,
      title: "Learn Ethical Hacking From Scratch 2023",
      instructor: "Emma Roberts",
      rating: 4.6,
      reviews: 451444,
      students: 9870,
      price: 79.99,
      discount: 0.1, // 10% off
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80",
      level: "Beginner to Intermediate",
      duration: "32 hours",
      category: "IT & Software",
      bestseller: false,
      featured: false,
      lastUpdated: "2023-05-25",
      tags: ["Ethical Hacking", "Cybersecurity", "Network Security"],
      hotNew: true,
    },
    {
      id: 5,
      title: "Angular - The Complete Guide (2023 Edition)",
      instructor: "Robert Zhang",
      rating: 4.3,
      reviews: 187837,
      students: 7650,
      price: 94.99,
      discount: 0.25, // 25% off
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&q=80",
      level: "All Levels",
      duration: "44 hours",
      category: "Development",
      bestseller: true,
      featured: false,
      lastUpdated: "2023-08-05",
      tags: ["Angular", "JavaScript", "TypeScript", "Web Development"],
      hotNew: false,
    },
    {
      id: 6,
      title: "How to get Diamond in solo/duo | League of Legends | Season 11",
      instructor: "Alex Turner",
      rating: 4.7,
      reviews: 438871,
      students: 18320,
      price: 94.99,
      discount: 0.3, // 30% off
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&q=80",
      level: "Intermediate",
      duration: "40 hours",
      category: "Gaming",
      bestseller: true,
      featured: true,
      lastUpdated: "2023-07-12",
      tags: ["League of Legends", "Gaming", "eSports"],
      hotNew: false,
    },
    {
      id: 7,
      title: "SQL for NEWBS: Weekend Crash Course",
      instructor: "Emma Wilson",
      rating: 5.0,
      reviews: 451444,
      students: 9870,
      price: 84.99,
      discount: 0.2, // 20% off
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&q=80",
      level: "Beginner",
      duration: "38 hours",
      category: "Development",
      bestseller: false,
      featured: false,
      lastUpdated: "2023-06-28",
      tags: ["SQL", "Database", "MySQL"],
      hotNew: true,
    },
    {
      id: 8,
      title: "SEO 2021: Complete SEO Training + SEO for WordPress Websites",
      instructor: "John Smith",
      rating: 4.0,
      reviews: 187837,
      students: 11250,
      price: 89.99,
      discount: 0.1, // 10% off
      image:
        "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=500&q=80",
      level: "Intermediate",
      duration: "42 hours",
      category: "Marketing",
      bestseller: false,
      featured: false,
      lastUpdated: "2023-04-15",
      tags: ["SEO", "WordPress", "Digital Marketing"],
      hotNew: false,
    },
    {
      id: 9,
      title: "[NEW] Ultimate AWS Certified Cloud Practitioner - 2023",
      instructor: "Lisa Taylor",
      rating: 3.2,
      reviews: 1356238,
      students: 6100,
      price: 84.99,
      discount: 0.3, // 30% off
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
      level: "Beginner",
      duration: "40 hours",
      category: "IT & Software",
      bestseller: false,
      featured: false,
      lastUpdated: "2023-05-20",
      tags: ["AWS", "Cloud Computing", "AWS Certification"],
      hotNew: false,
    },
    {
      id: 10,
      title: "Complete Adobe Lightroom Megacourse: Beginner to Expert",
      instructor: "Mark Williams",
      rating: 4.6,
      reviews: 511233,
      students: 9200,
      price: 99.99,
      discount: 0.15, // 15% off
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80",
      level: "All Levels",
      duration: "44 hours",
      category: "Photography",
      bestseller: true,
      featured: true,
      lastUpdated: "2023-07-30",
      tags: ["Adobe Lightroom", "Photography", "Photo Editing"],
      hotNew: true,
    },
    {
      id: 11,
      title: "Digital Marketing Masterclass - 23 Courses in 1",
      instructor: "Thomas Brown",
      rating: 5.0,
      reviews: 211434,
      students: 5200,
      price: 69.99,
      discount: 0, // no discount
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
      level: "Beginner",
      duration: "30 hours",
      category: "Marketing",
      bestseller: false,
      featured: false,
      lastUpdated: "2023-04-15",
      tags: ["Digital Marketing", "Social Media", "SEO"],
      hotNew: false,
    },
    {
      id: 12,
      title: "The Ultimate Drawing Course - Beginner to Advanced",
      instructor: "Sarah Johnson",
      rating: 4.8,
      reviews: 187837,
      students: 8900,
      price: 94.99,
      discount: 0.1, // 10% off
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80",
      level: "All Levels",
      duration: "40 hours",
      category: "Design",
      bestseller: true,
      featured: false,
      lastUpdated: "2023-08-10",
      tags: ["Drawing", "Art", "Illustration"],
      hotNew: false,
    },
  ];

  // Categories for filtering
  const categories = [
    { name: "Development", count: 1345 },
    { name: "Web Development", count: 1145 },
    { name: "Data Science", count: 765 },
    { name: "Mobile Development", count: 515 },
    { name: "Software Testing", count: 317 },
    { name: "Software Engineering", count: 251 },
    { name: "Software Development Tools", count: 165 },
    { name: "No-Code Development", count: 57 },
    { name: "Business", count: 1345 },
    { name: "Finance & Accounting", count: 1345 },
    { name: "IT & Software", count: 1345 },
    { name: "Office Productivity", count: 1345 },
    { name: "Personal Development", count: 1345 },
    { name: "Design", count: 1345 },
    { name: "Marketing", count: 1345 },
    { name: "Lifestyle", count: 1345 },
    { name: "Photography & Video", count: 1345 },
    { name: "Music", count: 1345 },
    { name: "Health & Fitness", count: 1345 },
  ];

  // Tools for filtering
  const tools = [
    { name: "HTML 5", count: 1345 },
    { name: "CSS 3", count: 1245 },
    { name: "React", count: 1045 },
    { name: "Node.js", count: 845 },
    { name: "Laravel", count: 645 },
    { name: "Sass", count: 545 },
    { name: "WordPress", count: 445 },
  ];

  // Ratings for filtering
  const ratings = [
    { value: 5, label: "5 Star & up", count: 1345 },
    { value: 4, label: "4 Star & up", count: 1245 },
    { value: 3, label: "3 Star & up", count: 1145 },
    { value: 2, label: "2 Star & up", count: 1045 },
    { value: 1, label: "1 Star & up", count: 945 },
  ];

  // Course levels for filtering
  const levels = [
    { name: "All Level", count: 1345 },
    { name: "Beginner", count: 1145 },
    { name: "Intermediate", count: 845 },
    { name: "Expert", count: 545 },
  ];

  // Duration options for filtering
  const durations = [
    { name: "0-1 Hours", count: 1345 },
    { name: "1-3 Hours", count: 1245 },
    { name: "3-6 Hours", count: 1145 },
    { name: "6-17 Hours", count: 1045 },
    { name: "17+ Hours", count: 945 },
  ];

  // State for search and filters
  const [searchQuery, setSearchQuery] = useState("UX/UI Design");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState("trending");

  // State for expanded sections
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    tools: true,
    rating: true,
    level: true,
    price: true,
    duration: true,
  });

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 12;

  // State for filtered courses
  const [filteredCourses, setFilteredCourses] = useState(coursesData);

  // Toggle section expansion
  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev],
    }));
  };

  // Function to render star rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
        <span className="text-sm font-medium ml-1">{rating.toFixed(1)}</span>
      </div>
    );
  };

  // Function to format price with discount
  const formatPrice = (price: number, discount: number) => {
    const discountedPrice = price * (1 - discount);
    return (
      <div className="text-base font-bold">${discountedPrice.toFixed(2)}</div>
    );
  };

  // Function to format number of students/reviews
  const formatCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto py-6">
        {/* Search bar and filter section */}
        <div className="flex items-center mb-6 space-x-2">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-2 border-gray-300"
              placeholder="What do you want to learn..."
            />
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2 border-gray-300"
          >
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px] border-gray-300">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trending">Trending</SelectItem>
              <SelectItem value="popularity">Most Popular</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low-high">Price: Low to High</SelectItem>
              <SelectItem value="price-high-low">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Suggestions */}
        <div className="mb-6">
          <div className="text-sm text-gray-600 mb-2">Suggestions:</div>
          <div className="flex flex-wrap gap-2">
            {["ux", "interface", "user experience", "web design", "ux/ui"].map(
              (term) => (
                <Badge
                  key={term}
                  variant="outline"
                  className="rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
                  onClick={() => setSearchQuery(term)}
                >
                  {term}
                </Badge>
              ),
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters sidebar */}
          <div className="md:w-1/4 space-y-4">
            {/* Category section */}
            <div className="border rounded-md overflow-hidden">
              <div
                className="flex justify-between items-center p-3 bg-gray-50 cursor-pointer"
                onClick={() => toggleSection("category")}
              >
                <h3 className="font-medium">CATEGORY</h3>
                {expandedSections.category ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </div>
              {expandedSections.category && (
                <div className="p-3 space-y-2">
                  {categories.slice(0, 8).map((category, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-sm"
                    >
                      <div className="flex items-center gap-2">
                        {index === 3 && (
                          <div className="w-4 h-4 flex items-center justify-center">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          </div>
                        )}
                        <span className={index === 3 ? "text-orange-500" : ""}>
                          {category.name}
                        </span>
                      </div>
                      <span className="text-gray-500">{category.count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tools section */}
            <div className="border rounded-md overflow-hidden">
              <div
                className="flex justify-between items-center p-3 bg-gray-50 cursor-pointer"
                onClick={() => toggleSection("tools")}
              >
                <h3 className="font-medium">TOOLS</h3>
                {expandedSections.tools ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </div>
              {expandedSections.tools && (
                <div className="p-3 space-y-2">
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-sm"
                    >
                      <span>{tool.name}</span>
                      <span className="text-gray-500">{tool.count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Rating section */}
            <div className="border rounded-md overflow-hidden">
              <div
                className="flex justify-between items-center p-3 bg-gray-50 cursor-pointer"
                onClick={() => toggleSection("rating")}
              >
                <h3 className="font-medium">RATING</h3>
                {expandedSections.rating ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </div>
              {expandedSections.rating && (
                <div className="p-3 space-y-2">
                  {ratings.map((rating, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-sm"
                    >
                      <div className="flex items-center gap-1">
                        <Checkbox id={`rating-${rating.value}`} />
                        <label
                          htmlFor={`rating-${rating.value}`}
                          className="flex items-center"
                        >
                          <div className="flex">
                            {[...Array(rating.value)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 text-amber-400 fill-amber-400"
                              />
                            ))}
                            {[...Array(5 - rating.value)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-gray-300" />
                            ))}
                          </div>
                          <span className="ml-1">& up</span>
                        </label>
                      </div>
                      <span className="text-gray-500">{rating.count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Course Level section */}
            <div className="border rounded-md overflow-hidden">
              <div
                className="flex justify-between items-center p-3 bg-gray-50 cursor-pointer"
                onClick={() => toggleSection("level")}
              >
                <h3 className="font-medium">COURSE LEVEL</h3>
                {expandedSections.level ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </div>
              {expandedSections.level && (
                <div className="p-3 space-y-2">
                  {levels.map((level, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-sm"
                    >
                      <span>{level.name}</span>
                      <span className="text-gray-500">{level.count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Price section */}
            <div className="border rounded-md overflow-hidden">
              <div
                className="flex justify-between items-center p-3 bg-gray-50 cursor-pointer"
                onClick={() => toggleSection("price")}
              >
                <h3 className="font-medium">PRICE</h3>
                {expandedSections.price ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </div>
              {expandedSections.price && (
                <div className="p-3 space-y-4">
                  <div className="h-1 bg-orange-500 rounded-full relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-orange-500 rounded-full"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-orange-500 rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>$0 min</div>
                    <div>$100 max</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Checkbox id="price-paid" />
                        <Label htmlFor="price-paid">Paid</Label>
                      </div>
                      <span className="text-gray-500">1345</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Checkbox id="price-free" />
                        <Label htmlFor="price-free">Free</Label>
                      </div>
                      <span className="text-gray-500">483</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Duration section */}
            <div className="border rounded-md overflow-hidden">
              <div
                className="flex justify-between items-center p-3 bg-gray-50 cursor-pointer"
                onClick={() => toggleSection("duration")}
              >
                <h3 className="font-medium">DURATION</h3>
                {expandedSections.duration ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </div>
              {expandedSections.duration && (
                <div className="p-3 space-y-2">
                  {durations.map((duration, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <Checkbox id={`duration-${index}`} />
                        <Label htmlFor={`duration-${index}`}>
                          {duration.name}
                        </Label>
                      </div>
                      <span className="text-gray-500">{duration.count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Courses grid */}
          <div className="md:w-3/4">
            <div className="mb-4 text-sm text-gray-600">
              <span className="font-medium">9,168,294</span> results for "
              <span className="font-medium">UX/UI design</span>"
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coursesData.slice(0, 12).map((course) => (
                <Card
                  key={course.id}
                  className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <div className="text-xs text-gray-500 uppercase mb-1">
                      {course.category}
                    </div>
                    <h3 className="font-medium text-sm mb-2 line-clamp-2 h-10">
                      {course.title}
                    </h3>
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      {renderStars(course.rating)}
                      <span className="ml-2">
                        ({formatCount(course.reviews)} students)
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      {formatPrice(course.price, course.discount)}
                      {course.hotNew && (
                        <Badge className="bg-orange-500 text-white text-xs">
                          HOT & NEW
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-8 h-8 p-0 rounded-full"
                >
                  1
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-8 h-8 p-0 rounded-full"
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-8 h-8 p-0 rounded-full"
                >
                  3
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-8 h-8 p-0 rounded-full"
                >
                  4
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-8 h-8 p-0 rounded-full"
                >
                  5
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-8 h-8 p-0 rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
