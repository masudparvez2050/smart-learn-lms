import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Globe, Users, Award, Heart } from "lucide-react";

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
      icon: <Award className="h-8 w-8 text-orange-500" />,
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
    <div className="container py-12 space-y-16">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            About SmartLearn
          </h1>
          <p className="text-xl text-muted-foreground">
            Empowering learners worldwide with accessible, high-quality
            education
          </p>
          <p className="text-muted-foreground">
            Founded in 2020, SmartLearn has grown from a small startup to a
            leading online learning platform with millions of students and
            thousands of instructors from around the globe. Our mission is to
            create a world where anyone, anywhere can transform their life
            through education.
          </p>
          <div className="flex gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600">
              Join Our Team
            </Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
        <div className="md:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              {stat.icon}
              <h3 className="text-3xl font-bold mt-4">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
          <p className="text-muted-foreground">
            We're on a mission to transform traditional education by making
            quality learning accessible and affordable for everyone, everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-orange-50 dark:bg-orange-900/10 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To create a world where anyone, anywhere can transform their life
              through education. We believe learning is the source of human
              progress and are committed to providing accessible, high-quality
              education to everyone.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the leading global marketplace for learning and teaching
              online, helping individuals reach their goals and pursue their
              dreams. We envision a future where education transcends
              traditional boundaries.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Meet Our Leadership Team</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of passionate educators, technologists, and
            business leaders is dedicated to transforming education worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="relative h-24 w-24 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-orange-500 mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Our Core Values</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            These principles guide everything we do at SmartLearn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="mb-4">{value.icon}</div>
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-50 dark:bg-orange-900/10 p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
          Whether you're looking to learn, teach, or join our team, there's a
          place for you at SmartLearn. Be part of our mission to transform
          education worldwide.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-orange-500 hover:bg-orange-600">
            Start Learning
          </Button>
          <Button variant="outline">Become an Instructor</Button>
          <Button variant="outline">View Career Opportunities</Button>
        </div>
      </div>
    </div>
  );
}
