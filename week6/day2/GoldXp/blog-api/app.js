import express from "express";
import postsRouter from "./routes/posts.js";

const app = express();
app.use(express.json()); // Parse JSON body

// Mount router
app.use("/posts", postsRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Blog API running on http://localhost:${PORT}`));
