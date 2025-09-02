'use client';
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useRouter, usePathname } from 'next/navigation'; // Import usePathname

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Get current pathname

  const handleBrands = () => {
    if (pathname !== "/home") {
      // Navigate to /home and add a hash for the section
      router.push("/home#brands");
    } else {
      // Already on /home, just scroll to section
      const el = document.getElementById("brands");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Function to determine if a route is active
  const isActive = (route) => {
    return pathname === route;
  }

  // Function to get button classes based on active state
  const getButtonClasses = (route, baseClasses) => {
    if (isActive(route)) {
      return `${baseClasses} bg-white text-black`;
    }
    return `${baseClasses} text-gray-300 border border-white`;
  }

  // Mobile button classes
  const getMobileButtonClasses = (route) => {
    if (isActive(route)) {
      return "w-full text-left bg-white text-black border-b border-gray-600 py-2 px-3 rounded";
    }
    return "w-full text-left text-white border-b border-gray-600 py-2";
  }

  return (
    <nav className="bg-black w-full pl-4 shadow-lg py-2 z-50">
      <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between h-14">
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Left Navigation (Desktop) */}
        <div className="hidden md:flex items-center justify-center gap-2">
          <button 
            className={getButtonClasses('/home', 'h-10 rounded-full font-medium w-24 text-md hover:scale-110')}
            onClick={() => router.push('/home')}
          >
            Home
          </button>
          <button 
            className="text-gray-300 rounded-full w-24 h-10 border border-white text-md hover:scale-110 flex items-center justify-center gap-1" 
            onClick={handleBrands}
          >
            Brands
          </button>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center items-center">
          <Image
            src="/Roberon Logo.jpg"
            alt="Logo"
            width={150}
            height={40}
            className="object-contain h-10 w-auto"
          />
        </div>

        {/* Right Navigation (Desktop) */}
        <div className="hidden md:flex items-center justify-center gap-2">
          <button 
            className={getButtonClasses('/events', 'rounded-full w-24 h-10 text-md hover:scale-110')}
            onClick={() => router.push('/events')}
          >
            Events
          </button>
          <button 
            className={getButtonClasses('/blogs', 'h-10 rounded-full flex items-center justify-center gap-1 w-28 text-md hover:scale-110')}
            onClick={() => router.push('/blogs')}
          >
            Blogs
          </button>
          <div className="bg-slate-800 w-12 h-10 rounded-full border border-r-0 border-white flex items-center justify-center  top-4 right-0 z-50 rounded-l-full rounded-r-none shadow-lg hover:scale-105 transition-transform" onClick={() => router.push('https://we-gift-3-d.vercel.app/')}>
            <Image src='/wegift logo.png' alt='WeGift 3D logo' height={100} width={100} className='w-auto h-auto' />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2 flex flex-col items-start px-2 z-20">
          <button 
            className={getMobileButtonClasses('/home')} 
            onClick={() => router.push('/home')}
          >
            Home
          </button>
          <button 
            className="w-full text-left text-white border-b border-gray-600 py-2" 
            onClick={handleBrands}
          >
            Brands
          </button>
          <button 
            className={getMobileButtonClasses('/events')} 
            onClick={() => router.push('/events')}
          >
            Events
          </button>
          <button 
            className={getMobileButtonClasses('/blogs')} 
            onClick={() => router.push('/blogs')}
          >
            Blogs
          </button>
        </div>
      )}
    </nav>
  );
}