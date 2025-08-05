import React from 'react';
import Image from 'next/image';
import { IoArrowForwardSharp } from "react-icons/io5";

const HeroPage = () => {
  return (
    <main>
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/Home.jpg"
        alt="background Image"    
        fill
        className="object-cover"
        priority
      />
      
      {/* Text behind drone (Top-Left) */}
        <div className="absolute top-36 left-0 z-10 p-4">
        <h1 className="text-white text-6xl md:text-6xl lg:text-8xl pointer-events-none">
            We are your
        </h1>
        </div>

        {/* Drone Image in center */}
        <div className="relative z-20 w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] mx-auto">
        <Image
            src="/images/drone.png"
            alt="Drone Image"
            fill
            className="object-contain drop-shadow-2xl "
            priority
        />
        </div>

        {/* Text behind drone (Bottom-Right) */}
        <div className="absolute bottom-44 right-0 z-10 p-4">
        <h1 className="text-white text-6xl md:text-6xl lg:text-8xl pointer-events-none text-right">
            makers of motion.
        </h1>
        </div>
        <div className='absolute w-[30vw] bottom-20 left-0 ml-4 z-10 p-4'>
            <p className='text-white text-md mt-1 italic'>
                From Filament to Flight – 
            </p>
            <p className='text-white text-md mt-1 italic'>Customized Robotics & Industry Automation</p>
            <div className='mt-6'>
                <button className='bg-red-700 hover:bg-transparent hover:border-red-700 border border-red-700 transition duration-300 text-white px-6 py-2 rounded-full'>
                Explore
                </button>
                <button className='bg-transparent hover:bg-white hover:text-black transition duration-300 border border-white text-white px-6 py-2 rounded-full ml-4'>
                Our Products 
                <IoArrowForwardSharp className='inline ml-2' />
                </button>
            </div>
        </div>
    </div>
    <div>

    </div>
    </main>
  )
}

export default HeroPage;
