import strawBerry from '../assets/strawBerry.png'
import orange from '../assets/orange.png'
import waterMelon from '../assets/waterMelon.png'
import lemon from '../assets/lemon.png'

import strawberryCan from '../assets/strawberryCan.png'
import orangeCan from '../assets/orangeCan.png'
import waterMelonCan from '../assets/waterMelonCan.png'
import lemonCan from '../assets/lemonCan.png'

import '../App.css'


import { CircleChevronRight } from 'lucide-react';

import { useState } from 'react'

const HeroSection = () => {

    // const juiceCan = [
    //     { image: strawberryCan } 
    // ];

    const [hoverToCan1, setHoverToCan1] = useState(false);
    const [hoverToCan2, setHoverToCan2] = useState(false);
    const [hoverToCan3, setHoverToCan3] = useState(false);
    const [hoverToCan4, setHoverToCan4] = useState(false);

    return (

        <div className='heroContainer flex h-screen overflow-x-auto'>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                {/* <div className="absolute w-32 h-32 bg-[#e04534] rounded-full top-10 left-20 animate-float"></div>
                <div className="absolute w-24 h-24 bg-white/10 rounded-full top-40 right-36 animate-float-delay"></div>
                <div className="absolute w-24 h-24 bg-black/40 rounded-full top-[30%] right-[500px] animate-float-delay"></div>
                <div className="absolute w-24 h-24 bg-black/80 rounded-full top-[80%] left-[550px] animate-float"></div> */}

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




            <div className='divSection bg-[#ED5746]  w-screen flex justify-center items-center'
                onMouseEnter={() => setHoverToCan1(true)}
                onMouseLeave={() => setHoverToCan1(false)}>

                <div className=''>

                    {hoverToCan1 ?
                        (<img src={strawberryCan} alt='icon' className='w-[300px] object-cover transition-all duration-150 ease-in-out opacity-100 scale-110' />) :
                        (<div className='relative w-[310px] h-[250px]' style={{ borderRadius: '30% 70% / 80% 50%', border: '3px solid black' }}>
                            <img src={strawBerry} alt='icon' className='object-cover absolute -top-24 h-[400px] opacity-90' />
                        </div>)
                    }

                    <div className='flex justify-center mt-8 font-bold tracking-widest'>
                        <button className='bg-black rounded-lg py-3 px-8 flex gap-3 justify-center items-center transition duration-300 hover:scale-105 hover:bg-[#e8e5df] hover:text-black '>
                            View Detail
                            <CircleChevronRight />
                        </button>
                    </div>


                </div>

            </div>


            <div className='bg-[#FFC63B] w-screen flex justify-center items-center'
                onMouseEnter={() => setHoverToCan2(true)}
                onMouseLeave={() => setHoverToCan2(false)}>

                <div>

                    {hoverToCan2 ?
                        (<img src={orangeCan} alt='icon' className='w-[300px] object-cover transition-all duration-150 ease-in-out opacity-100 scale-110' />) :
                        (<div className='relative w-[310px] h-[250px]' style={{ borderRadius: '30% 70% / 50% 50%', border: '3px solid black' }}>
                            <img src={orange} alt='icon' className='object-cover absolute -top-16 h-[320px] opacity-98' />
                        </div>)
                    }

                    <div className='flex justify-center mt-8 tracking-widest'>
                        <button className='bg-black rounded-lg py-3 px-8 flex gap-3 justify-center items-center transition duration-300 hover:scale-105 hover:bg-[#e8e5df] hover:text-black'>
                            View Detail
                            <CircleChevronRight />
                        </button>
                    </div>

                </div>


            </div>

            <div className='bg-[#ED5746] w-screen flex justify-center items-center'
                onMouseEnter={() => setHoverToCan3(true)}
                onMouseLeave={() => setHoverToCan3(false)}>

                <div>
                    {hoverToCan3 ?
                        (<img src={waterMelonCan} alt='icon' className='w-[300px] object-cover transition-all duration-150 ease-in-out opacity-100 scale-110' />) :
                        (<div className='relative w-[310px] h-[250px]' style={{ borderRadius: '70% 20% / 50% 60%', border: '3px solid black' }}>
                            <img src={waterMelon} alt='icon' className='object-cover absolute -top-36 h-[390px]' />
                        </div>)
                    }


                    <div className='flex justify-center mt-8 tracking-widest'>
                        <button className='bg-black rounded-lg py-3 px-8 flex gap-3 justify-center items-center transition duration-300 hover:scale-105 hover:bg-[#e8e5df] hover:text-black'>
                            View Detail
                            <CircleChevronRight />
                        </button>
                    </div>

                </div>

            </div>

            <div className='bg-[#92C90C] w-screen flex justify-center items-center'
                onMouseEnter={() => setHoverToCan4(true)}
                onMouseLeave={() => setHoverToCan4(false)}>

                <div>
                    {hoverToCan4 ?
                        (<img src={lemonCan} alt='icon' className='w-[300px] object-cover transition-all duration-150 ease-in-out opacity-100 scale-110' />) :
                        (<div className='relative w-[310px] h-[250px] ' style={{ borderRadius: '30% 70% / 50% 50%', border: '3px solid black' }}>
                            <img src={lemon} alt='icon' className='object-cover absolute -top-20 -left-3  h-[380px]' />
                        </div>
                        )
                    }

                    <div className='flex justify-center mt-8 tracking-widest'>
                        <button className='bg-black rounded-lg py-3 px-8 flex gap-3 justify-center items-center transition duration-300 hover:scale-105 hover:bg-[#e8e5df] hover:text-black'>
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
                                50% { transform: translateY(-80px); }
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

    )
}


export default HeroSection
