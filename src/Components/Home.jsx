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

import logo from '../assets/originJuiceLogo.png'


import '../App.css'


import { CircleChevronRight } from 'lucide-react';

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import '../App.css'

const Home = () => {

    const [hoverToCan1, setHoverToCan1] = useState(false);
    const [hoverToCan2, setHoverToCan2] = useState(false);
    const [hoverToCan3, setHoverToCan3] = useState(false);
    const [hoverToCan4, setHoverToCan4] = useState(false);

    const navigate = useNavigate();


    return (


        <div>
            <nav className='imgBdr fixed bottom-0 w-[70%] left-1/2 transform -translate-x-1/2 z-50
              backdrop-blur-lg 
              border-t border-[#d2d0caff] 
              filter drop-shadow-[0px_0px_8px_#d2d1de]' >

                <ul className=" flex justify-center space-x-36 px-10 py-3  text-[#c4c4c2]">
                    {navIcon.map((icons, index) => (
                        <NavLink to={icons.to} >

                            <button key={index} disabled={icons.disabled} className={`duration-300 hover:scale-x-110 
                                ${icons.special ? 'hover:text-[#FF0032]' : ''
                                } `}
                                // title={icons.disabled ? '⚠️' : ''}
                                style={{
                                    cursor: icons.disabled ? 'help' : 'pointer'
                                }}
                            >

                                {icons.icon}

                            </button>

                        </NavLink>
                    ))}
                </ul>


            </nav>

            <div className='heroContainer flex h-screen overflow-x-auto top-0 relative'>


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



                <div className='bg-[]  w-screen flex justify-center items-center'
                    onMouseEnter={() => setHoverToCan1(true)}
                    onMouseLeave={() => setHoverToCan1(false)}>

                    <div>

                        {hoverToCan1 ?
                            (<img src={strawberryCan} alt='icon' className='w-[280px] object-cover transition-all duration-150 ease-in-out opacity-100 scale-110' />) :
                            (<div className='imgBdr relative w-[310px] h-[250px]' style={{ borderRadius: '30% 70% / 80% 50%', border: '3px solid #d2d0caff', }}>
                                <img src={strawBerry} alt='icon' className=' object-cover absolute -top-24 h-[400px] opacity-90' />

                                <div className="absolute bottom-[-50px] w-full text-center px-4 ">
                                    <h2 className="text-lg font-semibold text-[#9593b5] tracking-wider">
                                        STRAWBERRY
                                    </h2>
                                </div>

                            </div>)
                        }

                        <div className='flex justify-center mt-20 font-bold tracking-widest'>
                            <a className='bg-black rounded-lg py-2 px-5 flex gap-3 justify-center items-center
                             transform transition duration-300 
                             hover:scale-105 
                             hover:bg-[#e8e5df]
                              hover:text-black 
                              hover:translate-x-5'
                                onClick={() => navigate('/details/strawberryDetails')}
                            >

                                View Detail
                                <CircleChevronRight />
                            </a>
                        </div>


                    </div>

                </div>


                <div className='bg-[] w-screen flex justify-center items-center'
                    onMouseEnter={() => setHoverToCan2(true)}
                    onMouseLeave={() => setHoverToCan2(false)}>

                    <div>

                        {hoverToCan2 ?
                            (<img src={orangeCan} alt='icon' className='w-[280px] object-cover transition-all duration-150 ease-in-out opacity-100 scale-110' />) :
                            (<div className='imgBdr relative w-[310px] h-[250px]' style={{ borderRadius: '30% 70% / 50% 50%', border: '3px solid #d2d0caff' }}>
                                <img src={orange} alt='icon' className='object-cover absolute -top-16 h-[320px] opacity-98' />

                                <div className="absolute bottom-[-50px] w-full text-center px-4 ">
                                    <h2 className="text-lg font-semibold text-[#9593b5] tracking-wider">
                                        ORANGE
                                    </h2>
                                </div>

                            </div>)
                        }

                        <div className='flex justify-center mt-20 tracking-widest'>
                            <button className='bg-black rounded-lg py-2 px-5 flex gap-3 justify-center items-center 
                            transform transition duration-300
                             hover:scale-105
                              hover:bg-[#e8e5df]
                               hover:text-black
                               hover:translate-x-5 '
                                onClick={() => navigate('/details/orangeDetails')}
                            >
                                View Detail
                                <CircleChevronRight />
                            </button>
                        </div>

                    </div>


                </div>

                <div className='bg-[] w-screen flex justify-center items-center'
                    onMouseEnter={() => setHoverToCan3(true)}
                    onMouseLeave={() => setHoverToCan3(false)}>

                    <div>
                        {hoverToCan3 ?
                            (<img src={waterMelonCan} alt='icon' className='w-[280px] object-cover transition-all duration-150 ease-in-out opacity-100 scale-110' />) :
                            (<div className='imgBdr relative w-[310px] h-[250px]' style={{ borderRadius: '70% 20% / 50% 60%', border: '3px solid #d2d0caff' }}>
                                <img src={waterMelon} alt='icon' className='object-cover absolute -top-36 h-[390px]' />

                                <div className="absolute bottom-[-50px] w-full text-center px-4 ">
                                    <h2 className="text-lg font-semibold text-[#9593b5] tracking-wider">
                                        WATERMELON
                                    </h2>
                                </div>

                            </div>)
                        }


                        <div className='flex justify-center mt-20 tracking-widest'>
                            <button className='bg-black rounded-lg py-2 px-5 flex gap-3 justify-center items-center 
                            transform transition duration-300 
                            hover:scale-105
                             hover:bg-[#e8e5df]
                              hover:text-black
                              hover:translate-x-5'
                                onClick={() => navigate('/details/waterMelonDetails')}

                            >
                                View Detail
                                <CircleChevronRight />
                            </button>
                        </div>

                    </div>

                </div>

                <div className='bg-[] w-screen flex justify-center items-center'
                    onMouseEnter={() => setHoverToCan4(true)}
                    onMouseLeave={() => setHoverToCan4(false)}>

                    <div>
                        {hoverToCan4 ?
                            (<img src={lemonCan} alt='icon' className='w-[280px] object-cover transition-all duration-150 ease-in-out opacity-100 scale-110' />) :
                            (<div className='imgBdr relative w-[310px] h-[250px] ' style={{ borderRadius: '30% 70% / 50% 50%', border: '3px solid #d2d0caff' }}>
                                <img src={lemon} alt='icon' className='object-cover absolute -top-20 -left-3  h-[380px]' />

                                <div className="absolute bottom-[-50px] w-full text-center px-4 ">
                                    <h2 className="text-lg font-semibold text-[#9593b5] tracking-wider">
                                        LEMON
                                    </h2>
                                </div>

                            </div>
                            )
                        }

                        <div className='flex justify-center mt-20 tracking-widest'>
                            <button className='bg-black rounded-lg py-2 px-5 flex gap-3 justify-center items-center 
                            transform transition duration-300
                             hover:scale-105
                              hover:bg-[#e8e5df]
                               hover:text-black
                               hover:translate-x-5'
                                onClick={() => navigate('details/lemonDetails')}
                            >
                                View Detail
                                <CircleChevronRight />
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



        </div>

    )
}

export default Home
