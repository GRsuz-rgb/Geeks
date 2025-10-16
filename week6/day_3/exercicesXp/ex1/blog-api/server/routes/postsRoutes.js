import express from "express";
import {
  getPosts,
  getPost,
  addPost,
  editPost,
  removePost,
} from "../controllers/postsController.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.put("/:id", editPost);
router.delete("/:id", removePost);

export default router;
