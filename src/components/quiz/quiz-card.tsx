"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface QuizProps {
  title: string;
  description?: string;
  questions: QuizQuestion[];
  onComplete?: (score: number, totalQuestions: number) => void;
}

export default function QuizCard({
  title,
  description,
  questions,
  onComplete,
}: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null),
  );
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === currentQuestion.correctAnswer;

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    // Save the answer
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedOption;
    setAnswers(newAnswers);

    if (isLastQuestion) {
      // Calculate score
      const score = newAnswers.reduce((acc, answer, index) => {
        return answer === questions[index].correctAnswer ? acc + 1 : acc;
      }, 0);

      // Show results
      setShowResults(true);

      // Call onComplete callback if provided
      if (onComplete) {
        onComplete(score, questions.length);
      }
    } else {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswers(Array(questions.length).fill(null));
    setShowResults(false);
    setShowExplanation(false);
  };

  const calculateScore = () => {
    return answers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);
  };

  const getScorePercentage = () => {
    const score = calculateScore();
    return Math.round((score / questions.length) * 100);
  };

  const getScoreColor = () => {
    const percentage = getScorePercentage();
    if (percentage >= 80) return "text-green-500";
    if (percentage >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = getScorePercentage();

    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">{title} - Results</CardTitle>
          <CardDescription className="text-center">
            You have completed the quiz!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className={`text-4xl font-bold ${getScoreColor()}`}>
              {score} / {questions.length}
            </div>
            <p className="text-xl mt-2">{percentage}%</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Question Summary</h3>
            {questions.map((question, index) => {
              const userAnswer = answers[index];
              const isCorrect = userAnswer === question.correctAnswer;

              return (
                <div key={question.id} className="border rounded-md p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">Question {index + 1}</p>
                      <p>{question.question}</p>
                    </div>
                    {isCorrect ? (
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                    )}
                  </div>

                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground">
                      Your answer:{" "}
                      <span
                        className={
                          isCorrect
                            ? "text-green-500 font-medium"
                            : "text-red-500 font-medium"
                        }
                      >
                        {userAnswer !== null
                          ? question.options[userAnswer]
                          : "Not answered"}
                      </span>
                    </p>
                    {!isCorrect && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Correct answer:{" "}
                        <span className="text-green-500 font-medium">
                          {question.options[question.correctAnswer]}
                        </span>
                      </p>
                    )}
                  </div>

                  {question.explanation && (
                    <div className="mt-2 text-sm bg-muted/50 p-2 rounded">
                      <p className="font-medium">Explanation:</p>
                      <p>{question.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleRestart} className="w-full">
            <RotateCcw className="mr-2 h-4 w-4" />
            Restart Quiz
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <div className="text-sm font-medium">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
        </div>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">
            {currentQuestion.question}
          </h3>
          <RadioGroup
            value={selectedOption?.toString()}
            onValueChange={(value) => handleOptionSelect(parseInt(value))}
          >
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={index.toString()}
                    id={`option-${index}`}
                  />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-grow cursor-pointer py-2"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        {isAnswered && (
          <div
            className={`p-4 rounded-md ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
          >
            <div className="flex items-center">
              {isCorrect ? (
                <>
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <p className="font-medium text-green-700">Correct!</p>
                </>
              ) : (
                <>
                  <XCircle className="h-5 w-5 text-red-500 mr-2" />
                  <p className="font-medium text-red-700">Incorrect</p>
                </>
              )}
            </div>

            {!isCorrect && (
              <p className="mt-1 text-sm text-red-700">
                The correct answer is:{" "}
                {currentQuestion.options[currentQuestion.correctAnswer]}
              </p>
            )}

            {currentQuestion.explanation && (
              <div className="mt-2">
                {showExplanation ? (
                  <div className="text-sm">
                    <p className="font-medium">Explanation:</p>
                    <p>{currentQuestion.explanation}</p>
                  </div>
                ) : (
                  <Button
                    variant="link"
                    className="text-sm p-0 h-auto"
                    onClick={() => setShowExplanation(true)}
                  >
                    Show explanation
                  </Button>
                )}
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex-1">
          <Button variant="outline" onClick={handleRestart} className="text-sm">
            <RotateCcw className="mr-2 h-4 w-4" />
            Restart
          </Button>
        </div>
        <Button
          onClick={handleNext}
          disabled={selectedOption === null}
          className="bg-orange-500 hover:bg-orange-600"
        >
          {isLastQuestion ? "Finish" : "Next"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
