import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import Home from './Components/Home'
import StrawBerryDetail from './Components/Detail/StrawBerryDetail'



const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path='/' element={<RootLayout />} >

      <Route path='/' element={<Home />} />
      <Route path='strawberry' element={<StrawBerryDetail />} />

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
