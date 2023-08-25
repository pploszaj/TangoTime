import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const slides = [
    {
      url: "https://images.pexels.com/photos/2057273/pexels-photo-2057273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Cha-Cha",
      description:
        'Emerging from the vibrant rhythms of Cuba in the 1950s, the cha-cha is a lively and flirtatious ballroom dance known for its infectious rhythm and playful footwork. With a beat count of "one, two, cha-cha-cha," dancers revel in a series of quick steps and hip motions, capturing the dance\'s spirited and cheeky nature. The cha-cha is both fun and technically challenging, making it a favorite among novice and seasoned dancers alike.',
    },
    {
      url: "https://images.pexels.com/photos/2188012/pexels-photo-2188012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "International Tango",
      description:
        "Steeped in passion and drama, the international tango is a captivating ballroom dance that originates from the streets of Buenos Aires, Argentina. Unlike its Argentine counterpart, the international version is more structured, with staccato movements, sharp turns, and precise footwork. Danced in a close embrace, partners engage in a rhythmic conversation, conveying a narrative of desire, challenge, and unity.",
    },
    // {
    //   url: "https://cdn.pixabay.com/photo/2015/11/11/23/10/ballroom-1039371_1280.jpg",
    //   name: "Waltz",
    //   description:
    //     "The waltz is a timeless ballroom dance characterized by its flowing movements, graceful turns, and the distinctive 3/4 time signature. The dance typically features couples gliding across the floor with elegant rise and fall actions, accompanied by a smooth, swirling rhythm. The waltz not only represents romance and sophistication but also stands as a testament to the enduring allure of partnered dance.",
    // },
    {
      url: "https://vbds.org/wp-content/uploads/2016/08/chacha-1500x1001.jpg",
      name: "Samba",
      description:
        "Born in the lively carnivals of Brazil, samba is an exuberant latin dance that embodies the rhythms and spirit of South American culture. Recognized by its rhythmic bounce, rolling hip actions, and festive flair, samba dancers move with a pulsating energy that's both joyful and infectious. The dance is set to a distinctive 2/4 beat, marrying swift footwork with graceful body movements, evoking the vibrant parades from which it takes inspiration.",
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
    <>
      <div className="carousel-container">
        <div
          className="carousel-img"
          // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        >
          <img src={slides[currentIndex].url}></img>
        </div>
        <div className="carousel-overlay">
          <h2>{slides[currentIndex].name}</h2>
          <p>{slides[currentIndex].description}</p>
        </div>
        <div className="arrow-left">
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>
        <div className="arrow-right">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
      </div>
      <div className="dots-container">
        {slides.map((slide, index) => (
          <div key={index} onClick={() => gotToSlide(index)} className="dots">
            <RxDotFilled />
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
