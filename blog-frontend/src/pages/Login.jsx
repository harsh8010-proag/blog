import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
// import { useLazyLoginQuery } from '../redux/services/api'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../redux/services/authSlice'
import { useLoginMutation } from '../redux/services/api.js'

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isEmailError, setIsEmailError] = useState('');
    const [isPasswordError, setIsPasswordError] = useState('');

    const dispatch = useDispatch();

    const [
        loginUser,
        {
            isLoading,
        }
    ] = useLoginMutation();

    const handleClose = () => {
        navigate(location.state?.from || "/")
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
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
            const data = await loginUser({ email, password }).unwrap();

            dispatch(loginSuccess(data.user))
            navigate("/")
        }
        catch (error) {
            console.log(error)
            setError(error.data.message)

        }

    }

    return (

        <div className='fixed inset-0 z-150 bg-black/50 backdrop-blur-sm flex items-center justify-center px-5 '>

            <div className='bg-white rounded-[30px] max-w-md w-full p-8 relative shadow-2xl'>

                <button
                    onClick={handleClose}
                    className='absolute right-6 top-6 text-xl cursor-pointer'
                >
                    <i className="ri-close-fill"></i>
                </button>

                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center'>
                    Welcome Back
                </h1>

                <p className='text-center mt-3 text-gray-500'>
                    Login to continue
                </p>

                <form
                    onSubmit={handleSubmit}
                    className='mt-10 space-y-5'
                >
                    <div>
                        <input
                            type="email"
                            placeholder='Email'
                            value={email}

                            onChange={(e) => {
                                setEmail(e.target.value);
                                setIsEmailError('')
                                setError('')
                            }
                            }
                            className={`w-full border-2  rounded-full px-6 py-4 outline-none focus:border-[#6AA600] ${isEmailError ? 'border-red-500' : 'border-gray-400'}`}
                        />
                        {isEmailError && <p className='text-sm text-red-500 ml-5'>{isEmailError}</p>}
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}

                            onChange={(e) => {
                                setPassword(e.target.value);
                                setIsPasswordError('');
                                setError('');
                            }
                            }
                            className={`w-full border-2  rounded-full px-6 py-4 outline-none focus:border-[#6AA600] ${isPasswordError ? 'border-red-500' : 'border-gray-400'}`}
                        />
                        {isPasswordError && <p className='text-sm text-red-500 ml-5'>{isPasswordError}</p>}
                    </div>
                    {error && <p className='text-sm text-red-500 ml-2'>{error}</p>}

                    <button
                        type='submit'
                        disabled={isLoading}
                        className='w-full bg-[#6AA600] hover:bg-[#5b9100] text-white py-4 rounded-full cursor-pointer'
                    >

                        {
                            isLoading
                                ? "Logging..."
                                : "Login"
                        }

                    </button>

                </form>

                <p className='text-center mt-6'>

                    Don't have account?

                    <Link
                        to='/register'
                        state={location.state}
                        className='ml-2 text-[#6AA600] font-semibold '
                    >
                        Register
                    </Link>

                </p>

            </div>

        </div >

    )
}

export default Login