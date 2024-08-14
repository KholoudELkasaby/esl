import React from 'react'
import "./About.css"
import groub from "../../assets/Group.png"
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import Nav from "../Nav/Nav.jsx";


function About() {
  return (
    <div className='h-screen h-bday w-screen'>
    <Nav/>
    <div className='container mb-4 mx-auto'>
    <div className=' about flex justify-evenly mt-5 mx-auto '> 
     <div className='left hover:bg-gray-200  dark:bg-slate-900 dark:hover:bg-slate-950 about-us cursor-pointer ml-2 basis-1/2  h-[230px] min-w-[300px] p-6  border border-gray-200 rounded-lg shadow   bg-slate-50'>
     <Link >
     <h5 className="intro mb-6 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About Us</h5>
     <p className="left-two from-neutral-950 text-md text-center dark:text-slate-300">We are a team of 7 Egyptian computer science students  -IS Department- designed and implemented this application to help people with poor hearing abilities, deaf/mute or with any other sort of special needs that makes use of sign language to communicate with others, to be our graduation project.</p>

    </Link>
    </div>
    <div className='left contact  dark:bg-slate-900 dark:hover:bg-slate-950 cursor-pointer mr-4 basis-1/12 h-[230px] min-w-96 block max-w-sm p-6 bg-slate-50 border border-gray-200 rounded-lg shadow hover:bg-gray-200  '>
     <Link  >
     <h5 className="intro mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contact Us</h5>
     <p className="left-two text-gray-500 mt-5 text-lg text-center dark:text-slate-300 ">Having a problem using the application or need to reach out with us ?</p>
     <div className='flex justify-center align-content-center mt-3'><img className='w-[40px] h-[40px] back' src={groub} alt='group'/><Link className='text-center align-content-center ml-2 dark:text-[#C7D3D9] intro'>EgyptianSignLanguage@gmail.com</Link></div>
    </Link>
    </div>
    </div>

    <div className='about-app flex justify-center mt-12 cursor-pointer '>
    <div className='app mb-[9px]  dark:bg-slate-900 dark:hover:bg-slate-950  h-[230px] w-[1100px]  block  p-6 bg-slate-50 border border-gray-200 rounded-lg shadow hover:bg-gray-200  '>
     <Link >
     <h5 className="intro text-center  text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">About The Application</h5>
     <p className="left-two from-neutral-950 text-normal text-pretty text-center mt-4   dark:text-slate-300 ">
     When we designed this application we built it from scratch to make sure that the communication will be easier between sign language users ”Egyptian Sign Language” and people who has no previous knowledge about sign language using AI technologies based on real-time translation,
      which provides more understanding to the people special needs and make them more connected with the whole society,
       and not to feel isolated any more.
     </p>
    </Link>
    </div>
    </div>

    </div>
    <Footer/>
    </div>
  )
}

export default About
