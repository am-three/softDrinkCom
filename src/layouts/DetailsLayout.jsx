import React from 'react'
import { Outlet } from 'react-router-dom'

import StrawBerryDetail from '../Components/Detail/StrawBerryDetail'
import OrangeDetail from '../Components/Detail/OrangeDetail'

const DetailsLayout = () => {
    return (
        <div>

            {/* <StrawBerryDetail />
            <OrangeDetail /> */}
            <Outlet />



        </div>
    )
}

export default DetailsLayout
