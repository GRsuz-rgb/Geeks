// routes/todos.js
import express from "express";
const router = express.Router();

let todos = [];
let id = 1;

// Get all todos
router.get("/", (req, res) => {
  res.json(todos);
});

// Add new todo
router.post("/", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });
  const newTodo = { id: id++, title };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update todo by ID
router.put("/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const { title } = req.body;
  const todo = todos.find(t => t.id === todoId);
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  todo.title = title || todo.title;
  res.json(todo);
});

// Delete todo by ID
router.delete("/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== todoId);
  res.json({ message: "Todo deleted successfully" });
});

export default router;
