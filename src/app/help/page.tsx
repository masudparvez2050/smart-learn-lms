import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  BookOpen,
  FileText,
  MessageSquare,
  Video,
  HelpCircle,
  LifeBuoy,
} from "lucide-react";

export default function HelpPage() {
  const helpCategories = [
    {
      title: "Getting Started",
      description:
        "New to SmartLearn? Learn the basics and get up and running quickly.",
      icon: <BookOpen className="h-8 w-8 text-orange-500" />,
      link: "/help/getting-started",
    },
    {
      title: "Account & Profile",
      description:
        "Manage your account settings, profile information, and preferences.",
      icon: <FileText className="h-8 w-8 text-orange-500" />,
      link: "/help/account",
    },
    {
      title: "Courses & Learning",
      description:
        "Find answers about enrolling in courses, learning features, and certificates.",
      icon: <Video className="h-8 w-8 text-orange-500" />,
      link: "/help/courses",
    },
    {
      title: "Payments & Billing",
      description:
        "Questions about payments, refunds, subscriptions, or invoices.",
      icon: <FileText className="h-8 w-8 text-orange-500" />,
      link: "/help/payments",
    },
    {
      title: "For Instructors",
      description:
        "Resources for course creation, instructor tools, and revenue.",
      icon: <MessageSquare className="h-8 w-8 text-orange-500" />,
      link: "/help/instructors",
    },
    {
      title: "Technical Support",
      description: "Troubleshooting common issues and technical problems.",
      icon: <HelpCircle className="h-8 w-8 text-orange-500" />,
      link: "/help/technical",
    },
  ];

  const popularArticles = [
    {
      title: "How to Reset Your Password",
      category: "Account & Profile",
      link: "/help/articles/reset-password",
    },
    {
      title: "Downloading Course Videos for Offline Viewing",
      category: "Courses & Learning",
      link: "/help/articles/download-videos",
    },
    {
      title: "Requesting a Refund",
      category: "Payments & Billing",
      link: "/help/articles/refund-policy",
    },
    {
      title: "Creating Your First Course",
      category: "For Instructors",
      link: "/help/articles/create-course",
    },
    {
      title: "Troubleshooting Video Playback Issues",
      category: "Technical Support",
      link: "/help/articles/video-issues",
    },
  ];

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Help Center</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Find answers, tutorials, and resources to help you get the most out of
          SmartLearn.
        </p>

        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for help articles..."
            className="pl-10 py-6 text-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {helpCategories.map((category, index) => (
          <Card
            key={index}
            className="hover:shadow-md transition-shadow duration-200"
          >
            <CardContent className="p-6">
              <div className="mb-4">{category.icon}</div>
              <h2 className="text-xl font-bold mb-2">{category.title}</h2>
              <p className="text-muted-foreground mb-4">
                {category.description}
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href={category.link}>Browse Articles</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Popular Help Articles</h2>
        <div className="space-y-4">
          {popularArticles.map((article, index) => (
            <Link key={index} href={article.link} className="block">
              <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors duration-200">
                <h3 className="font-medium">{article.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {article.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-orange-50 border-orange-200">
          <CardContent className="p-6 flex items-center">
            <div className="mr-6">
              <MessageSquare className="h-12 w-12 text-orange-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Contact Support</h3>
              <p className="text-muted-foreground mb-4">
                Can't find what you're looking for? Our support team is here to
                help.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6 flex items-center">
            <div className="mr-6">
              <LifeBuoy className="h-12 w-12 text-blue-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Community Forum</h3>
              <p className="text-muted-foreground mb-4">
                Connect with other learners and instructors to get answers and
                share knowledge.
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600" asChild>
                <Link href="/community">Visit Forum</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Browse our comprehensive FAQ section for quick answers to common
          questions.
        </p>
        <Button variant="outline" className="rounded-full" asChild>
          <Link href="/faq">View All FAQs</Link>
        </Button>
      </div>
    </div>
  );
}
