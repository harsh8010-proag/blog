import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../redux/services/api';


const Register = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');

    const [isNameError, setIsNameError] = useState('');
    const [isEmailError, setIsEmailError] = useState('');
    const [isPasswordError, setIsPasswordError] = useState('');

    const [
        register,
        {
            isLoading
        }
    ] = useRegisterMutation();




    const handleClose = () => {
        navigate(location.state?.from || "/")
    }


    const handleSubmit = async (e) => {

        e.preventDefault()

        if (!name.trim()) {
            setIsNameError('name is required');
            return;
        }

        if (!email.trim()) {
            setIsEmailError('email is required');
            return;
        }

        if (!password.trim()) {
            setIsPasswordError('password is required');
            return;
        }

        if (password.length < 6) {

            setIsPasswordError('password must at least 6 characters long ')
            return;
        }
        try {

            const user = await register({
                name,
                email,
                password
            }).unwrap();

            console.log(user)

            setName("")
            setEmail("")
            setPassword("")

            navigate('/login');

        } catch (error) {

            setIsEmailError(error.data.message)
            console.log(error.data.message);
        }

    }

    return (

        <div className='fixed inset-0 z-150 bg-black/50 backdrop-blur-sm flex items-center justify-center px-5'>

            <div className='bg-white rounded-[30px] max-w-md w-full p-8 relative shadow-2xl'>

                <button
                    onClick={handleClose}
                    className='absolute right-6 top-6 text-xl text-gray-600 hover:text-black cursor-pointer'
                >
                    <i className="ri-close-fill"></i>
                </button>

                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center'>
                    Create Account
                </h1>

                <p className='text-center mt-3 text-gray-500'>
                    Join our blog community
                </p>

                <form
                    onSubmit={handleSubmit}
                    className='mt-10 space-y-5'
                >
                    <div>
                        <input
                            type="text"
                            placeholder='Full Name'
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                                setIsNameError('')
                            }
                            }
                            className={`w-full border-2  rounded-full px-6 py-4 outline-none focus:border-[#6AA600] transition-all duration-300 ${isNameError ? 'border-red-500 ' : 'border-gray-400'}`}

                        />
                        {isNameError && <p className='text-sm text-red-500 ml-5 transition-all duration-300 opacity-100 translate-y-0'>{isNameError}</p>}

                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setIsEmailError('')
                            }
                            }
                            className={`w-full border-2   border rounded-full px-6 py-4 outline-none focus:border-[#6AA600] ${isEmailError ? 'border-red-500' : 'border-gray-400'}`}

                        />
                        {isEmailError && <p className='text-sm text-red-500 ml-5'>{isEmailError}</p>}
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                setIsPasswordError('')
                            }
                            }
                            className={`w-full border-2  rounded-full px-6 py-4 outline-none focus:border-[#6AA600] ${isPasswordError ? 'border-red-500' : 'border-gray-400'}`}

                        />
                        {isPasswordError && <p className='text-sm text-red-500 ml-5'>{isPasswordError}</p>}
                        {/* {error && <p className='text-sm text-red-500 ml-5'>{error}</p>} */}
                    </div>

                    <button
                        type='submit'
                        disabled={isLoading}
                        className='w-full bg-[#6AA600] hover:bg-[#5b9100] text-white py-4 rounded-full cursor-pointer'
                    >

                        {
                            isLoading
                                ? "Registering..."
                                : "Register"
                        }

                    </button>

                </form>

                <p className='text-center mt-6'>

                    Already have account?

                    <Link
                        to='/login'
                        state={location.state}
                        className='ml-2 text-[#6AA600] font-semibold '
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>

    )
}

export default Register;   