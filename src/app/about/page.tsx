import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Globe, Users, Award, BarChart, Heart } from "lucide-react";

export default function AboutPage() {
  const stats = [
    {
      value: "10M+",
      label: "Students worldwide",
      icon: <Users className="h-6 w-6 text-orange-500" />,
    },
    {
      value: "50K+",
      label: "Courses available",
      icon: <BookOpen className="h-6 w-6 text-orange-500" />,
    },
    {
      value: "25K+",
      label: "Expert instructors",
      icon: <Award className="h-6 w-6 text-orange-500" />,
    },
    {
      value: "180+",
      label: "Countries represented",
      icon: <Globe className="h-6 w-6 text-orange-500" />,
    },
  ];

  const values = [
    {
      title: "Accessible Education",
      description:
        "We believe quality education should be accessible to everyone, regardless of location or background.",
      icon: <Globe className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Practical Skills",
      description:
        "Our courses focus on real-world skills that help students achieve their personal and professional goals.",
      icon: <BarChart className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Lifelong Learning",
      description:
        "We're committed to supporting continuous learning throughout all stages of life and career.",
      icon: <BookOpen className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Community",
      description:
        "We foster a supportive global community where students and instructors can connect and collaborate.",
      icon: <Users className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Excellence",
      description:
        "We maintain high standards for our platform, instructors, and course content to ensure quality learning.",
      icon: <Award className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Passion",
      description:
        "We're passionate about education and its power to transform lives and create positive change.",
      icon: <Heart className="h-8 w-8 text-orange-500" />,
    },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Co-Founder",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      bio: "Former education technology executive with a passion for democratizing education.",
    },
    {
      name: "Maya Patel",
      role: "CTO & Co-Founder",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
      bio: "Software engineer and educator who believes in the power of technology to transform learning.",
    },
    {
      name: "Daniel Kim",
      role: "Chief Learning Officer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel",
      bio: "Former university professor with expertise in instructional design and online education.",
    },
    {
      name: "Sophia Rodriguez",
      role: "VP of Instructor Success",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
      bio: "Dedicated to helping instructors create engaging courses and reach their teaching potential.",
    },
  ];

  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About SmartLearn</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're on a mission to transform lives through education by connecting
          students worldwide with the best instructors and courses.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Our Story Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            SmartLearn was founded in 2018 with a simple mission: to make
            quality education accessible to everyone. What started as a small
            collection of coding tutorials has grown into a global learning
            platform with millions of students and thousands of courses spanning
            every subject imaginable.
          </p>
          <p className="text-muted-foreground mb-4">
            Our founders, Alex and Maya, met while working at a traditional
            educational institution where they saw firsthand the limitations of
            conventional learning models. They envisioned a platform that would
            break down barriers to education and empower people to learn on
            their own terms.
          </p>
          <p className="text-muted-foreground">
            Today, SmartLearn serves learners in over 180 countries, offering
            courses in multiple languages and partnering with leading
            universities and companies to provide credentials that help our
            students advance their careers and pursue their passions.
          </p>
        </div>
        <div className="md:w-1/2 relative h-80 md:h-96 w-full rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
            alt="SmartLearn team"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Our Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-orange-500 mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Join Us Section */}
      <div className="bg-orange-500 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Whether you're a student looking to learn new skills, an instructor
          with knowledge to share, or a company seeking training solutions, we
          invite you to join our global learning community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-white text-orange-500 hover:bg-gray-100"
            asChild
          >
            <Link href="/courses">Start Learning</Link>
          </Button>
          <Button
            className="bg-transparent border border-white hover:bg-orange-600"
            asChild
          >
            <Link href="/teach">Become an Instructor</Link>
          </Button>
          <Button
            className="bg-transparent border border-white hover:bg-orange-600"
            asChild
          >
            <Link href="/business">SmartLearn for Business</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
