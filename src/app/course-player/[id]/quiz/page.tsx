"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import QuizCard from "@/components/quiz/quiz-card";

export default function CourseQuizPage() {
  const params = useParams();
  const courseId = params.id;
  const [loading, setLoading] = useState(true);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState<{ score: number; total: number } | null>(
    null,
  );

  // This would normally be fetched from an API
  const quiz = {
    title: "Web Development Fundamentals Quiz",
    description: "Test your knowledge of web development basics",
    questions: [
      {
        id: "1",
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Hyper Transfer Markup Language",
          "Hyperlink Text Management Language",
        ],
        correctAnswer: 0,
        explanation:
          "HTML (Hyper Text Markup Language) is the standard markup language for creating web pages and web applications.",
      },
      {
        id: "2",
        question: "Which of the following is used to style web pages?",
        options: ["JavaScript", "CSS", "PHP", "SQL"],
        correctAnswer: 1,
        explanation:
          "CSS (Cascading Style Sheets) is used to style and layout web pages.",
      },
      {
        id: "3",
        question:
          "Which of the following is NOT a JavaScript framework or library?",
        options: ["React", "Angular", "Vue", "Laravel"],
        correctAnswer: 3,
        explanation:
          "Laravel is a PHP framework, not a JavaScript framework or library.",
      },
      {
        id: "4",
        question: "What is the correct HTML element for the largest heading?",
        options: ["<heading>", "<h6>", "<head>", "<h1>"],
        correctAnswer: 3,
        explanation:
          "<h1> defines the largest heading in HTML. Headings range from h1 (largest) to h6 (smallest).",
      },
      {
        id: "5",
        question:
          "Which property is used to change the background color in CSS?",
        options: ["color", "bgcolor", "background-color", "background"],
        correctAnswer: 2,
        explanation:
          "The background-color property is used to set the background color of an element in CSS.",
      },
    ],
  };

  useEffect(() => {
    // Simulate loading quiz data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleQuizComplete = (score: number, totalQuestions: number) => {
    setQuizCompleted(true);
    setScore({ score, total: totalQuestions });

    // In a real app, you would send this data to your backend
    console.log(`Quiz completed with score: ${score}/${totalQuestions}`);
  };

  if (loading) {
    return (
      <div className="container py-12 flex items-center justify-center min-h-[60vh]">
        <Card className="w-full max-w-3xl">
          <CardHeader>
            <CardTitle className="text-center">Loading Quiz...</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <QuizCard
        title={quiz.title}
        description={quiz.description}
        questions={quiz.questions}
        onComplete={handleQuizComplete}
      />
    </div>
  );
}
