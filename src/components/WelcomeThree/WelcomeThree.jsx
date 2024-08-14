import React from 'react'
import load2 from "../../assets/loading2.png"
import web2 from "../../assets/web3.png"
import "../../index.css"
import "./WelcomeThree.css"
import { useNavigate} from 'react-router-dom'

function WelcomeThree() {
  const navigate = useNavigate();
  const next = useNavigate();
  return (
    <>
       <div className='container h-screen mx-auto'>
        <div className=' flex justify-center align-items-center align-content-center mb-2'>
        <p className='mt-4 intro coda-regular flex justify-center align-items-center align-content-center text-2xl text-slate-400'>No need for an account
        </p>
        </div >
        
        <div className=' flex justify-center align-items-center align-content-center mx-auto max-w-md'>
            <img className='back w-[389px] h-[380px] ' src={web2} alt="welcome" />
        </div>
        <div className='flex justify-center align-items-center align-content-center mt-2 w-[1200px] h-[80px] mx-auto max-w-md md:max-w-xl'>
            <p className=' left coda-regular text-center w-[600px] text-2xl font-extrabold  dark:text-white '> You can easily capture the sign language and turn it to text or audio</p>
        </div>
       
        <div className='flex justify-center align-items-center mt-3'>
         <img className=' mt-1 left w-[400px] flex justify-center align-items-center' src={load2} alt="load" />
        </div>
       
   {/* <div className='btns mx-auto'> */}
        <div className=' flex justify-between  w-[1230px] mt-5 mx-auto '>
          <div className=' rounded-t-2xl rounded-br-2xl  '>
          <button onClick={()=>navigate(-1)} className='left btn rounded-t-2xl rounded-br-2xl border-1   w-[150px] h-[40px] ease-out hover:scale-110'><p className=' inline-block bg-gradient-to-b from-[#419AF5] to-[#8D36C6] text-transparent bg-clip-text dark:text-black '>Back</p></button>
          </div>
          <div className='right rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-[#419AF5] to-[#8D36C6] text-white hover:bg-none '>
          <button onClick={()=>next('/welcome-four')} className=' dark:border-slate-950 text-center btnn rounded-t-2xl rounded-bl-2xl border-1 w-[150px] h-[40px] ease-out hover:scale-110 '><p className='hover:inline-block hover:bg-gradient-to-b hover:from-[#419AF5] hover:to-[#8D36C6] hover:text-transparent hover:bg-clip-text w-[150px] h-[40px] translate-y-[6px] dark:text-black'>Next</p></button>
          </div>
   {/* </div> */}
        </div>
        

       </div>
   </>
  )
}

export default WelcomeThree
