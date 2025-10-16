import bcrypt from 'bcrypt';
import { createUser, getAllUsers, getUserById, getHashByUsername, updateUser } from '../models/userModel.js';

export const register = async (req, res) => {
  try {
    const { username, email, password, first_name, last_name } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = await createUser({ username, email, first_name, last_name }, hash);
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userHash = await getHashByUsername(username);

    if (!userHash) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, userHash.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    res.json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateUserInfo = async (req, res) => {
  try {
    const updatedUser = await updateUser(req.params.id, req.body);
    if (!updatedUser.length) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User updated', user: updatedUser[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
