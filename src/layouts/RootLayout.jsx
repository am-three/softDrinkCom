import { Outlet, useLocation } from "react-router-dom"
import audio from '../Components/NavPgs.jsx/Music';

const RootLayout = () => {

    const location = useLocation();
    return (

        <div>

            <Outlet />

            {/* <audio isFull={location.pathname === '/music'} /> */}

        </div>

    )
}

export default RootLayout
