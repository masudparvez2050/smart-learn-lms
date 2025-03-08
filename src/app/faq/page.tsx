"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Mail, MessageSquare } from "lucide-react";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // FAQ categories and questions
  const faqCategories = [
    {
      id: "general",
      name: "General",
      questions: [
        {
          question: "What is SmartLearn?",
          answer:
            "SmartLearn is an online learning platform that offers thousands of courses across various subjects including programming, business, design, marketing, and more. Our mission is to provide accessible, high-quality education to learners worldwide.",
        },
        {
          question: "How do I create an account?",
          answer:
            "To create an account, click the 'Sign Up' button in the top right corner of the homepage. You can sign up using your email address, or through Google or Facebook authentication. Follow the prompts to complete your profile setup.",
        },
        {
          question: "Is SmartLearn available on mobile devices?",
          answer:
            "Yes, SmartLearn is available on iOS and Android devices. You can download our mobile app from the App Store or Google Play Store to access your courses on the go, even offline.",
        },
        {
          question: "How do I contact customer support?",
          answer:
            "You can contact our customer support team through the 'Help' section in your account dashboard, or by emailing support@smartlearn.com. Our team is available 24/7 to assist you with any questions or issues.",
        },
      ],
    },
    {
      id: "courses",
      name: "Courses & Learning",
      questions: [
        {
          question: "How do I find courses I'm interested in?",
          answer:
            "You can browse courses by category, use the search function to find specific topics, or check out our curated collections on the homepage. We also provide personalized course recommendations based on your interests and learning history.",
        },
        {
          question: "Can I preview a course before purchasing?",
          answer:
            "Yes, most courses offer free preview lectures that you can access before making a purchase. Look for the 'Preview' button on the course landing page to see sample content and determine if the course meets your needs.",
        },
        {
          question: "How long do I have access to a course after purchase?",
          answer:
            "Once you purchase a course, you have lifetime access to the course materials. You can revisit the content as many times as you like, even after completing the course.",
        },
        {
          question: "Can I download course materials for offline viewing?",
          answer:
            "Yes, most courses offer downloadable resources and video lectures for offline viewing. Look for the download icon next to the lecture title. Note that you'll need to be logged in to access these downloads.",
        },
        {
          question: "How do I track my progress in a course?",
          answer:
            "Your progress is automatically tracked as you complete lectures and assignments. You can view your overall progress on the course dashboard, which shows the percentage of course content you've completed.",
        },
      ],
    },
    {
      id: "payments",
      name: "Payments & Refunds",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept major credit and debit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. In some regions, we also offer additional local payment methods.",
        },
        {
          question: "Do you offer any discounts or promotions?",
          answer:
            "Yes, we regularly offer promotions and discounts on courses. You can sign up for our newsletter to receive notifications about upcoming sales. We also offer special pricing for students, educators, and businesses.",
        },
        {
          question: "What is your refund policy?",
          answer:
            "We offer a 30-day money-back guarantee for most courses. If you're unsatisfied with a course, you can request a refund within 30 days of purchase. Some promotional items or subscription plans may have different refund policies, which will be clearly stated at the time of purchase.",
        },
        {
          question: "How do I request a refund?",
          answer:
            "To request a refund, go to your purchase history in your account dashboard, find the course, and click 'Request Refund'. Follow the prompts to complete your request. Refunds are typically processed within 5-7 business days.",
        },
        {
          question: "Do you offer subscription plans?",
          answer:
            "Yes, we offer monthly and annual subscription plans that provide access to thousands of courses for a flat fee. Subscription details and pricing can be found on our Pricing page.",
        },
      ],
    },
    {
      id: "certificates",
      name: "Certificates & Credentials",
      questions: [
        {
          question: "Do I receive a certificate upon course completion?",
          answer:
            "Yes, we provide certificates of completion for all paid courses. Once you've completed all the required lectures and assignments, you can download your certificate from the course dashboard or your achievements page.",
        },
        {
          question: "Are your certificates accredited?",
          answer:
            "Our platform offers both non-accredited certificates and accredited certificates depending on the course. Accredited courses are clearly marked and are typically offered in partnership with universities or professional organizations.",
        },
        {
          question: "How can I share my certificate?",
          answer:
            "You can share your certificate directly to LinkedIn from your achievements page, download it as a PDF to attach to your resume, or share the unique verification link with potential employers to validate your achievement.",
        },
        {
          question: "Do certificates expire?",
          answer:
            "No, your certificates do not expire and will remain accessible in your account indefinitely. However, for certain professional certifications that require renewal, the validity period will be clearly indicated on the certificate.",
        },
      ],
    },
    {
      id: "instructors",
      name: "For Instructors",
      questions: [
        {
          question: "How do I become an instructor?",
          answer:
            "To become an instructor, visit our 'Teach on SmartLearn' page and complete the application form. Our team will review your application and course proposal, and get back to you within 1-2 weeks.",
        },
        {
          question: "How much can I earn as an instructor?",
          answer:
            "Instructor earnings vary based on course popularity, pricing, and other factors. Generally, instructors earn a revenue share of 50-70% on course sales. Our top instructors earn six-figure incomes annually through the platform.",
        },
        {
          question: "What support do you provide to instructors?",
          answer:
            "We provide comprehensive support to instructors, including course creation guidelines, video production tips, marketing assistance, and a dedicated instructor support team. We also offer regular webinars and resources to help you create successful courses.",
        },
        {
          question: "Do I retain ownership of my course content?",
          answer:
            "Yes, you retain full ownership of your content. By publishing on our platform, you grant us a license to host and distribute your content to students, but you can still use your content elsewhere if desired.",
        },
      ],
    },
    {
      id: "technical",
      name: "Technical Issues",
      questions: [
        {
          question: "What are the system requirements for using SmartLearn?",
          answer:
            "SmartLearn works on any modern web browser (Chrome, Firefox, Safari, Edge). For the best experience, we recommend a stable internet connection with at least 5 Mbps download speed. Our mobile apps require iOS 13+ or Android 7+.",
        },
        {
          question:
            "Videos won't play or are buffering constantly. What can I do?",
          answer:
            "First, check your internet connection and try lowering the video quality in the player settings. Clear your browser cache or try a different browser. If issues persist, try the mobile app which offers better offline support.",
        },
        {
          question: "How do I reset my password?",
          answer:
            "To reset your password, click on the 'Forgot Password' link on the login page. Enter your email address, and we'll send you instructions to reset your password. Follow the link in the email to create a new password.",
        },
        {
          question:
            "The website is not displaying correctly. How can I fix this?",
          answer:
            "Try clearing your browser cache and cookies, or use incognito/private browsing mode. If the issue persists, try a different browser or device. You can also contact our support team with details about the specific issue you're experiencing.",
        },
      ],
    },
  ];

  // Filter FAQs based on search query
  const filteredFAQs = searchQuery
    ? faqCategories
        .map((category) => ({
          ...category,
          questions: category.questions.filter(
            (q) =>
              q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((category) => category.questions.length > 0)
    : faqCategories;

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about SmartLearn. If you can't find
            what you're looking for, feel free to contact our support team.
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto mt-8">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for answers..."
              className="pl-10 py-6"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* FAQ Tabs */}
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-start mb-8 gap-2">
            {faqCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-4 py-2"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {faqCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card>
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFAQs
                      .find((c) => c.id === category.id)
                      ?.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      )) || (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground mb-4">
                          No results found for your search.
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => setSearchQuery("")}
                        >
                          Clear Search
                        </Button>
                      </div>
                    )}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Still Need Help Section */}
        <div className="mt-16 bg-orange-50 dark:bg-orange-900/10 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Still Have Questions?</h2>
              <p className="text-muted-foreground">
                Can't find the answer you're looking for? Our support team is
                here to help.
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
      </div>
    </div>
  );
}
