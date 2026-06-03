import blogModel from "../models/Blog.js";
import userModel from "../models/User.js";
import uploadCloudinary from "../utils/cloudinary.js";


export const createBlog = async (req, res) => {

    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({
                message: "All fields required"
            })
        }
        if (!req.file) {
            return res.status(400).json({
                message: 'Image required'
            })
        }

        const uploadResult = await uploadCloudinary(req.file.path);

        const blog = await blogModel.create({
            user: req.user._id,
            title,
            description,
            postImage: uploadResult.secure_url
        });

        const blogWithUser = await blog.populate('user');

        res.status(201).json({
            blog: blogWithUser
        })

    } catch (error) {

        return res.status(500).json({
            message: "Server Error",
            error: error.message
        });

    }
}


export const getBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find().populate("user");
        if (!blogs) {
            res.status(404).json({ message: 'blog not found' });
        }
        res.status(200).json({
            blogs
        })
    } catch (err) {
        res.status(500).json({
            message: 'server error',
            err: err.message
        })
    }
}

export const ditailblog = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await blogModel.findOne({ _id: id }).populate('user');

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found"
            })
        }

        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json({
            message: `internal server error ${err.message}`
        })
    }
}

export const userBlog = async (req, res) => {

    try {
        const userBlog = await blogModel.find({ user: req.user._id }).populate('user')
        if (!userBlog) {
            res.status(404).json({
                message: "Blog not found"
            })
        }

        res.status(200).json(userBlog);
    } catch (err) {
        res.status(500).json({
            message: `internal server error ${err.message}`
        })
    }
}

export const updateblog = async (req, res) => {

    const { id } = req.params;
    const { title, description, postImageUrl } = req.body;
    try {
        const blog = await blogModel.findById(id);
        blog.title = title;
        blog.description = description;
        if (req.file) {
            const uplodePath = await uploadCloudinary(req.file.path);
            blog.postImage = uplodePath.secure_url;
            await blog.save();
            return res.status(200).json({
                message: 'data updated succesfully',
                blog
            })
        }
        blog.postImage = postImageUrl
        await blog.save();
        res.send(200).json({
            message: 'data updated succesfully',
            blog
        })
    } catch (err) {
        res.status(500).json({
            message: 'server error',
            error: err.message
        });
    }
}

export const deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteBlog = await blogModel.findByIdAndDelete(id);
        if (!deleteBlog) {
            return res.status(404).json({
                message: 'blog not found'
            })
        }
        res.status(200).json({
            message: 'note deleted succesfully'
        })

    } catch (err) {
        res.status(500).json({
            message: 'server error',
            error: err.message
        })
    }
}
