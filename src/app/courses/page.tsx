import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ChevronDown } from "lucide-react";

export default function CoursesPage() {
  // Mock data for courses
  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 15420,
      price: 94.99,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80",
      level: "Beginner",
      duration: "48 hours",
      category: "Development",
      bestseller: true,
    },
    {
      id: 2,
      title: "Advanced UI/UX Design Masterclass",
      instructor: "Michael Chen",
      rating: 4.9,
      students: 8320,
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&q=80",
      level: "Intermediate",
      duration: "36 hours",
      category: "Design",
      bestseller: true,
    },
    {
      id: 3,
      title: "Python Programming: From Beginner to Advanced",
      instructor: "David Miller",
      rating: 4.7,
      students: 12150,
      price: 84.99,
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&q=80",
      level: "All Levels",
      duration: "52 hours",
      category: "Development",
      bestseller: false,
    },
    {
      id: 4,
      title: "Digital Marketing Strategy Masterclass",
      instructor: "Emma Roberts",
      rating: 4.8,
      students: 9870,
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&q=80",
      level: "Intermediate",
      duration: "32 hours",
      category: "Marketing",
      bestseller: false,
    },
    {
      id: 5,
      title: "Learn Data Science: Complete Data Analysis Course",
      instructor: "Robert Zhang",
      rating: 4.9,
      students: 7650,
      price: 94.99,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80",
      level: "Advanced",
      duration: "44 hours",
      category: "Data Science",
      bestseller: true,
    },
    {
      id: 6,
      title: "JavaScript: The Complete Guide",
      instructor: "Alex Turner",
      rating: 4.8,
      students: 18320,
      price: 94.99,
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&q=80",
      level: "Beginner",
      duration: "40 hours",
      category: "Development",
      bestseller: true,
    },
    {
      id: 7,
      title: "Mobile App Development with React Native",
      instructor: "Emma Wilson",
      rating: 4.7,
      students: 9870,
      price: 84.99,
      image:
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=500&q=80",
      level: "Intermediate",
      duration: "38 hours",
      category: "Development",
      bestseller: false,
    },
    {
      id: 8,
      title: "Machine Learning A-Z: Hands-On Python & R",
      instructor: "John Smith",
      rating: 4.6,
      students: 11250,
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500&q=80",
      level: "Advanced",
      duration: "42 hours",
      category: "Data Science",
      bestseller: false,
    },
  ];

  // Categories for filtering
  const categories = [
    "All Categories",
    "Development",
    "Business",
    "Finance & Accounting",
    "IT & Software",
    "Design",
    "Marketing",
    "Photography & Video",
    "Data Science",
  ];

  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Browse Courses</h1>
          <p className="text-muted-foreground">
            Discover top courses to enhance your skills and advance your career
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for courses..."
              className="pl-9 w-full"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              Sort by: Popularity
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto pb-2 space-x-2">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 ? "bg-orange-500 hover:bg-orange-600" : ""}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4 max-w-md">
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="popular">Most Popular</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
          </TabsList>

          {/* All Courses Tab */}
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {courses.map((course) => (
                <Card
                  key={course.id}
                  className="overflow-hidden hover:shadow-md transition-shadow duration-200 h-full flex flex-col"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {course.bestseller && (
                      <Badge className="absolute top-2 left-2 bg-orange-500">
                        Bestseller
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4 flex-grow flex flex-col">
                    <h3 className="font-semibold line-clamp-2 mb-1 text-sm">
                      {course.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-1">
                      {course.instructor}
                    </p>
                    <div className="flex items-center mb-1">
                      <div className="text-amber-500 text-sm mr-1">★</div>
                      <span className="text-xs font-medium">
                        {course.rating}
                      </span>
                      <span className="text-xs text-muted-foreground ml-2">
                        ({course.students.toLocaleString()})
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground space-x-2 mb-2">
                      <span>{course.level}</span>
                      <span>•</span>
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span>{course.category}</span>
                    </div>
                    <div className="mt-auto pt-2 flex items-center justify-between">
                      <p className="font-bold">${course.price.toFixed(2)}</p>
                      <Link href={`/courses/${course.id}`}>
                        <Button
                          size="sm"
                          className="bg-orange-500 hover:bg-orange-600"
                        >
                          View Course
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="mx-1">
                Previous
              </Button>
              <Button
                variant="outline"
                className="mx-1 bg-orange-500 text-white hover:bg-orange-600"
              >
                1
              </Button>
              <Button variant="outline" className="mx-1">
                2
              </Button>
              <Button variant="outline" className="mx-1">
                3
              </Button>
              <Button variant="outline" className="mx-1">
                Next
              </Button>
            </div>
          </TabsContent>

          {/* Other tabs would have similar content */}
          <TabsContent value="popular" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {courses
                .filter((course) => course.students > 10000)
                .map((course) => (
                  <Card
                    key={course.id}
                    className="overflow-hidden hover:shadow-md transition-shadow duration-200 h-full flex flex-col"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      {course.bestseller && (
                        <Badge className="absolute top-2 left-2 bg-orange-500">
                          Bestseller
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-4 flex-grow flex flex-col">
                      <h3 className="font-semibold line-clamp-2 mb-1 text-sm">
                        {course.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-1">
                        {course.instructor}
                      </p>
                      <div className="flex items-center mb-1">
                        <div className="text-amber-500 text-sm mr-1">★</div>
                        <span className="text-xs font-medium">
                          {course.rating}
                        </span>
                        <span className="text-xs text-muted-foreground ml-2">
                          ({course.students.toLocaleString()})
                        </span>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground space-x-2 mb-2">
                        <span>{course.level}</span>
                        <span>•</span>
                        <span>{course.duration}</span>
                        <span>•</span>
                        <span>{course.category}</span>
                      </div>
                      <div className="mt-auto pt-2 flex items-center justify-between">
                        <p className="font-bold">${course.price.toFixed(2)}</p>
                        <Link href={`/courses/${course.id}`}>
                          <Button
                            size="sm"
                            className="bg-orange-500 hover:bg-orange-600"
                          >
                            View Course
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="new" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {courses.slice(4, 8).map((course) => (
                <Card
                  key={course.id}
                  className="overflow-hidden hover:shadow-md transition-shadow duration-200 h-full flex flex-col"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <Badge className="absolute top-2 left-2 bg-blue-500">
                      New
                    </Badge>
                  </div>
                  <CardContent className="p-4 flex-grow flex flex-col">
                    <h3 className="font-semibold line-clamp-2 mb-1 text-sm">
                      {course.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-1">
                      {course.instructor}
                    </p>
                    <div className="flex items-center mb-1">
                      <div className="text-amber-500 text-sm mr-1">★</div>
                      <span className="text-xs font-medium">
                        {course.rating}
                      </span>
                      <span className="text-xs text-muted-foreground ml-2">
                        ({course.students.toLocaleString()})
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground space-x-2 mb-2">
                      <span>{course.level}</span>
                      <span>•</span>
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span>{course.category}</span>
                    </div>
                    <div className="mt-auto pt-2 flex items-center justify-between">
                      <p className="font-bold">${course.price.toFixed(2)}</p>
                      <Link href={`/courses/${course.id}`}>
                        <Button
                          size="sm"
                          className="bg-orange-500 hover:bg-orange-600"
                        >
                          View Course
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trending" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {courses
                .filter((course) => course.bestseller)
                .map((course) => (
                  <Card
                    key={course.id}
                    className="overflow-hidden hover:shadow-md transition-shadow duration-200 h-full flex flex-col"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <Badge className="absolute top-2 left-2 bg-orange-500">
                        Trending
                      </Badge>
                    </div>
                    <CardContent className="p-4 flex-grow flex flex-col">
                      <h3 className="font-semibold line-clamp-2 mb-1 text-sm">
                        {course.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-1">
                        {course.instructor}
                      </p>
                      <div className="flex items-center mb-1">
                        <div className="text-amber-500 text-sm mr-1">★</div>
                        <span className="text-xs font-medium">
                          {course.rating}
                        </span>
                        <span className="text-xs text-muted-foreground ml-2">
                          ({course.students.toLocaleString()})
                        </span>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground space-x-2 mb-2">
                        <span>{course.level}</span>
                        <span>•</span>
                        <span>{course.duration}</span>
                        <span>•</span>
                        <span>{course.category}</span>
                      </div>
                      <div className="mt-auto pt-2 flex items-center justify-between">
                        <p className="font-bold">${course.price.toFixed(2)}</p>
                        <Link href={`/courses/${course.id}`}>
                          <Button
                            size="sm"
                            className="bg-orange-500 hover:bg-orange-600"
                          >
                            View Course
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
