import express from "express";

const app = express();
app.use(express.json());

let books = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", publishedYear: 1937 },
];

// READ ALL
app.get("/api/books", (req, res) => res.json(books));

// READ ONE
app.get("/api/books/:bookId", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.bookId));
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

// CREATE
app.post("/api/books", (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});

// UPDATE
app.put("/api/books/:bookId", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.bookId));
  if (!book) return res.status(404).json({ message: "Book not found" });
  Object.assign(book, req.body);
  res.json(book);
});

// DELETE
app.delete("/api/books/:bookId", (req, res) => {
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.bookId));
  if (bookIndex === -1) return res.status(404).json({ message: "Book not found" });
  books.splice(bookIndex, 1);
  res.json({ message: "Book deleted" });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
