// routes/index.js
import express from "express";
const router = express.Router();

// Homepage route
router.get("/", (req, res) => {
  res.send("Welcome to the Homepage!");
});

// About route
router.get("/about", (req, res) => {
  res.send("About Us page");
});

export default router;
