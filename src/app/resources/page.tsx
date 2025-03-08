import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Download,
  FileText,
  BookOpen,
  Video,
  Code,
  Bookmark,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ResourcesPage() {
  const categories = [
    "All Resources",
    "E-Books",
    "Templates",
    "Cheat Sheets",
    "Guides",
    "Videos",
    "Code Samples",
  ];

  const resources = [
    {
      id: 1,
      title: "The Complete Web Development Roadmap 2023",
      category: "Guides",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80",
      description:
        "A comprehensive guide to becoming a full-stack web developer, with learning paths and resources for beginners to advanced developers.",
      fileType: "PDF",
      fileSize: "4.2 MB",
      downloads: 15420,
    },
    {
      id: 2,
      title: "Data Science Cheat Sheet Collection",
      category: "Cheat Sheets",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
      description:
        "A collection of essential cheat sheets for Python, Pandas, NumPy, Scikit-Learn, and other data science tools and libraries.",
      fileType: "ZIP",
      fileSize: "8.5 MB",
      downloads: 12350,
    },
    {
      id: 3,
      title: "Responsive Website Templates Pack",
      category: "Templates",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&q=80",
      description:
        "10 professionally designed, responsive HTML/CSS templates for various types of websites, including portfolios, business sites, and blogs.",
      fileType: "ZIP",
      fileSize: "24.8 MB",
      downloads: 9870,
    },
    {
      id: 4,
      title: "UX/UI Design Principles E-Book",
      category: "E-Books",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
      description:
        "A comprehensive e-book covering essential UX/UI design principles, best practices, and case studies for creating effective user experiences.",
      fileType: "PDF",
      fileSize: "12.3 MB",
      downloads: 8540,
    },
    {
      id: 5,
      title: "JavaScript Algorithms and Data Structures",
      category: "Code Samples",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80",
      description:
        "A collection of common algorithms and data structures implemented in JavaScript, with explanations and usage examples.",
      fileType: "ZIP",
      fileSize: "3.7 MB",
      downloads: 11230,
    },
    {
      id: 6,
      title: "Digital Marketing Strategy Framework",
      category: "Templates",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
      description:
        "A comprehensive framework and templates for creating effective digital marketing strategies, including content calendars and analytics trackers.",
      fileType: "XLSX",
      fileSize: "5.1 MB",
      downloads: 7650,
    },
    {
      id: 7,
      title: "Git & GitHub Crash Course",
      category: "Videos",
      image:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&q=80",
      description:
        "A beginner-friendly video tutorial series on version control with Git and GitHub, covering all essential commands and workflows.",
      fileType: "MP4",
      fileSize: "345 MB",
      downloads: 6320,
    },
    {
      id: 8,
      title: "Python for Data Analysis E-Book",
      category: "E-Books",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&q=80",
      description:
        "A comprehensive guide to using Python for data analysis, covering Pandas, NumPy, Matplotlib, and practical data manipulation techniques.",
      fileType: "PDF",
      fileSize: "18.5 MB",
      downloads: 14280,
    },
    {
      id: 9,
      title: "React Component Library Starter Kit",
      category: "Code Samples",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&q=80",
      description:
        "A starter kit for building your own React component library, including configuration, testing setup, and example components.",
      fileType: "ZIP",
      fileSize: "7.2 MB",
      downloads: 9340,
    },
    {
      id: 10,
      title: "SEO Optimization Checklist",
      category: "Cheat Sheets",
      image:
        "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=500&q=80",
      description:
        "A comprehensive checklist for optimizing websites for search engines, covering on-page, off-page, and technical SEO factors.",
      fileType: "PDF",
      fileSize: "2.8 MB",
      downloads: 10560,
    },
    {
      id: 11,
      title: "Mobile App Design Guidelines",
      category: "Guides",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&q=80",
      description:
        "A detailed guide to designing mobile applications for iOS and Android, covering UI patterns, accessibility, and platform-specific guidelines.",
      fileType: "PDF",
      fileSize: "15.3 MB",
      downloads: 7890,
    },
    {
      id: 12,
      title: "Database Design Fundamentals",
      category: "Videos",
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&q=80",
      description:
        "A video series covering relational database design principles, normalization, SQL basics, and best practices for efficient data modeling.",
      fileType: "MP4",
      fileSize: "280 MB",
      downloads: 5430,
    },
  ];

  // Function to format download count
  const formatDownloads = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  // Function to get icon based on file type
  const getFileIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case "pdf":
        return <FileText className="h-4 w-4" />;
      case "mp4":
        return <Video className="h-4 w-4" />;
      case "zip":
        return <Code className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="container py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Free Learning Resources</h1>
        <p className="text-muted-foreground">
          Access our library of free resources to support your learning journey.
          Download e-books, templates, cheat sheets, and more to enhance your
          skills and knowledge.
        </p>

        {/* Search */}
        <div className="relative max-w-2xl mx-auto mt-8">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search for resources..." className="pl-10 py-6" />
        </div>
      </div>

      {/* Categories */}
      <Tabs defaultValue="All Resources" className="mb-12">
        <TabsList className="flex overflow-x-auto pb-2 -mb-2 mb-6">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="px-4">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources
                .filter(
                  (resource) =>
                    category === "All Resources" ||
                    resource.category === category,
                )
                .map((resource) => (
                  <Card
                    key={resource.id}
                    className="overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={resource.image}
                        alt={resource.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        {getFileIcon(resource.fileType)}
                        <span className="ml-1">{resource.fileType}</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <span className="text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-2 py-0.5 rounded">
                          {resource.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Download className="h-4 w-4 mr-1" />
                          <span>
                            {formatDownloads(resource.downloads)} downloads
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {resource.fileSize}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          className="flex-1 bg-orange-500 hover:bg-orange-600"
                          asChild
                        >
                          <Link href={`#download-${resource.id}`}>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Link>
                        </Button>
                        <Button variant="outline" size="icon">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Featured Collections */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          Featured Resource Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-40 w-full">
              <Image
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80"
                alt="Web Development Starter Pack"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="font-bold text-xl text-white">
                  Web Development Starter Pack
                </h3>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground text-sm mb-4">
                Everything you need to start your web development journey: cheat
                sheets, templates, and guides.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>12 resources</span>
                </div>
                <span className="text-sm text-muted-foreground">45.8 MB</span>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                View Collection
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-40 w-full">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80"
                alt="Data Science Toolkit"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="font-bold text-xl text-white">
                  Data Science Toolkit
                </h3>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground text-sm mb-4">
                Essential resources for data scientists: Python notebooks,
                datasets, visualization templates, and more.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>15 resources</span>
                </div>
                <span className="text-sm text-muted-foreground">78.2 MB</span>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                View Collection
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-40 w-full">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80"
                alt="Digital Marketing Bundle"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="font-bold text-xl text-white">
                  Digital Marketing Bundle
                </h3>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground text-sm mb-4">
                Complete set of marketing resources: content calendars, SEO
                checklists, social media templates, and analytics guides.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>10 resources</span>
                </div>
                <span className="text-sm text-muted-foreground">32.5 MB</span>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                View Collection
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-orange-50 dark:bg-orange-900/10 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Get New Resources in Your Inbox
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Subscribe to our newsletter to receive new resources, templates, and
          guides directly to your email. We send monthly updates with the latest
          content.
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
