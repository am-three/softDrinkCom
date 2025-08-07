import React from 'react'
import orangeCan1 from '../../assets/orangeCan1.png'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

const p = [
    'Orange juice is a bright, zesty drink made by extracting the liquid from fresh oranges. Packed with vitamin C, potassium, and antioxidants, it helps strengthen the immune system and support heart health. Its naturally sweet, tangy flavor makes it a popular breakfast staple and a refreshing thirst-quencher any time of day. Whether enjoyed freshly squeezed or as a base in smoothies and recipes, orange juice delivers a delicious boost of nutrition in every glass.',
];


const OrangeDetail = () => {

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
            <div className='bg bg-no-repeat bg-top bg-[#FFC63B]  fixed flex items-center  w-screen h-screen'>


                <div className='mt-[-100px] w-1/2'>
                    <img src={orangeCan1} alt='orange can' className=' object-cover scale-150' />
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



export default OrangeDetail
