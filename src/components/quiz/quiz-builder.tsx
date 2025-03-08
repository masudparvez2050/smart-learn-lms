"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Trash2, Save, MoveUp, MoveDown } from "lucide-react";
import { QuizQuestion } from "./quiz-card";

interface QuizBuilderProps {
  initialQuiz?: {
    title: string;
    description?: string;
    questions: QuizQuestion[];
  };
  onSave?: (quiz: {
    title: string;
    description?: string;
    questions: QuizQuestion[];
  }) => void;
}

export default function QuizBuilder({ initialQuiz, onSave }: QuizBuilderProps) {
  const [title, setTitle] = useState(initialQuiz?.title || "");
  const [description, setDescription] = useState(
    initialQuiz?.description || "",
  );
  const [questions, setQuestions] = useState<QuizQuestion[]>(
    initialQuiz?.questions || [
      {
        id: "1",
        question: "",
        options: ["", "", "", ""],
        correctAnswer: 0,
        explanation: "",
      },
    ],
  );
  const [activeTab, setActiveTab] = useState("0");

  const addQuestion = () => {
    const newQuestion: QuizQuestion = {
      id: Date.now().toString(),
      question: "",
      options: ["", "", "", ""],
      correctAnswer: 0,
      explanation: "",
    };
    setQuestions([...questions, newQuestion]);
    setActiveTab(questions.length.toString());
  };

  const removeQuestion = (index: number) => {
    if (questions.length <= 1) return;

    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);

    // Adjust active tab if needed
    if (parseInt(activeTab) >= newQuestions.length) {
      setActiveTab((newQuestions.length - 1).toString());
    }
  };

  const moveQuestionUp = (index: number) => {
    if (index === 0) return;

    const newQuestions = [...questions];
    const temp = newQuestions[index];
    newQuestions[index] = newQuestions[index - 1];
    newQuestions[index - 1] = temp;
    setQuestions(newQuestions);
    setActiveTab((index - 1).toString());
  };

  const moveQuestionDown = (index: number) => {
    if (index === questions.length - 1) return;

    const newQuestions = [...questions];
    const temp = newQuestions[index];
    newQuestions[index] = newQuestions[index + 1];
    newQuestions[index + 1] = temp;
    setQuestions(newQuestions);
    setActiveTab((index + 1).toString());
  };

  const updateQuestion = (
    index: number,
    field: keyof QuizQuestion,
    value: any,
  ) => {
    const newQuestions = [...questions];
    newQuestions[index] = { ...newQuestions[index], [field]: value };
    setQuestions(newQuestions);
  };

  const updateOption = (
    questionIndex: number,
    optionIndex: number,
    value: string,
  ) => {
    const newQuestions = [...questions];
    const newOptions = [...newQuestions[questionIndex].options];
    newOptions[optionIndex] = value;
    newQuestions[questionIndex] = {
      ...newQuestions[questionIndex],
      options: newOptions,
    };
    setQuestions(newQuestions);
  };

  const addOption = (questionIndex: number) => {
    const newQuestions = [...questions];
    const newOptions = [...newQuestions[questionIndex].options, ""];
    newQuestions[questionIndex] = {
      ...newQuestions[questionIndex],
      options: newOptions,
    };
    setQuestions(newQuestions);
  };

  const removeOption = (questionIndex: number, optionIndex: number) => {
    if (questions[questionIndex].options.length <= 2) return;

    const newQuestions = [...questions];
    const newOptions = [...newQuestions[questionIndex].options];
    newOptions.splice(optionIndex, 1);

    // Adjust correct answer if needed
    let correctAnswer = newQuestions[questionIndex].correctAnswer;
    if (optionIndex === correctAnswer) {
      correctAnswer = 0;
    } else if (optionIndex < correctAnswer) {
      correctAnswer--;
    }

    newQuestions[questionIndex] = {
      ...newQuestions[questionIndex],
      options: newOptions,
      correctAnswer,
    };
    setQuestions(newQuestions);
  };

  const handleSave = () => {
    if (!title.trim()) {
      alert("Please enter a quiz title");
      return;
    }

    // Validate questions
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      if (!q.question.trim()) {
        alert(`Question ${i + 1} is empty`);
        return;
      }

      for (let j = 0; j < q.options.length; j++) {
        if (!q.options[j].trim()) {
          alert(`Option ${j + 1} in Question ${i + 1} is empty`);
          return;
        }
      }
    }

    if (onSave) {
      onSave({
        title,
        description: description || undefined,
        questions,
      });
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Quiz Builder</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="quiz-title">Quiz Title</Label>
            <Input
              id="quiz-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter quiz title"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="quiz-description">Description (Optional)</Label>
            <Textarea
              id="quiz-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter quiz description"
              className="mt-1"
            />
          </div>
        </div>

        <div className="border rounded-md p-4">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Questions</h3>
              <Button
                onClick={addQuestion}
                size="sm"
                className="bg-orange-500 hover:bg-orange-600"
              >
                <Plus className="h-4 w-4 mr-1" /> Add Question
              </Button>
            </div>

            <TabsList className="grid grid-flow-col auto-cols-max gap-2 overflow-x-auto pb-2 mb-2">
              {questions.map((_, index) => (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                  className="px-3 py-1"
                >
                  Q{index + 1}
                </TabsTrigger>
              ))}
            </TabsList>

            {questions.map((question, questionIndex) => (
              <TabsContent
                key={questionIndex}
                value={questionIndex.toString()}
                className="space-y-4"
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">Question {questionIndex + 1}</h4>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => moveQuestionUp(questionIndex)}
                      disabled={questionIndex === 0}
                    >
                      <MoveUp className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => moveQuestionDown(questionIndex)}
                      disabled={questionIndex === questions.length - 1}
                    >
                      <MoveDown className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeQuestion(questionIndex)}
                      disabled={questions.length <= 1}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor={`question-${questionIndex}`}>
                    Question Text
                  </Label>
                  <Textarea
                    id={`question-${questionIndex}`}
                    value={question.question}
                    onChange={(e) =>
                      updateQuestion(questionIndex, "question", e.target.value)
                    }
                    placeholder="Enter your question"
                    className="mt-1"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label>Answer Options</Label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addOption(questionIndex)}
                    >
                      <Plus className="h-3 w-3 mr-1" /> Add Option
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {question.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className="flex items-center gap-2"
                      >
                        <Input
                          type="radio"
                          id={`option-${questionIndex}-${optionIndex}`}
                          name={`correct-answer-${questionIndex}`}
                          className="h-4 w-4"
                          checked={question.correctAnswer === optionIndex}
                          onChange={() =>
                            updateQuestion(
                              questionIndex,
                              "correctAnswer",
                              optionIndex,
                            )
                          }
                        />
                        <Input
                          value={option}
                          onChange={(e) =>
                            updateOption(
                              questionIndex,
                              optionIndex,
                              e.target.value,
                            )
                          }
                          placeholder={`Option ${optionIndex + 1}`}
                          className="flex-1"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            removeOption(questionIndex, optionIndex)
                          }
                          disabled={question.options.length <= 2}
                          className="text-red-500 hover:text-red-700 h-8 w-8"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Select the radio button next to the correct answer.
                  </p>
                </div>

                <div>
                  <Label htmlFor={`explanation-${questionIndex}`}>
                    Explanation (Optional)
                  </Label>
                  <Textarea
                    id={`explanation-${questionIndex}`}
                    value={question.explanation || ""}
                    onChange={(e) =>
                      updateQuestion(
                        questionIndex,
                        "explanation",
                        e.target.value,
                      )
                    }
                    placeholder="Explain why the answer is correct (optional)"
                    className="mt-1"
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleSave}
          className="ml-auto bg-orange-500 hover:bg-orange-600"
        >
          <Save className="mr-2 h-4 w-4" />
          Save Quiz
        </Button>
      </CardFooter>
    </Card>
  );
}
