import { Outlet } from "react-router-dom"
import HeroSection from "../Components/HeroSection"



const RootLayout = () => {
    return (

        <div>


            <HeroSection />
            <Outlet />

        </div>

    )
}

export default RootLayout
