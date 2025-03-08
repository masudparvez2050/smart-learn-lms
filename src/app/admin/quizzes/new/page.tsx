"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QuizBuilder from "@/components/quiz/quiz-builder";

export default function NewQuizPage() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveQuiz = (quiz: any) => {
    setIsSaving(true);

    // In a real app, you would send this data to your backend
    console.log("Saving quiz:", quiz);

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      // Navigate back to quizzes list
      router.push("/admin/quizzes");
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Create New Quiz</h1>
        {isSaving && (
          <div className="flex items-center">
            <div className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mr-2"></div>
            <span>Saving...</span>
          </div>
        )}
      </div>

      <QuizBuilder onSave={handleSaveQuiz} />
    </div>
  );
}
