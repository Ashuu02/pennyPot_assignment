import React, { useState } from "react";
import { RxDot, RxDotFilled } from 'react-icons/rx';

const Home = () => {

    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },
    
        {
          url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
      ];


      const [currentIndex, setCurrentIndex] = useState(0);

      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };


      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };

  return (
    <div className="text-white bg-[#262626] p-10 pb-20">
      <div className="md:w-[70%] m-auto ">
        <div className=" font-sans m-auto items-center text-[15px] md:text-[40px] font-bold ">
          Mastering Your Finances: Expert tips and tricks to achieve your
          financial goals
        </div>
        <div className="mt-5 text-sm md:mt-10">
          <p>File Name*|2 Minute Read</p>
          <button className=" rounded-full bg-gray-200 hover:bg-gray-300 text-[#262626] px-4 py-2 md:mt-[60px] mt-7 text-base font-bold">
            Read Now
          </button>
        </div>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl bg-[#262626] mt-[90px] cursor-pointer'
          >
            {/* <RxDotFilled /> */}
            <RxDot/>
          </div>
        ))}
      </div>    
    </div>
  );
};

export default Home;
