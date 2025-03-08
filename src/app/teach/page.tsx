import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  DollarSign,
  Users,
  Award,
  BarChart,
  Globe,
} from "lucide-react";

export default function TeachPage() {
  const benefits = [
    {
      title: "Share Your Knowledge",
      description:
        "Teach what you know and help others learn from your expertise and experience.",
      icon: <Users className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Earn Revenue",
      description:
        "Get paid for your expertise. Our instructors earn an average of $5,000 per year.",
      icon: <DollarSign className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Build Your Brand",
      description:
        "Establish yourself as an authority in your field and grow your professional network.",
      icon: <Award className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Reach Millions",
      description:
        "Connect with our global community of over 10 million eager learners.",
      icon: <Globe className="h-8 w-8 text-orange-500" />,
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Plan Your Course",
      description:
        "Choose a topic you're passionate about and outline your course content.",
    },
    {
      number: 2,
      title: "Record Your Videos",
      description:
        "Create engaging video lectures using our guidelines and best practices.",
    },
    {
      number: 3,
      title: "Build Your Curriculum",
      description:
        "Upload your videos and add quizzes, assignments, and resources.",
    },
    {
      number: 4,
      title: "Launch & Promote",
      description:
        "Publish your course and use our tools to market it to potential students.",
    },
  ];

  const stats = [
    { value: "25k+", label: "Instructors" },
    { value: "$150M+", label: "Instructor earnings" },
    { value: "50k+", label: "Courses" },
    { value: "180+", label: "Countries with students" },
  ];

  const testimonials = [
    {
      quote:
        "Teaching on SmartLearn has allowed me to reach students worldwide and generate a sustainable income doing what I love.",
      author: "Michael Chen",
      role: "Web Development Instructor",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      courses: 8,
      students: 45000,
    },
    {
      quote:
        "The instructor tools and support team made it easy for me to create my first course, even with no prior teaching experience.",
      author: "Sarah Johnson",
      role: "UX Design Instructor",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      courses: 5,
      students: 32000,
    },
    {
      quote:
        "What started as a side project has turned into a full-time career. I'm now able to impact thousands of students while doing what I'm passionate about.",
      author: "David Miller",
      role: "Data Science Instructor",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      courses: 12,
      students: 78000,
    },
  ];

  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Become an Instructor</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Share your knowledge, inspire learners, and earn income by creating
          courses on SmartLearn.
        </p>
        <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
          Start Teaching Today
        </Button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Teach on SmartLearn?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow duration-200"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mb-16 bg-muted/30 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          How to Get Started
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">
                  {step.number}
                </span>
              </div>
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Instructor Support Section */}
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              We're Here to Help You Succeed
            </h2>
            <p className="text-muted-foreground mb-6">
              Our comprehensive instructor resources and dedicated support team
              will guide you through every step of the course creation process.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Instructor Academy</h3>
                  <p className="text-muted-foreground">
                    Free courses on how to create engaging content and build
                    successful courses.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Production Resources</h3>
                  <p className="text-muted-foreground">
                    Guidelines, templates, and tools to help you create
                    professional-quality videos.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Marketing Support</h3>
                  <p className="text-muted-foreground">
                    Tools and tips to help you promote your course and reach
                    more students.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Instructor Community</h3>
                  <p className="text-muted-foreground">
                    Connect with fellow instructors to share insights and best
                    practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-80 lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
              alt="Instructor support"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Earnings Section */}
      <div className="mb-16 bg-orange-500 text-white rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">
              Earn Revenue Sharing Your Knowledge
            </h2>
            <p className="mb-6">
              Our instructors earn competitive revenue for every student who
              enrolls in their courses. The more students you attract, the more
              you earn.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <BarChart className="h-6 w-6 mr-3" />
                <p>
                  Earn 70% revenue share for courses you create and market
                  yourself
                </p>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 mr-3" />
                <p>Reach millions of students across our global marketplace</p>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-6 w-6 mr-3" />
                <p>Get paid monthly with reliable, on-time payments</p>
              </div>
            </div>
            <Button className="bg-white text-orange-500 hover:bg-gray-100">
              Calculate Your Potential Earnings
            </Button>
          </div>
          <div className="relative h-80 lg:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
              alt="Earnings potential"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Hear From Our Instructors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow duration-200"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-center italic mb-4">"{testimonial.quote}"</p>
                <div className="text-center">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {testimonial.role}
                  </p>
                  <div className="flex justify-center space-x-4 text-sm">
                    <span>{testimonial.courses} courses</span>
                    <span>
                      {testimonial.students.toLocaleString()} students
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">
                What qualifications do I need to become an instructor?
              </h3>
              <p className="text-muted-foreground">
                You don't need formal teaching qualifications, but you should
                have expertise and practical experience in your subject area.
                The most important qualities are knowledge, communication
                skills, and passion for teaching.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">
                How much time does it take to create a course?
              </h3>
              <p className="text-muted-foreground">
                The time investment varies depending on the course length and
                complexity. On average, instructors spend 30-60 hours creating
                their first course. Our tools and resources help streamline the
                process.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">How much can I earn?</h3>
              <p className="text-muted-foreground">
                Earnings vary based on factors like course topic, quality, and
                your marketing efforts. Our top instructors earn six-figure
                incomes annually, while the average instructor earns around
                $5,000 per year.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">
                What kind of support will I receive?
              </h3>
              <p className="text-muted-foreground">
                We provide comprehensive support including course creation
                guidelines, video production tips, marketing advice, and a
                dedicated support team to help with technical issues. You'll
                also have access to our instructor community.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" className="rounded-full" asChild>
            <Link href="/faq">View All FAQs</Link>
          </Button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Share Your Knowledge?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Join our community of instructors and start creating courses that
          impact learners worldwide.
        </p>
        <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
          Start Teaching Today
        </Button>
      </div>
    </div>
  );
}
