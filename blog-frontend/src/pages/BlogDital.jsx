import React from 'react'
import bloghero from '../assets/blog-hero-image-768x361.webp'
import { useGetBlogByIdQuery } from '../redux/services/api'
import { data, useNavigate, useParams } from 'react-router-dom'
const BlogDital = () => {
    const { id } = useParams();

    let { data: blog, isLoading } = useGetBlogByIdQuery(id);
    const navigate = useNavigate()
    blog = blog?.[0]

    return (

        <div>

            <div className="bg-cover bg-center min-h-screen text-white text-center pt-48   lg:pt-65  px-8 sm:px-10  lg:px-52 "
                style={{ backgroundImage: `url(${blog?.image})` }}>

                <button
                    onClick={() => navigate('/blog')}
                    className='flex items-center justify-center cursor-pointer text-lg px-5 py-2 h-[40px] w-[40px] rounded-full bg-black/50 backdrop-blur-xl hover:bg-black/40'
                >

                    <i class="ri-arrow-left-line"></i>

                </button>
                <h2 className='lg:text-6xl  sm:text-5xl text-4xl text-center font-bold leading-tight'> {blog?.title}</h2>


                <div className=' flex  gap-2 justify-center items-center mt-6 text-xl '>
                    <img src={`${blog?.image}`} alt="profile" className='h-[26px] w-[26px] rounded-full' />
                    <p className=' text-white'> {blog?.user.name} </p>
                </div>
            </div>

            <div className='px-8 sm:px-10  lg:px-45   text-gray-800'>
                <p className='text-lg font-medium mt-8 leading-normal'>{blog?.description}</p>
                <div className=' flex  gap-4 items-center mt-6 text-xl '>
                    <img src={`${blog?.image}`} alt="profile" className='h-[45px] w-[45px] rounded-full' />
                    <p className=' text-gray-800 '> {blog?.user.name}</p>
                </div>
            </div>

        </div>

    )
}

export default BlogDital