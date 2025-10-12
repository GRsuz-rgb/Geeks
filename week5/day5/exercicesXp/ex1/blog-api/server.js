// server.js
import express, { json } from 'express';
const app = express();

app.use(json()); // to parse JSON body

// Fake database
let posts = [
  { id: 1, title: "First Post", content: "Hello world!" },
  { id: 2, title: "Second Post", content: "Express is fun!" }
];

// GET /posts - all posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// GET /posts/:id - one post
app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: 'Post not found' });
  res.json(post);
});

// POST /posts - create
app.post('/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id - update
app.put('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: 'Post not found' });

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;
  res.json(post);
});

// DELETE /posts/:id - delete
app.delete('/posts/:id', (req, res) => {
  posts = posts.filter(p => p.id !== parseInt(req.params.id));
  res.status(204).send();
});

// Error handling
app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));

