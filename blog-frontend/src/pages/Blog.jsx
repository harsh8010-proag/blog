import React, { useState } from 'react'
import bloghero from '../assets/blog-hero-image-768x361.webp'
import BlogCard from '../componants/BlogCard';
import Pagination from '../componants/Pagination';
import { useGetBlogsByNameQuery } from '../redux/services/api';




const Blog = () => {
    const [page, setPage] = useState(1)

    const limit = 5;

    const { data, error, isLoading } = useGetBlogsByNameQuery();

    return (
        <div>

            <div className="bg-cover bg-center min-h-screen text-white text-center pt-48   lg:pt-65  px-8 sm:px-10  lg:px-52 "
                style={{ backgroundImage: `url(${bloghero})` }}>
                <h2 className='lg:text-6xl  sm:text-5xl text-4xl text-center font-bold leading-tight'>Agriculture Insights, Trends and Blog</h2>
                <p className='text-lg text-center   font-medium mt-8 leading-normal'>We empower farmers with sustainable practices, quality seeds, and modern technologies to cultivate abundant harvests, support communities, protect resources, and ensure global food security.</p>
            </div>

            <div className='px-8 sm:px-10  lg:px-14'>
                <BlogCard data={data} isLoading={isLoading} isUser={false} />
                {/* <Pagination page={page} setPage={setPage} /> */}
            </div>

        </div>
    )
}

export default Blog;