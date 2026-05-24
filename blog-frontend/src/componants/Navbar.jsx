import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/services/authSlice'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const location = useLocation()
    useEffect(() => {

        setShowMenu(false)

    }, [location.pathname])

    const user = useSelector(state => state.auth.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {

        dispatch(
            logout()
        )
        navigate('/')
        setShowMenu(false)
    }

    return (
        <>

            {/* Navbar */}

            <div className='fixed top-12 left-0 w-full px-4 sm:px-8 lg:px-12 z-50'>

                <div className='bg-white p-4 rounded-full shadow-[0_8px_20px_-8px_rgba(0,0,0,0.1)]'>

                    <div className='flex justify-between items-center'>

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



                        <div className='hidden lg:flex gap-12 text-sm font-bold'>

                            <Link to='/' className='hover:text-lime-500 transition-all duration-300'>HOME</Link>
                            <Link to='/about' className='hover:text-lime-500 transition-all duration-300'>ABOUT</Link>

                            <Link to='/blog' className='hover:text-lime-500 transition-all duration-300'>BLOG</Link>
                            <Link to='/contact' className='hover:text-lime-500 transition-all duration-300'>CONTACT</Link>

                        </div>



                        <div className='hidden lg:flex gap-6 text-md font-semibold items-center'>

                            {user ? <>

                                <Link to='/addblog' className='hover:text-lime-500 transition-all duration-300'>AddBlog</Link>
                                <p className='font-semibold text-gray-700'>

                                    Hi,
                                    {user.name}

                                </p>

                                <button

                                    onClick={handleLogout}

                                    className='flex items-center justify-center cursor-pointer text-lg px-5 py-2 h-[40px] w-[40px] rounded-full bg-black/10 backdrop-blur-xl hover:bg-black/20'

                                >

                                    <i class="ri-logout-circle-r-line"></i>

                                </button>

                            </> : <> <Link to='login' state={{ from: location.pathname }} className='hover:text-lime-500 transition-all duration-300'>
                                Log in
                            </Link>

                                <Link to='register' state={{ from: location.pathname }} className='bg-lime-600 hover:bg-lime-700 px-5 py-2 text-white rounded-full transition-all duration-300'>
                                    Register
                                </Link> </>}

                        </div>



                        <div
                            onClick={() => setShowMenu(true)}
                            className='lg:hidden bg-lime-600 hover:bg-lime-700 transition-all duration-300 cursor-pointer rounded-full h-[45px] w-[45px] text-2xl flex justify-center items-center text-white '
                        >
                            <i className="ri-menu-line"></i>
                        </div>

                    </div>

                </div>

            </div>
            <div className='w-full px-12 flex items-center justify-center  '>
                <div
                    className={`fixed top-12 left-4 right-4 bottom-5 bg-[#02150F] z-[100] p-7 rounded-2xl
    transition-all duration-500 ease-in-out
    ${showMenu
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 -translate-y-10 scale-95 pointer-events-none"
                        }`}
                >



                    <div className='flex justify-end'>

                        <i
                            onClick={() => setShowMenu(false)}
                            className="ri-close-line text-2xl text-white cursor-pointer"
                        ></i>

                    </div>




                    <div className='flex items-center gap-4 cursor-pointer group ' onClick={() => navigate('/')}>

                        <img
                            src={logo}
                            alt=""
                            className='h-[40px] w-[40px] rounded-full'
                        />

                        <h1 className='text-white text-xl font-bold group-hover:text-lime-700 transition-all duration-300'>
                            Landscape
                        </h1>

                    </div>

                    {/* Links */}

                    <div className='flex flex-col gap-4 mt-8  text-white text-xl font-bold transition-all duration-300'>

                        <Link to='/' onClick={() => setShowMenu(false)} className='hover:text-lime-500 transition-all duration-300'>Home</Link>

                        <Link to='/about' onClick={() => setShowMenu(false)} className='hover:text-lime-500 transition-all duration-300'>About</Link>
                        <Link to='/blog' onClick={() => setShowMenu(false)} className='hover:text-lime-500 transition-all duration-300'>Blog</Link>
                        <Link to='/contact' onClick={() => setShowMenu(false)} className='hover:text-lime-500 transition-all duration-300'>Contact</Link>

                    </div>



                    <div className='flex  gap-5 items-center mt-12'>
                        {user ? <>
                            <Link to='/addblog' className='hover:text-lime-500 text-white transition-all duration-300'>AddBlog</Link>
                            <p className='font-semibold text-gray-100'>

                                Hi,
                                {user.name}

                            </p>

                            <button

                                onClick={handleLogout}

                                className='flex text-white items-center justify-center cursor-pointer text-lg px-5 py-2 h-[40px] w-[40px] rounded-full bg-black/10 backdrop-blur-xl hover:bg-black/20'

                            >

                                <i class="ri-logout-circle-r-line"></i>

                            </button>
                        </> : <><Link to='login' state={{ from: location.pathname }} className='hover:text-lime-500 text-white text-xl transition-all duration-300'>
                            Log in
                        </Link>

                            <Link to='register' state={{ from: location.pathname }} className='bg-lime-600 hover:bg-lime-700 px-5 py-2 text-white rounded-full text-xl transition-all duration-300'>
                                Register
                            </Link> </>}

                    </div>



                    {/* Social Icons */}

                    <div className='flex gap-6 mt-14'>

                        <div className='bg-white/10 h-[35px] w-[35px] cursor-pointer rounded-full flex justify-center items-center text-white text-2xl'>
                            <i className="ri-facebook-fill"></i>
                        </div>

                        <div className='bg-white/10 h-[35px] w-[35px] cursor-pointer rounded-full flex justify-center items-center text-white text-2xl'>
                            <i className="ri-twitter-x-line"></i>
                        </div>

                        <div className='bg-white/10 h-[35px] w-[35px] cursor-pointer rounded-full flex justify-center items-center text-white text-2xl'>
                            <i className="ri-instagram-line"></i>
                        </div>

                        <div className='bg-white/10 h-[35px] w-[35px] cursor-pointer rounded-full flex justify-center items-center text-white text-2xl'>
                            <i className="ri-linkedin-fill"></i>
                        </div>

                    </div>

                </div>
            </div>


        </>
    )
}

export default Navbar