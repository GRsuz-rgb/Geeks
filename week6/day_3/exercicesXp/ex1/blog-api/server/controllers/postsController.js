import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from "../models/postModel.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await getPostById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};

export const addPost = async (req, res) => {
  try {
    const [newPost] = await createPost(req.body);
    res.status(201).json(newPost);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};

export const editPost = async (req, res) => {
  try {
    const [updated] = await updatePost(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: "Post not found" });
    res.json(updated);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};

export const removePost = async (req, res) => {
  try {
    const deleted = await deletePost(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post deleted" });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};
