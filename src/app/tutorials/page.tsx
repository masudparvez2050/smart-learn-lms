import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Clock, BookOpen, Star, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TutorialsPage() {
  const categories = [
    "All Tutorials",
    "Web Development",
    "Data Science",
    "Mobile Development",
    "Design",
    "Business",
    "Marketing",
  ];

  const tutorials = [
    {
      id: 1,
      title: "Building a Responsive Website with HTML, CSS, and JavaScript",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&q=80",
      duration: "45 min",
      level: "Beginner",
      author: "Sarah Johnson",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      rating: 4.8,
      reviews: 342,
    },
    {
      id: 2,
      title: "Introduction to Python Data Analysis with Pandas",
      category: "Data Science",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
      duration: "60 min",
      level: "Intermediate",
      author: "Michael Chen",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      rating: 4.9,
      reviews: 215,
    },
    {
      id: 3,
      title: "Creating Your First React Native Mobile App",
      category: "Mobile Development",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&q=80",
      duration: "75 min",
      level: "Intermediate",
      author: "David Miller",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      rating: 4.7,
      reviews: 189,
    },
    {
      id: 4,
      title: "UI/UX Design Principles for Beginners",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
      duration: "50 min",
      level: "Beginner",
      author: "Emma Roberts",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      rating: 4.6,
      reviews: 276,
    },
    {
      id: 5,
      title: "Digital Marketing Strategy for Small Businesses",
      category: "Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
      duration: "55 min",
      level: "Beginner",
      author: "Robert Zhang",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
      rating: 4.8,
      reviews: 198,
    },
    {
      id: 6,
      title: "Advanced CSS Techniques and Animations",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=500&q=80",
      duration: "65 min",
      level: "Advanced",
      author: "Lisa Taylor",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      rating: 4.9,
      reviews: 167,
    },
    {
      id: 7,
      title: "Machine Learning Fundamentals with Python",
      category: "Data Science",
      image:
        "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=500&q=80",
      duration: "90 min",
      level: "Intermediate",
      author: "James Wilson",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      rating: 4.7,
      reviews: 231,
    },
    {
      id: 8,
      title: "Business Plan Development for Startups",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1664575599736-c5197c684128?w=500&q=80",
      duration: "70 min",
      level: "Intermediate",
      author: "Sophia Rodriguez",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
      rating: 4.8,
      reviews: 154,
    },
  ];

  // Function to render star rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        <div className="flex mr-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <span className="text-sm font-medium">{rating}</span>
        <span className="text-sm text-muted-foreground ml-1">
          ({reviews} reviews)
        </span>
      </div>
    );
  };

  return (
    <div className="container py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Free Tutorials</h1>
        <p className="text-muted-foreground">
          Explore our collection of free tutorials to learn new skills and
          advance your knowledge. These step-by-step guides cover a wide range
          of topics from web development to business strategy.
        </p>

        {/* Search */}
        <div className="relative max-w-2xl mx-auto mt-8">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search for tutorials..." className="pl-10 py-6" />
        </div>
      </div>

      {/* Categories */}
      <Tabs defaultValue="All Tutorials" className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <TabsList className="flex overflow-x-auto pb-2 -mb-2">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="px-4">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </Button>
        </div>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tutorials
                .filter(
                  (tutorial) =>
                    category === "All Tutorials" ||
                    tutorial.category === category,
                )
                .map((tutorial) => (
                  <Card
                    key={tutorial.id}
                    className="overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={tutorial.image}
                        alt={tutorial.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <div className="flex items-center text-white">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">{tutorial.duration}</span>
                          <span className="mx-2">•</span>
                          <span className="text-sm">{tutorial.level}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">
                        {tutorial.title}
                      </h3>
                      <div className="flex items-center mb-3">
                        <div className="relative h-6 w-6 rounded-full overflow-hidden mr-2">
                          <Image
                            src={tutorial.authorImage}
                            alt={tutorial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {tutorial.author}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex mr-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(tutorial.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium">
                          {tutorial.rating}
                        </span>
                        <span className="text-sm text-muted-foreground ml-1">
                          ({tutorial.reviews})
                        </span>
                      </div>
                      <Button
                        className="w-full mt-4 bg-orange-500 hover:bg-orange-600"
                        asChild
                      >
                        <Link href={`/tutorials/${tutorial.id}`}>
                          Start Tutorial
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Featured Tutorial */}
      <div className="bg-orange-50 dark:bg-orange-900/10 rounded-lg p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 relative h-64 md:h-auto rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
              alt="Featured Tutorial"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <div className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
              Featured Tutorial
            </div>
            <h2 className="text-2xl font-bold">
              Complete Guide to Full-Stack Web Development
            </h2>
            <p className="text-muted-foreground">
              This comprehensive tutorial series takes you from the basics of
              HTML and CSS to building complex web applications with modern
              JavaScript frameworks, backend APIs, and databases.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  4 hours total
                </span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-1 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  12 modules
                </span>
              </div>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Start Learning
            </Button>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Get New Tutorials in Your Inbox
        </h2>
        <p className="text-muted-foreground mb-6">
          Subscribe to our newsletter to receive new tutorials, tips, and
          resources directly to your email. We send weekly updates with the
          latest content.
        </p>
        <div className="flex gap-2 max-w-md mx-auto">
          <Input placeholder="Enter your email" className="flex-1" />
          <Button className="bg-orange-500 hover:bg-orange-600">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
