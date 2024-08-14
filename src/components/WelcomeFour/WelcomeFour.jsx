import React from 'react'
import load3 from "../../assets/load3.png"
import web3 from "../../assets/amico.png"
import "../../index.css"
import "./WelcomeFour.css"
import { useNavigate} from 'react-router-dom'

function WelcomeFour() {
  const navigate = useNavigate();
  return (
    <>
       <div className='container h-screen mx-auto'>
        <div className=' flex justify-center align-items-center align-content-center mb-2'>
        <p className='mt-4 intro coda-regular flex justify-center align-items-center align-content-center text-2xl text-slate-400'>Let’s get started
        </p>
        </div >
        
        <div className=' flex justify-center align-items-center align-content-center'>
            <img className=' back w-[389px] h-[380px] ' src={web3} alt="welcome" />
        </div>
        <div className='flex justify-center align-items-center align-content-center mt-2 w-[1200px] h-[80px] mx-auto max-w-md md:max-w-xl'>
            <p className=' left coda-regular text-center w-[600px] text-2xl font-extrabold dark:text-white'>It helps you to keep in touch, understand and even get to learn more about ESL</p>
        </div>
       
        <div className='flex justify-center align-items-center mt-3'>
         <img className=' mt-1 left w-[400px] flex justify-center align-items-center' src={load3} alt="load" />
        </div>
       

        <div className=' flex justify-between  mt-5 w-[1240px] mx-auto '>
          <div className='left rounded-t-2xl rounded-br-2xl  '>
          <button onClick={()=>navigate(-1)} className='btn rounded-t-2xl rounded-br-2xl border-1   w-[150px] h-[40px] ease-out hover:scale-110'><p className='inline-block bg-gradient-to-b from-[#419AF5] to-[#8D36C6] text-transparent bg-clip-text dark:text-black '>Back</p></button>
          </div>
          <div className='right rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-[#419AF5] to-[#8D36C6] text-white hover:bg-none '>
          <button onClick={()=>navigate('/loader')} className='dark:border-slate-950 text-center btnn rounded-t-2xl rounded-bl-2xl border-1 w-[150px] h-[40px] ease-out hover:scale-110 '><p className='hover:inline-block hover:bg-gradient-to-b hover:from-[#419AF5] hover:to-[#8D36C6] hover:text-transparent hover:bg-clip-text w-[150px] h-[40px] translate-y-[6px] dark:text-black'>Next</p></button>
          </div>
        </div>
        

       </div>
   </>
  )
}

export default WelcomeFour
