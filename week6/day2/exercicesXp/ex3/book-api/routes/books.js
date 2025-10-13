// routes/books.js
import express from "express";
const router = express.Router();

let books = [];
let id = 1;

// Get all books
router.get("/", (req, res) => {
  res.json(books);
});

// Add new book
router.post("/", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author)
    return res.status(400).json({ message: "Title and author are required" });
  const newBook = { id: id++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update book by ID
router.put("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find(b => b.id === bookId);
  if (!book) return res.status(404).json({ message: "Book not found" });
  book.title = title || book.title;
  book.author = author || book.author;
  res.json(book);
});

// Delete book by ID
router.delete("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter(b => b.id !== bookId);
  res.json({ message: "Book deleted successfully" });
});

export default router;
