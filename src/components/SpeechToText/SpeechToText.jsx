

import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Hourglass } from 'react-loader-spinner';

const SpeechToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [currentChar, setCurrentChar] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialImageLoaded, setInitialImageLoaded] = useState(false); 

  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'ar-SA';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setTranscript(speechToText);
      setCurrentIndex(0);
      setCurrentChar(''); 
    };

    recognition.onerror = (event) => {
      console.error('Error occurred in recognition: ', event.error);
    };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => {
      recognition.stop();
    };
  }, [isListening]);

  useEffect(() => {
    if (transcript) {
      const chars = transcript.split('');
      if (currentIndex < chars.length) {
        const timeout = setTimeout(() => {
          setCurrentChar(chars[currentIndex]);
          setCurrentIndex(currentIndex + 1);
        }, 1000);

        return () => clearTimeout(timeout);
      }
    }
  }, [transcript, currentIndex]);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setInitialImageLoaded(true);
    };
    image.src = '/signs/مسافه.png';
  }, []);

  const handleListen = () => {
    setIsListening(!isListening);
  };

  const clearText = () => {
    setTranscript('');
    setCurrentChar('');
    setCurrentIndex(0);
  };

  const repeatPictures = () => {
    setCurrentIndex(0);
    setCurrentChar('');
  };

  const renderSignImage = () => {
    if (!initialImageLoaded) {
     
      return (
        <div className=' mt-2 w-64 h-64  flex items-center justify-center'>
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
      );
    }

    const isArabicLetter = /^[\u0600-\u06FF]$/.test(currentChar);
    const isNumber = /^[0-9]$/.test(currentChar);

    if (isArabicLetter || isNumber) {
      return (
        <div className=" mt-2 overflow-hidden">
          <img src={`/signs/${currentChar}.png`} alt={currentChar} className="w-64 h-64" />
        </div>
      );
    }

    return (
      <div className=" mt-2  overflow-hidden">
        <img src="/signs/مسافه.png" alt="Initial Image" className="w-64 h-64" />
      </div>
    );
  };

  return (
    <div className='h-screen w-screen'>
      <Nav />

      <div className='flex justify-content-center  h-64 relative'>
        <div className='relative '>
          {renderSignImage()}
        </div>
      </div>
      <div className='bg-white mx-auto w-[700px] mt-4 h-[230px] p-5 relative'>
        <div className="absolute top-1 right-2 flex gap-3">
        <button 
            className='hover:text-green-700 text-xl text-gray-950 hover:scale-125'
            onClick={repeatPictures}>
            &#x21bb;
          </button>
          <button 
            className='hover:text-red-700 text-xl text-gray-950 hover:scale-125'
            onClick={clearText}>
            X
          </button>
         
        </div>
        <div className='flex justify-center text-center justify-items-center justify-content-center'>{transcript}</div>
        
      </div>

      <div className='mx-auto mb-[30px] w-screen'>
        <div className='right mt-2 ml-32 w-[200px] rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-[#419AF5] to-[#8D36C6] text-white hover:bg-none mx-auto'>
          <button className='text-center btnn rounded-t-2xl rounded-bl-2xl border-1 w-[200px] h-[40px] ease-out hover:scale-110' onClick={handleListen}>
            <p className='hover:inline-block hover:bg-gradient-to-b hover:from-[#419AF5] hover:to-[#8D36C6] hover:text-transparent hover:bg-clip-text w-[200px] h-[40px] translate-y-1 dark:hover:text-black'>
              {isListening ? 'Stop Listening' : 'Start Listening'}
            </p>
          </button>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default SpeechToText;



