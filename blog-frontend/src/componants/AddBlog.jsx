import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import addbloghero from '../assets/about-us-bottom-cta-background-3.webp';


import BlogCard from './BlogCard'
import { useAddBlogMutation, useGetBlogQuery, useGetUserBlogQuery } from '../redux/services/blogapi.js';
import { useRef } from 'react';


const AddBlog = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [editingBlog, setEditingBlog] = useState(null);

    const fileInputRef = useRef(null);

    const [addBlog, { isLoading: isAddingBlog }] = useAddBlogMutation();


    const {
        data,
        isLoading: isFetchingBlogs,
        isError,
        error
    } = useGetUserBlogQuery();
    console.log(data);

    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append(
            "title",
            title
        );

        formData.append(
            "description",
            description
        );

        formData.append(
            "postImage",
            imageFile
        );

        try {
            const res = await addBlog(
                formData
            ).unwrap();

            setTitle("");
            setDescription("");
            setImageFile(null);

        } catch (error) {

            console.log(error);

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


                        "Create New Blog"


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
                        data={data || []}
                        isLoading={isFetchingBlogs}
                        isUser
                    // onEdit={handleEdit}
                    // onDelete={handleDelete}
                    />

                </div>

                <div className='bg-white rounded-4xl p-6 border border-lime-100 col-span-2'>

                    <form
                        onSubmit={handleSubmit}
                        className='space-y-4'
                    >

                        <div
                            onClick={() => fileInputRef.current.click()}
                            className='h-[200px] rounded-[30px] overflow-hidden bg-[#F6FAF2] cursor-pointer '>

                            {imageFile ? (
                                <div className='relative h-full w-full'>
                                    <img
                                        src={URL.createObjectURL(imageFile)}
                                        alt=""
                                        className='h-full w-full object-cover object-center'
                                    />
                                    <div className='absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition flex justify-center items-center'>

                                        <p className='text-white font-semibold'>
                                            Change Image
                                        </p>

                                    </div>
                                </div>

                            ) : (
                                <div

                                    className='h-full flex flex-col justify-center items-center text-gray-400 '>
                                    <i className="ri-image-add-line text-5xl"></i>
                                    <p>upload image</p>
                                </div>
                            )}

                        </div>

                        <input
                            type='file'
                            accept='image/*'
                            hidden
                            ref={fileInputRef}
                            onChange={(e) =>
                                setImageFile(
                                    e.target.files[0]
                                )
                            }
                        // className='w-full rounded-full border-2 border-lime-100 px-7 py-3 outline-none focus:border-lime-500'
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
                            // disabled={
                            //     // isAddingBlog
                            //     ||
                            //     // isUpdatingBlog
                            // }
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
                        data={data || []}
                        isLoading={isFetchingBlogs}
                        isUser
                    // onEdit={handleEdit}
                    // onDelete={handleDelete}
                    />

                </div>

            </div>

        </div>

    )

}

export default AddBlog



