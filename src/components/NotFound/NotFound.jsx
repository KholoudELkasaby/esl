import React from 'react'
import { useNavigate} from 'react-router-dom'
import notfound from "../../assets/found.png"


function NotFound() {
  const navigate = useNavigate();

  return (
   <div className='h-screen' >
   <div className='flex justify-center  mb-3 text-2xl'><img src={notfound} alt="notfound" className='h-[500px] right hover:scale-105 cursor-pointer' /></div>
   <div className='  dark:bg-slate-950 next-button flex justify-center w-[-250px] rounded-full '>
         <div className=' dark:bg-slate-950 rounded-full bg-gradient-to-r from-[#419AF5] to-[#8D36C6] text-white hover:bg-none  '>
          <button onClick={()=>navigate('/home')} className=' dark:border-slate-950 text-center btnn rounded-full border-1 w-[150px] h-[40px] ease-out hover:scale-110  '><p className='hover:inline-block hover:bg-gradient-to-b hover:from-[#419AF5] hover:to-[#8D36C6] hover:text-transparent hover:bg-clip-text w-[150px] h-[45px] translate-y-[6px] dark:text-white dark:hover:text-black  '>Home</p></button>
          </div>
        </div>
   </div>
  )
}

export default NotFound
