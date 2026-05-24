import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import addbloghero from '../assets/about-us-bottom-cta-background-3.webp'
import {
    useAddBlogMutation,
    useDeleteBlogMutation,
    useUpdateBlogMutation,
    useUserBlogQuery
} from '../redux/services/api'
import BlogCard from './BlogCard'

const AddBlog = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [editingBlog, setEditingBlog] = useState(null)

    const user =
        useSelector(
            state => state.auth.user
        )

    const {
        data,
        isLoading: isFetchingBlogs
    }
        =
        useUserBlogQuery(
            user?.name,
            {
                skip: !user
            }
        )

    const [
        addBlog,
        {
            isLoading: isAddingBlog
        }
    ]
        =
        useAddBlogMutation()

    const [
        updateBlog,
        {
            isLoading: isUpdatingBlog
        }
    ]
        =
        useUpdateBlogMutation()

    const [
        deleteBlog,
        {
            isLoading: isDeletingBlog
        }
    ]
        =
        useDeleteBlogMutation()

    const resetForm = () => {

        setTitle("")
        setDescription("")
        setImage("")
        setEditingBlog(null)

    }

    const handleEdit = (blog) => {

        setEditingBlog(blog)

        setTitle(
            blog.title
        )

        setDescription(
            blog.description
        )

        setImage(
            blog.image
        )

    }

    const handleDelete =
        async (id) => {

            try {

                await deleteBlog(
                    id
                ).unwrap()

            } catch (error) {

                console.log(error)

            }

        }

    const handleSubmit =
        async (e) => {

            e.preventDefault()

            if (
                !title.trim()
                ||
                !description.trim()
                ||
                !image.trim()
            ) {

                alert(
                    "All fields required"
                )

                return

            }

            const blogData = {

                authorname:
                    user?.name,

                title,

                description,

                image

            }

            try {

                if (
                    editingBlog
                ) {

                    await updateBlog({

                        id: editingBlog.id,
                        ...blogData

                    }).unwrap()

                } else {

                    await addBlog(
                        blogData
                    ).unwrap()

                }

                resetForm()

            } catch (error) {

                console.log(error)

            }

        }

    return (

        <div className='min-h-screen bg-[#EEF7E8] pb-24'>

            <div
                className='px-8 sm:px-10 lg:px-14 mb-16 pt-52 h-[70vh] text-white bg-cover bg-center flex justify-center'
                style={{
                    backgroundImage:
                        `url(${addbloghero})`
                }}
            >

                <div className='text-center'>

                    <h1 className='text-4xl sm:text-5xl font-bold'>

                        {
                            editingBlog
                                ?
                                "Edit Blog"
                                :
                                "Create New Blog"
                        }

                    </h1>

                    <p className='mt-4 text-gray-200 text-lg'>

                        Share your ideas with beautiful stories

                    </p>

                </div>

            </div>

            <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 px-8 sm:px-10 lg:px-14 items-start'>

                <div className='col-span-3 hidden lg:block'>

                    <p className='text-xl font-semibold mb-4'>

                        Your Blogs

                    </p>

                    <BlogCard
                        data={data}
                        isLoading={isFetchingBlogs}
                        isUser
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />

                </div>

                <div className='bg-white rounded-4xl p-6 border border-lime-100 col-span-2'>

                    <form
                        onSubmit={handleSubmit}
                        className='space-y-4'
                    >

                        <div className='h-[200px] rounded-[30px] overflow-hidden bg-[#F6FAF2]'>

                            {
                                image
                                    ?

                                    <img
                                        src={image}
                                        alt=""
                                        className='h-full w-full object-cover'
                                    />

                                    :

                                    <div className='h-full flex flex-col justify-center items-center text-gray-400'>

                                        <i className="ri-image-add-line text-5xl"></i>

                                        <p>

                                            Blog Cover Preview

                                        </p>

                                    </div>

                            }

                        </div>

                        <input
                            type='text'
                            value={image}
                            placeholder='Paste image url'
                            onChange={(e) =>
                                setImage(
                                    e.target.value
                                )
                            }
                            className='w-full rounded-full border-2 border-lime-100 px-7 py-3 outline-none focus:border-lime-500'
                        />

                        <input
                            type='text'
                            value={title}
                            placeholder='Enter blog title'
                            onChange={(e) =>
                                setTitle(
                                    e.target.value
                                )
                            }
                            className='w-full rounded-full border-2 border-lime-100 px-7 py-3 outline-none focus:border-lime-500'
                        />

                        <textarea
                            rows={5}
                            value={description}
                            placeholder='Write your story...'
                            onChange={(e) =>
                                setDescription(
                                    e.target.value
                                )
                            }
                            className='w-full rounded-[30px] border-2 border-lime-100 px-7 py-5 outline-none resize-none focus:border-lime-500'
                        />

                        <button
                            type='submit'
                            disabled={
                                isAddingBlog
                                ||
                                isUpdatingBlog
                            }
                            className='w-full bg-lime-600 hover:bg-lime-700 text-white py-3 rounded-full cursor-pointer'
                        >

                            {
                                editingBlog
                                    ?

                                    (
                                        isUpdatingBlog
                                            ?
                                            "Updating..."
                                            :
                                            "Update Blog"
                                    )

                                    :

                                    (
                                        isAddingBlog
                                            ?
                                            "Publishing..."
                                            :
                                            "Publish Blog"
                                    )

                            }

                        </button>

                    </form>

                </div>

                <div className='col-span-3 lg:hidden'>

                    <BlogCard
                        data={data}
                        isLoading={isFetchingBlogs}
                        isUser
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />

                </div>

            </div>

        </div>

    )

}

export default AddBlog