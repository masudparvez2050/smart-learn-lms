import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function InstructorsPage() {
  const instructors = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Web Development Expert",
      rating: 4.8,
      students: 15420,
      courses: 12,
      bio: "Full-stack developer with 10+ years of experience. Specializes in React, Node.js, and modern JavaScript.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      categories: ["Development", "JavaScript", "React"],
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "UI/UX Design Instructor",
      rating: 4.9,
      students: 8320,
      courses: 8,
      bio: "Award-winning designer with experience at top tech companies. Teaches practical design skills for the modern web.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      categories: ["Design", "UI/UX", "Figma"],
    },
    {
      id: 3,
      name: "David Miller",
      title: "Python & Data Science Expert",
      rating: 4.7,
      students: 12150,
      courses: 10,
      bio: "Data scientist and machine learning engineer. Helps students master Python and break into the field of data science.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      categories: ["Data Science", "Python", "Machine Learning"],
    },
    {
      id: 4,
      name: "Emma Roberts",
      title: "Digital Marketing Strategist",
      rating: 4.8,
      students: 9870,
      courses: 7,
      bio: "Marketing expert who has worked with Fortune 500 companies. Teaches practical strategies for digital marketing success.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      categories: ["Marketing", "Social Media", "SEO"],
    },
    {
      id: 5,
      name: "Robert Zhang",
      title: "Data Analysis Professional",
      rating: 4.9,
      students: 7650,
      courses: 6,
      bio: "Former Google data analyst with a passion for teaching. Specializes in SQL, Excel, and data visualization.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
      categories: ["Data Analysis", "SQL", "Excel"],
    },
    {
      id: 6,
      name: "Jennifer Lopez",
      title: "Business & Entrepreneurship Coach",
      rating: 4.7,
      students: 11200,
      courses: 9,
      bio: "Serial entrepreneur who has built and sold multiple businesses. Teaches practical business skills for the real world.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer",
      categories: ["Business", "Entrepreneurship", "Leadership"],
    },
    {
      id: 7,
      name: "James Wilson",
      title: "Mobile App Development Instructor",
      rating: 4.8,
      students: 6800,
      courses: 5,
      bio: "iOS and Android developer with apps used by millions. Teaches mobile development from beginner to advanced levels.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      categories: ["Mobile Development", "iOS", "Android"],
    },
    {
      id: 8,
      name: "Sophia Garcia",
      title: "Photography & Videography Expert",
      rating: 4.9,
      students: 5400,
      courses: 6,
      bio: "Professional photographer and filmmaker whose work has been featured in major publications. Teaches creative visual skills.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
      categories: ["Photography", "Videography", "Adobe"],
    },
  ];

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Meet Our Expert Instructors</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Learn from industry professionals with real-world experience and a
          passion for teaching.
        </p>

        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search instructors by name or expertise..."
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {instructors.map((instructor) => (
          <Card
            key={instructor.id}
            className="overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <CardContent className="p-0">
              <div className="p-6 text-center">
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
                  {instructor.title}
                </p>
                <div className="flex items-center justify-center mb-3">
                  <div className="flex items-center">
                    <span className="text-amber-500 mr-1">★</span>
                    <span className="font-medium">{instructor.rating}</span>
                  </div>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <span>{instructor.students.toLocaleString()} students</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {instructor.bio}
                </p>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {instructor.categories.map((category, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                  <div>{instructor.courses} courses</div>
                  <div>{instructor.students.toLocaleString()} students</div>
                </div>
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  asChild
                >
                  <Link href={`/instructors/${instructor.id}`}>
                    View Profile
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-orange-500 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Become an Instructor</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Join our community of expert instructors and share your knowledge with
          students around the world. Create engaging courses and earn revenue
          while making a difference.
        </p>
        <Button className="bg-white text-orange-500 hover:bg-gray-100" asChild>
          <Link href="/teach">Start Teaching Today</Link>
        </Button>
      </div>
    </div>
  );
}
