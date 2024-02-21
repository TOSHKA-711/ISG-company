import React from "react";
import { useState } from "react";
import image1 from "../imgs/11.jpg"
import image2 from "../imgs/27.jpg"
import image3 from "../imgs/30.jpg"
import image4 from "../imgs/34.jpg"
import image5 from "../imgs/36.jpg"
import image6 from "../imgs/40.jpg"
import image7 from "../imgs/41.jpg"
import image8 from "../imgs/6.jpg"
import { HiOutlineArrowSmallRight, HiOutlineArrowSmallLeft} from "react-icons/hi2";
const images = [
  // Add your image URLs here
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image3,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
 
 
];
export default function Clients() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  return (
    <div className="clients">
      <div className="container">
        <div className="title">
          <h2>Our Clients</h2>
        </div>
        <div className="carousel">
          <div className="slider">
            {images
              .slice(currentSlide, currentSlide + 8)
              .map((image, index) => (
                <img key={index} src={image} alt={`Slide ${index + 1}`} />
              ))}
          </div>
          <button className="butn prev" onClick={prevSlide}>
          <HiOutlineArrowSmallLeft />
          </button>
          <button className="butn next" onClick={nextSlide}>
          <HiOutlineArrowSmallRight />
          </button>
        </div>
      </div>
    </div>
  );
}
