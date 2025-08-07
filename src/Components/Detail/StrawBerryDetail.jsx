import React from 'react'
import strawberryCan1 from '../../assets/strawberryCan1.png'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

const p = [
    'Strawberry juice is a refreshing, naturally sweet beverage made by blending ripe strawberries into a smooth liquid. Rich in vitamin C, antioxidants, and essential nutrients, it offers a delicious way to boost immunity and support overall health. Its vibrant red color and tangy-sweet flavor make it perfect on its own or as a base for smoothies and cocktails. Whether served chilled on a hot day or added to recipes, strawberry juice is a wholesome, invigorating drink loved by all ages.',
];


const StrawBerryDetail = () => {

    const [currentLine, setCurrentLine] = useState(0);

    useEffect(() => {
        if (currentLine < p.length - 1) {
            const timer = setTimeout(() => {
                setCurrentLine((prev) => prev + 1);
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [currentLine]);


    const navigate = useNavigate();
    return (

        <div>
            <div className='bg bg-no-repeat bg-top bg-[#ED5746]  fixed flex items-center  w-screen h-screen'>

                {/* <h3> This Page Will Be Developed Soon... </h3> */}

                <div className='mt-[-100px] w-1/2'>
                    <img src={strawberryCan1} alt='orange can' className=' object-cover scale-150' />
                </div>

                <div className=' overflow-hidden border-r-4 border-black text-2xl mt-48 w-full'>
                    <div className="text-black leading-relaxed ">
                        {p.slice(0, currentLine + 1).map((line, i) => (
                            <div key={i} className="animate-fadeIn">{line}</div>
                        ))}
                    </div>


                </div>

                <style>
                    {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(300px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
            animation: fadeIn 3s ease-out;
          }
        `}
                </style>


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
