import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Play, Award, BookOpen, Users, Star } from "lucide-react";

export default function Home() {
  const categories = [
    { name: "Development", icon: "💻", courses: "1,200+ courses" },
    { name: "Business", icon: "📊", courses: "800+ courses" },
    { name: "Finance & Accounting", icon: "💰", courses: "700+ courses" },
    { name: "IT & Software", icon: "🖥️", courses: "650+ courses" },
    { name: "Personal Development", icon: "🚀", courses: "900+ courses" },
    { name: "Office Productivity", icon: "📈", courses: "500+ courses" },
    { name: "Marketing", icon: "📱", courses: "600+ courses" },
    { name: "Photography & Video", icon: "📷", courses: "400+ courses" },
    { name: "Lifestyle", icon: "🌿", courses: "300+ courses" },
    { name: "Design", icon: "🎨", courses: "450+ courses" },
    { name: "Health & Fitness", icon: "💪", courses: "350+ courses" },
    { name: "Music", icon: "🎵", courses: "250+ courses" },
  ];

  const popularCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 15420,
      price: 94.99,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80",
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
    },
  ];

  const stats = [
    { value: "6.3k", label: "Trusted companies" },
    { value: "26k", label: "Course instructors" },
    { value: "99.9%", label: "Success rate" },
  ];

  const featuredInstructors = [
    {
      name: "Sarah Johnson",
      role: "Web Development Expert",
      students: 15420,
      courses: 12,
      rating: 4.8,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      name: "Michael Chen",
      role: "UI/UX Design Instructor",
      students: 8320,
      courses: 8,
      rating: 4.9,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      name: "David Miller",
      role: "Python & Data Science Expert",
      students: 12150,
      courses: 10,
      rating: 4.7,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
    {
      name: "Emma Roberts",
      role: "Digital Marketing Strategist",
      students: 9870,
      courses: 7,
      rating: 4.8,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
  ];

  const testimonials = [
    {
      quote:
        "SmartLearn has completely transformed my career. I went from a marketing assistant to a full-stack developer in just 6 months!",
      name: "Jason Kim",
      role: "Software Developer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jason",
    },
    {
      quote:
        "The quality of instruction is outstanding. I've tried other platforms, but SmartLearn's courses are by far the most comprehensive.",
      name: "Sophia Garcia",
      role: "UX Designer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
    },
    {
      quote:
        "As someone switching careers, SmartLearn provided exactly what I needed to build my skills and portfolio. Worth every penny!",
      name: "Marcus Johnson",
      role: "Data Analyst",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    },
  ];

  const benefits = [
    {
      title: "Learn at Your Own Pace",
      description:
        "Access courses anytime, anywhere, and learn at a pace that works for you.",
      icon: <Play className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with real-world experience and expertise.",
      icon: <Users className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Diverse Course Library",
      description:
        "Explore thousands of courses across dozens of categories and disciplines.",
      icon: <BookOpen className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Certificates of Completion",
      description:
        "Earn recognized certificates to showcase your skills to employers.",
      icon: <Award className="h-8 w-8 text-orange-500" />,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Learn with expert anytime anywhere
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Our mission is to help people to find the best course online and
                learn with expert anytime, anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  asChild
                >
                  <Link href="/auth/register">Create Account</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/courses">Browse Courses</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                alt="Students learning"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">
            Why Choose SmartLearn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-none shadow-sm hover:shadow-md transition-all duration-200"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Browse top categories</h2>
            <Link
              href="/categories"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              View All Categories
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.slice(0, 12).map((category, index) => (
              <Link
                href={`/courses?category=${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                key={index}
                className="no-underline"
              >
                <Card className="h-full hover:shadow-md transition-shadow duration-200 border border-border bg-card">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <h3 className="font-medium text-sm">{category.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {category.courses}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Best selling courses</h2>
            <Link
              href="/courses"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              View All Courses
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {popularCourses.map((course) => (
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
                </div>
                <CardContent className="p-4 flex-grow flex flex-col">
                  <h3 className="font-semibold line-clamp-2 mb-1 text-sm">
                    {course.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {course.instructor}
                  </p>
                  <div className="flex items-center mb-1">
                    <div className="text-amber-500 text-sm mr-1">★</div>
                    <span className="text-xs font-medium">{course.rating}</span>
                    <span className="text-xs text-muted-foreground ml-2">
                      ({course.students.toLocaleString()})
                    </span>
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
        </div>
      </section>

      {/* Featured Instructors Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Top instructors</h2>
            <Link
              href="/instructors"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              View All Instructors
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featuredInstructors.map((instructor, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow duration-200"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      fill
                      className="rounded-full object-cover border-4 border-orange-100"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{instructor.name}</h3>
                  <p className="text-orange-500 text-sm mb-2">
                    {instructor.role}
                  </p>
                  <div className="flex items-center justify-center mb-3">
                    <div className="flex items-center">
                      <span className="text-amber-500 mr-1">★</span>
                      <span className="font-medium">{instructor.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <div>{instructor.courses} courses</div>
                    <div>{instructor.students.toLocaleString()} students</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-none shadow-sm hover:shadow-md transition-all duration-200"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-orange-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Become an Instructor */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-orange-500 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">
                  Become an instructor
                </h2>
                <p className="mb-6">
                  Instructors from around the world teach millions of students
                  on SmartLearn. We provide the tools and skills to teach what
                  you love.
                </p>
                <Button
                  className="bg-white text-orange-500 hover:bg-gray-100"
                  asChild
                >
                  <Link href="/teach">Start Teaching Today</Link>
                </Button>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
                  alt="Instructor teaching"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            Career-focused Learning Paths
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
            Follow structured learning paths designed to help you achieve
            specific career goals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="relative h-40">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80"
                  alt="Web Development"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <Badge className="bg-orange-500 mb-2">Most Popular</Badge>
                    <h3 className="font-bold text-lg">
                      Full-Stack Web Developer
                    </h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between text-sm mb-3">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>12 Courses</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>15,420 Students</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Master front-end and back-end technologies to become a
                  full-stack web developer ready for the job market.
                </p>
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  asChild
                >
                  <Link href="/career-paths/web-development">View Path</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="relative h-40">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80"
                  alt="Data Science"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-lg">Data Scientist</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between text-sm mb-3">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>15 Courses</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>12,150 Students</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn statistical analysis, machine learning, and data
                  visualization to become a data scientist.
                </p>
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  asChild
                >
                  <Link href="/career-paths/data-science">View Path</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="relative h-40">
                <Image
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&q=80"
                  alt="UX Design"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-lg">UX/UI Designer</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between text-sm mb-3">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>10 Courses</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>8,320 Students</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Master user experience design principles and tools to create
                  intuitive, user-friendly digital products.
                </p>
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  asChild
                >
                  <Link href="/career-paths/ux-design">View Path</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="/career-paths">Explore All Learning Paths</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold mb-4">
                Learn on the go with our mobile app
              </h2>
              <p className="text-muted-foreground mb-6">
                Download the SmartLearn app to access your courses anytime,
                anywhere. Learn at your own pace, even offline.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-black hover:bg-gray-800 text-white">
                  <svg
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 384 512"
                    fill="currentColor"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                  </svg>
                  App Store
                </Button>
                <Button className="bg-black hover:bg-gray-800 text-white">
                  <svg
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path>
                  </svg>
                  Google Play
                </Button>
              </div>
            </div>
            <div className="relative h-80 md:h-96 order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&q=80"
                alt="Mobile app"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Start learning with 671k students around the world.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white"
              asChild
            >
              <Link href="/auth/register">Join For Free</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                SmartLearn for Business
              </h2>
              <p className="text-muted-foreground mb-6">
                Upskill your workforce with access to thousands of courses
                taught by real-world experts. Get your team the skills they need
                to drive innovation and growth.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Unlimited access to top courses for your team",
                  "Learning analytics and progress tracking",
                  "Custom learning paths for different roles",
                  "Enterprise-grade security and support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                <Link href="/business">Learn More</Link>
              </Button>
            </div>
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Team learning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-xl font-medium text-center mb-8">
            6.3k trusted companies
          </h2>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            {[
              "Netflix",
              "YouTube",
              "Google",
              "Lenovo",
              "Slack",
              "Verizon",
              "Microsoft",
            ].map((company, index) => (
              <div key={index} className="text-xl font-bold">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-orange-500 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start learning?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join millions of students already learning on SmartLearn. Start your
            journey today!
          </p>
          <Button
            className="bg-white text-orange-500 hover:bg-gray-100"
            size="lg"
            asChild
          >
            <Link href="/auth/register">Get Started For Free</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
