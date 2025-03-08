"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, MessageSquare, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      // In a real app, you would call your API here
      console.log("Submitting contact form:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-orange-500" />,
      title: "Email Us",
      details: "support@smartlearn.com",
      description: "For general inquiries and support",
    },
    {
      icon: <Phone className="h-6 w-6 text-orange-500" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm EST",
    },
    {
      icon: <MapPin className="h-6 w-6 text-orange-500" />,
      title: "Visit Us",
      details: "123 Learning Street, New York, NY 10001",
      description: "Our headquarters location",
    },
  ];

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have questions or need assistance? We're here to help. Reach out to
          our team using any of the methods below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {contactInfo.map((info, index) => (
          <Card
            key={index}
            className="text-center hover:shadow-md transition-shadow duration-200"
          >
            <CardContent className="pt-6 pb-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  {info.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{info.title}</h3>
              <p className="font-medium mb-1">{info.details}</p>
              <p className="text-sm text-muted-foreground">
                {info.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Thank You!</h3>
              <p className="text-muted-foreground mb-4">
                Your message has been sent successfully. We'll get back to you
                as soon as possible.
              </p>
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                  });
                }}
                className="bg-orange-500 hover:bg-orange-600"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing Question</SelectItem>
                    <SelectItem value="partnership">
                      Partnership Opportunity
                    </SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-32"
                  required
                />
              </div>

              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-2">
                How do I reset my password?
              </h3>
              <p className="text-muted-foreground">
                You can reset your password by clicking on the "Forgot Password"
                link on the login page. You'll receive an email with
                instructions to create a new password.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">
                Can I get a refund for a course?
              </h3>
              <p className="text-muted-foreground">
                Yes, we offer a 30-day money-back guarantee for most courses. If
                you're unsatisfied with your purchase, you can request a refund
                within 30 days of purchase.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">
                How do I become an instructor?
              </h3>
              <p className="text-muted-foreground">
                To become an instructor, visit our "Teach on SmartLearn" page
                and fill out the application form. Our team will review your
                application and get back to you within 5 business days.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">
                Do you offer team or enterprise plans?
              </h3>
              <p className="text-muted-foreground">
                Yes, we offer special plans for teams and organizations. Visit
                our "SmartLearn for Business" page or contact our sales team at
                business@smartlearn.com for more information.
              </p>
            </div>
            <div className="text-center mt-8">
              <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                <a href="/faq">View All FAQs</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
