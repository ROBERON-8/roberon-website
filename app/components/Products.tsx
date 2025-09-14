'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

// Product data
const products = [
  {
    title: "Car 3D prints",
    description: "High-precision 3D printed mechanical parts for industrial applications",
    image: "/products/car-img.jpg",
    link: "/products/car-img.jpg",
  },
  {
    title: "3D Heart",
    description: "Lightweight and durable components for aerospace industry",
    image: "/products/heart-hm.jpg",
    link: "/products/heart-hm.jpg",
  },
  {
    title: "Squid game inspired key chains",
    description: "Rapid prototyping services for mechanical engineering",
    image: "/products/key-chain.jpg",
    link: "/products/key-chain.jpg",
  },
  {
    title: "3D printed bike chain ring",
    description: "Complex geometries and tight tolerance components",
    image: "/products/bike-chain.jpg",
    link: "/products/bike-chain.jpg",
  },
  {
    title: "Key rings",
    description: "Complex geometries and tight tolerance components",
    image: "/products/key-ring.jpg",
    link: "/products/key-ring.jpg",
  },
  {
    title: "3D printed F1 tyre key ring",
    description: "Complex geometries and tight tolerance components",
    image: "/products/f1-tyre.jpg",
    link: "/products/f1-tyre.jpg",
  }
];

export default function Products() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
<motion.section
  ref={sectionRef}
  initial={{ opacity: 0 }}
  animate={isInView ? { opacity: 1 } : {}}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="w-full bg-black py-16 px-4 sm:px-6 lg:px-8"
>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-4">
            <span className="text-white">Our</span> Products
          </h2>
          <p className="text-gray-300 text-lg">
            Discover our range of 3D-printed products engineered for precision, durability, and innovation across industries.
          </p>
        </motion.div>

        {/* Products Container with Scroll */}
        <div className="relative">
          {/* Scroll Buttons */}
          {showLeftButton && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 
                       text-white rounded-full p-3 transform -translate-x-1/2
                       transition-all duration-300 hover:scale-110"
            >
              <FaChevronLeft size={24} />
            </button>
          )}
          {showRightButton && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 
                       text-white rounded-full p-3 transform translate-x-1/2
                       transition-all duration-300 hover:scale-110"
            >
              <FaChevronRight size={24} />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="flex-shrink-0 w-[300px]"
              >
                <Link
                  href="https://we-gift-3-d.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-[#181818] rounded-2xl overflow-hidden shadow-lg 
                                transition-all duration-300 ease-in-out
                                transform hover:scale-105 hover:shadow-2xl
                                hover:shadow-red-600/20 h-full">
                    {/* Image Container */}
                    <div className={`relative overflow-hidden ${index < 0 ? 'aspect-[4/3]' : 'aspect-square'}`}>
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-500 
                                 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2
                                   group-hover:text-red-600 transition-colors duration-300">
                        {product.title}
                      </h3>

                      {/* Link Indicator */}
                      <div className="mt-4 flex items-center text-red-600 text-sm font-semibold
                                    transform translate-x-0 group-hover:translate-x-2 transition-transform">
                        Learn More
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
