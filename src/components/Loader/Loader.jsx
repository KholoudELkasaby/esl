import React,{ useEffect } from 'react'
import { Hourglass } from 'react-loader-spinner'
import { useNavigate} from 'react-router-dom'

function Loader() {

    const nav = useNavigate();
    useEffect(()=>{ 
        setTimeout(()=> nav('/home'),3000);
      },[])
  return (
    <div className='h-screen'>
    <div className="flex justify-center translate-y-56">
        <Hourglass
            visible={true}
            height="80"           
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#8D36C6', '#419AF5']}
            
        />
    </div>
    </div>
  )
}

export default Loader
