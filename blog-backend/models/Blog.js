import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    postImage: {
        type: 'String'
        // default:''
    }
}, { timestamps: true })

const blogModel = mongoose.model("blog", blogSchema);
export default blogModel;