import pool from "../config/db.js";

// Get all books
export const getAllBooks = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM books ORDER BY id ASC");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get book by ID
export const getBookById = async (req, res) => {
  const { bookId } = req.params;
  try {
    const result = await pool.query("SELECT * FROM books WHERE id = $1", [bookId]);
    if (result.rows.length === 0) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new book
export const createBook = async (req, res) => {
  const { title, author, publishedYear } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO books (title, author, publishedYear) VALUES ($1, $2, $3) RETURNING *",
      [title, author, publishedYear]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update book
export const updateBook = async (req, res) => {
  const { bookId } = req.params;
  const { title, author, publishedYear } = req.body;
  try {
    const result = await pool.query(
      "UPDATE books SET title = $1, author = $2, publishedYear = $3 WHERE id = $4 RETURNING *",
      [title, author, publishedYear, bookId]
    );
    if (result.rows.length === 0) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete book
export const deleteBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const result = await pool.query("DELETE FROM books WHERE id = $1 RETURNING *", [bookId]);
    if (result.rows.length === 0) return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
