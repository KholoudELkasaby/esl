import React from 'react'
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import "./Roshdy.css"
import robot from "../../assets/robott.png"
import robot2 from "../../assets/robot22.png"

function Roshdy() {
  return (

    <div>
      <Nav/>
       <div className='flex justify-evenly mt-9'>
        <img className='left h-40' src={robot2}/>
        <h2 className=' intro text-center text-3xl font-bold mt-9 dark:text-white'>Roshdy Tutorial</h2>
        <img className='right h-40 ' src={robot}/>
        </div>
        <div className='mb-10'>
        {/* first */}
       <div className='flex justify-center mr-7'>
       <div className='roshdy'>
            <h4 className='intro text-2xl text-white '>Question one </h4>
            <div className='left w-20 h-[1px] mt-2 bg-purple-700'></div>
            <p className='left flex  text-slate-100 m-auto'>
            <ul className='text-lg' style={{ listStyle: 'disc' }}>
             <li>hi</li>
             <li>hello</li>
             <li>welcome</li>
            </ul></p>
        </div>
        <div className='roshdy'>
            <h4 className='intro text-2xl text-white '>Question Two </h4>
            <div className='left w-20 h-[1px] mt-2 bg-purple-700'></div>
            <p className='left flex  text-slate-100 m-auto'>
            <ul className='text-lg' style={{ listStyle: 'disc' }}>
             <li>tell me about yourself</li>
             
            </ul></p>
        </div>
        <div className='roshdy'>
            <h4 className='intro text-2xl text-white '>Question Three </h4>
            <div className='left w-20 h-[1px] mt-2 bg-purple-700'></div>
            <p className='left flex  text-slate-100 m-auto'>
            <ul className='text-lg' style={{ listStyle: 'disc' }}>
             <li>explain the project</li>
             
            </ul></p>
        </div>
        <div className='roshdy'>
            <h4 className='intro text-2xl text-white '>Question Four </h4>
            <div className='left w-20 h-[1px] mt-2 bg-purple-700'></div>
            <p className='left flex  text-slate-100 m-auto'>
            <ul className='text-base' style={{ listStyle: 'disc' }}>
             <li>what language do we use ?</li>
             <li>what language should i use ?</li>
             
            </ul></p>
        </div>
       </div> {/* first*/}

        {/* second */}
        <div className='flex justify-center mr-7'>
       <div className='roshdy'>
            <h4 className='intro text-2xl text-white '>Question Five </h4>
            <div className='left w-20 h-[1px] mt-2 bg-purple-700'></div>
            <p className='left flex  text-slate-100 m-auto'>
            <ul style={{ listStyle: 'disc' }}>
             <li className='text-[14px] ml-5'>who is responsible about this project ?</li>
             <li className='text-[14px] ml-5'>who did this project?</li>
             <li className='text-[14px] ml-5'>who made this project?</li>
            </ul></p>
        </div>
        <div className='roshdy'>
            <h4 className='intro text-2xl text-white '>Question Six </h4>
            <div className='left w-20 h-[1px] mt-2 bg-purple-700'></div>
            <p className='left flex  text-slate-100 m-auto'>
            <ul className='text-sm' style={{ listStyle: 'disc' }}>
             <li>who is the supervisor of this project?</li>
             
            </ul></p>
        </div>
        <div className='roshdy'>
            <h4 className='intro text-2xl text-white '>Question Seven </h4>
            <div className='left w-20 h-[1px] mt-2 bg-purple-700'></div>
            <p className='left flex  text-slate-100 m-auto'>
            <ul className='text-base' style={{ listStyle: 'disc' }}>
             <li>what are the members name?</li>
             
            </ul></p>
        </div>
        <div className='roshdy'>
            <h4 className='intro text-2xl text-white '>Question Eight </h4>
            <div className='left w-20 h-[1px] mt-2 bg-purple-700'></div>
            <p className='left flex  text-slate-100 m-auto'>
            <ul className='text-lg' style={{ listStyle: 'disc' }}>
             <li>what dictionary talks about?</li>
             
            </ul></p>
        </div>
       </div> {/* second*/}

       {/* third*/}
       <div className='flex justify-center mr-7'>
       <div className='roshdy'>
            <h4 className='intro text-2xl text-white '>Question Nine </h4>
            <div className='left w-20 h-[1px] mt-2 bg-purple-700'></div>
            <p className='left flex  text-slate-100 m-auto'>
            <ul style={{ listStyle: 'disc' }}>
             <li className='text-lg'>what articles talk about?</li>
            </ul></p>
        </div>
        <div className='roshdy'>
            <h4 className='intro text-2xl text-white '>Question Ten </h4>
            <div className='left w-20 h-[1px] mt-2 bg-purple-700'></div>
            <p className='left flex  text-slate-100 m-auto'>
            <ul className='text-lg' style={{ listStyle: 'disc' }}>
             <li>what videos talk about?</li>
             
            </ul></p>
        </div>
        <div className='roshdy'>
            <h4 className='intro text-2xl text-white '>Question Elevene </h4>
            <div className='left w-20 h-[1px] mt-2 bg-purple-700'></div>
            <p className='left flex  text-slate-100 m-auto'>
            <ul style={{ listStyle: 'disc' }}>
             <li>what about the tutorial page?</li>
             
            </ul></p>
        </div>
       
       </div> {/* third*/}


       </div>
      


  <Footer/>
    </div>
    
   
  )
}

export default Roshdy




