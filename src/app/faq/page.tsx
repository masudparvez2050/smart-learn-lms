"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, Minus } from "lucide-react";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    if (openFaqs.includes(index)) {
      setOpenFaqs(openFaqs.filter((i) => i !== index));
    } else {
      setOpenFaqs([...openFaqs, index]);
    }
  };

  const faqCategories = [
    "All",
    "Getting Started",
    "Account & Profile",
    "Courses & Learning",
    "Payments & Billing",
    "For Instructors",
    "Technical",
  ];

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I create an account on SmartLearn?",
          answer:
            "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. You can sign up using your email address or through your Google, Facebook, or GitHub account. Follow the prompts to complete your profile setup.",
        },
        {
          question: "What are the system requirements for using SmartLearn?",
          answer:
            "SmartLearn works on any modern web browser (Chrome, Firefox, Safari, Edge). For the best experience, we recommend using the latest version of your preferred browser and having a stable internet connection. Some courses may have specific requirements for software or hardware which will be listed in the course description.",
        },
        {
          question: "How do I find courses that interest me?",
          answer:
            "You can browse courses by category, use the search function to find specific topics, or check out our curated collections on the homepage. We also provide personalized course recommendations based on your interests and learning history once you've created an account.",
        },
      ],
    },
    {
      category: "Account & Profile",
      questions: [
        {
          question: "How do I reset my password?",
          answer:
            "To reset your password, click on the 'Login' button, then select 'Forgot Password'. Enter the email address associated with your account, and we'll send you instructions to create a new password. If you don't receive the email, check your spam folder or contact our support team.",
        },
        {
          question: "Can I change my email address or username?",
          answer:
            "Yes, you can update your email address and profile information in your account settings. Go to your profile page, click on 'Settings', and you'll find options to update your personal information, including your email address and username.",
        },
        {
          question: "How do I delete my account?",
          answer:
            "To delete your account, go to your profile settings and scroll down to the 'Danger Zone' section. Click on 'Delete Account' and follow the confirmation steps. Please note that account deletion is permanent and will remove all your data, including course progress and certificates.",
        },
      ],
    },
    {
      category: "Courses & Learning",
      questions: [
        {
          question:
            "How long do I have access to a course after purchasing it?",
          answer:
            "Once you purchase a course on SmartLearn, you have lifetime access to it. You can revisit the course material at any time, even after completing the course. This allows you to refresh your knowledge or stay updated as course content is improved or expanded.",
        },
        {
          question: "Can I download course videos for offline viewing?",
          answer:
            "Yes, most courses allow you to download videos for offline viewing through our mobile app. However, this feature may not be available for all courses due to instructor preferences or content licensing restrictions. The download option will be visible on the course player if it's available.",
        },
        {
          question: "How do I get a certificate after completing a course?",
          answer:
            "Certificates are automatically generated when you complete all required lectures and assignments in a course. To access your certificate, go to the course page and click on the 'Certificate' tab, or visit your profile page and select the 'Certificates' section to view and download all your earned certificates.",
        },
        {
          question: "What happens if a course doesn't meet my expectations?",
          answer:
            "We offer a 30-day money-back guarantee for most courses. If you're unsatisfied with your purchase, you can request a refund within 30 days by going to your purchase history and clicking the 'Request Refund' button next to the course. Some specialized courses or subscriptions may have different refund policies, which will be clearly stated before purchase.",
        },
      ],
    },
    {
      category: "Payments & Billing",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept major credit and debit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. In some regions, we also support local payment methods. All payments are processed securely through our payment partners.",
        },
        {
          question: "How do I update my payment information?",
          answer:
            "To update your payment information, go to your account settings and select the 'Payment Methods' tab. From there, you can add new payment methods, set a default payment method, or remove existing ones. For subscription plans, any changes will apply to future billing cycles.",
        },
        {
          question: "Do you offer any discounts or promotional codes?",
          answer:
            "Yes, we regularly offer discounts and promotions. You can find these on our homepage, in email newsletters, or through our social media channels. To apply a promotional code, enter it in the designated field during checkout. We also offer special pricing for students, educators, and non-profit organizations.",
        },
      ],
    },
    {
      category: "For Instructors",
      questions: [
        {
          question: "How do I become an instructor on SmartLearn?",
          answer:
            "To become an instructor, visit our 'Teach on SmartLearn' page and fill out the application form. You'll need to provide information about your expertise, teaching experience, and course ideas. Our team will review your application and get back to you within 5 business days.",
        },
        {
          question: "How much can I earn as an instructor?",
          answer:
            "Instructor earnings vary based on several factors, including course pricing, enrollment numbers, and promotional activities. Generally, instructors receive 70% of the revenue from their course sales (excluding processing fees and taxes). Our top instructors earn substantial income through our platform, with some making six-figure annual earnings.",
        },
        {
          question: "What support does SmartLearn provide to instructors?",
          answer:
            "We provide comprehensive support to help instructors create and market successful courses. This includes course creation tools, video hosting, marketing assistance, and access to our instructor community. We also offer resources like our Instructor Academy, which provides guidance on course design, video production, and student engagement strategies.",
        },
      ],
    },
    {
      category: "Technical",
      questions: [
        {
          question: "Why won't my videos play properly?",
          answer:
            "If you're experiencing issues with video playback, try the following troubleshooting steps: 1) Check your internet connection, 2) Clear your browser cache, 3) Try a different browser, 4) Disable browser extensions that might interfere with video playback, 5) Ensure your browser is updated to the latest version. If problems persist, please contact our support team.",
        },
        {
          question: "How do I report a technical issue or bug?",
          answer:
            "To report a technical issue, go to the 'Help' section in the footer of our website and select 'Report a Bug'. Provide as much detail as possible, including the steps to reproduce the issue, your device and browser information, and screenshots if applicable. Our technical team will investigate and respond as soon as possible.",
        },
        {
          question: "Is SmartLearn compatible with mobile devices?",
          answer:
            "Yes, SmartLearn is fully responsive and works on smartphones and tablets. For the best mobile experience, we recommend downloading our dedicated mobile app, available for iOS and Android devices. The app offers additional features like offline viewing and push notifications for course updates.",
        },
      ],
    },
  ];

  // Filter FAQs based on search query
  const filteredFaqs = searchQuery
    ? faqs
        .map((category) => ({
          ...category,
          questions: category.questions.filter(
            (faq) =>
              faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((category) => category.questions.length > 0)
    : faqs;

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Find answers to common questions about SmartLearn. If you can't find
          what you're looking for, feel free to contact our support team.
        </p>

        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for answers..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="All" className="max-w-4xl mx-auto">
        <TabsList className="w-full grid grid-cols-7 mb-8">
          {faqCategories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {faqCategories.map((tabCategory) => (
          <TabsContent
            key={tabCategory}
            value={tabCategory}
            className="space-y-6"
          >
            {filteredFaqs
              .filter(
                (category) =>
                  tabCategory === "All" || category.category === tabCategory,
              )
              .map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-4">
                  {tabCategory === "All" && (
                    <h2 className="text-xl font-bold">{category.category}</h2>
                  )}

                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 10 + faqIndex;
                      const isOpen = openFaqs.includes(globalIndex);

                      return (
                        <div
                          key={faqIndex}
                          className="border rounded-lg overflow-hidden"
                        >
                          <button
                            className="flex justify-between items-center w-full p-4 text-left font-medium focus:outline-none"
                            onClick={() => toggleFaq(globalIndex)}
                          >
                            <span>{faq.question}</span>
                            {isOpen ? (
                              <Minus className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            ) : (
                              <Plus className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            )}
                          </button>

                          {isOpen && (
                            <div className="p-4 pt-0 border-t">
                              <p className="text-muted-foreground">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

            {filteredFaqs.filter(
              (category) =>
                tabCategory === "All" || category.category === tabCategory,
            ).length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  No results found for your search.
                </p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      <div className="max-w-4xl mx-auto mt-16 bg-muted/30 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          If you couldn't find the answer you were looking for, our support team
          is here to help.
        </p>
        <Button className="bg-orange-500 hover:bg-orange-600" asChild>
          <a href="/contact">Contact Support</a>
        </Button>
      </div>
    </div>
  );
}
