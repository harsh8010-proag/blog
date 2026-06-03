import express from 'express';
import multer from 'multer';
import { authUser } from '../middeleware/auth.middleware.js';
import { upload } from '../middeleware/multer.middleware.js';
import { createBlog, deleteBlog, ditailblog, getBlogs, updateblog, userBlog } from '../controller/blog.controller.js';
const router = express.Router();

router.post('/addblog', authUser, upload.single('postImage'), createBlog);
router.get('/getblog', getBlogs);
router.get('/ditailblog/:id', ditailblog);
router.get('/userblog', authUser, userBlog);
router.put('/update/:id', upload.single('postImage'), authUser, updateblog);
router.delete('/delete/:id', authUser, deleteBlog);

export default router;