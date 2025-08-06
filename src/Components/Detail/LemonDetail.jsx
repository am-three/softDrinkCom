import React from 'react'
import lemonCan1 from '../../assets/lemonCan1.png'
import { useNavigate } from 'react-router-dom'

const LemonDetail = () => {

    const navigate = useNavigate();
    return (

        <div>
            <div className='bg bg-no-repeat bg-top bg-[#92C90C]  fixed flex items-center  w-screen h-screen'>

                {/* <h3> This Page Will Be Developed Soon... </h3> */}

                <div className='mt-[-100px] w-1/2'>
                    <img src={lemonCan1} alt='orange can' className=' object-cover scale-150' />
                </div>

                <div className='animate-typing overflow-hidden border-r-4 border-black text-2xl mt-48 w-fit'>
                    <p className='text-black'>
                        Lemon juice is a tangy, citrusy liquid extracted from fresh lemons, known for its sharp flavor and refreshing aroma. Rich in vitamin C and antioxidants, it boosts the immune system, aids digestion, and acts as a natural detoxifier. Often used as a zesty ingredient in drinks, dressings, and marinades, lemon juice also makes a revitalizing beverage on its own when diluted with water and sweetened. Its bright taste and health benefits make it a versatile and invigorating addition to any diet.
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

export default LemonDetail
