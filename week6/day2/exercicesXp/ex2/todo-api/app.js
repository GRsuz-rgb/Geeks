import express from "express";
import todosRouter from "./routes/todos.js";

const app = express();
app.use(express.json()); // Parse JSON

app.use("/todos", todosRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
