import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Award,
  Clock,
  BookOpen,
  CheckCircle,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CertificationsPage() {
  const categories = [
    "All Certifications",
    "Web Development",
    "Data Science",
    "Business",
    "Design",
    "Marketing",
    "IT & Software",
  ];

  const certifications = [
    {
      id: 1,
      title: "Full-Stack Web Developer Certification",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80",
      duration: "3 months",
      level: "Intermediate",
      modules: 12,
      price: "$499",
      rating: 4.8,
      reviews: 1245,
      accredited: true,
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Data Science Professional Certificate",
      category: "Data Science",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
      duration: "4 months",
      level: "Advanced",
      modules: 15,
      price: "$699",
      rating: 4.9,
      reviews: 987,
      accredited: true,
      skills: [
        "Python",
        "Data Analysis",
        "Machine Learning",
        "Statistics",
        "SQL",
      ],
    },
    {
      id: 3,
      title: "UX/UI Design Professional",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
      duration: "2 months",
      level: "Intermediate",
      modules: 8,
      price: "$399",
      rating: 4.7,
      reviews: 856,
      accredited: true,
      skills: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Figma",
        "Design Systems",
      ],
    },
    {
      id: 4,
      title: "Digital Marketing Specialist",
      category: "Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
      duration: "2.5 months",
      level: "Beginner to Intermediate",
      modules: 10,
      price: "$349",
      rating: 4.6,
      reviews: 723,
      accredited: true,
      skills: [
        "SEO",
        "Content Marketing",
        "Social Media",
        "Email Marketing",
        "Analytics",
      ],
    },
    {
      id: 5,
      title: "Project Management Professional",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80",
      duration: "3 months",
      level: "Intermediate to Advanced",
      modules: 12,
      price: "$599",
      rating: 4.8,
      reviews: 912,
      accredited: true,
      skills: [
        "Project Planning",
        "Risk Management",
        "Agile",
        "Scrum",
        "Leadership",
      ],
    },
    {
      id: 6,
      title: "Cybersecurity Analyst Certificate",
      category: "IT & Software",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80",
      duration: "4 months",
      level: "Advanced",
      modules: 14,
      price: "$799",
      rating: 4.9,
      reviews: 645,
      accredited: true,
      skills: [
        "Network Security",
        "Ethical Hacking",
        "Cryptography",
        "Security Compliance",
        "Incident Response",
      ],
    },
    {
      id: 7,
      title: "Mobile App Developer",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&q=80",
      duration: "3 months",
      level: "Intermediate",
      modules: 10,
      price: "$549",
      rating: 4.7,
      reviews: 578,
      accredited: true,
      skills: [
        "React Native",
        "Swift",
        "Kotlin",
        "Mobile UI/UX",
        "App Publishing",
      ],
    },
    {
      id: 8,
      title: "Business Analytics Certificate",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
      duration: "2.5 months",
      level: "Intermediate",
      modules: 9,
      price: "$449",
      rating: 4.6,
      reviews: 489,
      accredited: true,
      skills: [
        "Data Analysis",
        "Excel Advanced",
        "Tableau",
        "Business Intelligence",
        "Reporting",
      ],
    },
  ];

  return (
    <div className="container py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Professional Certifications</h1>
        <p className="text-muted-foreground">
          Earn industry-recognized certifications to validate your skills and
          advance your career. Our certification programs are designed by
          experts and trusted by employers worldwide.
        </p>

        {/* Search */}
        <div className="relative max-w-2xl mx-auto mt-8">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for certifications..."
            className="pl-10 py-6"
          />
        </div>
      </div>

      {/* Categories */}
      <Tabs defaultValue="All Certifications" className="mb-12">
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
              {certifications
                .filter(
                  (cert) =>
                    category === "All Certifications" ||
                    cert.category === category,
                )
                .map((certification) => (
                  <Card
                    key={certification.id}
                    className="overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={certification.image}
                        alt={certification.title}
                        fill
                        className="object-cover"
                      />
                      {certification.accredited && (
                        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                          <Award className="h-3 w-3 mr-1" />
                          Accredited
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2 line-clamp-2">
                        {certification.title}
                      </h3>

                      <div className="flex items-center mb-4">
                        <div className="flex mr-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(certification.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium">
                          {certification.rating}
                        </span>
                        <span className="text-sm text-muted-foreground ml-1">
                          ({certification.reviews})
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {certification.skills
                          .slice(0, 3)
                          .map((skill, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        {certification.skills.length > 3 && (
                          <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">
                            +{certification.skills.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {certification.duration}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {certification.modules} modules
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-orange-500">
                          {certification.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {certification.level}
                        </span>
                      </div>

                      <Button
                        className="w-full bg-orange-500 hover:bg-orange-600"
                        asChild
                      >
                        <Link href={`/certifications/${certification.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Why Get Certified */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Why Get Certified with SmartLearn?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-full mb-4">
              <Award className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="font-bold text-lg mb-2">Industry-Recognized</h3>
            <p className="text-muted-foreground">
              Our certifications are recognized by leading companies and
              organizations worldwide, giving you a competitive edge in the job
              market.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="font-bold text-lg mb-2">Practical Skills</h3>
            <p className="text-muted-foreground">
              Our programs focus on practical, job-ready skills with real-world
              projects and assessments that demonstrate your capabilities to
              employers.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-full mb-4">
              <BookOpen className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="font-bold text-lg mb-2">Expert Instruction</h3>
            <p className="text-muted-foreground">
              Learn from industry experts with years of experience who provide
              mentorship and guidance throughout your certification journey.
            </p>
          </div>
        </div>
      </div>

      {/* Employer Partners */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Trusted by Leading Employers
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
          <div className="h-12 w-32 relative">
            <Image
              src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=200&q=80"
              alt="Microsoft"
              fill
              className="object-contain"
            />
          </div>
          <div className="h-12 w-32 relative">
            <Image
              src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=200&q=80"
              alt="Google"
              fill
              className="object-contain"
            />
          </div>
          <div className="h-12 w-32 relative">
            <Image
              src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=200&q=80"
              alt="Amazon"
              fill
              className="object-contain"
            />
          </div>
          <div className="h-12 w-32 relative">
            <Image
              src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=200&q=80"
              alt="IBM"
              fill
              className="object-contain"
            />
          </div>
          <div className="h-12 w-32 relative">
            <Image
              src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=200&q=80"
              alt="Oracle"
              fill
              className="object-contain"
            />
          </div>
          <div className="h-12 w-32 relative">
            <Image
              src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=200&q=80"
              alt="Salesforce"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-orange-50 dark:bg-orange-900/10 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Advance Your Career?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Join thousands of professionals who have transformed their careers
          with our certification programs. Get started today and take the first
          step toward your professional goals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-orange-500 hover:bg-orange-600">
            Browse All Certifications
          </Button>
          <Button variant="outline">Request Information</Button>
        </div>
      </div>
    </div>
  );
}
