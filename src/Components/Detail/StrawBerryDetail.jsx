import React from 'react'
import strawberryCan1 from '../../assets/strawberryCan1.png'
import { useNavigate } from 'react-router-dom'


const StrawBerryDetail = () => {

    const navigate = useNavigate();
    return (

        <div>
            <div className='bg bg-no-repeat bg-top bg-[#ED5746]  fixed flex items-center  w-screen h-screen'>

                {/* <h3> This Page Will Be Developed Soon... </h3> */}

                <div className='mt-[-100px] w-1/2'>
                    <img src={strawberryCan1} alt='orange can' className=' object-cover scale-150' />
                </div>

                <div className='animate-typing overflow-hidden border-r-4 border-black text-2xl mt-48 w-fit'>
                    <p className='text-black'>
                        Strawberry juice is a refreshing, naturally sweet beverage made by blending ripe strawberries into a smooth liquid. Rich in vitamin C, antioxidants, and essential nutrients, it offers a delicious way to boost immunity and support overall health. Its vibrant red color and tangy-sweet flavor make it perfect on its own or as a base for smoothies and cocktails. Whether served chilled on a hot day or added to recipes, strawberry juice is a wholesome, invigorating drink loved by all ages.
                    </p>
                </div>

            </div>

            {/* <div className='fixed bottom-16 right-[100px] tracking-widest'>
                <button className='bg-black rounded-lg py-3 px-8 flex gap-3 justify-center items-center 
                            transform transition duration-300
                             hover:scale-105
                              hover:bg-[#e8e5df]
                               hover:text-black
                               hover:translate-x-5 '
                    onClick={() => navigate('/')}
                >
                    Back

                </button>
            </div> */}
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

export default StrawBerryDetail
