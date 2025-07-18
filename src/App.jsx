import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import Home from './Components/Home'



const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path='/' element={<RootLayout />} >

      <Route path='/' element={<Home />} />

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
