// routes/posts.js
import express from "express";
const router = express.Router();

// In-memory blog post "database"
let posts = [];
let idCounter = 1;

// ✅ GET /posts - Retrieve all blog posts
router.get("/", (req, res) => {
  res.json(posts);
});

// ✅ GET /posts/:id - Retrieve a specific blog post
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.json(post);
});

// ✅ POST /posts - Create a new blog post
router.post("/", (req, res) => {
  const { title, content } = req.body;

  // Simple validation
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  const newPost = {
    id: idCounter++,
    title,
    content,
    timestamp: new Date().toISOString(),
  };

  posts.push(newPost);
  res.status(201).json({ message: "Post created successfully", post: newPost });
});

// ✅ PUT /posts/:id - Update a blog post by ID
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;

  const post = posts.find(p => p.id === id);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  if (!title && !content) {
    return res.status(400).json({ message: "Title or content required for update" });
  }

  post.title = title || post.title;
  post.content = content || post.content;
  post.timestamp = new Date().toISOString();

  res.json({ message: "Post updated successfully", post });
});

// ✅ DELETE /posts/:id - Delete a blog post by ID
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Post not found" });
  }

  posts.splice(index, 1);
  res.json({ message: "Post deleted successfully" });
});

export default router;
