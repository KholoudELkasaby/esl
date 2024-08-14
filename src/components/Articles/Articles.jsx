import React from 'react'
import "./Articles.css"
import Footer from '../Footer/Footer'
import Nav from "../Nav/Nav.jsx";
import { Link } from 'react-router-dom';


function Articles() {
  return (
    <>
    <Nav/>
    <div className='mb-10'>
      <h2 className='intro text-center mt-4 text-3xl font-bold dark:text-white'>ESL Articles</h2>
     <div className='articles flex justify-evenly  mt-5'> 
     <div className='left article1 hover:scale-105 dark:bg-slate-950 '>
     <Link to="https://www.washingtonpost.com/wellness/2023/05/08/fake-sign-language-asl-tiktok/" target="_blank" className="block max-w-sm p-6 bg-slate-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100  dark:bg-slate-900 dark:hover:bg-slate-950 ">
     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white left-two">Fake sign language is spreading on TikTok</h5>
     <p className="font-normal dark:text-white left-two">By : Washington Post</p>
     <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 left-two">22/3/2024</p>
       <div className='right mt-2 ml-32 w-[200px] rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-[#419AF5] to-[#8D36C6] text-white hover:bg-none '>
          <button  className=' text-center btnn rounded-t-2xl rounded-bl-2xl border-1 w-[200px] h-[40px] ease-out hover:scale-110 '><p className='hover:inline-block hover:bg-gradient-to-b hover:from-[#419AF5] hover:to-[#8D36C6] hover:text-transparent hover:bg-clip-text w-[200px] h-[40px] translate-y-1 dark:hover:text-black'>Read The Article</p></button>
       </div>
    </Link>
    </div>
    <div className='left article2 hover:scale-105 dark:bg-slate-950'>
     <Link to="https://www.nytimes.com/interactive/2022/07/26/us/american-sign-language-changes.html" target="_blank" className="block max-w-sm p-6 bg-slate-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-950">
     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white left-two">How Sign Language Evolves as Our World Does</h5>
     <p className="font-normal dark:text-white left-two">By : The New York Times</p>
     <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 left-two">30/1/2023</p>
       <div className='right mt-2 ml-32 w-[200px] rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-[#419AF5] to-[#8D36C6] text-white hover:bg-none '>
          <button  className=' text-center btnn rounded-t-2xl rounded-bl-2xl border-1 w-[200px] h-[40px] ease-out hover:scale-110 '><p className='hover:inline-block hover:bg-gradient-to-b hover:from-[#419AF5] hover:to-[#8D36C6] hover:text-transparent hover:bg-clip-text w-[200px] h-[40px] translate-y-1 dark:hover:text-black '>Read The Article</p></button>
       </div>
    </Link>
    </div>
    <div className='left article3 hover:scale-105 dark:bg-slate-950'>
     <Link to="https://www.sciencedirect.com/topics/psychology/sign-language" target='_blank' className="block max-w-sm p-6 bg-slate-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-950">
     <h5 className="mb-[38px] text-2xl font-bold tracking-tight text-gray-900 dark:text-white left-two">Sign Language - an overview</h5>
     <p className="font-normal dark:text-white left-two">By : ScienceDirect</p>
     <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 left-two">7/2/2023</p>
       <div className='right mt-2 ml-32 w-[200px] rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-[#419AF5] to-[#8D36C6] text-white hover:bg-none '>
          <button  className=' text-center btnn rounded-t-2xl rounded-bl-2xl border-1 w-[200px] h-[40px] ease-out hover:scale-110 '><p className='hover:inline-block hover:bg-gradient-to-b hover:from-[#419AF5] hover:to-[#8D36C6] hover:text-transparent hover:bg-clip-text w-[200px] h-[40px] translate-y-1 dark:hover:text-black'>Read The Article</p></button>
       </div>
    </Link>
    </div>
    </div>


    {/* second */}
    <div className='articles flex justify-evenly mt-5'> 
     <div className='left article4 hover:scale-105 dark:bg-slate-950'>
     <Link to="https://www.britannica.com/topic/sign-language" target='_blank' className="block max-w-sm p-6 bg-slate-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-950">
     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white left-two">Sign language | Definition, History, & Facts</h5>
     <p className="font-normal dark:text-white left-two">By : Britannica</p>
     <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 left-two">21/7/2021</p>
       <div className='right mt-2 ml-32 w-[200px] rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-[#419AF5] to-[#8D36C6] text-white hover:bg-none '>
          <button  className=' text-center btnn rounded-t-2xl rounded-bl-2xl border-1 w-[200px] h-[40px] ease-out hover:scale-110 '><p className='hover:inline-block hover:bg-gradient-to-b hover:from-[#419AF5] hover:to-[#8D36C6] hover:text-transparent hover:bg-clip-text w-[200px] h-[40px] translate-y-1 dark:hover:text-black'>Read The Article</p></button>
       </div>
    </Link>
    </div>
    <div className='left article5 hover:scale-105 dark:bg-slate-950'>
     <Link to="https://www.enablingguide.sg/articles-details/exploring-sign-language-and-its-benefits" target='_blank' className="block max-w-sm p-6 bg-slate-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-950">
     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white left-two">Exploring Sign Language and its Benefits</h5>
     <p className="font-normal dark:text-white left-two">By : Enabling Guide</p>
     <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 left-two">23/9/2023</p>
       <div className='right mt-2 ml-32 w-[200px] rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-[#419AF5] to-[#8D36C6] text-white hover:bg-none '>
          <button  className=' text-center btnn rounded-t-2xl rounded-bl-2xl border-1 w-[200px] h-[40px] ease-out hover:scale-110 '><p className='hover:inline-block hover:bg-gradient-to-b hover:from-[#419AF5] hover:to-[#8D36C6] hover:text-transparent hover:bg-clip-text w-[200px] h-[40px] translate-y-1 dark:hover:text-black'>Read The Article</p></button>
       </div>
    </Link>
    </div>
    <div className='left article6 hover:scale-105 dark:bg-slate-950'>
     <Link to="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2019.00483/full" target='_blank' className="block max-w-sm p-6 bg-slate-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-950">
     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white left-two">Handling Sign Language Data: The Impact of Modality</h5>
     <p className="font-normal dark:text-white left-two">By : Frontiers</p>
     <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 left-two">4/3/2024</p>
       <div className='right mt-2 ml-32 w-[200px] rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-[#419AF5] to-[#8D36C6] text-white hover:bg-none '>
          <button  className=' text-center btnn rounded-t-2xl rounded-bl-2xl border-1 w-[200px] h-[40px] ease-out hover:scale-110 '><p className='hover:inline-block hover:bg-gradient-to-b hover:from-[#419AF5] hover:to-[#8D36C6] hover:text-transparent hover:bg-clip-text w-[200px] h-[40px] translate-y-1 dark:hover:text-black'>Read The Article</p></button>
       </div>
    </Link>
    </div>
    </div>

    {/* third */}
   <div className='articles flex justify-evenly mt-5'> 
     <div className='left article7 hover:scale-105'>
     <Link to="https://education.nationalgeographic.org/resource/sign-language/" target='_blank' className="block max-w-sm p-6 bg-slate-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-950">
     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white left-two">Sign language - National Geographic Education</h5>
     <p className="font-normal dark:text-white left-two">By : National Geographic Society</p>
     <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 left-two">19/10/2023</p>
       <div className='right mt-2 ml-32 w-[200px] rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-[#419AF5] to-[#8D36C6] text-white hover:bg-none '>
          <button  className=' text-center btnn rounded-t-2xl rounded-bl-2xl border-1 w-[200px] h-[40px] ease-out hover:scale-110 '><p className='hover:inline-block hover:bg-gradient-to-b hover:from-[#419AF5] hover:to-[#8D36C6] hover:text-transparent hover:bg-clip-text w-[200px] h-[40px] translate-y-1 dark:hover:text-black'>Read The Article</p></button>
       </div>
    </Link>
    </div>
    <div className='left article8 hover:scale-105'>
     <Link to="https://www.nytimes.com/interactive/2022/07/26/us/american-sign-language-changes.html" target="_blank" className="block max-w-sm p-6 bg-slate-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-950">
     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white left-two">How Sign Language Evolves as Our World Does</h5>
     <p className="font-normal dark:text-white left-two">By : The New York Times</p>
     <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 left-two">30/1/2023</p>
       <div className='right mt-2 ml-32 w-[200px] rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-[#419AF5] to-[#8D36C6] text-white hover:bg-none '>
          <button  className=' text-center btnn rounded-t-2xl rounded-bl-2xl border-1 w-[200px] h-[40px] ease-out hover:scale-110 '><p className='hover:inline-block hover:bg-gradient-to-b hover:from-[#419AF5] hover:to-[#8D36C6] hover:text-transparent hover:bg-clip-text w-[200px] h-[40px] translate-y-1 dark:hover:text-black'>Read The Article</p></button>
       </div>
    </Link>
    </div>
    <div className='left article9 hover:scale-105'>
     <Link to="https://www.washingtonpost.com/wellness/2023/05/08/fake-sign-language-asl-tiktok/" target="_blank" className="block max-w-sm p-6 bg-slate-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-950">
     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white left-two">Fake sign language is spreading on TikTok</h5>
     <p className="font-normal dark:text-white left-two">By : Washington Post</p>
     <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 left-two">22/3/2024</p>
       <div className='right mt-2 ml-32 w-[200px] rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-[#419AF5] to-[#8D36C6] text-white hover:bg-none '>
          <button  className=' text-center btnn rounded-t-2xl rounded-bl-2xl border-1 w-[200px] h-[40px] ease-out hover:scale-110 '><p className='hover:inline-block hover:bg-gradient-to-b hover:from-[#419AF5] hover:to-[#8D36C6] hover:text-transparent hover:bg-clip-text w-[200px] h-[40px] translate-y-1 dark:hover:text-black'>Read The Article</p></button>
       </div>
    </Link>
    </div>
    </div>

    {/* 4 */}
    <div className='articles flex justify-evenly mt-5'> 
     <div className='left article10 hover:scale-105'>
     <Link to="https://www.britannica.com/topic/sign-language" target='_blank' className="block max-w-sm p-6 bg-slate-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-950">
     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white left-two">Sign language | Definition, History, & Facts</h5>
     <p className="font-normal dark:text-white left-two">By : Britannica</p>
     <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 left-two">21/7/2021</p>
       <div className='right mt-2 ml-32 w-[200px] rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-[#419AF5] to-[#8D36C6] text-white hover:bg-none '>
          <button  className=' text-center btnn rounded-t-2xl rounded-bl-2xl border-1 w-[200px] h-[40px] ease-out hover:scale-110 '><p className='hover:inline-block hover:bg-gradient-to-b hover:from-[#419AF5] hover:to-[#8D36C6] hover:text-transparent hover:bg-clip-text w-[200px] h-[40px] translate-y-1 dark:hover:text-black '>Read The Article</p></button>
       </div>
    </Link>
    </div>
    <div className='left article11 hover:scale-105'>
     <Link to="https://www.enablingguide.sg/articles-details/exploring-sign-language-and-its-benefits" target='_blank' className="block max-w-sm p-6 bg-slate-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-950">
     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white left-two">Exploring Sign Language and its Benefits</h5>
     <p className="font-normal dark:text-white left-two">By : Enabling Guide</p>
     <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 left-two">23/9/2023</p>
       <div className='right mt-2 ml-32 w-[200px] rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-[#419AF5] to-[#8D36C6] text-white hover:bg-none '>
          <button  className=' text-center btnn rounded-t-2xl rounded-bl-2xl border-1 w-[200px] h-[40px] ease-out hover:scale-110 '><p className='hover:inline-block hover:bg-gradient-to-b hover:from-[#419AF5] hover:to-[#8D36C6] hover:text-transparent hover:bg-clip-text w-[200px] h-[40px] translate-y-1 dark:hover:text-black'>Read The Article</p></button>
       </div>
    </Link>
    </div>
    <div className='left article12 hover:scale-105'>
     <Link to="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2019.00483/full" target='_blank' className="block max-w-sm p-6 bg-slate-50 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-950">
     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white left-two">Handling Sign Language Data: The Impact of Modality</h5>
     <p className="font-normal dark:text-white left-two">By : Frontiers</p>
     <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 left-two">4/3/2024</p>
       <div className='right mt-2 ml-32 w-[200px] rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-[#419AF5] to-[#8D36C6] text-white hover:bg-none '>
          <button  className=' text-center btnn rounded-t-2xl rounded-bl-2xl border-1 w-[200px] h-[40px] ease-out hover:scale-110 '><p className='hover:inline-block hover:bg-gradient-to-b hover:from-[#419AF5] hover:to-[#8D36C6] hover:text-transparent hover:bg-clip-text w-[200px] h-[40px] translate-y-1 dark:hover:text-black'>Read The Article</p></button>
       </div>
    </Link>
    </div>
    </div>

    </div>
    <Footer/>
    </>
  )
}

export default Articles
