import express from "express";
import router from "./routes/index.js";

const app = express();
const PORT = 3000;

// Mount the router
app.use("/", router); //tells Express to use the routes defined in your router for any incoming requests to your server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
