import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

import { CircleSlash2 } from 'lucide-react';
import logo from '../assets/originJuiceLogo.png'



const SignUp = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');


    const { session, signUpNewUser } = UserAuth();
    console.log(session);

    localStorage.setItem("signupPassword", password);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);

        const gmailRegex = /^[a-zA-Z0-9._%+-]+@(?:gmail\.com|googlemail\.com)$/;
        if (!gmailRegex.test(email)) {
            setError("Please enter a valid Email address");
            setLoading(false);
            return;
        }

        try {
            const result = await signUpNewUser(email, password);

            if (result.success) {
                localStorage.setItem("signupPassword", password);
                navigate('/')
            }

        } catch (err) {
            setError(' An error occured', <CircleSlash2 />);
        } finally {
            setLoading(false);
        }

        // google sign up
        // const { error } = await supabase.auth.signInWithOAuth({
        //     provider: "google",
        //     options: {
        //         redirectTo: window.location.origin,
        //     },
        // });

        // if (error) {
        //     console.error("Google Sign Up Error:", error.message);
        //     setError("Google sign up failed");
        // }

    };


    return (

        <form onSubmit={handleSignUp}
            className='w-screen h-screen fixed'>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">

                {[
                    { size: 'w-28 h-28', color: 'bg-gradient-to-tr from-orange-300 to-red-600', top: 'top-[22%]', left: 'left-20', delay: 'animate-float' },
                    { size: 'w-16 h-16', color: 'bg-gradient-to-br from-amber-300 to-red-500', top: 'top-[45%]', left: 'left-[240px]', delay: 'animate-float-delay' },

                    { size: 'w-20 h-20', color: 'bg-gradient-to-l from-yellow-300 to-amber-600', top: 'top-[65%]', left: 'left-[380px]', delay: 'animate-float' },
                    { size: 'w-16 h-16', color: 'bg-gradient-to-l from-yellow-300 to-amber-600', top: 'top-[20%]', left: 'left-[460px]', delay: 'animate-float-delay' },

                    { size: 'w-20 h-20', color: 'bg-gradient-to-tl from-orange-500 to-red-400', top: 'top-[35%]', right: 'right-[430px]', delay: 'animate-float' },
                    { size: 'w-16 h-16', color: 'bg-gradient-to-br from-orange-600 to-red-300', top: 'top-[75%]', right: 'right-[350px]', delay: 'animate-float-delay' },

                    // { size: 'w-24 h-24', color: 'bg-balck/80', top: 'top-40', right: 'right-[200px]', delay: 'animate-float-delay' },
                    { size: 'w-10 h-10', color: 'bg-gradient-to-bl from-lime-500 to-green-100', top: 'top-[20%]', right: 'right-[280px]', delay: 'animate-float-delay' },
                    { size: 'w-24 h-24', color: 'bg-gradient-to-b from-lime-300 to-green-400', top: 'top-[60%]', right: 'right-[50px]', delay: 'animate-float' },
                ].map((b, i) => (
                    <div
                        key={i}
                        className={`absolute rounded-full blur-[9px] ${b.size} ${b.color} ${b.top} ${b.left || ''} ${b.right || ''} ${b.delay}`}
                    ></div>
                ))}

            </div>

            <img
                src={logo}
                alt="Company Logo"
                className='absolute fixed right-0 w-[300px] h-[100px] p-0 object-cover opacity-90'

            />


            <h3 className='mt-16 text-center text-3xl font-bold'>  Sign Up  </h3>

            <div className='w-full flex justify-center items-center p-5  mt-[50px]'>

                <div className='md:w-[400px]  w-[300px] bg-transparent px-10'>

                    <div className='inputBox mb-14'>

                        <input
                            type='text'
                            // placeholder='Your Email'
                            className='input w-full h-[30px] p-5 bg-[#e8e6e1] placeholder-white text-white hover:border-l'
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span> Your Email </span>
                        <i></i>


                    </div>
                    <div className='inputBox mb-16'>

                        <input
                            type='password'
                            // placeholder='Password'
                            className='input w-full h-[30px] p-5 bg-[#e8e6e1] placeholder-white text-white hover:border-l'
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span> Password </span>
                        <i></i>

                    </div>

                    <div className='grid gap-5 mb-16'>

                        {/* <label> <input type='checkbox' /> Remember Me </label> */}
                        <button disabled={loading} className=' w-full h-10 mt-5 font-bold text-lg hover:bg-[#e8e5df] hover:text-black hover:scale-110 duration-300 rounded' type='submit'>
                            Sign Up
                        </button>

                        {/* <span className='text-center tracking-wide'> Or </span>

                        <button
                            type="button"
                            onClick={handleSignUp}
                            className="w-full h-10 mt-3 font-bold text-md bg-red-400 text-black hover:bg-red-500 hover:scale-110 duration-300 rounded"
                        >
                            Sign Up with Google
                        </button> */}


                    </div>


                    <div className='signInLink text-center '>
                        <p> Already have an account? <a href="#" className='signUp' onClick={() => navigate('/signin')}> Log In </a></p>
                    </div>

                    {error && <p className='text-red-600 text-center mt-5'> {error}! </p>}


                </div>




            </div>

            <div className='fixed bottom-16 right-[100px] tracking-widest'>
                <button className='rounded-lg py-1 px-6 flex gap-3 justify-center items-center 
                   border-r
                   hover:border-none                 
                   transform transition duration-300
                   hover:scale-105
                   hover:bg-[#575552]
                    
                   hover:translate-x-5'
                    onClick={() => navigate('/')}
                >
                    Back

                </button>
            </div>




        </form>


    )
}

export default SignUp


