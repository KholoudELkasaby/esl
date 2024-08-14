import React, { useState , useEffect } from 'react';
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav.jsx";
import "../../App.css";
import Footer from '../Footer/Footer'






function ThemePage() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode === 'true';
  });

  useEffect(() => {
    // Update localStorage when isDarkMode state changes
    localStorage.setItem('darkMode', isDarkMode.toString());
    // Toggle 'dark' class on each page
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      if (isDarkMode) {
        page.classList.add('dark');
      } else {
        page.classList.remove('dark');
      }
    });
  }, [isDarkMode]);

  const toggleLightMode = () => {
    setIsDarkMode(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(true);
  };


    return (
      <div >
      <div className="themehome mb-[180px] h-screen">
      <Nav />
      <div className="themepage ">
      <div className="theme   ">
          <h1 className="mode-title dark:text-white "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 change-theme-icon">
           <path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd" />
          </svg>Change Mode</h1>
          <div className="theme-box  bg-slate-50 dark:bg-slate-900">
            <h3 className="theme-mode dark:text-white">Theme mode</h3>
            <p className="theme-paragraph dark:text-white">You can change the theme mode to the mode that you want light mode which is default, Or dark mode, And change it as many times as you want </p>
            <div className="theme-btns">
                <button onClick={toggleLightMode}  className="group light-mode dark:bg-slate-800 dark:text-white dark:hover:bg-slate-950">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" id="themeicon1" className="w-6 h-6 dark:text-white theme-icon">
                 <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg> Light mode </button>
                <button  onClick={toggleDarkMode}  className=" dark-mode dark:text-white  dark:bg-slate-800 dark:hover:bg-slate-950">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" id="themeicon2" className="w-6 h-6 dark:text-white theme-icon dark-icon">
                 <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                </svg> Dark mode </button>
            </div>
          </div>
      </div>
      </div>
      </div>
      <Footer/>
      </div>
    );
    
  }
  
  
  export default ThemePage;