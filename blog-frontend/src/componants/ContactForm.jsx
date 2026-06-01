import React from 'react'
import { useState } from 'react'

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileno, setMobileno] = useState('');
    const [message, setMessage] = useState('');

    const [error, setError] = useState('');
    const [isNameError, setIsNameError] = useState('');
    const [isEmailError, setIsEmailError] = useState('');
    const [isMobileError, setIsMobileError] = useState('');
    const [isMessageError, setIsMessageError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim()) {
            setIsNameError('name is required');
            return;
        }

        if (!email.trim()) {
            setIsEmailError('email is required');
            return;
        }

        if (!mobileno.trim()) {
            setIsMobileError('mobileno is required');
            return;
        }

        if (!message.trim()) {
            setIsMessageError('message feild is required ');
            return;
        }
        try {

        } catch (error) {

        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='bg-gray-100 p-6 rounded-2xl grid items-center'>
                <p className='text-xl sm:text-2xl font-bold '> Our Team is Always Here for Support and Assistance</p>
                <div className='grid sm:grid-cols-2 grid-cols-1  grid-cols-1  gap-4 mt-8 '>
                    <div>
                        <p className='text-lg text-gray-700 mb-2 '>Your Name</p>
                        <input type="text"
                            value={name}
                            onChange={(e) => { setName(e.target.value); setIsNameError('') }}
                            className={`w-full text-lg p-2 px-3 rounded-full border-2 focus:border-lime-500 outline-none ${isNameError ? 'border-red-500' : 'border-gray-300'}`} />
                        <p className='text-sm text-red-500 ml-4'>{isNameError}</p>
                    </div>

                    <div>
                        <p className='text-lg text-gray-700 mb-2 '>Email Adress</p>
                        <input
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setIsEmailError('') }}
                            type="text" className={`w-full text-lg p-2 px-3 rounded-full border-2 focus:border-lime-500 outline-none ${isEmailError ? 'border-red-500' : 'border-gray-300'}`} />
                        <p className='text-sm text-red-500 ml-4'>{isEmailError}</p>
                    </div>
                    <div className='sm:col-span-2'>
                        <p className='text-lg text-gray-700 mb-2  '>Phone Number</p>
                        <input
                            value={mobileno}
                            onChange={(e) => { setMobileno(e.target.value); setIsMobileError('') }}
                            type="text" className={`w-full text-lg p-2 px-3 rounded-full border-2 focus:border-lime-500 outline-none ${isMobileError ? 'border-red-500' : 'border-gray-300'}`} />
                        <p className='text-sm text-red-500 ml-4'>{isMobileError}</p>
                    </div>


                    <div className='sm:col-span-2'>
                        <p className='mt-2 text-lg text-gray-700 mb-2'>Your Message</p>
                        <textarea
                            value={message}
                            onChange={(e) => { setMessage(e.target.value); setIsMessageError('') }}
                            rows={5}
                            className={`w-full resize-none text-lg p-2 px-3 rounded-2xl outline-none border-2  focus:border-lime-500 ${isMessageError ? 'border-red-500' : 'border-gray-300'}`}></textarea>
                        <p className='text-sm text-red-500 ml-4'>{isMessageError}</p>
                    </div>
                    <button className='bg-lime-500 p-2 rounded-full text-xl font-semibold text-white cursor-pointer'>Submit Form</button>
                </div>

            </form>
        </>
    )
}

export default ContactForm