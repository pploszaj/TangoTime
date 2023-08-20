import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const slides = [
    {
      url: "https://images.pexels.com/photos/2057273/pexels-photo-2057273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Waltz",
    },
    {
      url: "https://images.pexels.com/photos/2188012/pexels-photo-2188012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Cha-Cha",
    },
    {
      url: "https://cdn.pixabay.com/photo/2015/11/11/23/10/ballroom-1039371_1280.jpg",
      description: "Tango",
    },
    {
      url: "https://vbds.org/wp-content/uploads/2016/08/chacha-1500x1001.jpg",
      description: "Samba",
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
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-img"
        // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
        <img src={slides[currentIndex].url}></img>
      </div>
      <div className="carousel-overlay">
        <p>{slides[currentIndex].description}</p>
      </div>
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
