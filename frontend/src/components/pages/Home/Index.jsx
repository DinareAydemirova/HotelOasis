import React, { useEffect, useState } from 'react'
import Hero from './hero/Index'

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      src: "https://kinsley.bslthemes.com/wp-content/uploads/2021/12/img-banner-3-scaled-1-1920x950.jpg",
     
      middleText: "Welcome to Kinsley5 star hotel",
     
    },
    {
      src: "https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-6.jpg",
     
      middleText: "Welcome to Kinsley5 star hotel",
     
    },
    {
      src: "https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-5.jpg",
     
      middleText: "Welcome to Oasis Hotel",
    
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <div id="carouselExampleCaptions" className="relative">
     
      <div className="relative w-full overflow-hidden ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`relative float-left -mr-[100%] w-full transition-opacity duration-[600ms] ease-in-out ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
            
          >
            <img
              src={slide.src}
              className="block w-full h-[900px] object-cover"
            
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
           
             <div className="absolute inset-0 flex items-center justify-center text-center text-white font-medium text-6xl text-red-200 font-serif ...">
              <h2>{slide.middleText}</h2>
            </div>
          </div>
        ))}
      </div>
   
     
     
    </div>
  );
}

export default Home