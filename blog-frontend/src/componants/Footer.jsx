import React from 'react'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className='px-8 sm:px-10  lg:px-14 pt-24 '>
            <div className='flex flex-col gap-8 justify-center lg:flex-row lg:justify-between items-center pb-10  border-b border-gray-200'>

                {/* Logo */}

                <div className='flex gap-3 items-center cursor-pointer' onClick={() => navigate('/')}>

                    <img
                        src={logo}
                        alt="logo"
                        className='h-[40px] w-[40px] rounded-full border-3'
                    />

                    <p className='text-xl font-bold'>
                        Landscape
                    </p>

                </div>



                <div className='flex  flex-wrap justify-center  gap-12 text-sm font-bold '>

                    <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='hover:text-lime-500 transition-all duration-300'>HOME</Link>
                    <Link to='/about' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='hover:text-lime-500 transition-all duration-300'>ABOUT</Link>

                    <Link to='/blog' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='hover:text-lime-500 transition-all duration-300'>BLOG</Link>
                    <Link to='/login' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='hover:text-lime-500 transition-all duration-300'>LOGIN</Link>
                    <Link to='/register' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='hover:text-lime-500 transition-all duration-300'>REGISTER</Link>


                </div ></div>

            <div className='py-12 border-b border-gray-200 flex flex-col items-center lg:flex-row lg:justify-between gap-18'>
                <div className='flex gap-10  flex-col sm:flex-row flex-wrap justify-center '>
                    <div className='flex items-center gap-4'>
                        <div className='h-10 w-10 rounded-full bg-black flex items-center justify-center '>
                            <i class="ri-map-pin-fill text-lg text-white  "></i>
                        </div>
                        <div>
                            <p className='font-bold text-sm '>Address:</p>
                            <p className='text-sm'>Street Name, NY 38954</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='h-10 w-10 rounded-full bg-black flex items-center justify-center '>
                            <i class="ri-map-pin-fill text-lg text-white ri-phone-fill "></i>
                        </div>
                        <div>
                            <p className='font-bold text-sm '>Phone:</p>
                            <p className='text-sm'>+91 12124338954</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='h-10 w-10 rounded-full bg-black flex items-center justify-center '>
                            <i class="ri-smartphone-fill text-lg text-white  "></i>
                        </div>
                        <div>
                            <p className='font-bold text-sm '>Mobile:</p>
                            <p className='text-sm'>+91 1234538954</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='h-10 w-10 rounded-full bg-black flex items-center justify-center '>
                            <i class="ri-timer-2-fill  text-lg text-white  "></i>
                        </div>
                        <div>
                            <p className='font-bold text-sm '>Opening hours:</p>
                            <p className='text-sm'>9AM - 5PM</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div className='h-10 w-10 rounded-full bg-black flex items-center justify-center '>
                        <i class="ri-facebook-circle-fill text-lg text-white  "></i>
                    </div>
                    <div className='h-10 w-10 rounded-full bg-black flex items-center justify-center '>
                        <i class="ri-twitter-x-line text-lg text-white  "></i>
                    </div>
                    <div className='h-10 w-10 rounded-full bg-black flex items-center justify-center '>
                        <i class="ri-linkedin-box-fill text-lg text-white  "></i>
                    </div>
                    <div className='h-10 w-10 rounded-full bg-black flex items-center justify-center '>
                        <i class="ri-instagram-fill text-lg text-white  "></i>
                    </div>
                </div>
            </div>
            <div className='py-8 pb-16 flex flex-col text-center sm:flex-row sm:justify-between  flex-wrap gap-4  text-gray-500   '>
                <p className='font-semibold text-gray-500'>Copyright © 2026 - Teck surya IT Solution</p>
                <p className=''>Privacy Policy   Terms of Use</p>
            </div>
        </div>
    )
}

export default Footer