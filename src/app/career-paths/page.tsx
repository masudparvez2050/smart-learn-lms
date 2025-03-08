import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  ArrowRight,
  Clock,
  BookOpen,
  Award,
  Briefcase,
  CheckCircle,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CareerPathsPage() {
  const categories = [
    "All Paths",
    "Web Development",
    "Data Science",
    "Design",
    "Business",
    "Marketing",
    "IT & Software",
  ];

  const careerPaths = [
    {
      id: 1,
      title: "Full-Stack Web Developer",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80",
      description:
        "Master front-end and back-end technologies to build complete web applications. Learn HTML, CSS, JavaScript, React, Node.js, and databases.",
      duration: "6 months",
      courses: 12,
      level: "Beginner to Advanced",
      skills: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Git",
      ],
      jobRoles: [
        "Full-Stack Developer",
        "Web Application Developer",
        "Software Engineer",
      ],
      avgSalary: "$105,000",
    },
    {
      id: 2,
      title: "Data Scientist",
      category: "Data Science",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
      description:
        "Learn to analyze and interpret complex data to help organizations make better decisions. Master Python, statistics, machine learning, and data visualization.",
      duration: "8 months",
      courses: 15,
      level: "Intermediate to Advanced",
      skills: [
        "Python",
        "Statistics",
        "Machine Learning",
        "Data Visualization",
        "SQL",
        "Big Data",
      ],
      jobRoles: ["Data Scientist", "Machine Learning Engineer", "Data Analyst"],
      avgSalary: "$120,000",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
      description:
        "Develop the skills to create intuitive, effective, and beautiful user experiences. Learn user research, wireframing, prototyping, and design systems.",
      duration: "5 months",
      courses: 10,
      level: "Beginner to Intermediate",
      skills: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "Figma",
        "Adobe XD",
      ],
      jobRoles: ["UX Designer", "UI Designer", "Product Designer"],
      avgSalary: "$95,000",
    },
    {
      id: 4,
      title: "Digital Marketing Specialist",
      category: "Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
      description:
        "Master the strategies and tools to create effective digital marketing campaigns. Learn SEO, content marketing, social media, email marketing, and analytics.",
      duration: "4 months",
      courses: 8,
      level: "Beginner to Intermediate",
      skills: [
        "SEO",
        "Content Marketing",
        "Social Media",
        "Email Marketing",
        "Google Analytics",
        "PPC",
      ],
      jobRoles: [
        "Digital Marketing Specialist",
        "Content Strategist",
        "SEO Specialist",
      ],
      avgSalary: "$85,000",
    },
    {
      id: 5,
      title: "Cloud Solutions Architect",
      category: "IT & Software",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
      description:
        "Learn to design and implement cloud infrastructure solutions. Master AWS, Azure, or Google Cloud, along with networking, security, and DevOps practices.",
      duration: "7 months",
      courses: 14,
      level: "Intermediate to Advanced",
      skills: [
        "AWS/Azure/GCP",
        "Cloud Architecture",
        "DevOps",
        "Networking",
        "Security",
        "Containers",
      ],
      jobRoles: ["Cloud Architect", "DevOps Engineer", "Solutions Architect"],
      avgSalary: "$130,000",
    },
    {
      id: 6,
      title: "Product Manager",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80",
      description:
        "Develop the skills to lead product development from conception to launch. Learn product strategy, user research, roadmapping, and agile methodologies.",
      duration: "6 months",
      courses: 12,
      level: "Intermediate to Advanced",
      skills: [
        "Product Strategy",
        "User Research",
        "Roadmapping",
        "Agile",
        "Analytics",
        "Stakeholder Management",
      ],
      jobRoles: ["Product Manager", "Product Owner", "Program Manager"],
      avgSalary: "$115,000",
    },
    {
      id: 7,
      title: "Cybersecurity Specialist",
      category: "IT & Software",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80",
      description:
        "Master the techniques to protect systems and networks from digital attacks. Learn security fundamentals, ethical hacking, threat analysis, and security compliance.",
      duration: "7 months",
      courses: 13,
      level: "Intermediate to Advanced",
      skills: [
        "Network Security",
        "Ethical Hacking",
        "Cryptography",
        "Security Compliance",
        "Incident Response",
      ],
      jobRoles: ["Security Analyst", "Ethical Hacker", "Security Engineer"],
      avgSalary: "$110,000",
    },
    {
      id: 8,
      title: "Business Analyst",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?w=500&q=80",
      description:
        "Learn to analyze business processes and systems to recommend improvements and solutions. Master data analysis, requirements gathering, and process modeling.",
      duration: "5 months",
      courses: 10,
      level: "Beginner to Intermediate",
      skills: [
        "Data Analysis",
        "Requirements Gathering",
        "Process Modeling",
        "SQL",
        "Excel",
        "Visualization",
      ],
      jobRoles: ["Business Analyst", "Systems Analyst", "Process Analyst"],
      avgSalary: "$90,000",
    },
  ];

  return (
    <div className="container py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Career Paths</h1>
        <p className="text-muted-foreground">
          Follow structured learning paths designed to help you achieve specific
          career goals. Each path includes curated courses, projects, and
          resources to build job-ready skills.
        </p>

        {/* Search */}
        <div className="relative max-w-2xl mx-auto mt-8">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for career paths..."
            className="pl-10 py-6"
          />
        </div>
      </div>

      {/* Categories */}
      <Tabs defaultValue="All Paths" className="mb-12">
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
              {careerPaths
                .filter(
                  (path) =>
                    category === "All Paths" || path.category === category,
                )
                .map((path) => (
                  <Card
                    key={path.id}
                    className="overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={path.image}
                        alt={path.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <Briefcase className="h-3 w-3 mr-1" />
                        {path.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">{path.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {path.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {path.skills.slice(0, 4).map((skill, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                        {path.skills.length > 4 && (
                          <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">
                            +{path.skills.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">{path.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">
                            {path.courses} courses
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm font-medium">
                            {path.jobRoles[0]}
                          </span>
                        </div>
                        <span className="text-sm font-bold text-orange-500">
                          {path.avgSalary}
                        </span>
                      </div>

                      <Button
                        className="w-full bg-orange-500 hover:bg-orange-600"
                        asChild
                      >
                        <Link href={`/career-paths/${path.id}`}>
                          View Path
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* How It Works */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center">
          How Career Paths Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-full mb-4 relative">
              <Users className="h-8 w-8 text-orange-500" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
            </div>
            <h3 className="font-bold text-lg mb-2">Choose Your Path</h3>
            <p className="text-muted-foreground">
              Select a career path aligned with your goals and interests from
              our curated collection.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-full mb-4 relative">
              <BookOpen className="h-8 w-8 text-orange-500" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
            </div>
            <h3 className="font-bold text-lg mb-2">Follow the Curriculum</h3>
            <p className="text-muted-foreground">
              Complete the structured sequence of courses, projects, and
              assessments at your own pace.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-full mb-4 relative">
              <CheckCircle className="h-8 w-8 text-orange-500" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
            </div>
            <h3 className="font-bold text-lg mb-2">Build Your Portfolio</h3>
            <p className="text-muted-foreground">
              Apply your skills through hands-on projects that demonstrate your
              capabilities to employers.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-full mb-4 relative">
              <Award className="h-8 w-8 text-orange-500" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
            </div>
            <h3 className="font-bold text-lg mb-2">Earn Certification</h3>
            <p className="text-muted-foreground">
              Receive a career path certification and get support for your job
              search and career advancement.
            </p>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="relative h-20 w-20 rounded-full overflow-hidden mb-4">
                  <Image
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                    alt="John Smith"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">John Smith</h3>
                <p className="text-orange-500">
                  Full-Stack Developer at TechCorp
                </p>
              </div>
              <p className="text-muted-foreground text-sm italic">
                "The Full-Stack Developer path gave me all the skills I needed
                to transition from a customer service role to a developer
                position. The structured curriculum and projects were exactly
                what I needed to build my portfolio."
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="relative h-20 w-20 rounded-full overflow-hidden mb-4">
                  <Image
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                    alt="Sarah Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">Sarah Johnson</h3>
                <p className="text-orange-500">
                  Data Scientist at AnalyticsPro
                </p>
              </div>
              <p className="text-muted-foreground text-sm italic">
                "I completed the Data Science path while working full-time, and
                within two months of finishing, I landed my dream job. The
                hands-on projects with real-world datasets made all the
                difference in my interviews."
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="relative h-20 w-20 rounded-full overflow-hidden mb-4">
                  <Image
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
                    alt="Michael Chen"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">Michael Chen</h3>
                <p className="text-orange-500">UX Designer at CreativeStudio</p>
              </div>
              <p className="text-muted-foreground text-sm italic">
                "With no prior design experience, the UX/UI Designer path gave
                me the foundation I needed to build a strong portfolio. The
                career support helped me navigate the job market and negotiate a
                great starting salary."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-orange-50 dark:bg-orange-900/10 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Start Your Career Journey?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Choose a career path that aligns with your goals and start building
          the skills you need for success. Our structured learning paths will
          guide you every step of the way.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-orange-500 hover:bg-orange-600">
            Explore All Paths
          </Button>
          <Button variant="outline">Take Career Assessment</Button>
        </div>
      </div>
    </div>
  );
}
