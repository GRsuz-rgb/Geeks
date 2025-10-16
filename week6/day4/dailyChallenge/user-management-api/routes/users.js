const express = require('express');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const { readJSON, writeJSON } = require('../utils/fileHelper');
const path = require('path');

const router = express.Router();
const USERS_FILE = path.join(__dirname, '..', 'users.json');
const SALT_ROUNDS = 10;

// POST /users/register
router.post('/register', async (req, res) => {
  try {
    const { name, lastName, email, username, password } = req.body;
    if (!name || !lastName || !email || !username || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const users = await readJSON(USERS_FILE);

    if (users.some(u => u.username === username)) {
      return res.status(409).json({ success: false, message: 'Username already exists.' });
    }
    if (users.some(u => u.email === email)) {
      return res.status(409).json({ success: false, message: 'Email already exists.' });
    }

    for (const u of users) {
      const match = await bcrypt.compare(password, u.passwordHash);
      if (match) {
        return res.status(409).json({ success: false, message: 'Password already in use. Choose a different password.' });
      }
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = {
      id: uuidv4(),
      name,
      lastName,
      email,
      username,
      passwordHash,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    await writeJSON(USERS_FILE, users);

    return res.status(201).json({ success: true, message: `User ${username} registered successfully.` });
  } catch (err) {
    console.error('Register error:', err);
    return res.status(500).json({ success: false, message: 'Server error during registration.' });
  }
});

// POST /users/login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Username and password are required.' });
    }

    const users = await readJSON(USERS_FILE);
    const user = users.find(u => u.username === username);
    if (!user) {
      return res.status(401).json({ success: false, message: 'User not registered.' });
    }

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      return res.status(401).json({ success: false, message: 'Incorrect credentials.' });
    }

    return res.json({ success: true, message: `Welcome back, ${user.name} (${user.username})!` });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ success: false, message: 'Server error during login.' });
  }
});

// GET /users
router.get('/', async (req, res) => {
  try {
    const users = await readJSON(USERS_FILE);
    const safe = users.map(({ passwordHash, ...keep }) => keep);
    res.json(safe);
  } catch (err) {
    console.error('Get users error:', err);
    res.status(500).json({ success: false, message: 'Server error reading users.' });
  }
});

// GET /users/:id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const users = await readJSON(USERS_FILE);
    const user = users.find(u => u.id === id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found.' });
    const { passwordHash, ...safe } = user;
    res.json(safe);
  } catch (err) {
    console.error('Get user by id error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// PUT /users/:id
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastName, email, username, password } = req.body;
    const users = await readJSON(USERS_FILE);
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return res.status(404).json({ success: false, message: 'User not found.' });

    if (username && users.some((u, i) => u.username === username && i !== idx)) {
      return res.status(409).json({ success: false, message: 'Username already taken.' });
    }
    if (email && users.some((u, i) => u.email === email && i !== idx)) {
      return res.status(409).json({ success: false, message: 'Email already taken.' });
    }

    if (name) users[idx].name = name;
    if (lastName) users[idx].lastName = lastName;
    if (email) users[idx].email = email;
    if (username) users[idx].username = username;
    if (password) {
      for (const [i, u] of users.entries()) {
        if (i === idx) continue;
        const match = await bcrypt.compare(password, u.passwordHash);
        if (match) {
          return res.status(409).json({ success: false, message: 'Password already in use by another user.' });
        }
      }
      users[idx].passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    }

    users[idx].updatedAt = new Date().toISOString();
    await writeJSON(USERS_FILE, users);

    const { passwordHash, ...safe } = users[idx];
    res.json({ success: true, message: 'User updated.', user: safe });
  } catch (err) {
    console.error('Update user error:', err);
    res.status(500).json({ success: false, message: 'Server error during update.' });
  }
});

module.exports = router;
