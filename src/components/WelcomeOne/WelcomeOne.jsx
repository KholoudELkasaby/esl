import React from 'react'
import logo from "../../assets/LOGO4-LIGHT.png"
import welcome from "../../assets/rafiki.png"
import load from "../../assets/loading.png"
import "../../index.css"
import "./WelcomeOne.css"
import { useNavigate} from 'react-router-dom'

function WelcomeOne() {
  const navigate = useNavigate();
  return (
    <div>
       <div className='container h-screen mx-auto'>
        <div className=' flex justify-center align-items-center align-content-center mb-2 mx-auto max-w-md'>
        <p className='mt-4 intro coda-regular flex justify-center align-items-center align-content-center text-2xl text-slate-400'>welcome to 
        </p>
        <img src={logo} className='mt-4 intro w-10 ml-2 flex justify-center align-content-center'/>
        </div >
                                       
        <div className=' flex justify-center align-items-center align-content-center mx-auto max-w-md'>
            <img className='left w-[536px] h-[370px] mt-1' src={welcome} alt="welcome" />
        </div>
                   
        <div className=' mt-3 w-[1100px] h-[100px] flex justify-center align-items-center mx-auto max-w-md md:max-w-xl'>
            <p className='flex justify-center align-items-center coda-regular text-center w-[700px] text-2xl font-semibold dark:text-white '> Our application provides Real-Time Egyptian Sign Language ‘ESL’ Translation for Deaf to communicate</p>
        </div>
                
        <div className='flex justify-center align-items-center mt-3'>
         <img className='left w-[400px] flex  justify-center align-items-center' src={load} alt="load" />
        </div>
        <div className='  dark:bg-slate-950 next-button flex justify-end w-[1230px] rounded-t-2xl rounded-bl-2xl mt-4 mx-auto '>
         <div className='right  dark:bg-slate-950 rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-[#419AF5] to-[#8D36C6] text-white hover:bg-none '>
          <button onClick={()=>navigate('/welcome-three')} className=' dark:border-slate-950 text-center btnn rounded-t-2xl rounded-bl-2xl border-1 w-[150px] h-[40px] ease-out hover:scale-110 '><p className='hover:inline-block hover:bg-gradient-to-b hover:from-[#419AF5] hover:to-[#8D36C6] hover:text-transparent hover:bg-clip-text w-[150px] h-[45px] translate-y-[6px] dark:text-black  '>Next</p></button>
          </div>
        </div>
                   
       </div>
   </div>
  )
}

export default WelcomeOne
