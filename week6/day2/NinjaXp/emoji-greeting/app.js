// app.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import greetRouter from "./routes/greet.js";

const app = express();
const PORT = 3000;

// Enable form data parsing
app.use(express.urlencoded({ extended: true }));

// Mount the router
app.use("/", greetRouter);

// Static files (optional styling)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`🚀 Emoji Greeting App running on http://localhost:${PORT}`);
});
