// routes/tasks.js
import express from "express";
import fs from "fs";

const router = express.Router();
const filePath = "./tasks.json";

// Helper function to read tasks from JSON file
const readTasks = () => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading file:", error);
    return [];
  }
};

// Helper function to write tasks to JSON file
const writeTasks = (tasks) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error("Error writing file:", error);
  }
};

// GET /tasks - Retrieve all tasks
router.get("/", (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// GET /tasks/:id - Retrieve task by ID
router.get("/:id", (req, res) => {
  const tasks = readTasks();
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
});

// POST /tasks - Create a new task
router.post("/", (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required" });
  }

  const tasks = readTasks();
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    description,
    completed: false,
  };

  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

// PUT /tasks/:id - Update a task
router.put("/:id", (req, res) => {
  const { title, description, completed } = req.body;
  const tasks = readTasks();
  const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));

  if (index === -1) return res.status(404).json({ message: "Task not found" });

  if (!title && !description && completed === undefined) {
    return res.status(400).json({ message: "At least one field must be provided" });
  }

  if (title) tasks[index].title = title;
  if (description) tasks[index].description = description;
  if (completed !== undefined) tasks[index].completed = completed;

  writeTasks(tasks);
  res.json(tasks[index]);
});

// DELETE /tasks/:id - Delete a task
router.delete("/:id", (req, res) => {
  const tasks = readTasks();
  const filtered = tasks.filter((t) => t.id !== parseInt(req.params.id));

  if (filtered.length === tasks.length)
    return res.status(404).json({ message: "Task not found" });

  writeTasks(filtered);
  res.json({ message: "Task deleted successfully" });
});

export default router;
