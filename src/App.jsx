import React, { useEffect } from 'react';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import WelcomeOne from './components/WelcomeOne/WelcomeOne'
import Welcome from './components/Welcome/Welcome'
import WelcomeThree from './components/WelcomeThree/WelcomeThree'
import WelcomeFour from './components/WelcomeFour/WelcomeFour'
import Dictionary from './components/Dictionary/Dictionary';
import Articles from './components/Articles/Articles';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Videos from './components/Videos/Videos';
import { createBrowserRouter ,createHashRouter,RouterProvider } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Loader from './components/Loader/Loader';
import Nav from './components/Nav/Nav';
import ThemePage from './components/ThemePage/ThemePage';
import Home from './components/Home/Home';
import alanBtn from '@alan-ai/alan-sdk-web';
import Camera from './components/Camera/Camera';
import SpeechToText from './components/SpeechToText/SpeechToText';
import Roshdy from './components/Roshdy/Roshdy';




function App() {


  const router = createHashRouter([
    {
      path:'/',
     element:<Welcome/>,
     errorElement:<NotFound/>
    },
    {
      path:'/welcome-one',
     element:<WelcomeOne/>
    },
    {
      path:'/model',
     element:<SpeechToText/>
    },
    {
      path:'/welcome-three',
     element:<WelcomeThree/>
    },
    {
      path:'/welcome-four',
     element:<WelcomeFour/>
    },
    {
      path:'/article',
     element:<Articles/>
    },
    {
      path:'/video',
     element:<Videos/>
    },
    {
      path:'/about',
     element:<About/>
    },
    {
      path:'/dictionary',
     element:<Dictionary/>
    },
    {
      path:'/roshdy',
     element:<Roshdy/>
    },
    {
      path:'/loader',
     element:<Loader/>
    },
    {
      path:'/nav',
     element:<Nav/>
    },
    {
      path:'/theme',
     element:<ThemePage/>
    },
    {
      path:'/home',
     element:<Home/>
    },
    
  ]);

  const alanKey = '45379ebb58296195ca926654beb00b062e956eca572e1d8b807a3e2338fdd0dc/stage' ;
  useEffect(()=>{
    alanBtn({
      key: alanKey,
      onCommand: ({command}) =>{
     
      }
    })
  },[])

  return (
    
   <div className=' w-full bg-[#DADADA] dark:bg-[#020617]'>
    
   <RouterProvider router={router}/>
   
   </div>
   
  )
}


export default App;
