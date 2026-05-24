import React from 'react'
import contacthero from '../assets/formar/contact-us-hero-image.webp'
import ses21 from '../assets/formar/contact-us-column-image.webp'
import ses31 from '../assets/formar/contact-page-cta-background-image.webp'

const Contact = () => {
    return (
        <div>
            <div className="bg-cover bg-center min-h-screen text-white text-center pt-48   lg:pt-65  px-8 sm:px-10  lg:px-52 "
                style={{ backgroundImage: `url(${contacthero})` }}>
                <h2 className='lg:text-6xl  sm:text-5xl text-4xl text-center font-bold leading-tight'>Let’s Connect and Build a Sustainable Future Together</h2>
                <p className='text-lg text-center   font-medium mt-8 leading-normal'>Empowering farmers with innovative, eco-friendly practices to meet rising global food demands, conserve natural resources, strengthen communities, and protect our planet’s sustainable future.</p>

                <div className='grid gird-cols-1 sm:grid-cols-3 mt-16 pb-24 gap-6'>
                    <div className=' flex flex-col lg:flex-row items-center gap-4 gb-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 '>

                        <div className='h-12 w-12 rounded-full bg-white text-black  flex items-center justify-center '>
                            <i class=" text-xl  ri-phone-fill "></i>
                        </div>
                        <div className='text-xl'>
                            <p className='font-bold   '>Phone:</p>
                            <p className=' '>+91 12124338954</p>
                        </div>
                    </div>
                    <div className=' flex flex-col lg:flex-row items-center gap-4 gb-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 '>

                        <div className='h-12 w-12 rounded-full bg-white text-black  flex items-center justify-center '>
                            <i class="ri-map-pin-fill text-xl  "></i>
                        </div>
                        <div className='text-xl'>
                            <p className='font-bold   '>Our location</p>
                            <p className=' '>SambhajiNagar</p>
                        </div>
                    </div>
                    <div className=' flex flex-col lg:flex-row items-center gap-4 gb-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 '>

                        <div className='h-12 w-12 rounded-full bg-white text-black  flex items-center justify-center '>
                            <i class=" ri-timer-2-fill text-xl    "></i>
                        </div>
                        <div className='text-xl'>
                            <p className='font-bold   '>Opening hours:</p>
                            <p className=' '>9AM - 7AM</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-8 sm:px-10  lg:px-14'>
                <div className='grid grid-cols-1 text-center lg:text-start lg:grid-cols-2 gap-6 lg:gap-36 items-center mt-16 '>

                    <p className='text-3xl sm:text-4xl  font-bold'> Our Impact <span className='text-gray-500'>in Numbers</span> </p>
                    <p className='lg:text-xl text-lg text-gray-600'>Our commitment to sustainable agriculture drives measurable results, building healthier ecosystems, stronger communities, and lasting prosperity</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 ' >
                    <div className='lg:h-screen h-[500px] bg-cover bg-center rounded-2xl grid items-end' style={{ backgroundImage: `url(${ses21})` }}>
                        <div className='bg-white/10 backdrop-blur-xl  border border-white/20 m-5 p-4 rounded-2xl flex flex-col  sm:flex-row items-center gap-5'>
                            <div className='h-12 w-12 rounded-full bg-white text-black  flex-shrink-0  flex items-center justify-center '>
                                <i class=" text-xl  ri-phone-fill "></i>
                            </div>
                            <div className='text-white text-lg text-center sm:text-start '>
                                <p className='font-semibold'>24/7 support you can trust</p>
                                <p>Always available to provide reliable solutions whenever you need us.</p>
                            </div>
                        </div>
                    </div>
                    <form className='bg-gray-100 p-6 rounded-2xl grid items-center'>
                        <p className='text-xl sm:text-2xl font-bold '> Our Team is Always Here for Support and Assistance</p>
                        <div className='grid sm:grid-cols-2 grid-cols-1  grid-cols-1  gap-4 mt-8 '>
                            <div>
                                <p className='text-lg text-gray-700 mb-2 '>Your Name</p>
                                <input type="text" className='w-full text-lg p-2 px-3 rounded-full border-2 border-gray-300  focus:border-lime-500 outline-none' />
                            </div>
                            <div>
                                <p className='text-lg text-gray-700 mb-2 '>Email Adress</p>
                                <input type="text" className='w-full text-lg p-2 px-3 rounded-full border-2 border-gray-300  focus:border-lime-500 outline-none' />
                            </div>
                            <div>
                                <p className='text-lg text-gray-700 mb-2 '>Phone Number</p>
                                <input type="text" className=' w-full text-lg p-2 px-3 rounded-full border-2 border-gray-300  focus:border-lime-500 outline-none' />
                            </div>
                            <div>
                                <p className='text-lg text-gray-700 mb-2 '>Company Name</p>
                                <input type="text" className='w-full text-lg p-2 px-3 rounded-full border-2 border-gray-300  focus:border-lime-500 outline-none' />
                            </div>

                            <div className='sm:col-span-2'>
                                <p className='mt-2 text-lg text-gray-700 mb-2'>Your Message</p>
                                <textarea rows={5} className='w-full resize-none text-lg p-2 px-3 rounded-2xl outline-none border-2 border-gray-300 focus:border-lime-500'></textarea>
                            </div>
                        </div>

                    </form>
                </div>

            </div>

            <div className="relative bg-cover bg-center min-h-screen px-8 sm:px-10  lg:px-14  text-white mt-18 grid items-center"
                style={{ backgroundImage: `url(${ses31})` }}>
                <div className='  flex flex-col items-center gap-12  text-center   '>
                    <p className='text-3xl   sm:text-4xl   font-bold leading-normal '>Ready to Take the First Step Toward Collaboration?</p>
                    <p className='text-xl font-semibold'>Let’s grow a sustainable future together! We’re excited to partner with farmers, businesses, and communities to drive innovation and success in agriculture.</p>
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
    )
}

export default Contact