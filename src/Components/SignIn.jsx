import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'
import logo from '../assets/originJuiceLogo.png'
import { supabase } from '../supabaseClient'

import { CircleSlash2 } from 'lucide-react';


const SignIn = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState('');

    const { session, signInUser } = UserAuth();
    console.log(session);


    const checkUserExists = async (email) => {
        const { data, error } = await supabase
            .from('profiles')
            .select('email')
            .eq('email', email)
            .single();

        if (error) {

            console.log("Error checking user:", error.message);
            return false;
        }

        return !!data;
    };

    const [passwordmatch, setPasswordmatch] = useState(false);

    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setPasswordmatch(false);

        // valid mail method check------
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@(?:gmail\.com|googlemail\.com)$/;
        if (!gmailRegex.test(email)) {
            setError("Please enter a valid Email address");
            setLoading(false);
            return;
        }

        // user check----
        const userExists = await checkUserExists(email);
        if (!userExists) {
            setError("Email not registered. Please sign up first.");
            setTimeout(() => navigate('/signup'), 2000);
            return;
        }


        // used psw check-----
        const psw = setPassword;
        const oldPassword = localStorage.getItem("signupPassword");
        if (oldPassword !== psw) {
            setPasswordmatch(true);
        }


        // sign in-----
        try {
            const result = await signInUser(email, password);

            if (result.success) {
                navigate('/')
            }

        } catch (err) {

            setError(' An error occured', <CircleSlash2 />);
        } finally {
            setLoading(false);
        }

    };




    return (

        <form onSubmit={handleSignIn}
            className='w-screen h-screen fixed'>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">

                {[
                    { size: 'w-28 h-28', color: 'bg-gradient-to-tr from-orange-300 to-red-600', top: 'top-[20%]', left: 'left-20', delay: 'animate-float' },
                    { size: 'w-16 h-16', color: 'bg-gradient-to-br from-amber-300 to-red-500', top: 'top-[40%]', left: 'left-[240px]', delay: 'animate-float-delay' },

                    { size: 'w-20 h-20', color: 'bg-gradient-to-l from-yellow-300 to-amber-600', top: 'top-[70%]', left: 'left-[380px]', delay: 'animate-float' },
                    { size: 'w-16 h-16', color: 'bg-gradient-to-l from-yellow-300 to-amber-600', top: 'top-[16%]', left: 'left-[460px]', delay: 'animate-float-delay' },

                    { size: 'w-20 h-20', color: 'bg-gradient-to-tl from-orange-500 to-red-400', top: 'top-[35%]', right: 'right-[420px]', delay: 'animate-float' },
                    { size: 'w-16 h-16', color: 'bg-gradient-to-br from-orange-600 to-red-300', top: 'top-[75%]', right: 'right-[320px]', delay: 'animate-float-delay' },

                    // { size: 'w-24 h-24', color: 'bg-balck/80', top: 'top-40', right: 'right-[200px]', delay: 'animate-float-delay' },
                    { size: 'w-10 h-10', color: 'bg-gradient-to-bl from-lime-500 to-green-100', top: 'top-[15%]', right: 'right-[180px]', delay: 'animate-float-delay' },
                    { size: 'w-28 h-28', color: 'bg-gradient-to-b from-lime-300 to-green-400', top: 'top-[60%]', right: 'right-[30px]', delay: 'animate-float' },
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


            <h3 className='mt-16 text-center text-3xl font-bold'>  Log In  </h3>

            <div className='w-full flex justify-center items-center p-5 mt-[50px]'>

                <div className='md:w-[400px]  w-[300px] bg-transparent px-10'>

                    <div className='inputBox mb-14'>

                        <input
                            type='text'
                            // placeholder='Your Email'
                            className='input w-full h-[30px] p-5 bg-[#e8e6e1] placeholder-white text-white hover:border-l'
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span> Email </span>
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
                            Log In
                        </button>

                    </div>


                    <div className='signInLink text-center '>
                        <p> Don't have an account? <a href="#" className='signUp' onClick={() => navigate('/signup')}> Sign Up </a></p>
                    </div>

                    {error && <p className='text-red-600 text-center mt-5'> {error}! </p>}
                    {passwordmatch && (
                        <p className="text-yellow-600 text-center mt-5">
                            Password is different from while you used to sign up!
                        </p>
                    )}
                    {checkUserExists.error &&
                        <p className='text--600 text-center yellow mt-5'> {error}! </p>
                    }



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

export default SignIn


