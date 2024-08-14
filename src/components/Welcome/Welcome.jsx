import React,{ useEffect } from 'react'
import "./Welcome.css"
import welcome from "../../assets/LOGO4-LIGHT.png"
import vector from "../../assets/Vector.png"
import { useNavigate} from 'react-router-dom'
import welcome2 from "../../assets/LOGO4-LIGHT (2).png"



function Welcome() {
  const nav = useNavigate();
  useEffect(()=>{ 
      setTimeout(()=> nav('/welcome-one'),3000);
    },[])
  return (
    
    <div className='h-screen'>
        <div className=' flex justify-center align-items-center align-content-center mb-3 '>
          <img className='w-[396px] h-[181px] intro mt-36 ' src={welcome} alt="ESL-logo" />
          
        </div>
        <div className=''>
            <h4 className='back  text-[#2393FF] flex justify-center align-items-center align-content-center mb-1 text-center  text-3xl font-extrabold'>Egyptian Sign Language App</h4>
            <h6 className='back  text-[#8D36C6] flex justify-center align-items-center align-content-center mt-2 text-center  text-2xl font-semibold'>We Hear you &nbsp; <img src={vector} alt="vector" /></h6>
        </div>
    </div>
    
    
  )
}

export default Welcome
