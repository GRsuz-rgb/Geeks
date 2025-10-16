// server/routes/bookRoutes.js
import express from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} from "../controllers/bookController.js";

const router = express.Router();

// CRUD routes
router.get("/", getAllBooks);
router.get("/:bookId", getBookById);
router.post("/", createBook);
router.put("/:bookId", updateBook);
router.delete("/:bookId", deleteBook);

export default router;
