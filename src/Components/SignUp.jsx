import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');

    // const { session } = userAuth();
    console.log(session);


    return (

        <form className='  w-screen h-screen fixed'>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">

                {[
                    { size: 'w-28 h-28', color: 'bg-gradient-to-tr from-orange-300 to-red-600', top: 'top-10', left: 'left-20', delay: 'animate-float' },
                    { size: 'w-16 h-16', color: 'bg-gradient-to-br from-amber-300 to-red-500', top: 'top-[40%]', left: 'left-[280px]', delay: 'animate-float-delay' },

                    { size: 'w-16 h-16', color: 'bg-gradient-to-l from-yellow-300 to-amber-600', top: 'top-[80%]', left: 'left-[450px]', delay: 'animate-float' },
                    { size: 'w-20 h-20', color: 'bg-gradient-to-l from-yellow-300 to-amber-600', top: 'top-[28%]', left: 'left-[480px]', delay: 'animate-float-delay' },

                    { size: 'w-28 h-28', color: 'bg-gradient-to-tl from-orange-500 to-red-400', top: 'top-[40%]', right: 'right-[520px]', delay: 'animate-float' },
                    { size: 'w-20 h-20', color: 'bg-gradient-to-br from-orange-600 to-red-300', top: 'top-[60%]', right: 'right-[380px]', delay: 'animate-float-delay' },

                    // { size: 'w-24 h-24', color: 'bg-balck/80', top: 'top-40', right: 'right-[200px]', delay: 'animate-float-delay' },
                    { size: 'w-28 h-28', color: 'bg-gradient-to-bl from-lime-500 to-green-100', top: 'top-[15%]', right: 'right-[200px]', delay: 'animate-float-delay' },
                    { size: 'w-20 h-20', color: 'bg-gradient-to-b from-lime-300 to-green-400', top: 'top-[80%]', right: 'right-[30px]', delay: 'animate-float' },
                ].map((b, i) => (
                    <div
                        key={i}
                        className={`absolute rounded-full blur-[9px] ${b.size} ${b.color} ${b.top} ${b.left || ''} ${b.right || ''} ${b.delay}`}
                    ></div>
                ))}

            </div>


            <h3 className='mt-16 text-center text-3xl font-bold'>  Sign Up  </h3>

            <div className='w-full flex justify-center items-center p-5  mt-[70px]'>

                <div className='md:w-[400px]  w-[300px] bg-transparent px-10'>

                    <div className=' grid gap-10 mb-14 '>

                        <input type='text' placeholder='User Name' className='input h-[30px] p-5 hover:scale-110 duration-300' required />
                        <input type='password' placeholder='Password' className='input h-[30px] p-5 hover:scale-110 duration-300' required />

                    </div>

                    <div className='grid gap-5 mb-16'>

                        <label> <input type='checkbox' /> Remember Me </label>
                        <button disabled={loading} className=' w-full h-10 font-bold text-lg hover:bg-[#e8e5df] hover:text-black hover:scale-110 duration-300 rounded' type='submit'>
                            Sign Up
                        </button>

                    </div>


                    <div className='signInLink text-center '>
                        <p> Already have an account? <a href="#" className='signUp'> Sign In </a></p>
                    </div>

                </div>




            </div>

            <div className='fixed bottom-16 right-[100px] tracking-widest'>
                <button className='bg-[#d43737] rounded-lg py-2 px-6 flex gap-3 justify-center items-center 
                            transform transition duration-300
                             hover:scale-105
                              hover:bg-[#e8e5df]
                               hover:text-black
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


