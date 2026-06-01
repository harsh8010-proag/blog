import express from 'express';
import { getUserProfile, login, logout, registerUser } from '../controller/auth.controller.js';
import { authUser } from '../middeleware/auth.middleware.js';


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', login);
router.get('/profile', authUser, getUserProfile);
router.get('/logout', authUser, logout);

export default router;