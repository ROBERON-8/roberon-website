'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

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
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slide = slides[currentSlide];

  return (
    <section className="min-h-auto w-full bg-black py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden bg-[#181818] shadow-2xl">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={slide.image}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.image}
                    alt={slide.heading}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Mobile Navigation Buttons */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 lg:hidden">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition"
                  aria-label="Previous Slide"
                >
                  <FaAngleLeft className="text-white" size={20}/>
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition"
                  aria-label="Next Slide"
                >
                  <FaAngleRight className="text-white" size={20}/>
                </button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="p-6 sm:p-8 lg:p-12">
              
              {/* Desktop Navigation Buttons */}
              <div className="hidden lg:block">
                <button
                  onClick={handlePrev}
                  className="group absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 opacity-50 hover:opacity-100 
                           flex items-center justify-center bg-[#222] rounded-full hover:bg-[#333] transition"
                  aria-label="Previous Slide"
                >
                  <FaAngleLeft className="text-gray-500 group-hover:text-white" size={24}/>
                </button>
                <button
                  onClick={handleNext}
                  className="group absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 opacity-50 hover:opacity-100 
                           flex items-center justify-center bg-[#222] rounded-full hover:bg-[#333] transition"
                  aria-label="Next Slide"
                >
                  <FaAngleRight className="text-gray-500 group-hover:text-white" size={24}/>
                </button>
              </div>

              {/* Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.heading}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6 }}
                  className="text-center lg:text-left"
                >
                  <p className="text-base sm:text-lg text-gray-300 mb-2">
                    {slide.subheading}
                  </p>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-4 sm:mb-6 leading-tight">
                    {slide.heading}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-8">
                    {slide.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-red-600 text-white 
                                 font-semibold text-base sm:text-lg hover:bg-red-700 transition-colors"
                  >
                    {slide.buttonText}
                  </motion.button>
                </motion.div>
              </AnimatePresence>

              {/* Slide Indicators */}
              <div className="flex justify-center lg:justify-start mt-8 space-x-2">
                {slides.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'w-6 bg-red-600' : 'bg-gray-600'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
