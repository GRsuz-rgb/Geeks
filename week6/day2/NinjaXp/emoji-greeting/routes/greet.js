// routes/greet.js
import express from "express";
const router = express.Router();

// List of emojis
const emojis = ["😀", "🎉", "🌟", "🎈", "👋"];

// GET / — Display form
router.get("/", (req, res) => {
  const emojiOptions = emojis
    .map(emoji => `<option value="${emoji}">${emoji}</option>`)
    .join("");

  const formHTML = `
    <html>
      <head>
        <title>Emoji Greeting App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            text-align: center;
            padding: 50px;
          }
          form {
            background: white;
            padding: 20px;
            border-radius: 15px;
            display: inline-block;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          }
          input, select {
            padding: 10px;
            margin: 10px;
            border-radius: 8px;
            border: 1px solid #ccc;
          }
          button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
          }
          button:hover {
            background-color: #45a049;
          }
        </style>
      </head>
      <body>
        <h1>🌟 Welcome to the Emoji Greeting App 🌟</h1>
        <form method="POST" action="/greet">
          <label for="name">Enter your name:</label><br>
          <input type="text" id="name" name="name" required><br><br>

          <label for="emoji">Choose an emoji:</label><br>
          <select id="emoji" name="emoji">
            ${emojiOptions}
          </select><br><br>

          <button type="submit">Greet Me!</button>
        </form>
      </body>
    </html>
  `;

  res.send(formHTML);
});

// POST /greet — Process form submission
router.post("/greet", (req, res) => {
  const { name, emoji } = req.body;

  // Validation
  if (!name || name.trim() === "") {
    return res.status(400).send("<h2>Please enter your name!</h2><a href='/'>Go Back</a>");
  }

  const greetingHTML = `
    <html>
      <head>
        <title>Greeting</title>
        <style>
          body {
            background-color: #fffae6;
            text-align: center;
            font-family: 'Segoe UI', sans-serif;
            padding: 50px;
          }
          h1 {
            font-size: 2.5em;
            color: #333;
          }
          a {
            text-decoration: none;
            background: #4CAF50;
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
          }
          a:hover {
            background: #45a049;
          }
        </style>
      </head>
      <body>
        <h1>${emoji} Hello, ${name}! ${emoji}</h1>
        <p>Thanks for using the Emoji Greeting App 💖</p>
        <a href="/">Go Back</a>
      </body>
    </html>
  `;

  res.send(greetingHTML);
});

export default router;
