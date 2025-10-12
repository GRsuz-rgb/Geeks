// app.js
import express, { json } from 'express';
const app = express();

app.use(json());

let books = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", publishedYear: 1937 }
];

// READ ALL
app.get('/api/books', (req, res) => {
  res.json(books);
});

// READ ONE
app.get('/api/books/:bookId', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.bookId));
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.status(200).json(book);
});

// CREATE
app.post('/api/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// (Optional) UPDATE and DELETE for practice
// PUT /api/books/:bookId
app.put('/api/books/:bookId', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.bookId));
  if (!book) return res.status(404).json({ message: "Book not found" });
  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;
  book.publishedYear = req.body.publishedYear || book.publishedYear;
  res.json(book);
});

// DELETE /api/books/:bookId
app.delete('/api/books/:bookId', (req, res) => {
  books = books.filter(b => b.id !== parseInt(req.params.bookId));
  res.status(204).send();
});

app.listen(5000, () => console.log("Server running on port 5000"));
