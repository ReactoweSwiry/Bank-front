'use client';
import { useState, useEffect } from 'react';
import Opole from '@/assets/Opole.jpg';
import Opole2 from '@/assets/Opole2.jpg';
import Opole3 from '@/assets/Opole3.jpg';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
                <div className="w-full md:w-2/5 flex flex-col justify-center items-center">

                    {forgotPassword ? (
                        <>
                            <p className="text-2xl font-bold mb-4">Password recovery</p>
                            <form className="max-w-sm">
                                <p>Enter your email address to reset your password:</p>
                                <input type="email" className="border border-gray-300 rounded-md p-2 w-full" />
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2">Reset Password</button>
                                <button onClick={() => setForgotPassword(false)} className="text-blue-500 underline mt-2 ml-5">Back to Sign In</button>
                            </form>
                        </>
                    ) : (
                        <>
                            <Tabs defaultValue="signin" className="w-[400px]">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="signin">Sign In</TabsTrigger>
                                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                                </TabsList>
                                <TabsContent value="signin">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Sign In</CardTitle>
                                            <CardDescription>
                                                Enter your credentials to sign in. Click submit when you're done.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <div className="space-y-1">
                                                <Label htmlFor="username">Username</Label>
                                                <Input id="username" defaultValue="" className="w-full" />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="password">Password</Label>
                                                <Input id="password" type="password" defaultValue="" className="w-full" />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button>Submit</Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="signup">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Sign Up</CardTitle>
                                            <CardDescription>
                                                Create a new account. Fill in the required information and click submit.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <div className="space-y-1">
                                                <Label htmlFor="name">Name</Label>
                                                <Input id="name" defaultValue="" className="w-full" />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="email">Email</Label>
                                                <Input id="email" type="email" defaultValue="" className="w-full" />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="password">Password</Label>
                                                <Input id="password" type="password" defaultValue="" className="w-full" />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button>Submit</Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                            <button onClick={handleForgotPassword} className="text-white-500 underline mt-2 ml-5">Forgot Password?</button>
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
