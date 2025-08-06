import React from 'react'
import waterMelonCan1 from '../../assets/waterMelonCan1.png'
import { useNavigate } from 'react-router-dom'


const WaterMelonDetails = () => {

    const navigate = useNavigate();

    return (

        <div>
            <div className='bg bg-no-repeat bg-top bg-[#ED5746]  fixed flex items-center  w-screen h-screen'>

                {/* <h3> This Page Will Be Developed Soon... </h3> */}

                <div className='mt-[-100px] w-1/2'>
                    <img src={waterMelonCan1} alt='orange can' className=' object-cover scale-150' />
                </div>

                <div className='animate-typing overflow-hidden border-r-4 border-black text-2xl mt-48 w-fit'>
                    <p className='text-black'>
                        Watermelon juice is a hydrating and subtly sweet beverage made from the flesh of ripe watermelons. With its high water content and natural electrolytes like potassium, it's an excellent choice for staying refreshed and energized, especially in hot weather. Rich in vitamins A, C, and antioxidants like lycopene, it supports skin health and hydration. Its light, crisp flavor and vibrant pink-red color make watermelon juice a favorite for cooling down and enjoying nature’s sweetness in a glass.
                    </p>
                </div>

            </div>

            <div className='fixed bottom-16 right-[100px] tracking-widest'>
                <button className='rounded-lg py-1 px-6 flex gap-3 justify-center items-center 
                   border-r
                   hover:border-none   
                   text-black              
                   transform transition duration-300
                   hover:scale-105
                   hover:bg-[#575552]
                    
                   hover:translate-x-5'
                    onClick={() => navigate('/')}
                >
                    Back

                </button>
            </div>


        </div>

    )
}

export default WaterMelonDetails
