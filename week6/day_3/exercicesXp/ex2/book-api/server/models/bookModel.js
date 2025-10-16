import db from "../config/db.js";

// Récupérer tous les livres
export const getAllBooks = () => {
  return db("books").select("*");
};

// Récupérer un livre par ID
export const getBookById = (id) => {
  return db("books").where({ id }).first();
};

// Ajouter un livre
export const createBook = (book) => {
  return db("books").insert(book).returning("*");
};

// Modifier un livre
export const updateBook = (id, book) => {
  return db("books").where({ id }).update(book).returning("*");
};

// Supprimer un livre
export const deleteBook = (id) => {
  return db("books").where({ id }).del();
};
