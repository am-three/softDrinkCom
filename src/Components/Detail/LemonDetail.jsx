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
                    <p className='text-[#EEEEEF]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>

            </div>

            <div className='fixed bottom-16 right-[100px] tracking-widest'>
                <button className='bg-black rounded-lg py-3 px-8 flex gap-3 justify-center items-center 
                            transform transition duration-300
                             hover:scale-105
                              hover:bg-[#e8e5df]
                               hover:text-black
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
