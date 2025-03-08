import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  BookOpen,
  FileText,
  HelpCircle,
  Mail,
  MessageSquare,
  Video,
  ExternalLink,
} from "lucide-react";

export default function AdminHelpPage() {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of the admin dashboard",
      icon: <BookOpen className="h-8 w-8 text-orange-500" />,
      link: "#getting-started",
    },
    {
      title: "User Management",
      description: "Managing users, roles, and permissions",
      icon: <FileText className="h-8 w-8 text-orange-500" />,
      link: "#user-management",
    },
    {
      title: "Course Management",
      description: "Creating and managing courses",
      icon: <Video className="h-8 w-8 text-orange-500" />,
      link: "#course-management",
    },
    {
      title: "Reports & Analytics",
      description: "Understanding platform analytics",
      icon: <FileText className="h-8 w-8 text-orange-500" />,
      link: "#reports",
    },
    {
      title: "Security Settings",
      description: "Configuring security and access controls",
      icon: <HelpCircle className="h-8 w-8 text-orange-500" />,
      link: "#security",
    },
    {
      title: "Technical Support",
      description: "Get help with technical issues",
      icon: <MessageSquare className="h-8 w-8 text-orange-500" />,
      link: "#support",
    },
  ];

  const faqs = [
    {
      question: "How do I add a new administrator?",
      answer:
        "To add a new administrator, go to the Users section, click 'Add New User', fill in their details, and select the 'Administrator' role. You can also set specific permissions for the new admin account.",
    },
    {
      question: "How can I view detailed sales reports?",
      answer:
        "Detailed sales reports can be found in the Reports section. You can filter by date range, course category, or instructor. You can also export reports in CSV or PDF format for further analysis.",
    },
    {
      question: "How do I approve or reject a new course submission?",
      answer:
        "New course submissions appear in the Courses section with a 'Pending' status. Click on the course to review its details, then use the 'Approve' or 'Reject' buttons. You can also provide feedback to the instructor.",
    },
    {
      question: "How do I manage user refund requests?",
      answer:
        "Refund requests are managed in the Sales section under 'Refund Requests'. Each request shows the order details, reason for refund, and elapsed time since purchase. You can approve or deny requests based on your refund policy.",
    },
    {
      question: "How can I customize the platform's appearance?",
      answer:
        "Platform appearance settings are found in the Settings section under 'Appearance'. Here you can update the logo, color scheme, and other branding elements. Changes will be applied platform-wide.",
    },
    {
      question: "How do I set up payment gateways?",
      answer:
        "Payment gateway configuration is in the Settings section under 'Payments'. You can enable/disable payment methods and enter your API credentials for each gateway. Be sure to test transactions in sandbox mode before going live.",
    },
  ];

  const tutorials = [
    {
      title: "Admin Dashboard Overview",
      duration: "5:32",
      link: "#",
    },
    {
      title: "Managing Users and Permissions",
      duration: "8:15",
      link: "#",
    },
    {
      title: "Course Approval Workflow",
      duration: "6:47",
      link: "#",
    },
    {
      title: "Understanding Analytics",
      duration: "10:23",
      link: "#",
    },
    {
      title: "Setting Up Payment Gateways",
      duration: "7:56",
      link: "#",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Admin Help Center</h1>
          <p className="text-muted-foreground">
            Find resources and support for the admin dashboard
          </p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">
          <Mail className="mr-2 h-4 w-4" />
          Contact Support
        </Button>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search for help articles..."
          className="pl-10 py-6 text-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>
            Quick answers to common questions about the admin dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/admin/help/faq">View All FAQs</Link>
          </Button>
        </CardFooter>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Video Tutorials</CardTitle>
            <CardDescription>
              Learn how to use the admin dashboard with step-by-step videos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tutorials.map((tutorial, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-3 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <Video className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="font-medium">{tutorial.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {tutorial.duration}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={tutorial.link}>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/admin/help/tutorials">View All Tutorials</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Documentation</CardTitle>
            <CardDescription>
              Comprehensive guides and reference materials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 hover:border-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors">
                <h3 className="font-medium mb-1">Administrator Guide</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Complete documentation for platform administrators
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="#">
                    <FileText className="mr-2 h-4 w-4" />
                    View Guide
                  </Link>
                </Button>
              </div>

              <div className="border rounded-lg p-4 hover:border-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors">
                <h3 className="font-medium mb-1">API Documentation</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Technical reference for the SmartLearn API
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="#">
                    <FileText className="mr-2 h-4 w-4" />
                    View API Docs
                  </Link>
                </Button>
              </div>

              <div className="border rounded-lg p-4 hover:border-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-colors">
                <h3 className="font-medium mb-1">Release Notes</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Latest updates and feature releases
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="#">
                    <FileText className="mr-2 h-4 w-4" />
                    View Release Notes
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-2/3">
              <h2 className="text-xl font-bold mb-2">Need Additional Help?</h2>
              <p className="text-muted-foreground mb-4">
                Our support team is available 24/7 to assist you with any
                questions or issues you may have with the admin dashboard.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Support
                </Button>
                <Button variant="outline">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Live Chat
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <HelpCircle className="h-32 w-32 text-orange-500" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
