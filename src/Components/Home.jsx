import { navIcon } from "../Constants"
import { NavLink } from "react-router-dom"

import '../App.css'

const Home = () => {

    return (


        <nav className='fixed bottom-0 w-[70%] left-1/2 transform -translate-x-1/2 z-50  backdrop-blur-sm border-t border-[#d2d0caff]' >

            <ul className=" flex justify-center space-x-36 px-10 py-4  text-[#c4c4c2]">
                {navIcon.map((icons, index) => (
                    <NavLink to={icons.to} >

                        <li key={index} >
                            <button className="duration-300 hover:scale-x-125">
                                {icons.icon}
                            </button>
                        </li>

                    </NavLink>
                ))}
            </ul>


        </nav>


    )
}

export default Home
