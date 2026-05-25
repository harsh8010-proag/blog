import React from 'react'
import herobg from '../assets/home-hero-image.webp'
import Navbar from '../componants/Navbar'
import ledyimg from '../assets/home-hero-image-2.webp'
import pawanchakki from '../assets/home-hero-image-1.webp'
import ipsonlogo1 from '../assets/ipsonlogo/logoipsum-391.svg'
import ipsonlogo2 from '../assets/ipsonlogo/logoipsum-400.svg'
import ipsonlogo3 from '../assets/ipsonlogo/logoipsum-402.svg'
import ipsonlogo4 from '../assets/ipsonlogo/logoipsum-412.svg'
import ipsonlogo5 from '../assets/ipsonlogo/logoipsum-420.svg'
import ipsonlogo6 from '../assets/ipsonlogo/logoipsum-421.svg'
import sestwoimg from '../assets/home-page-grid-image-1.webp'
import sestwoimg2 from '../assets/home-page-grid-image-2.webp'
import sestwoimg3 from '../assets/home-page-grid-image-3.webp'
import sestwoimg4 from '../assets/home-page-grid-image-4.webp'
import sesthree1 from '../assets/home-story-image-1.webp'
import sesthree2 from '../assets/home-commitment-image-1.webp'
import sesfour1 from '../assets/home-solutions-image-3.webp'
import sesfive1 from '../assets/home-cta-section-image-3.webp'
import sesfive2 from '../assets/about-us-image-1.webp'
import sesfive3 from '../assets/home-cta-section-image-2.webp'
import sessix1 from '../assets/home-solutions-image-1.webp'
import sessix2 from '../assets/home-solutions-image-2.webp'
import sessix3 from '../assets/home-solutions-image-3.webp'
import prof1 from '../assets/client-image-1.webp'
import prof2 from '../assets/client-image-2.webp'
import prof3 from '../assets/client-image-3.webp'
import prof4 from '../assets/client-image-4.webp'
import sesseven1 from '../assets/home-subscribe-image-1.webp'
import sesseven2 from '../assets/home-subscribe-image-2.webp'
import sesseven3 from '../assets/home-subscribe-image-3.webp'
import ses8 from '../assets/home-bottom-cta-background-image.webp'
const Home = () => {
    const star = ['', '', '', '', '']


    return (
        <div className='relative min-h-screen w-full overflow-x-hidden'>

            <div className=" bg-cover bg-center min-h-screen  pt-48   lg:pt-76"
                style={{ backgroundImage: `url(${herobg})` }}>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 sm:px-10  lg:px-14'>
                    <div className='text-white'>
                        <h2 className='lg:text-7xl lg:text-start sm:text-5xl text-4xl text-center font-bold leading-tight'>Sustainable Farming for a Thriving Future</h2>
                        <p className='text-lg text-center lg:text-start font-medium mt-8 leading-normal'>We empower farmers with sustainable practices, quality seeds, and modern technologies to cultivate abundant harvests, support communities, protect resources, and ensure global food security.</p>
                        <div className='mt-14 flex items-center justify-center lg:justify-start flex-wrap '>
                            <div className='bg-lime-600 hover:bg-lime-700 cursor-pointer text-white   flex items-center gap-6 rounded-full p-3 px-4'><p className='text-bold font-semibold text-md'>Explore Solution</p>
                                <p className='bg-white p-2 rounded-full text-green-700 h-8 w-8 flex items-center justify-center'><i class="ri-arrow-right-line"></i></p>
                            </div>
                            <div className='flex text-xl font-semibold p-4 items-center gap-4'><p className='lg:text-5xl  text-3xl font-bold'>4.9</p ><i className="ri-star-fill text-2xl text-lime-500 "></i><p>1,458 reviews</p></div>
                        </div>
                    </div>
                    <div className='  grid grid-cols-1 sm:grid-cols-2 flex justify-center lg:items-end gap-6'>

                        {/* IMAGE CARD */}
                        <div className='relative  '>

                            <img
                                src={ledyimg}
                                alt=""
                                className='w-full rounded-2xl h-[220px] sm:h-[215px] bg-cover bg-center  '
                            />


                            <div className='absolute inset-0 flex items-center justify-center'>

                                <button className='bg-white/30 backdrop-blur-md h-16 w-16 rounded-full flex items-center justify-center text-white text-3xl'>

                                    <i className="ri-play-fill"></i>

                                </button>

                            </div>

                        </div>

                        <div className='bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl  rounded-2xl text-white p-6'>

                            <div className='flex flex-col sm:flex-row justidy-center items-center gap-5 '>

                                <img
                                    src={pawanchakki}
                                    alt=""
                                    className='w-14 h-14 rounded-full'
                                />

                                <h2 className='text-center sm:text-star  font-bold text-lg overflow-hidden'>

                                    Accumsan semper ultrices justo

                                </h2>

                            </div>

                            <p className='mt-7  text-center sm:text-start text-gray-200  overflow-hidden'>

                                Etiam class egestas donec faucibus porta
                                aptent eleifend fusce quam himenaeos
                                suspendisse.

                            </p>

                        </div>

                    </div>
                </div>
                <div className='mt-20 w-full bg-white/90  border border-white/20 shadow-lg backdrop-blur-xl py-8'>

                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 px-4 place-items-center'>

                        <img src={ipsonlogo1} alt="" className='w-35' />
                        <img src={ipsonlogo2} alt="" className='w-35 ' />
                        <img src={ipsonlogo3} alt="" className=' w-35' />
                        <img src={ipsonlogo4} alt="" className=' w-35' />
                        <img src={ipsonlogo5} alt="" className=' w-35' />
                        <img src={ipsonlogo6} alt="" className=' w-35' />

                    </div>

                </div>

            </div>

            <div className=' px-8 sm:px-10  lg:px-14  '>

                <div className='mt-32  '>
                    <h2 className='text-center text-3xl sm:text-4xl   font-bold '>Showcasing the Beauty and Innovation of Sustainable Agriculture <span className='text-gray-500'>Through Stunning Visuals and Inspiring Imagery</span></h2>
                    <div className='min-h-screen grid grid-cols-3 gap-8  mt-16 text-white text-lg font-semi-bold ' >
                        <div className='group relative overflow-hidden lg:h-screen h-[300px] col-span-3 lg:col-span-1 rounded-2xl'>


                            <div
                                className='h-full w-full bg-cover bg-center transition-transform duration-500  group-hover:scale-120'
                                style={{ backgroundImage: `url(${sestwoimg})` }}
                            ></div>


                            <div className='absolute inset-0 flex items-end'>
                                <p className='bg-black/20 border border-white/20 backdrop-blur-xl p-5 m-5 rounded-2xl text-white'>
                                    Donec eros cursus nam senectus tempus vestibulum aliquet varius porttitor curae aliquam aenean himenaeos mattis
                                </p>
                            </div>

                        </div>

                        <div className=' col-span-3 lg:col-span-2 grid  gap-8  '>
                            <div className='group relative overflow-hidden rounded-2xl h-[300px] lg:h-auto w-full'>

                                {/* Zoom Image */}
                                <div
                                    className='h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110'
                                    style={{ backgroundImage: `url(${sestwoimg2})` }}
                                ></div>

                                {/* Content */}
                                <div className='absolute inset-0 flex items-end'>
                                    <p className='bg-black/20 border border-white/20 backdrop-blur-xl p-5 m-5 rounded-2xl text-white'>
                                        Malesuada ante arcu est, a felis porttitor, auctor venenatis augue quam consectetur massa fermentum pulvinar primis tincidunt potenti massa etiam bibendum
                                    </p>
                                </div>

                            </div>
                            <div className='grid grid-cols-1  sm:grid-cols-2   gap-8 w-full '>
                                <div className='group relative overflow-hidden rounded-2xl h-[300px] lg:h-auto w-full'>


                                    <div
                                        className='h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110'
                                        style={{ backgroundImage: `url(${sestwoimg3})` }}
                                    ></div>

                                    {/* Content */}
                                    <div className='absolute inset-0 flex items-end'>
                                        <p className='bg-black/20 border border-white/20 backdrop-blur-xl p-5 m-5 rounded-2xl text-white'>
                                            Volutpat sollicitudin convallis potenti urna vehicula purus sociosqu sapien
                                        </p>
                                    </div>

                                </div>
                                <div className='group relative overflow-hidden rounded-2xl h-[300px] lg:h-auto w-full'>


                                    <div
                                        className='h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110'
                                        style={{ backgroundImage: `url(${sestwoimg4})` }}
                                    >

                                    </div>

                                    {/* Content */}
                                    <div className='absolute inset-0 flex items-end'>
                                        <p className='bg-black/20 border border-white/20 backdrop-blur-xl p-5 m-5 rounded-2xl text-white'>
                                            Aenean lobortis, potenti donec a aliquam nulla urna risus auctor etiam primis aenean
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='mt-40   text-center'>
                    <div className='grid grid-cols-1 text-center lg:text-start lg:grid-cols-2 gap-6 lg:gap-36 items-center '>

                        <p className='text-3xl sm:text-4xl lg:text-5xl font-bold'> Our Impact <span className='text-gray-500'>in Numbers</span> </p>
                        <p className='lg:text-xl text-lg text-gray-600'>Our commitment to sustainable agriculture drives measurable results, building healthier ecosystems, stronger communities, and lasting prosperity</p>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-14 mt-12 justify-items-center'>
                        <div>
                            <p className='text-4xl sm:text-5xl lg:text-6xl font-bold'>50K+</p>
                            <p className='lg:text-xl text-lg text-gray-600'> Farmers Supported</p>
                        </div>

                        <div >
                            <p className='text-4xl sm:text-5xl lg:text-6xl font-bold'>20M+</p>
                            <p className='lg:text-xl text-lg text-gray-600'>Acres Cultivated</p>
                        </div>

                        <div>
                            <p className='text-4xl sm:text-5xl lg:text-6xl font-bold'>40%</p>
                            <p className='lg:text-xl text-lg text-gray-600'>Farmers Supported</p>
                        </div>

                        <div>
                            <p className='text-4xl sm:text-5xl lg:text-6xl font-bold'>30k+</p>
                            <p className='lg:text-xl text-lg text-gray-600'>Tons of Organic</p>
                        </div>
                    </div>
                </div>



                <div className='mt-48 grid grid-cols-1 lg:grid-cols-2   gap-18  text-center lg:text-start  items-center'>
                    <div className='h-[350px] rounded-4xl sm:h-[450px] lg:h-[576px] bg-cover bg-center' style={{ backgroundImage: `url(${sesthree1})` }}></div>
                    <div className='flex flex-col gap-12 lg:items-start items-center '>
                        <p className='text-3xl  sm:text-4xl lg:text-5xl font-bold'> Discover the <span className='text-gray-500'>Journey That Built Our Story</span> </p>
                        <p className='lg:text-xl text-lg text-gray-600'>Founded with a passion for sustainable farming, Agro-Cultures has grown into a trusted partner for farmers worldwide. Since our inception, we’ve worked tirelessly to blend.</p>
                        <div className='flex flex-col sm:flex-row sm:justify-between gap-6 '>
                            <div className='flex flex-col gap-5 items-center lg:items-start'>
                                <div className='h-[75px] w-[75px] rounded-full bg-gray-300 flex items-center justify-center'> <i class="ri-blaze-fill text-2xl"></i></div>
                                <p className='font-bold text-4xl'>+25%</p>
                                <p className='lg:text-xl text-lg text-gray-600 '>Sustaining our future through farming tradition.</p>
                            </div>
                            <div className='flex flex-col gap-5 items-center lg:items-start'>
                                <div className='h-[75px] w-[75px] rounded-full bg-gray-300 flex items-center justify-center'> <i class="ri-bar-chart-grouped-line text-2xl"></i></div>
                                <p className='font-bold text-4xl'>+25%</p>
                                <p className='lg:text-xl text-lg text-gray-600 '>From local harvests to global impact everywhere.   </p>
                            </div>
                        </div>
                        <div className='bg-lime-600 hover:bg-lime-700 cursor-pointer text-white   flex items-center gap-6 rounded-full p-3 px-4'><p className='text-bold font-bold text-md'>Get in Touch</p>
                            <p className='bg-white p-2 rounded-full text-green-700 h-8 w-8 flex items-center justify-center'><i class="ri-arrow-right-line"></i></p>
                        </div>
                    </div>
                </div>

                <div className='mt-24 grid grid-cols-1 lg:grid-cols-2  gap-18  text-center lg:text-start  items-center'>
                    <div className=' lg:hidden h-[350px] rounded-4xl sm:h-[450px] lg:h-[576px] bg-cover bg-center' style={{ backgroundImage: `url(${sesthree2})` }}></div>
                    <div className='flex flex-col gap-12 lg:items-start items-center '>
                        <p className='text-3xl  sm:text-4xl lg:text-5xl font-bold'>Our Commitment   <span className='text-gray-500'>Grows Stronger With Time</span> </p>
                        <p className='lg:text-xl text-lg text-gray-600'>We are committed to empowering farmers with cutting-edge tools and knowledge, from developing drought-resistant seeds to promoting regenerative farming practices.</p>
                        <div className='flex flex-col sm:flex-row sm:justify-between gap-6 '>
                            <div className='flex flex-col gap-5 items-center lg:items-start'>
                                <div className='h-[75px] w-[75px] rounded-full bg-gray-300 flex items-center justify-center'> <i class="ri-blaze-fill text-2xl"></i></div>
                                <p className='font-bold text-4xl'>30%</p>
                                <p className='lg:text-xl text-lg text-gray-600 '>Innovative solutions shaping the future of farming.</p>
                            </div>
                            <div className='flex flex-col gap-5 items-center lg:items-start'>
                                <div className='h-[75px] w-[75px] rounded-full bg-gray-300 flex items-center justify-center'> <i class="ri-bar-chart-grouped-line text-2xl"></i></div>
                                <p className='font-bold text-4xl'>+50%</p>
                                <p className='lg:text-xl text-lg text-gray-600 '>Nurturing the land with farmer support always.  </p>
                            </div>
                        </div>
                        <div className='bg-lime-600 hover:bg-lime-700 cursor-pointer text-white   flex items-center gap-6 rounded-full p-3 px-4'><p className='text-bold font-bold text-md'>Get in Touch</p>
                            <p className='bg-white p-2 rounded-full text-green-700 h-8 w-8 flex items-center justify-center'><i class="ri-arrow-right-line"></i></p>
                        </div>
                    </div>

                    <div className='hidden lg:block h-[350px] rounded-4xl sm:h-[450px] lg:h-[576px] bg-cover bg-center' style={{ backgroundImage: `url(${sesthree2})` }}></div>
                </div>
            </div>

            <div className="relative bg-cover bg-center min-h-screen px-8 sm:px-10  lg:px-14 pt-18 pb-18 text-white mt-24"
                style={{ backgroundImage: `url(${sesfour1})` }}>
                <div className='absolute inset-0 bg-black/80'></div>
                <div className='relative z-10 text-white'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-24'>
                        <div className='grid lg:grid-cols-2 gap-8 '>
                            <div className='col-span-2 rounded-4xl h-[450px] lg:h-[500px] bg-center bg-cover' style={{ backgroundImage: `url(${sesfive1})` }}></div>
                            <div className='rounded-4xl col-span-2 sm:col-span-1 h-[220px] lg:h-[180px] bg-center bg-cover' style={{ backgroundImage: `url(${sesfive2})` }}></div>
                            <div className='rounded-4xl col-span-2 sm:col-span-1 h-[220px] lg:h-[180px] bg-center bg-cover' style={{ backgroundImage: `url(${sesfive3})` }}></div>
                        </div>
                        <div className='flex flex-col gap-12 items-center lg:items-start text-center lg:text-start'>
                            <p className='text-3xl  sm:text-4xl lg:text-5xl font-bold leading-normal '>Empowering Your Farm   <span className='text-gray-500'>With Expert Solutions</span> </p>
                            <div className='text-xl font-bold p-4 bg-white/20 border border-white/20 backdrop-blur-xl rounded-full'><span className='mr-5'>4.9/5</span >{star.map(() => <i class="ri-star-fill mr-2 text-lime-500"></i>)}</div>
                            <div className='font-semibold flex flex-col '>
                                <div><i class="ri-checkbox-circle-fill mr-5 text-xl"></i><span>Malesuada ante arcu esta felis porttitor</span></div>
                                <div><i class="ri-checkbox-circle-fill mr-5 text-xl"></i><span>Donec eros cursus senectus tempus</span></div>
                                <div><i class="ri-checkbox-circle-fill mr-5 text-xl"></i><span>Tincidunt quisque vestibulum</span></div>
                            </div>
                            <p>We provide a comprehensive suite of tailored services designed to optimize farming operations, enhance productivity, and promote environmentally sustainable practices for long-term agricultural success.</p>
                            <p>Our team combines advanced technology with practical expertise to deliver innovative solutions, empowering farmers to achieve efficiency, reduce costs, and build resilient agricultural systems for the future.</p>
                            <div className='bg-lime-600 hover:bg-lime-700 cursor-pointer text-white   flex items-center gap-6 rounded-full p-3 px-4'><p className='text-bold font-bold text-md'>Get in Touch</p>
                                <p className='bg-white p-2 rounded-full text-green-700 h-8 w-8 flex items-center justify-center'><i class="ri-arrow-right-line"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 sm:px-10  lg:px-14 pt-24  bg-gray-100'>
                <div className='grid grid-cols-1 text-center lg:text-start lg:grid-cols-2 gap-6 lg:gap-36 items-center '>

                    <p className='text-3xl sm:text-4xl lg:text-5xl font-bold'> Comprehensive Solutions <span className='text-gray-500'>For Modern Farming</span> </p>
                    <p className='lg:text-xl text-lg text-gray-600'>Unlock the full potential of your land today through our expert, reliable, advanced, and comprehensive soil testing services</p>
                </div>
                <div className='mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6' >
                    <div className='p-6 bg-gray-100 rounded-2xl flex flex-col gap-8' >
                        <div className='flex justify-between items-center '><p className=' text-xl font-bold'>Soil Testing & Analysis</p><p className='bg-black p-2 rounded-full text-white h-8 w-8 flex items-center justify-center'><i class="ri-arrow-right-line"></i></p></div>
                        <p className='text-lg'>Malesuada ante porttitor auctor venenatis augue quam consectetur massa.</p>
                        <img src={sessix1} alt="" className='h-[300px] sm:h-[450px] lg:h-[234px] rounded-2xl' />
                    </div>
                    <div className='p-6 bg-gray-100 rounded-2xl flex flex-col gap-8' >
                        <div className='flex justify-between items-center '><p className=' text-xl font-bold'>Precision Farming Support</p><p className='bg-black p-2 rounded-full text-white h-8 w-8 flex items-center justify-center'><i class="ri-arrow-right-line"></i></p></div>
                        <p className='text-lg'>Diam bibendum nullam quis, placerat mattis ultrices, rutrum porttitor posuere sit.</p>
                        <img src={sessix2} alt="" className='h-[300px] sm:h-[450px] lg:h-[234px] rounded-2xl' />
                    </div>
                    <div className='p-6 bg-gray-100 rounded-2xl flex flex-col gap-8' >
                        <div className='flex justify-between items-center '><p className=' text-xl font-bold'>Precision Crop Consulting</p><p className='bg-black p-2 rounded-full text-white h-8 w-8 flex items-center justify-center'><i class="ri-arrow-right-line"></i></p></div>
                        <p className='text-lg'>Eleifend ultrices pulvinar placerat, vehicula aliquam commodo nunc primis.</p>
                        <img src={sessix3} alt="" className='h-[300px] sm:h-[450px] lg:h-[234px] rounded-2xl' />
                    </div>


                </div>

                <div className='grid lg:grid-cols-2 sm:p-6 gap-18 text-center lg:text-start mt-16'>
                    <div className='flex p-6 flex-col gap-8 text-lg items-center lg:items-start'>
                        <p className='text-3xl sm:text-4xl  font-bold'> Stay Updated with <span className='text-gray-500'>Agro Cultures News</span> </p>
                        <div className=' flex items-center'>
                            <img src={prof1} alt="" className='h-[46px] w-[46px] bg-cover bg-center border-2 border-white rounded-full  ' />
                            <img src={prof2} alt="" className='h-[46px] w-[46px] bg-cover bg-center border-2 border-white rounded-full -ml-4' />
                            <img src={prof3} alt="" className='h-[46px] w-[46px] bg-cover bg-center border-2 border-white rounded-full -ml-4' />
                            <img src={prof4} alt="" className='h-[46px] w-[46px] bg-cover bg-center border-2 border-white rounded-full -ml-4' />

                            <span className='ml-6 font-bold'>24K subscribers</span>
                        </div>

                        <p>Diam bibendum nullam quis, placerat mattis ultrices, rutrum porttitor posuere sit curae amet cubilia quam, ante velit pretium.</p>
                        <p>Interdum nullam est, aliquam consequat, neque sit ipsum mi dapibus quis taciti. Ullamcorper justo, elementum pellentesque gravida quisque.</p>
                        <div className="border-2 border-gray-300 focus-within:border-lime-600 rounded-4xl p-1 flex flex-col sm:flex-row sm:justify-between  transition-all duration-300 mt-5">

                            <input
                                type="email"
                                placeholder="Your email address"
                                className="outline-none bg-transparent py-2 px-4 text-lg    "
                            />

                            <button className="bg-lime-600 hover:bg-lime-700 text-white px-8 p-2 rounded-4xl font-semibold text-lg transition-all duration-300">
                                Subscribe now
                            </button>

                        </div>
                    </div>
                    <div className='lg:grid grid-cols-3 gap-8 hidden items-end'>
                        <img src={sesseven1} alt="" className='h-[103px] rounded-2xl w-full object-cover' />
                        <img src={sesseven2} alt="" className='h-[185px] rounded-2xl w-full object-cover' />
                        <img src={sesseven3} alt="" className='h-[267px] rounded-2xl w-full object-cover' />

                    </div>
                </div>
            </div>

            <div className='pt-48 pb-16 bg-cover bg-center px-8 sm:px-10  lg:px-14 pt-24 text-white' style={{ backgroundImage: `url(${ses8})` }}>
                <p className='text-3xl sm:text-4xl  font-bold'> Dive Into The World of Agro-Cultures With Our Exclusive Online videos </p>
            </div>

        </div >

    )
}

export default Home