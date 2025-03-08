"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import QuizBuilder from "@/components/quiz/quiz-builder";

export default function EditQuizPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = params.id;

  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [quiz, setQuiz] = useState<any>(null);

  useEffect(() => {
    // In a real app, you would fetch the quiz data from your API
    // Simulating API call
    setTimeout(() => {
      // Sample quiz data
      setQuiz({
        title: "Web Development Fundamentals",
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
        ],
      });
      setLoading(false);
    }, 1000);
  }, [quizId]);

  const handleSaveQuiz = (updatedQuiz: any) => {
    setIsSaving(true);

    // In a real app, you would send this data to your backend
    console.log("Updating quiz:", updatedQuiz);

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      // Navigate back to quizzes list
      router.push("/admin/quizzes");
    }, 1500);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="p-8">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p>Loading quiz data...</p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Edit Quiz</h1>
        {isSaving && (
          <div className="flex items-center">
            <div className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mr-2"></div>
            <span>Saving...</span>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <Button
          variant="outline"
          onClick={() => router.push("/admin/quizzes")}
          className="mb-4"
        >
          Cancel
        </Button>
      </div>

      <QuizBuilder initialQuiz={quiz} onSave={handleSaveQuiz} />
    </div>
  );
}
