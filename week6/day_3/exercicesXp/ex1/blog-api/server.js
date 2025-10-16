
import express from "express";
import postsRoutes from "./server/routes/postsRoutes.js";

const app = express();

app.use(express.json());
app.use("/posts", postsRoutes);

// 404 handler
app.use((req, res) => res.status(404).json({ message: "Route not found" }));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));


