import React from 'react'
import { useNavigate } from 'react-router-dom'

const Music = () => {

    const navigate = useNavigate();
    return (


        <div className=''>
            <h3> did u hear soemthing? </h3>

            <div className=' fixed bottom-16 right-[50%] tracking-widest'>
                <button className='bg-[#FF0032] rounded-lg py-3 px-8 flex gap-3 justify-center items-center 
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

export default Music
