import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, BarChart, Users, Shield, Award, Zap } from "lucide-react";

export default function BusinessPage() {
  const features = [
    {
      title: "Curated Learning Paths",
      description:
        "Custom learning paths designed for your team's specific needs and goals.",
      icon: <Zap className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Advanced Analytics",
      description:
        "Comprehensive reporting and insights to track progress and measure ROI.",
      icon: <BarChart className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Team Management",
      description:
        "Easily manage users, groups, and permissions with our intuitive admin tools.",
      icon: <Users className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Enterprise Security",
      description:
        "SSO integration, data encryption, and compliance with industry standards.",
      icon: <Shield className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Certification Programs",
      description:
        "Industry-recognized certifications to validate your team's skills.",
      icon: <Award className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Dedicated Support",
      description:
        "Priority support and a dedicated customer success manager for your organization.",
      icon: <CheckCircle className="h-8 w-8 text-orange-500" />,
    },
  ];

  const plans = [
    {
      name: "Teams",
      description:
        "Perfect for small to medium-sized teams looking to upskill together.",
      price: "$15",
      unit: "per user/month",
      features: [
        "Up to 50 users",
        "Access to 5,000+ courses",
        "Basic analytics and reporting",
        "Team learning paths",
        "Email support",
        "User management portal",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Business",
      description:
        "Ideal for growing organizations with diverse learning needs.",
      price: "$30",
      unit: "per user/month",
      features: [
        "Up to 250 users",
        "Access to full course catalog",
        "Advanced analytics and reporting",
        "Custom learning paths",
        "Priority email & chat support",
        "SSO integration",
        "API access",
        "Dedicated success manager",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description:
        "Tailored solutions for large organizations with specific requirements.",
      price: "Custom",
      unit: "",
      features: [
        "Unlimited users",
        "Full course catalog access",
        "Custom course creation",
        "Advanced integrations",
        "White-labeling options",
        "24/7 premium support",
        "Dedicated account team",
        "Custom reporting",
        "Security compliance",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const testimonials = [
    {
      quote:
        "SmartLearn for Business has transformed our approach to employee development. Our team now has access to the latest skills training, and we've seen a 30% increase in productivity.",
      author: "Sarah Johnson",
      role: "Chief Technology Officer",
      company: "TechCorp Inc.",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=TC",
    },
    {
      quote:
        "The custom learning paths feature has been a game-changer for our marketing team. We can now ensure everyone has the specific skills needed for their role.",
      author: "Michael Chen",
      role: "Head of Talent Development",
      company: "Global Marketing Group",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=GMG",
    },
    {
      quote:
        "The analytics and reporting tools have given us unprecedented visibility into our team's skills development. It's made our L&D budget much more effective.",
      author: "Emily Rodriguez",
      role: "Learning & Development Director",
      company: "Innovate Financial",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=IF",
    },
  ];

  const clients = [
    "Microsoft",
    "IBM",
    "Adobe",
    "Salesforce",
    "Deloitte",
    "Accenture",
    "Cisco",
    "Oracle",
  ];

  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">SmartLearn for Business</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Empower your workforce with the skills they need to drive innovation
          and growth. Our enterprise learning solution helps organizations of
          all sizes upskill their teams.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Request a Demo
          </Button>
          <Button size="lg" variant="outline">
            View Plans
          </Button>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="mb-16 text-center">
        <h2 className="text-lg font-medium text-muted-foreground mb-6">
          Trusted by leading companies worldwide
        </h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-xl font-bold text-muted-foreground"
            >
              {client}
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose SmartLearn for Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow duration-200"
            >
              <CardContent className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mb-16 bg-muted/30 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-500">1</span>
            </div>
            <h3 className="font-bold mb-2">Assess</h3>
            <p className="text-sm text-muted-foreground">
              Identify skill gaps and learning needs within your organization.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-500">2</span>
            </div>
            <h3 className="font-bold mb-2">Customize</h3>
            <p className="text-sm text-muted-foreground">
              Create tailored learning paths aligned with your business goals.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-500">3</span>
            </div>
            <h3 className="font-bold mb-2">Deploy</h3>
            <p className="text-sm text-muted-foreground">
              Roll out learning programs to your teams with our easy-to-use
              platform.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-500">4</span>
            </div>
            <h3 className="font-bold mb-2">Measure</h3>
            <p className="text-sm text-muted-foreground">
              Track progress and measure impact with detailed analytics and
              reporting.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-4">Plans & Pricing</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Choose the plan that's right for your organization's size and learning
          needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`hover:shadow-md transition-shadow duration-200 ${plan.popular ? "border-orange-500 shadow-md" : ""}`}
            >
              {plan.popular && (
                <div className="bg-orange-500 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.unit && (
                    <span className="text-muted-foreground"> {plan.unit}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "bg-orange-500 hover:bg-orange-600" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 text-muted-foreground">
          All plans include a 14-day free trial. No credit card required.
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow duration-200"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={testimonial.logo}
                      alt={testimonial.company}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-center italic mb-4">"{testimonial.quote}"</p>
                <div className="text-center">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-sm font-medium text-orange-500">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-500 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to transform your team's learning?
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Join thousands of organizations that trust SmartLearn to develop their
          most valuable asset—their people.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-orange-500 hover:bg-gray-100">
            Request a Demo
          </Button>
          <Button className="bg-transparent border border-white hover:bg-orange-600">
            Contact Sales
          </Button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">
                How many users can I add to my plan?
              </h3>
              <p className="text-muted-foreground">
                The Teams plan supports up to 50 users, Business up to 250
                users, and Enterprise has unlimited users. You can upgrade your
                plan at any time as your team grows.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">
                Can I customize the learning experience for different
                departments?
              </h3>
              <p className="text-muted-foreground">
                Yes, our Business and Enterprise plans allow you to create
                custom learning paths for different departments, roles, or skill
                levels within your organization.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">
                Do you offer implementation support?
              </h3>
              <p className="text-muted-foreground">
                Yes, all business plans include implementation support.
                Enterprise plans also include a dedicated implementation manager
                to ensure a smooth rollout across your organization.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">
                Can we upload our own training content?
              </h3>
              <p className="text-muted-foreground">
                Enterprise plans include the ability to upload and host your own
                proprietary training content alongside our course catalog,
                creating a centralized learning hub for your organization.
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
    </div>
  );
}
