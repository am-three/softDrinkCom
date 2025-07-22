import React from 'react'
import orangeCan1 from '../../assets/orangeCan1.png'
import { useNavigate } from 'react-router-dom'


const OrangeDetail = () => {

    const navigate = useNavigate();

    return (

        <div>
            <div className='bg bg-no-repeat bg-top bg-[#FFC63B]  fixed flex items-center  w-screen h-screen'>


                <div className='mt-[-100px] w-1/2'>
                    <img src={orangeCan1} alt='orange can' className=' object-cover scale-150' />
                </div>

                <div className='animate-typing overflow-hidden border-r-4 border-black text-2xl mt-48 w-fit'>
                    <p className='text-[#EEEEEF]'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                </div>

            </div>

            <div className='fixed bottom-16 right-[100px] tracking-widest'>
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
            </div>


        </div>

    )
}



export default OrangeDetail
