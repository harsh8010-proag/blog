import React from 'react'
import sestwoimg2 from '../assets/home-page-grid-image-2.webp'
import aboutheroimg from '../assets/about-us-hero-image.webp'
import aboutheroimg2 from '../assets/about-us-cta-image.webp'
import avatar from '../assets/testimonial-avatar-1.webp'
import ses21 from '../assets/about-us-image-1.webp'
import ses22 from '../assets/about-us-image-2.webp'
import ses31 from '../assets/about-us-hero-column-image.webp';
import ses41 from '../assets/about-us-bottom-cta-background-3.webp'
import farmer1 from '../assets/formar/farmer-1.webp'
import farmer2 from '../assets/formar/farmer-2.webp'
import farmer3 from '../assets/formar/farmer-3.webp'
import farmer4 from '../assets/formar/farmer-4.webp'
import farmer5 from '../assets/formar/farmer-5.webp'
import farmer6 from '../assets/formar/farmer-6.webp'
import farmer7 from '../assets/formar/farmer-7.webp'
import farmer8 from '../assets/formar/farmer-8.webp'
import prof1 from '../assets/client-image-1.webp'
import prof2 from '../assets/client-image-2.webp'
import prof3 from '../assets/client-image-3.webp'
import prof4 from '../assets/client-image-4.webp'
import ses51 from '../assets/about-us-cta-image-3.webp'
import ses52 from '../assets/formar/about-us-cta-image-2.webp'



