import { navIcon } from "../Constants"
import { NavLink } from "react-router-dom"

import strawBerry from '../assets/strawBerry.png'
import orange from '../assets/orange.png'
import waterMelon from '../assets/waterMelon.png'
import lemon from '../assets/lemon.png'

import strawberryCan from '../assets/strawberryCan.png'
import orangeCan from '../assets/orangeCan.png'
import waterMelonCan from '../assets/waterMelonCan.png'
import lemonCan from '../assets/lemonCan.png'

import cart from '../assets/cart20.png'

import logo from '../assets/originJuiceLogo.png'

import { User } from 'lucide-react';


import '../App.css'


import { CircleChevronRight } from 'lucide-react';

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import { UserAuth } from '../Context/AuthContext';
import { UserAuth } from "../Context/AuthContext"


import '../App.css'

const Home = () => {

    const [hoverToCan1, setHoverToCan1] = useState(false);
    const [hoverToCan2, setHoverToCan2] = useState(false);
    const [hoverToCan3, setHoverToCan3] = useState(false);
    const [hoverToCan4, setHoverToCan4] = useState(false);

    const navigate = useNavigate();


    const { session, signOut } = UserAuth();

    // console.log(session);
    console.log("Session:", session);
    console.log('user: ', session?.user?.email);

    const handleSignOut = async (e) => {
        // e.preventDefault()
        try {
            await signOut();
            navigate('/');
        } catch (err) {
            console.error(err);
        }
        console.log("Sign out clicked");
        console.log("session email", session?.user?.email);
    }

    const [showConfirm, setShowConfirm] = useState(false);

    // protected to music---------
    const handleProtectedRoute = (path) => {
        if (path.protected && !session) {
            alert('Sign In first');
            // return;
        } else {
            navigate(path.path);
        }
    }



    return (


        <div>

            <p className="absolute text-yellow-300 fixed left-[43%]"> responsive yet! desktop only </p>

            <div className="absolute fixed right-[10px] mt-5 text-[10px]">
                {session?.user?.email ? (
                    <div className="w-full flex gap-1 p-2 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ">
                        <h3>{session.user.email}</h3>
                        <span className="text-white ">
                            <User className="h-[15px] w-[30px]" />
                        </span>
                    </div>

                ) : (
                    <div className="fixed right-5 mt-2 border-l z-50  ">
                        <p onClick={() => navigate('/signin')}
                            className="cursor-pointer  p-1 transform transaction hover:translate-x-2 duration-300 hover:bg-[#4b4d4b]">
                            Log In
                        </p>
                    </div>
                )}


                {session?.user?.email &&
                    <div className="fixed right-8 mt-2 border-r z-50">
                        <p onClick={() => setShowConfirm(true)}
                            className="cursor-pointer px-2 transform transaction hover:translate-x-2 duration-300">
                            Sign Out
                        </p>
                    </div>
                }

            </div>



            <nav className='imgBdr fixed bottom-0 w-[70%] left-1/2 transform -translate-x-1/2 z-50
              backdrop-blur-lg 
              border-t border-[#d2d0caff] 
              filter drop-shadow-[0px_0px_15px_#d2d1de]' >


                <ul className=" flex justify-center space-x-36 px-10 py-3  text-[#c4c4c2]">
                    {navIcon.map((icons, index) => (
                        <NavLink to={icons.to} key={index} >

                            <button key={index}
                                disabled={icons.disabled}
                                className={`duration-300 hover:scale-x-110 
                                    ${icons.special ? 'hover:text-[#FF0032]' : ''} `
                                }

                                style={{
                                    cursor: icons.disabled ? 'help' : 'pointer'
                                }}

                                onClick={() => handleProtectedRoute(path)}
                            >

                                {icons.icon}

                            </button>

                        </NavLink>
                    ))}
                </ul>


            </nav>

            <div className=' heroContainer flex h-screen overflow-x-auto top-0 relative'>

                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">

                    {[
                        { size: 'w-32 h-32', color: 'bg-gradient-to-tr from-orange-300 to-red-600', top: 'top-10', left: 'left-20', delay: 'animate-float' },
                        { size: 'w-28 h-28', color: 'bg-gradient-to-br from-amber-300 to-red-500', top: 'top-[40%]', left: 'left-[280px]', delay: 'animate-float-delay' },

                        { size: 'w-16 h-16', color: 'bg-gradient-to-l from-yellow-300 to-amber-600', top: 'top-[80%]', left: 'left-[450px]', delay: 'animate-float' },
                        { size: 'w-20 h-20', color: 'bg-gradient-to-l from-yellow-300 to-amber-600', top: 'top-[28%]', left: 'left-[550px]', delay: 'animate-float-delay' },

                        { size: 'w-28 h-28', color: 'bg-gradient-to-tl from-orange-500 to-red-400', top: 'top-[30%]', right: 'right-[500px]', delay: 'animate-float' },
                        { size: 'w-20 h-20', color: 'bg-gradient-to-br from-orange-600 to-red-300', top: 'top-[60%]', right: 'right-[380px]', delay: 'animate-float-delay' },

                        // { size: 'w-24 h-24', color: 'bg-balck/80', top: 'top-40', right: 'right-[200px]', delay: 'animate-float-delay' },
                        { size: 'w-32 h-32', color: 'bg-gradient-to-bl from-lime-500 to-green-100', top: 'top-[25%]', right: 'right-[200px]', delay: 'animate-float-delay' },
                        { size: 'w-20 h-20', color: 'bg-gradient-to-b from-lime-300 to-green-400', top: 'top-[80%]', right: 'right-[10px]', delay: 'animate-float' },
                    ].map((b, i) => (
                        <div
                            key={i}
                            className={`absolute rounded-full blur-[9px] ${b.size} ${b.color} ${b.top} ${b.left || ''} ${b.right || ''} ${b.delay}`}
                        ></div>
                    ))}

                </div>

                <div className="absolute z-10 top-[80px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img
                        src={logo}
                        alt="Company Logo"
                        className={`w-[500px] object-contain transition duration-300
                             ${hoverToCan1 ? 'filter drop-shadow-[0px_1px_3px_#f73131]' : ''}
                             ${hoverToCan2 ? 'filter drop-shadow-[0px_1px_3px_#f7ea31]' : ''}
                             ${hoverToCan3 ? 'filter drop-shadow-[0px_1px_3px_#fa3939]' : ''}
                             ${hoverToCan4 ? 'filter drop-shadow-[0px_1px_3px_#3dfa39]' : ''}`
                        }

                    />

                </div>



                {/* --------------------can session------------------------- */}

                <div className='bg-[]  w-screen flex justify-center items-center'
                    onMouseEnter={() => setHoverToCan1(true)}
                    onMouseLeave={() => setHoverToCan1(false)}>

                    <div>

                        {hoverToCan1 ?
                            (<div>
                                <img src={strawberryCan} alt='icon' className='w-[280px] object-cover transition-all duration-1000 ease-in-out opacity-100 scale-110' />
                                <div className='w-full flex items-center justify-center text-center '>
                                    <a href="#" className=" rounded-md px-3">
                                        <img src={cart} alt='icon' />
                                    </a>
                                </div>

                            </div>
                            )
                            :
                            (<div className='imgBdr relative w-[310px] h-[250px]' style={{ borderRadius: '30% 70% / 80% 50%', border: '3px solid #d2d0caff', }}>
                                <img src={strawBerry} alt='icon' className=' object-cover absolute top-[10%] h-[220px] h-[100px] transition-all duration-700 ease-out' />

                                <div className="absolute bottom-[-50px] w-full text-center px-4 ">
                                    <h2 className="text-lg font-semibold text-[#9593b5] tracking-wider">
                                        STRAWBERRY
                                    </h2>
                                </div>

                            </div>
                            )
                        }

                        <div className='flex justify-center mt-20 font-bold tracking-widest'>

                            <button className='group rounded-lg py-2 px-5 flex gap-3 justify-center items-center
                             transform transition duration-300
                             hover:bg-[#575552]
                              hover:text-black '
                                onClick={() => navigate('/details/strawberryDetails')}
                            >

                                View Detail
                                <span className='transform transition duration-300 group-hover:translate-x-3'>
                                    <CircleChevronRight />
                                </span>
                            </button>
                        </div>


                    </div>

                </div>


                <div className='bg-[] w-screen flex justify-center items-center'
                    onMouseEnter={() => setHoverToCan2(true)}
                    onMouseLeave={() => setHoverToCan2(false)}>

                    <div>

                        {hoverToCan2 ?
                            (<div>
                                <img src={orangeCan} alt='icon' className='w-[280px] object-cover transition-all duration-1000 ease-in-out opacity-100 scale-110' />
                                <div className='w-full flex items-center justify-center text-center '>
                                    <a href="#" className="rounded-md px-3">
                                        <img src={cart} alt='icon' />
                                    </a>
                                </div>

                            </div>
                            )
                            :
                            (<div className='imgBdr relative w-[310px] h-[250px]' style={{ borderRadius: '30% 70% / 50% 50%', border: '3px solid #d2d0caff' }}>
                                <img src={orange} alt='icon' className='object-cover absolute -top-10 h-[330px]  transition-all duration-700 ease-out' />

                                <div className="absolute bottom-[-50px] w-full text-center px-4 ">
                                    <h2 className="text-lg font-semibold text-[#9593b5] tracking-wider">
                                        ORANGE
                                    </h2>
                                </div>

                            </div>)
                        }

                        <div className='flex justify-center mt-20 tracking-widest'>
                            <button className='group  rounded-lg py-2 px-5 flex gap-3 justify-center items-center 
                            transform transition duration-300
                              hover:bg-[#575552]
                               hover:text-black'
                                onClick={() => navigate('/details/orangeDetails')}
                            >
                                View Detail
                                <span className='transform transition duration-300 group-hover:translate-x-3'>
                                    <CircleChevronRight />
                                </span>

                            </button>
                        </div>

                    </div>


                </div>

                <div className='bg-[] w-screen flex justify-center items-center'
                    onMouseEnter={() => setHoverToCan3(true)}
                    onMouseLeave={() => setHoverToCan3(false)}>

                    <div>
                        {hoverToCan3 ?
                            (<div>
                                <img src={waterMelonCan} alt='icon' className='w-[280px] object-cover transition-all duration-1000 ease-in-out opacity-100 scale-110' />
                                <div className='w-full flex items-center justify-center text-center '>
                                    <a href="#" className="rounded-md px-3">
                                        <img src={cart} alt='icon' />
                                    </a>
                                </div>
                            </div>
                            )
                            :
                            (<div className='imgBdr relative w-[310px] h-[250px]' style={{ borderRadius: '70% 20% / 50% 60%', border: '3px solid #d2d0caff' }}>
                                <img src={waterMelon} alt='icon' className='object-cover absolute -top-30 h-[270px] transition-all duration-700 ease-out' />

                                <div className="absolute bottom-[-50px] w-full text-center px-4 ">
                                    <h2 className="text-lg font-semibold text-[#9593b5] tracking-wider">
                                        WATERMELON
                                    </h2>
                                </div>

                            </div>)
                        }


                        <div className='flex justify-center mt-20 tracking-widest'>
                            <button className='group  rounded-lg py-2 px-5 flex gap-3 justify-center items-center 
                            transform transition duration-300                             
                             hover:bg-[#575552]
                              hover:text-black'
                                onClick={() => navigate('/details/waterMelonDetails')}
                            >
                                View Detail
                                <span className='transform transition duration-300 group-hover:translate-x-3'>
                                    <CircleChevronRight />
                                </span>
                            </button>
                        </div>

                    </div>

                </div>

                <div className='bg-[] w-screen flex justify-center items-center'
                    onMouseEnter={() => setHoverToCan4(true)}
                    onMouseLeave={() => setHoverToCan4(false)}>

                    <div>
                        {hoverToCan4 ?
                            (<div>
                                <img src={lemonCan} alt='icon' className='w-[280px] object-cover transition-all duration-1000 ease-in-out opacity-100 scale-110' />
                                <div className='w-full flex items-center justify-center text-center '>
                                    <a href="#" className="rounded-md px-3" title="hi" >
                                        <img src={cart} alt='icon' />

                                    </a>

                                </div>
                            </div>
                            )
                            :
                            (<div className='imgBdr relative w-[310px] h-[250px]' style={{ borderRadius: '30% 70% / 50% 50%', border: '3px solid #d2d0caff' }}>
                                <img src={lemon} alt='icon' className='object-cover absolute -top-16 -left-3  h-[330px] transition-all duration-700 ease-out' />

                                <div className="absolute bottom-[-50px] w-full text-center px-4 ">
                                    <h2 className="text-lg font-semibold text-[#9593b5] tracking-wider">
                                        LEMON
                                    </h2>
                                </div>

                            </div>
                            )
                        }

                        <div className=' flex justify-center mt-20 tracking-widest'>
                            <button className='group rounded-lg py-2 px-5 flex gap-3 justify-center items-center 
                             transform transition duration-300                             
                             hover:bg-[#575552]
                              hover:text-black'
                                onClick={() => navigate('details/lemonDetails')}
                            >
                                View Detail
                                <span className='transform transition duration-300 group-hover:translate-x-3'>
                                    <CircleChevronRight />
                                </span>
                            </button>

                        </div>

                    </div>

                </div>

                <style>
                    {`
                            @keyframes float {
                                0%, 100% { transform: translateY(0px); }
                                50% { transform: translateY(-150px); }
                            }

                            .animate-float {
                                animation: float 6s ease-in-out infinite;
                            }

                            .animate-float-delay {
                                animation: float 6s ease-in-out infinite;
                                animation-delay: 3s;
                            }
                    `}
                </style>

            </div>

            {showConfirm && (
                <div className="fixed inset-0 flex backdrop-blur-sm items-center justify-center bg-black/70 z-50">
                    <div className="bg-transparent  rounded ">
                        <h2 className="text-lg font-bold tracking-wide mb-4">
                            Are you sure you want to sign out?
                        </h2>

                        <div className="flex justify-center items-center gap-10">

                            <button
                                onClick={() => {
                                    setShowConfirm(false);
                                    handleSignOut();
                                }}
                                className="px-4 py-2 bg-transparent rounded-md hover:scale-90"
                            >
                                Sign Out
                            </button>


                            <button
                                onClick={() => setShowConfirm(false)}
                                className="px-4 py-2 bg-transparent rounded-md hover:scale-90"
                            >
                                Cancel
                            </button>

                        </div>
                    </div>
                </div>
            )}



        </div >

    )
}

export default Home
