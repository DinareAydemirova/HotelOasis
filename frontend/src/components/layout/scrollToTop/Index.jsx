import React, { useEffect, useState } from 'react'
import style from './ScrollToTopButton.module.scss';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
  
    return (
      <div className={style.scrollToTop}>
        {isVisible && 
          <button onClick={scrollToTop}>
           <FaArrowUp /> 
          </button>
        }
      </div>
    );
}

export default ScrollToTopButton