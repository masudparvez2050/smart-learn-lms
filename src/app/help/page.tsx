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
  CreditCard,
  Users,
  Laptop,
  Award,
} from "lucide-react";

export default function HelpPage() {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "New to SmartLearn? Learn the basics here",
      icon: <BookOpen className="h-8 w-8 text-orange-500" />,
      link: "#getting-started",
    },
    {
      title: "Account & Profile",
      description: "Manage your account settings and profile",
      icon: <Users className="h-8 w-8 text-orange-500" />,
      link: "#account",
    },
    {
      title: "Courses & Learning",
      description: "How to find and take courses",
      icon: <Video className="h-8 w-8 text-orange-500" />,
      link: "#courses",
    },
    {
      title: "Payments & Billing",
      description: "Information about payments and refunds",
      icon: <CreditCard className="h-8 w-8 text-orange-500" />,
      link: "#payments",
    },
    {
      title: "Technical Support",
      description: "Troubleshooting and technical issues",
      icon: <Laptop className="h-8 w-8 text-orange-500" />,
      link: "#technical",
    },
    {
      title: "Certificates",
      description: "About course completion certificates",
      icon: <Award className="h-8 w-8 text-orange-500" />,
      link: "#certificates",
    },
  ];

  const faqs = [
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on the 'Forgot Password' link on the login page. Enter your email address, and we'll send you instructions to reset your password. Follow the link in the email to create a new password.",
    },
    {
      question: "Can I download courses for offline viewing?",
      answer:
        "Yes, most courses offer downloadable resources and video lectures for offline viewing. Look for the download icon next to the lecture title. Note that you'll need to be logged in to access these downloads.",
    },
    {
      question: "How do I get a refund for a course?",
      answer:
        "We offer a 30-day money-back guarantee for most courses. If you're unsatisfied with your purchase, you can request a refund within 30 days by going to your purchase history in your account dashboard, find the course, and click 'Request Refund'. Please note that some promotional items may have different refund policies.",
    },
    {
      question: "How do I contact an instructor?",
      answer:
        "You can contact instructors through the course Q&A section. Navigate to the course dashboard, click on 'Q&A', and post your question. Instructors typically respond within 1-2 business days.",
    },
    {
      question: "Are certificates provided upon course completion?",
      answer:
        "Yes, we provide certificates of completion for all paid courses. Once you've completed all the required lectures and assignments, you can download your certificate from the course dashboard or your achievements page.",
    },
    {
      question: "How long do I have access to a course after purchase?",
      answer:
        "Once you purchase a course, you have lifetime access to the course materials. You can revisit the content as many times as you like, even after completing the course.",
    },
  ];

  return (
    <div className="container py-12 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Help Center</h1>
        <p className="text-muted-foreground mb-8">
          Find answers to common questions and learn how to make the most of
          your SmartLearn experience.
        </p>

        {/* Search */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for help articles..."
            className="pl-10 py-6 text-lg"
          />
        </div>
      </div>

      {/* Help Categories */}
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

      {/* FAQs */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <Card>
          <CardContent className="p-6">
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
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Contact Support */}
      <div className="bg-orange-50 dark:bg-orange-900/10 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Still Need Help?</h2>
            <p className="text-muted-foreground">
              Can't find what you're looking for? Our support team is here to
              help.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Mail className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
            <Button variant="outline">
              <MessageSquare className="mr-2 h-4 w-4" />
              Live Chat
            </Button>
          </div>
        </div>
      </div>

      {/* Help Topics */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Popular Help Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Course Navigation Guide",
              description:
                "Learn how to navigate through course content effectively",
              icon: <Video className="h-6 w-6 text-orange-500" />,
            },
            {
              title: "Payment Methods",
              description:
                "Information about accepted payment methods and billing",
              icon: <CreditCard className="h-6 w-6 text-orange-500" />,
            },
            {
              title: "Account Security",
              description: "Tips to keep your account secure and protected",
              icon: <HelpCircle className="h-6 w-6 text-orange-500" />,
            },
            {
              title: "Mobile App Guide",
              description: "How to use SmartLearn on your mobile devices",
              icon: <Laptop className="h-6 w-6 text-orange-500" />,
            },
            {
              title: "Certificates & Achievements",
              description:
                "Everything about course certificates and achievements",
              icon: <Award className="h-6 w-6 text-orange-500" />,
            },
            {
              title: "Instructor Communication",
              description:
                "How to effectively communicate with course instructors",
              icon: <MessageSquare className="h-6 w-6 text-orange-500" />,
            },
          ].map((topic, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">{topic.icon}</div>
                  <div>
                    <h3 className="font-medium mb-1">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {topic.description}
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto mt-2 text-orange-500"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
