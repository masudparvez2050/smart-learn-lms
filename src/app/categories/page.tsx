import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CategoriesPage() {
  const categories = [
    {
      name: "Development",
      icon: "💻",
      courses: "1,200+ courses",
      description: "Learn to code, build apps, websites, and software",
    },
    {
      name: "Business",
      icon: "📊",
      courses: "800+ courses",
      description: "Leadership, management, entrepreneurship, and strategy",
    },
    {
      name: "Finance & Accounting",
      icon: "💰",
      courses: "700+ courses",
      description: "Financial analysis, accounting, investment, and banking",
    },
    {
      name: "IT & Software",
      icon: "🖥️",
      courses: "650+ courses",
      description:
        "IT certifications, network administration, and cybersecurity",
    },
    {
      name: "Personal Development",
      icon: "🚀",
      courses: "900+ courses",
      description: "Productivity, leadership, and personal growth",
    },
    {
      name: "Office Productivity",
      icon: "📈",
      courses: "500+ courses",
      description: "Excel, PowerPoint, Word, and other office software",
    },
    {
      name: "Marketing",
      icon: "📱",
      courses: "600+ courses",
      description: "Digital marketing, social media, and content creation",
    },
    {
      name: "Photography & Video",
      icon: "📷",
      courses: "400+ courses",
      description: "Digital photography, video production, and editing",
    },
    {
      name: "Lifestyle",
      icon: "🌿",
      courses: "300+ courses",
      description: "Arts, crafts, cooking, and wellness",
    },
    {
      name: "Design",
      icon: "🎨",
      courses: "450+ courses",
      description: "Graphic design, UX/UI, web design, and illustration",
    },
    {
      name: "Health & Fitness",
      icon: "💪",
      courses: "350+ courses",
      description: "Nutrition, fitness, mental health, and wellness",
    },
    {
      name: "Music",
      icon: "🎵",
      courses: "250+ courses",
      description: "Instruments, music production, and theory",
    },
    {
      name: "Teaching & Academics",
      icon: "🎓",
      courses: "400+ courses",
      description: "Engineering, humanities, math, and science",
    },
    {
      name: "Science",
      icon: "🔬",
      courses: "320+ courses",
      description: "Biology, chemistry, physics, and environmental science",
    },
    {
      name: "Language Learning",
      icon: "🗣️",
      courses: "280+ courses",
      description: "Learn English, Spanish, Chinese, and more languages",
    },
    {
      name: "Test Preparation",
      icon: "📝",
      courses: "150+ courses",
      description: "GMAT, GRE, IELTS, TOEFL, and other test prep",
    },
  ];

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Browse Categories</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our wide range of categories and find the perfect course to
          enhance your skills and knowledge.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link
            href={`/courses?category=${category.name.toLowerCase().replace(/\s+/g, "-")}`}
            key={index}
            className="no-underline"
          >
            <Card className="h-full hover:shadow-md transition-shadow duration-200 border border-border bg-card hover:border-orange-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {category.description}
                </p>
                <p className="text-sm font-medium text-orange-500">
                  {category.courses}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-16 bg-muted/30 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Can't find what you're looking for?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          We're constantly adding new courses and categories. Let us know what
          you'd like to learn next.
        </p>
        <Button className="bg-orange-500 hover:bg-orange-600" asChild>
          <Link href="/contact">Request a Category</Link>
        </Button>
      </div>
    </div>
  );
}
