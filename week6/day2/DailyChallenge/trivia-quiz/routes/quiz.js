// routes/quiz.js
import express from "express";
const router = express.Router();

// Hard-coded trivia questions
const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

// Game state (for simplicity, global variables)
let currentQuestionIndex = 0;
let score = 0;

// GET /quiz → Start or continue the quiz
router.get("/", (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({
      message: "Quiz finished! 🎉",
      score,
      totalQuestions: triviaQuestions.length,
    });
  }

  const currentQuestion = triviaQuestions[currentQuestionIndex].question;
  res.json({
    questionNumber: currentQuestionIndex + 1,
    question: currentQuestion,
  });
});

// POST /quiz → Submit an answer
router.post("/", (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({ message: "Quiz already finished. Check your score at /quiz/score" });
  }

  const userAnswer = req.body.answer?.trim();
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  let feedback;

  if (userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    feedback = "✅ Correct!";
  } else {
    feedback = `❌ Incorrect. The correct answer was: ${correctAnswer}`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({
      feedback,
      nextQuestion: triviaQuestions[currentQuestionIndex].question,
    });
  } else {
    res.json({
      feedback,
      message: "Quiz finished! 🎉",
      finalScore: score,
      totalQuestions: triviaQuestions.length,
    });
  }
});

// GET /quiz/score → Display final score
router.get("/score", (req, res) => {
  res.json({
    message: "Your final score",
    score,
    totalQuestions: triviaQuestions.length,
  });
});

export default router;
