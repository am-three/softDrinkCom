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
                    <p className='text-[#EEEEEF]'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
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

export default StrawBerryDetail
