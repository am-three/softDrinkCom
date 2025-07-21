import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import DetailsLayout from './layouts/DetailsLayout'
import Home from './Components/Home'
import StrawBerryDetail from './Components/Detail/StrawBerryDetail'
import OrangeDetail from './Components/Detail/OrangeDetail'
import WaterMelonDetail from './Components/Detail/WaterMelonDetails'
import LemonDetail from './Components/Detail/LemonDetail'


const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path='/' element={<RootLayout />} >

      <Route path='/' element={<Home />} />

      <Route path='details' element={<DetailsLayout />}>
        <Route path='strawberryDetails' element={<StrawBerryDetail />} />
        <Route path='orangeDetails' element={<OrangeDetail />} />
        <Route path='waterMelonDetails' element={<WaterMelonDetail />} />
        <Route path='lemonDetails' element={<LemonDetail />} />
      </Route>

    </Route>
  )
)


const App = () => {
  return (
    <>

      <RouterProvider router={router} />

    </>


  )
}

export default App
