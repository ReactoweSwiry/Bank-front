'use client';
import { useState, useEffect } from 'react';
import Opole from '@/assets/Opole.jpg';
import Opole2 from '@/assets/Opole2.jpg';
import Opole3 from '@/assets/Opole3.jpg';
import Image from 'next/image';
const images = [
    Opole,
    Opole2,
    Opole3,
];

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

    };

    const handleToggleForm = () => {
        setIsRegister(!isRegister);
    };

    const handleForgotPassword = () => {
        setForgotPassword(true);
    };
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
        const interval = setInterval(() => {
            // Rotate to the next image
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Rotate every 10 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount

    }, [])
    return (
        mounted && (
            <div className="flex flex-row h-screen">
                <div className="w-full md:w-2/5 flex flex-col justify-center items-center m-6">
                    <p className="text-2xl font-bold mb-4">{forgotPassword ? 'Bank Register' : 'Bank Sign In'}</p>
                    {forgotPassword ? (
                        <>
                            <form className="max-w-sm">
                                <p>Enter your email address to reset your password:</p>
                                <input type="email" className="border border-gray-300 rounded-md p-2 w-full" />
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2">Reset Password</button>
                                <button onClick={() => setForgotPassword(false)} className="text-blue-500 underline mt-2 ml-5">Back to Sign In</button>
                            </form>
                        </>
                    ) : (
                        <>
                            <form onSubmit={handleSubmit} className="max-w-sm">
                                <label className="block mb-2">
                                    Username:
                                    <input type="text" value={username} onChange={handleUsernameChange} className="border border-gray-300 rounded-md p-2 w-full" />
                                </label>
                                <br />
                                <label className="block mb-2">
                                    Password:
                                    <input type="password" value={password} onChange={handlePasswordChange} className="border border-gray-300 rounded-md p-2 w-full" />
                                </label>
                                <br />
                                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">{isRegister ? 'Register' : 'Sign In'}</button>
                                <button onClick={handleForgotPassword} className="text-blue-500 underline mt-2 ml-5">Forgot Password?</button>
                            </form>
                            <div className="mt-4">
                                <button onClick={handleToggleForm} className="text-blue-500 underline">{isRegister ? 'Already have an account? Sign In' : 'Don\'t have an account? Register'}</button>
                            </div>
                        </>
                    )}
                </div>
                <div className="hidden md:block md:w-3/5 bg-gray-200 ">
                    <Image src={images[currentImageIndex]}
                        alt="Opole"
                        className="w-full h-full object-cover" />
                </div>
            </div>
        )
    );
};

export default SignIn;
