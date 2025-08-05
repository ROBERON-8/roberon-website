"use client";
import Image from "next/image";
import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

// Mock slide data
const slides = [
  {
    image: "https://via.placeholder.com/600x400/333333/ffffff?text=Service+1", 
    heading: "Printing Dreams, Future Themes",
    subheading: "Your Vision, Our Print",
    description:
      "At Roberon, we pioneer the future of 3D printing, surpassing boundaries with a visionary team. Join us on a journey where ideas become precision-crafted reality.",
    buttonText: "Know More",
  },
  {
    image: "https://via.placeholder.com/600x400/444444/ffffff?text=Service+2",
    heading: "Innovative Prototyping Solutions",
    subheading: "Prototyping Redefined",
    description:
      "Accelerate your product development with our advanced prototyping services. We turn your concepts into tangible prototypes with unmatched speed and accuracy.",
    buttonText: "Discover",
  },
  {
    image: "https://via.placeholder.com/600x400/555555/ffffff?text=Service+3",
    heading: "Customization at Every Layer",
    subheading: "Tailor-Made 3D Prints",
    description:
      "Every project is unique. Our team collaborates with you to deliver highly customized, functional, and aesthetic 3D-printed solutions.",
    buttonText: "Explore",
  },
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slide = slides[currentSlide];

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-black"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="flex flex-row w-[90vw] max-w-6xl h-[75vh] shadow-lg rounded-2xl overflow-hidden bg-[#181818]">
        {/* Image Section */}
        <div className="flex-1 relative min-w-[350px] flex items-center justify-center bg-black">
          <Image
            src={slide.image}
            alt={slide.heading}
            fill
            style={{ objectFit: "cover" }}
            className="transition-all duration-500"
            priority
          />
        </div>
        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-center items-center relative px-12 py-10 bg-[#181818]">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="group absolute left-4 top-1/2 -translate-y-1/2 w-15 h-15 opacity-50 hover:opacity-100 flex items-center justify-center bg-[#222] rounded-full hover:bg-[#333] transition"
            aria-label="Previous Slide"
          >
            <FaAngleLeft className="text-gray-500 group-hover:text-white" size={24}/>
          </button>

          {/* Content */}
          <div className="max-w-xl text-white text-left">
            <div className="text-lg mb-2 text-gray-300">{slide.subheading}</div>
            <div className="text-5xl font-bold mb-6 text-red-600 leading-tight">
              {slide.heading}
            </div>
            <div className="text-lg mb-8 text-gray-200">{slide.description}</div>
            <button className="px-8 py-3 rounded-full bg-red-600 text-white font-semibold text-lg hover:bg-red-700 transition">
              {slide.buttonText}
            </button>
          </div>
          {/* Next Button */}
          <button
            onClick={handleNext}
            className="group absolute right-4 top-1/2 -translate-y-1/2 w-15 h-15 opacity-50 hover:opacity-100 flex items-center justify-center bg-[#222] rounded-full hover:bg-[#333] transition"
            aria-label="Next Slide"
          >
            <FaAngleRight className="text-gray-500 group-hover:text-white" size={24}/>
          </button>
        </div>
      </div>
    </main>
  );
}