const About = () => {
    const team = [
        {
            name: 'John Peterson',
            position: 'Founder and owner',
            url: farmer1
        },
        {
            name: 'Michael Brown',
            position: 'Farm manager',
            url: farmer2
        },
        {
            name: 'Sarah Thompson',
            position: 'Agricultural operations',
            url: farmer3
        },
        {
            name: 'David Wilson',
            position: 'Crop production specialist',
            url: farmer4
        },
        {
            name: 'Alicia Henderson',
            position: 'Soil scientist',
            url: farmer5
        },
        {
            name: 'Thomas Clark',
            position: 'Agricultural engineer',
            url: farmer6
        },
        {
            name: 'Robert Davis',
            position: 'Crop consultant',
            url: farmer7
        },
        {
            name: 'Emily Benedict',
            position: 'Livestock nutritionist',
            url: farmer8
        },
    ]
    return (
        <div>
            <div className=" bg-cover bg-center min-h-screen text-white pt-48   lg:pt-76   px-8 sm:px-10  lg:px-14 "
                style={{ backgroundImage: `url(${aboutheroimg})` }}>
                <div className='grid grid-cols-1 lg:grid-cols-2  lg:gap-6 items-center'>
                    <h2 className='lg:text-7xl lg:text-start sm:text-5xl text-4xl text-center font-bold leading-tight leading-normal'>Discover Our Story in Agriculture</h2>
                    <div className='flex flex-col gap-12 items-center lg:items-start text-xl'>
                        <p className='text-lg text-center lg:text-start font-medium mt-8 leading-normal'>We empower farmers by providing innovative, sustainable solutions that foster growth, resilience, community development, and long-term agricultural success.</p>
                        <div className='bg-lime-600 hover:bg-lime-700 cursor-pointer text-white   flex items-center gap-6 rounded-full p-3 px-4'><p className='text-bold font-semibold text-md'>Get Started Now</p>
                            <p className='bg-white p-2 rounded-full text-green-700 h-8 w-8 flex items-center justify-center'><i class="ri-arrow-right-line"></i></p>
                        </div>
                    </div>
                </div>
                <div className='relative h-[410px] sm:h-[390px] lg:h-[450px] w-full mt-18 rounded-t-xl bg-cover bg-center' style={{ backgroundImage: `url(${aboutheroimg2})` }}>
                    <div className='absolute bottom-10 items-center text-center sm:text-start sm:right-45 m-5 flex flex-col sm:flex-row gap-6 bg-white/30 p-4 rounded-2xl backdrop-blur-xl'>
                        <img src={avatar} className=" rounded-full h-[70px] w-[70px] lg:h-[80px] lg:w-[80px]" alt="" />
                        <p className='text-xl font-semibold'>Excellent seborvice, fast and professional installation, with noticeable savings that continue to grow each passing month.</p>
                    </div>
                </div>
            </div>

            <div className='px-8 sm:px-10  lg:px-14 pt-34'>
                <p className='text-3xl  sm:text-4xl   font-bold leading-normal '>We Empower Farmers With Innovative, Sustainable Solutions That Help   <span className='text-gray-500'>Grow Healthier Crops, Protect the Planet, and Ensure Agricultural Success</span> </p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 mt-24 items-end'>
                    <div className='flex flex-col sm:flex-row sm:justify-between gap-6 text-center lg:text-start'>
                        <div className='flex flex-col gap-5 items-center lg:items-start'>
                            <div className='h-[75px] w-[75px] rounded-full bg-gray-300 flex items-center justify-center'> <i class="ri-blaze-fill text-2xl"></i></div>
                            <p className='font-bold text-4xl'>45%</p>
                            <p className='lg:text-xl text-lg text-gray-600 '>Farmer empowerment</p>
                        </div>
                        <div className='flex flex-col gap-5 items-center lg:items-start'>
                            <div className='h-[75px] w-[75px] rounded-full bg-gray-300 flex items-center justify-center'> <i class="ri-bar-chart-grouped-line text-2xl"></i></div>
                            <p className='font-bold text-4xl'>75%</p>
                            <p className='lg:text-xl text-lg text-gray-600 '>Sustainable innovations  </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-6 h-[147px] '>
                        <div className='col-span-2 rounded-2xl bg-center bg-cover' style={{ backgroundImage: `url(${ses21})` }} ></div>
                        <div className='col-span-1 rounded-2xl bg-center bg-cover' style={{ backgroundImage: `url(${ses22})` }}></div>

                    </div>
                </div>
            </div>

            <div className=" bg-cover bg-center mt-24  h-screen text-white grid items-end  justify-items-end lg:pt-80  px-8 sm:px-10  lg:px-14 "
                style={{ backgroundImage: `url(${ses31})` }}>
                <div className='bg-lime-700/70 backdrop-blur-xl border border-white/20 shadow-2xl  rounded-2xl text-white p-6 mb-10 sm:w-120'>
                    <h2 className='text-center sm:text-star  font-bold text-lg overflow-hidden'>

                        stay informed With Updates From Our News Hub

                    </h2>
                    <p className='mt-7  text-center sm:text-start text-gray-200  overflow-hidden'>

                        Etiam class egestas donec faucibus porta
                        aptent eleifend fusce quam himenaeos
                        suspendisse.

                    </p>

                </div>

            </div>

            <div className='mt-24 px-8 sm:px-10  lg:px-14 pb-24   border-b border-gray-200'>
                <p className='text-3xl   sm:text-4xl   font-bold leading-normal '>Come and Meet Our <span className='text-gray-500'>Experienced Team of Experts</span> </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mt-16 gap-8'>
                    {team.map((member, idx) =>
                        <div className='text-center' key={idx} >
                            <img src={member.url} alt="" className='h-[284px] object-cover object-center rounded-xl ' />
                            <p className='font-bold text-2xl mt-6'>{member.name}</p>
                            <p className='xl text-gray-800'>{member.position}</p>
                        </div>)}
                </div>

            </div>

            <div className='mt-24 px-8 text-center lg:text-start sm:px-10  lg:px-14 pb-24   border-b border-gray-200'>
                <p className='text-3xl   sm:text-4xl   font-bold leading-normal '>Discover What Our  <span className='text-gray-500'>Valued Customers Are Saying About Us</span> </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 mt-24 leading-normal'>
                    <div className='grid grid-row-2 gap-8 '>
                        <div className='p-6 rounded-2xl bg-gray-100'>
                            <p className='font-bold text-2xl mt-6'>John Miller</p>
                            <p className='xl text-gray-800'>Senior Crop Farmer</p>
                            <div className='pb-6 mt-8 border-b border-gray-400'>
                                <p className='text-5xl font-bold'>"</p>
                                <p className='text-lg text-gray-800 '>Thanks to their solutions, our yields have increased by 25%, and energy costs have significantly dropped. Highly recommend their expertise!</p>

                            </div>
                            <div className='pt-6 text-2xl'>
                                <span className='font-bold  mr-2'>5.0</span><i class="ri-star-fill "></i>
                            </div>
                        </div>
                        <div className='p-6 rounded-2xl bg-gray-100'> <p className='font-bold text-2xl mt-6'>David Chen</p>
                            <p className='xl text-gray-800'>Agricultural Operations Specialist</p>
                            <div className='pb-6 mt-8 border-b border-gray-400'>
                                <p className='text-5xl font-bold'>"</p>
                                <p className='text-lg text-gray-800'>The team provided exceptional support from start to finish. Their solar systems are reliable and eco-friendly – perfect for our organic farm.</p>

                            </div>
                            <div className='pt-6 text-2xl'>
                                <span className='font-bold  mr-2'>5.0</span><i class="ri-star-fill "></i>
                            </div></div>
                    </div>
                    <div className='p-6 rounded-2xl bg-gray-100'>
                        <p className='font-bold text-2xl mt-6'>Emily Rodriguez</p>
                        <p className='xl text-gray-800'>Organic Farm Manager</p>
                        <div className='pb-6 mt-8 border-b border-gray-400'>
                            <p className='text-5xl font-bold'>"</p>
                            <p className='text-lg text-gray-800'>
                                Professional service and tailored solutions that really meet the needs of modern agriculture. From the initial consultation to the final installation, the team was attentive and responsive, making sure every detail was addressed.

                                Their solar energy systems have helped us reduce costs while improving our farm’s sustainability. We’re very satisfied with the results and look forward to continuing our partnership.

                                Beyond the impressive technology, what truly stands out is their commitment to long-term support. They continue to provide guidance, answer questions promptly, and ensure that our systems run at peak performance. It’s reassuring to work with a company that cares just as much about the future of our farm as we do.</p>

                        </div>
                        <div className='pt-6 text-2xl'>
                            <span className='font-bold  mr-2'>4.9</span><i class="ri-star-fill "></i>
                        </div>
                    </div>

                </div>
            </div>

            <div className="relative bg-cover bg-center min-h-screen px-8 sm:px-10  lg:px-14 pt-18 pb-18 text-white mt-24"
                style={{ backgroundImage: `url(${ses41})` }}>
                <div className='absolute inset-0 bg-black/20'></div>
                <div className='relative z-10 text-white grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8' >
                        <div className='grid grid-row-2 gap-8'>
                            <div className='p-6 bg-lime-900 rounded-2xl flex flex-col gap-4'>
                                <h2 className='text-2xl font-bold'>2500+ clients</h2>
                                <p className='xl font-semibold'>Our commitment to quality, innovation, and reliability has consistently earned the trust and confidence of farmers.</p>
                                <div className=' flex items-center'>
                                    <img src={prof1} alt="" className='h-[46px] w-[46px] bg-cover bg-center border-2 border-white rounded-full  ' />
                                    <img src={prof2} alt="" className='h-[46px] w-[46px] bg-cover bg-center border-2 border-white rounded-full -ml-4' />
                                    <img src={prof3} alt="" className='h-[46px] w-[46px] bg-cover bg-center border-2 border-white rounded-full -ml-4' />
                                    <img src={prof4} alt="" className='h-[46px] w-[46px] bg-cover bg-center border-2 border-white rounded-full -ml-4' />

                                </div>
                            </div>
                            <div className='p-6 bg-cneter bg-cover h-[260px] rounded-2xl' style={{ backgroundImage: `url(${ses51})` }} ></div>
                        </div>
                        <div className='h-[350px] sm:h-screen rounded-2xl bg-center bg-cover grid items-end' style={{ backgroundImage: `url(${ses52})` }}>
                            <p className='bg-white/10 backdrop-blur-xl p-6 border-white/20 m-8 rounded-2xl text-xl'>Posuere duidolor aptent tellus primis praesent habitant</p>
                        </div>
                    </div>
                    <div className='  flex flex-col items-center  lg:items-start gap-12  text-center lg:text-start '>
                        <p className='text-3xl   sm:text-4xl   font-bold leading-normal '>Ready to Get Started on Your Next Big Project?</p>
                        <p className='text-xl font-semibold'>Take the first step toward sustainable and efficient agricultural energy solutions. Our team is here to support you every step of the way – from consultation to installation and beyond.</p>
                        <div className='flex flex-col sm:flex-row  gap-8'>
                            <div className='bg-lime-600 hover:bg-lime-700 cursor-pointer text-white   flex items-center gap-6 rounded-full p-3 px-4'><p className='text-bold font-semibold text-md'>Get Started </p>
                                <p className='bg-white p-2 rounded-full text-green-700 h-8 w-8 flex items-center justify-center'><i class="ri-arrow-right-line"></i></p>
                            </div>
                            <div className='bg-white/10 backdrop-blur-lg  border border-white/20 cursor-pointer text-white   flex items-center gap-6 rounded-full p-3 px-4'><p className='text-bold font-semibold text-md'>Learn More</p>
                                <p className='bg-white p-2 rounded-full text-green-700 h-8 w-8 flex items-center justify-center'><i class="ri-arrow-right-line"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default About;