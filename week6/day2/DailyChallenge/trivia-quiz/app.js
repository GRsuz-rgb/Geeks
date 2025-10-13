import express from "express";
import quizRouter from "./routes/quiz.js";

const app = express();
app.use(express.json());

// Mount the router
app.use("/quiz", quizRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Trivia Quiz running on http://localhost:${PORT}/quiz`);
});
