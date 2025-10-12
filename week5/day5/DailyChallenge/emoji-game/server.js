import express, { json } from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(json());
app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;

// --- Emoji data ---
const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🍎", name: "Apple" },
  { emoji: "🏀", name: "Basketball" },
  { emoji: "🐱", name: "Cat" },
  { emoji: "🎵", name: "Music" },
];

let leaderboard = [];

// --- Utility: get random emoji and options ---
function getRandomEmojiQuestion() {
  const correctEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const options = new Set([correctEmoji.name]);

  while (options.size < 4) {
    const randomOption = emojis[Math.floor(Math.random() * emojis.length)].name;
    options.add(randomOption);
  }

  return {
    emoji: correctEmoji.emoji,
    correct: correctEmoji.name,
    options: Array.from(options).sort(() => Math.random() - 0.5),
  };
}

// --- Routes ---
app.get("/emoji", (req, res) => {
  res.json(getRandomEmojiQuestion());
});

app.post("/guess", (req, res) => {
  const { guess, correct, player } = req.body;
  const isCorrect = guess === correct;

  // update leaderboard
  if (player) {
    let user = leaderboard.find((u) => u.name === player);
    if (!user) {
      user = { name: player, score: 0 };
      leaderboard.push(user);
    }
    if (isCorrect) user.score += 1;
  }

  res.json({ correct: isCorrect });
});

app.get("/leaderboard", (req, res) => {
  const sorted = leaderboard.sort((a, b) => b.score - a.score);
  res.json(sorted.slice(0, 5));
});

// --- Start server ---
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
