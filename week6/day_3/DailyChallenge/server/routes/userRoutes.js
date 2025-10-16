import express from 'express';
import { register, login, getUsers, getUser, updateUserInfo } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUserInfo);

export default router;
