import React, { useState, useEffect } from 'react'
import lemonCan1 from '../../assets/lemonCan1.png'
import { useNavigate } from 'react-router-dom'
import detaillogo from '../..//assets/originJuiceLogo.png'

const p = [
    'Lemon juice is a tangy, citrusy liquid extracted from fresh lemons, known for its sharp flavor and refreshing aroma. Rich in vitamin C and antioxidants, it boosts the immune system, Often used as a zesty ingredient in drinks, dressings, and marinades, lemon juice also makes a revitalizing beverage on its own when diluted with water and sweetened. Its bright taste and health benefits make it a versatile and invigorating addition to any diet.',
];

const LemonDetail = () => {

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
        // bg - [#92C90C]
        < div >
            <div className='bg-[#92C90C] fixed flex items-center  w-screen h-screen'>

                <div className='fixed -top-[40px]  w-screen left-[38%] '>
                    <img src={detaillogo} />
                </div>

                <div className='mt-[-100px] w-1/2'>
                    <img src={lemonCan1} alt='orange can' className=' object-cover scale-150' />
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


        </div >
    )
}

export default LemonDetail
