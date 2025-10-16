// server.js
import express from "express";
import tasksRouter from "./routes/tasks.js";

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON
app.use("/tasks", tasksRouter); // Mount router

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
