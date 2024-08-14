import React from 'react'
import dictionary from "../../assets/dic-pic.jpg"
import Footer from '../Footer/Footer'
import Nav from "../Nav/Nav.jsx";


function Dictionary() {
  return (
    <>
    <Nav/>
    <div className='container'>
     <div className='mt-1'>
       <h1 className='intro flex justify-center align-items-center text-center text-3xl font-semibold mt-3 mb-1 dark:text-white'>The Language Dictionary</h1>
       <h4 className='left flex justify-center align-items-center text-center dark:text-slate-500'>The ESL Alphabets & Numbers</h4>
        <div className='flex justify-center align-items-center mt-3 '>
            <img className='h-[530px] right cursor-pointer mb-5' src={dictionary} alt="dictionary" />
        </div>
     </div>
    </div>
    <Footer/>
    </>
  )
}

export default Dictionary
