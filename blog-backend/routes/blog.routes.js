import express from 'express';
import multer from 'multer';
import { authUser } from '../middeleware/auth.middleware.js';
import { upload } from '../middeleware/multer.middleware.js';
import { createBlog, ditailblog, getBlogs, userBlog } from '../controller/blog.controller.js';
const router = express.Router();

router.post('/addblog', authUser, upload.single('postImage'), createBlog);
router.get('/getblog', getBlogs);
router.get('/ditailblog/:id', ditailblog);
router.get('/userblog', authUser, userBlog);

export default router;