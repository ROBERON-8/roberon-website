import React from 'react';
import Image from 'next/image';
import { IoArrowForwardSharp } from "react-icons/io5";

const HeroPage = () => {
  return (
    <main>
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/Home.jpg"
          alt="Background Image"
          fill
          className="object-cover"
          priority
        />

        {/* Top-left text */}
        <div className="absolute top-56 sm:top-40 left-0 px-4 sm:px-8">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl pointer-events-none">
            We are your
          </h1>
        </div>

        {/* Drone image center */}
        <div className="relative z-20 w-60 h-60 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
          <Image
            src="/images/drone.png"
            alt="Drone"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Bottom-right text */}
        <div className="absolute bottom-64 sm:bottom-44 right-0 z-10 px-4 sm:px-8">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-right pointer-events-none">
            makers of motion.
          </h1>
        </div>

        {/* Bottom-left CTA section */}
        <div className="absolute bottom-12 sm:bottom-20 left-0 z-10 px-4 sm:px-8 w-full sm:w-[30vw]">
          <p className="text-white text-sm sm:text-base mt-1 italic">
            From Filament to Flight –
          </p>
          <p className="text-white text-sm sm:text-base mt-1 italic">
            Customized Robotics & Industry Automation
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="bg-red-700 hover:bg-transparent hover:border-red-700 border border-red-700 transition duration-300 text-white px-6 py-2 rounded-full">
              Explore
            </button>
            <button className="bg-transparent hover:bg-white hover:text-black transition duration-300 border border-white text-white px-6 py-2 rounded-full flex items-center">
              Our Products <IoArrowForwardSharp className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroPage;
