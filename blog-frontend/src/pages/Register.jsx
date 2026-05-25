import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLazyLoginQuery, useRegisterMutation } from '../redux/services/api';


const Register = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [
        register,
        {
            isLoading
        }
    ] = useRegisterMutation();

    const [getUser] = useLazyLoginQuery();


    const handleClose = () => {
        navigate(location.state?.from || "/")
    }


    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            const res = await getUser(email).unwrap()
            if (res.length > 0) {

                alert('user already exist');
                return;
            }
            console.log(res);

            await register({
                name,
                email,
                password
            }).unwrap()

            setName("")
            setEmail("")
            setPassword("")

            navigate('/login');

        } catch (error) {

            console.log(error);

            alert("Registration Failed")

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

                    <input
                        type="text"
                        placeholder='Full Name'
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        className='w-full border-2 border-gray-400 rounded-full px-6 py-4 outline-none focus:border-[#6AA600]'
                        required
                    />

                    <input
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        className='w-full border-2 border-gray-400 border rounded-full px-6 py-4 outline-none focus:border-[#6AA600]'
                        required
                    />

                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        className='w-full border-2 border-gray-400 rounded-full px-6 py-4 outline-none focus:border-[#6AA600]'
                        required
                    />

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