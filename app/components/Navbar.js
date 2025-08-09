'use client';
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter

  return (
    <nav className="bg-black w-full px-4 shadow-lg py-2 z-50">
      <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between h-14">
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Left Navigation (Desktop) */}
        <div className="hidden md:flex items-center justify-center gap-2">
          <button className="bg-white text-black h-10 rounded-full font-medium w-24 border border-white text-sm" onClick={() => router.push('/home')}>
            Home
          </button>
          <button className="text-gray-300 rounded-full w-24 h-10 border border-white text-sm">
            Brands
          </button>
          <button className="text-gray-300 h-10 rounded-full flex items-center justify-center gap-1 w-32 border border-white text-sm">
            Collections
            <IoIosArrowDown className="text-white ml-1" size={16} />
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
          <button className="text-gray-300 rounded-full w-24 h-10 border border-white text-sm">
            Events
          </button>
          <button className="text-gray-300 h-10 rounded-full flex items-center justify-center gap-1 w-28 border border-white text-sm">
            Blogs
          </button>
          <button className="bg-red-700 w-12 h-10 rounded-full border border-white flex items-center justify-center">
            <AiOutlineShoppingCart className="w-6 h-6 text-gray-300" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2 flex flex-col items-start px-2 z-20">
          <button className="w-full text-left text-white border-b border-gray-600 py-2">Home</button>
          <button className="w-full text-left text-white border-b border-gray-600 py-2">Brands</button>
          <button className="w-full text-left text-white border-b border-gray-600 py-2 flex items-center justify-between">
            Collections
            <IoIosArrowDown className="ml-2" />
          </button>
          <button className="w-full text-left text-white border-b border-gray-600 py-2">Events</button>
          <button className="w-full text-left text-white border-b border-gray-600 py-2">Blogs</button>
        </div>
      )}
    </nav>
  );
}
