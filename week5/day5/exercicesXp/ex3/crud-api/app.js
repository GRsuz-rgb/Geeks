// app.js
const express = require('express');
const { fetchPosts } = require('./data/dataService');
const app = express();

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log("Data successfully retrieved!");
    res.json(posts);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ message: "Server error fetching posts" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
