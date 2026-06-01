import React from 'react'
import prof1 from '../assets/client-image-1.webp'
import prof2 from '../assets/article-image-8.webp'
import { useSelector } from 'react-redux';
import Loader from './Loader'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ data, isLoading, isUser, onEdit, onDelete }) => {



    const navigate = useNavigate();

    if (isLoading) {
        return (<div className='mt-16 px-8 sm:px-10  lg:px-14'><Loader /></div>);

    }
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 mt-16 '>
                <div className='sm:col-span-4'  >
                    {data?.slice().reverse().map((blog) => <div key={blog._id} className='  grid grid-cols-1 sm:grid-cols-3 gap-6 pb-10 border-b border-gray-200'>

                        <div className='col-span-1 h-[240px] bg-center bg-cover rounded-2xl mt-10 cursor-pointer' onClick={() => navigate(`/blog/${blog._id}`)} style={{ backgroundImage: `url(${blog.postImage})` }}></div>
                        <div className='col-span-2 flex flex-col justify-center gap-6 '>

                            <h2 className='text-xl sm:text-2xl font-bold cursor-pointer' onClick={() => navigate(`/blog/${blog._id}`)}>{blog.title}</h2>
                            <p className='text-lg text-gray-800'>{blog.description}</p>
                            <div className='flex items-center justify-between'>
                                <div className=' flex   gap-2  cursor-pointer' onClick={() => navigate(`/blog/${blog._id}`)}>
                                    <img src={`${blog.postImage}`} alt="profile" className='h-[26px] w-[26px] rounded-full' />
                                    <p className='text-sm text-gray-800'>{blog.user.name} </p>
                                </div>
                                {isUser &&
                                    <div className='flex gap-2'>
                                        <div onClick={() => onEdit(blog)} className='cursor-pointer h-8 w-8 rounded-full bg-gray-200 text-gray-800 flex justify-center items-center'><i class="ri-pencil-fill "></i></div>
                                        <div onClick={() => onDelete(blog._id)} className='cursor-pointer h-8 w-8 rounded-full bg-gray-200 text-gray-800 flex justify-center items-center'><i class="ri-delete-bin-6-fill"></i></div>
                                    </div>}
                            </div>
                        </div>
                    </div>)}
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;