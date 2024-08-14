import { Link } from "react-router-dom";
import logo from "../../assets/ESL (3).png"
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faPaintBrush,faChevronDown,faUsers,faHandPeace } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";
import SpeechToText from "../SpeechToText/SpeechToText";


function Nav() {
  const [color,setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >=60){
      setColor(true);
    }else{
      setColor(false);
    }
  }
    window.addEventListener('scroll',changeColor);
  
    return (
      <nav className={color?'Nav active sticky-top':'Nav sticky-top'}>
        <div className="nav-logo">
          <Link to="/about"><img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="right-section">
            <Link to="/home" className="nav-item"><FontAwesomeIcon icon={faHouse} className="mr-1 w-4 hover:scale-125"/>Home</Link>
            <Link to="/model" className="nav-item"><FontAwesomeIcon icon={faHandPeace} className="mr-2 w-4 hover:scale-125"/>Model</Link>
            <Link to="/about" className="nav-item"><FontAwesomeIcon icon={faUsers} className="mr-2 w-4 hover:scale-125"/>About</Link>
            <Link to="/theme" className="nav-item"><FontAwesomeIcon icon={faPaintBrush} className="mr-1 w-4 hover:scale-125"/> Theme</Link>
            <Link to="#" className="nav-item dropdown"><a href="javascript:void(0)" class="dropbtn"><FontAwesomeIcon icon={faChevronDown} className="mr-1 w-4 "/>References</a>
    <div class="dropdown-content">
      <Link className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:bg-slate-900  hover:bg-slate-400" to="/dictionary">Dictionary</Link>
      <Link className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:bg-slate-900 hover:bg-slate-400" to="/video">ESL Videos</Link>
      <Link className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:bg-slate-900 hover:bg-slate-400" to="/article">ESL Articles</Link>
      <Link className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:bg-slate-900 hover:bg-slate-400 text-sm font-medium" to="/roshdy">Roshdy Tutorial</Link>

    </div>    
            </Link>
        </div>
      </nav>
      
    );
    
  }
  
  
  export default Nav;