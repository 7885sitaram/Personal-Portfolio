import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Resume from './Components/Resume/Resume'
import Portfolio from './Components/Portfolio/Portfolio'
import Achievement from './Components/Achievement/Achievement'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Portfolio_layout from './Components/Layout/Portfolio_layout'
import All from './Components/Portfolio/All'
import Web_design from './Components/Portfolio/Web_design'
import Application from "./Components/Portfolio/Application";
import AnimatedBackground from './Components/Bg-Styles/AnimatedBackground'



const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children :[
     
      {
        path:"",
        element: <About/>

      },

      {
        path:"/resume",
        element: <Resume/>

      },
      {
        path:"/portfolio",
        element: <Portfolio/>

      },
      // {
      //   path:"/achievement",
      //   element: <Achievement/>
      // },
      // {
      //   path:"/achievement",
      //   element: <Achievement/>
      // },
      {
        path:"/testimonial",
        element: <Testimonial/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
    ]
  },

  {
    path:"/",
    element:<Portfolio_layout/>,
    children:[
      {
        path:'/portfolio/all',
        element:<All/>
      },
      {
        path:'/portfolio/webdesign',
        element:<Web_design/>
      },
      {
        path:'/portfolio/application',
        element:<Application/>
      },
    ]
  }

])


createRoot(document.getElementById('root')).render(

  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
  
)
