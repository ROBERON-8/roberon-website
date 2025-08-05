'use client'
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {

  return (
    <nav className="bg-black w-full px-4 shadow-lg py-2">
    <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between h-12">
        {/* Left Navigation */}
        <div className="flex items-center justify-center gap-2">
          <button className="bg-white text-center text-black h-10 rounded-full font-medium w-32 border-[1px] border-white">
            Home
          </button>
          <button className="text-gray-300 rounded-full text-center w-32 h-10 border-[1px] border-white">
            Brands
          </button>
          <button className="text-gray-300 h-10 rounded-full flex text-center items-center justify-center gap-1 w-36 border-[1px] border-white">
            Collections
            <IoIosArrowDown className="text-white ml-1" size={18} />
          </button>
        </div>

        {/* Center Logo Section */}
        <div className="flex justify-center items-center">
          <div className=" flex items-center justify-center">
            <Image
              src="/Roberon Logo.jpg"
              alt="Logo"
              width={256}
              height={100}
              className="h-10 w-64 object-fit-contain "
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center gap-2 ">


          {/* Icons Container */}
          <div className="flex gap-4">
            {/* Shopping Bag Icon */}
          <button className="text-gray-300 rounded-full text-center w-32 h-10 border-[1px] border-white">
            Events
          </button>
          <button className="text-gray-300 h-10 rounded-full flex text-center items-center justify-center gap-1 px-4 py-5 w-36 border-[1px] border-white">
            Blogs
          </button>
          <button className="bg-red-700 w-14 h-10 rounded-full border-[1px] border-white flex items-center justify-center">
            <AiOutlineShoppingCart className="w-6 h-6 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}