import strawBerry from '../assets/strawBerry.png'
import orange from '../assets/orange.png'
import waterMelon from '../assets/waterMelon.png'
import lemon from '../assets/lemon.png'

import strawberryCan from '../assets/strawberryCan.png'
import orangeCan from '../assets/orangeCan.png'
import waterMelonCan from '../assets/waterMelonCan.png'
import lemonCan from '../assets/lemonCan.png'

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

        <div className='flex h-screen overflow-x-auto'>

            <div className='bg-[#ED5746]  w-screen flex justify-center items-center'
                onMouseEnter={() => setHoverToCan1(true)}
                onMouseLeave={() => setHoverToCan1(false)}>

                <div>

                    {hoverToCan1 ?
                        (<img src={strawberryCan} alt='icon' className='w-[300px]' />) :
                        (<img src={strawBerry} alt='icon' className={`w-[300px] h-[250px] border-[3px] border-black transition-all duration-500 ${hoverToCan1 ? 'scale-110 opacity-100' : 'scale-100 opacity-80'
                            }`} />)}

                    <div className='flex justify-center mt-8'>
                        <button className='bg-black rounded-lg py-3 px-8 flex gap-3 justify-center items-center'>
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
                        (<img src={orangeCan} alt='icon' className='w-[300px]' />) :
                        (<img src={orange} alt='icon' className='w-[300px] h-[250px] border-[3px] border-black' />)}

                    <div className='flex justify-center mt-8'>
                        <button className='bg-black rounded-lg py-3 px-8 flex gap-3 justify-center items-center'>
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
                        (<img src={waterMelonCan} alt='icon' className='w-[300px]' />) :
                        (<img src={waterMelon} alt='icon' className='w-[300px] h-[250px] border-[3px] border-black' />)}

                    <div className='flex justify-center mt-8'>
                        <button className='bg-black rounded-lg py-3 px-8 flex gap-3 justify-center items-center'>
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
                        (<img src={lemonCan} alt='icon' className='w-[300px]' />) :
                        (<img src={lemon} alt='icon' className='w-[300px] h-[250px] border-[3px] border-black' />)}

                    <div className='flex justify-center mt-8'>
                        <button className='bg-black rounded-lg py-3 px-8 flex gap-3 justify-center items-center'>
                            View Detail
                            <CircleChevronRight />
                        </button>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default HeroSection
