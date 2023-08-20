import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { IndexKind } from "typescript";

const Carousel = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1692171478312-43369ff47077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1688893287893-3cac14b3a7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1691977504044-fa2e8c813431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide: boolean = currentIndex === slides.length - 1;
    const newIndex: number = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };

  const gotToSlide = (index: number) => {
    setcurrentIndex(index);
  }

  return (
    <div className="carousel-container">
      <div
        className="carousel-img"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      <div className="arrow-left">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>
      <div className="arrow-right">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>
      <div className="dots-container">
        {slides.map((slide, index) => (
          <div key={index} onClick={() => gotToSlide(index)} className="dots">
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
