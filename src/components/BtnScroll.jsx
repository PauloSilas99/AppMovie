
import React, { useState, useEffect } from 'react';
import '../styles/BtnScroll.css'
import top from '../assets/top.svg'

const ScrollToTopButton = () => {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const alternarVisibi = () => {
      if (window.scrollY > 800) {
        setVisivel(true);
      } else {
        setVisivel(false);
      }
    };

    window.addEventListener('scroll', alternarVisibi);
    return () => window.removeEventListener('scroll', alternarVisibi);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {visivel && (
         
        <div onClick={scrollTop} className='AreaScroll'>
            <img src={top} alt="top" />
        </div>
        // ↑
      )}
    </div>
  );
};

export default ScrollToTopButton;
