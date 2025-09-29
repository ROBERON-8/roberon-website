'use client';
import Image from 'next/image';
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useRouter, usePathname } from 'next/navigation'; // Import usePathname

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Get current pathname
  const navRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && menuOpen) {
        setMenuOpen(false);
      }
    };

    // Add event listener when menu is open
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Function to determine if a route is active
  const isActive = (route) => {
    return pathname === route;
  }

  // Function to get button classes based on active state
  const getButtonClasses = (route, baseClasses) => {
    if (isActive(route)) {
      return `${baseClasses} bg-white text-black`;
    }
    return `${baseClasses} text-gray-300 `;
  }
  const handleTeams = () => {
  if (pathname !== "/home") {
    // Navigate to /home and add a hash for the section
    router.push("/home#teams");
  } else {
    // Already on /home, just scroll to section
    const el = document.getElementById("teams");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
};

  // Mobile button classes
  const getMobileButtonClasses = (route) => {
    if (isActive(route)) {
      return "w-full text-left bg-white text-black border-b border-gray-600 py-2 px-3 rounded";
    }
    return "w-full text-left text-white border-b border-gray-600 py-2";
  }

  return (
    <nav ref={navRef} className="bg-black w-full shadow-lg py-2 z-50 fixed top-0 left-0 right-0 ">
      <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between h-14 px-4 ">
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Left Navigation (Desktop) */}
        <div className="hidden md:flex items-center justify-center gap-2">
          <button 
            className={getButtonClasses('/home', 'h-10 rounded-full cursor-target font-medium w-24 text-md hover:scale-110 transition-all duration-300 ease-in-out')}
            onClick={() => router.push('/home')}
          >
            Home
          </button>
          <button 
            className="text-gray-300 rounded-full w-24 h-10 cursor-target text-md hover:scale-110 flex items-center justify-center gap-1 transition-all duration-300 ease-in-out" onClick={handleTeams}
          >
            Team
          </button>
        </div>

        {/* Center Logo (Desktop) / Right Logo (Mobile) */}
        <div className="flex justify-center items-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <Image
            src="/Roberon White SVG.svg"
            alt="Logo"
            width={120}
            height={32}
            className="object-contain h-8 w-auto"
          />
        </div>

        {/* Right Navigation (Desktop only) */}
        <div className="hidden md:flex items-center justify-center gap-2">
          <button 
            className={getButtonClasses('/events', 'rounded-full cursor-target w-24 h-10 text-md hover:scale-110 transition-all duration-300 ease-in-out')}
            onClick={() => router.push('/events')}
          >
            Events
          </button>
          <button 
            className={getButtonClasses('/blogs', 'h-10 rounded-full cursor-target flex items-center justify-center gap-1 w-28 text-md hover:scale-110 transition-all duration-300 ease-in-out')}
            onClick={() => router.push('/blogs')}
          >
            Blogs
          </button>
          <div className="bg-slate-800 cursor-target w-12 h-10 rounded-full border border-white flex items-center justify-center top-4 right-0 z-50  shadow-lg hover:scale-105 transition-transform" onClick={() => router.push('https://we-gift-3-d.vercel.app/')}>
            <Image src='/wegift logo.png' alt='WeGift 3D logo' height={100} width={100} className='w-auto h-auto' />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black w-full left-0 right-0 border-t border-gray-700">
          <div className="max-w-[1400px] mx-auto px-4 py-4 space-y-2 flex flex-col items-start">
            <button 
              className={getMobileButtonClasses('/home')} 
              onClick={() => {
                router.push('/home');
                setMenuOpen(false);
              }}
            >
              Home
            </button>
            <button 
              className="w-full text-left text-white border-b border-gray-600 py-2" 
              onClick={() => {
                handleTeams();
                setMenuOpen(false);
              }}
            >
              Team
            </button>
            <button 
              className={getMobileButtonClasses('/events')} 
              onClick={() => {
                router.push('/events');
                setMenuOpen(false);
              }}
            >
              Events
            </button>
            <button 
              className={getMobileButtonClasses('/blogs')} 
              onClick={() => {
                router.push('/blogs');
                setMenuOpen(false);
              }}
            >
              Blogs
            </button>
            <button 
              className='flex items-center justify-start w-full text-left text-white py-2 gap-2' 
              onClick={() => {
                window.location.href = 'https://we-gift-3-d.vercel.app/';
                setMenuOpen(false);
              }}
            >
              <Image src='/wegift logo.png' alt='WeGift 3D logo' height={32} width={32} className='w-8 h-8 object-contain' />
              <p className='text-md'>WeGift 3D</p>
              <IoIosArrowRoundForward size={24}/>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}