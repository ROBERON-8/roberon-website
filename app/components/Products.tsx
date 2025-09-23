// 'use client';
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useRef } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { motion, useInView } from "framer-motion";

// // Product data
// const products = [
//   {
//     title: "Car 3D prints",
//     description: "High-precision 3D printed mechanical parts for industrial applications",
//     image: "/products/car-img.jpg",
//     link: "/products/car-img.jpg",
//   },
//   {
//     title: "3D Heart",
//     description: "Lightweight and durable components for aerospace industry",
//     image: "/products/heart-hm.jpg",
//     link: "/products/heart-hm.jpg",
//   },
//   {
//     title: "Squid game inspired key chains",
//     description: "Rapid prototyping services for mechanical engineering",
//     image: "/products/key-chain.jpg",
//     link: "/products/key-chain.jpg",
//   },
//   {
//     title: "3D printed bike chain ring",
//     description: "Complex geometries and tight tolerance components",
//     image: "/products/bike-chain.jpg",
//     link: "/products/bike-chain.jpg",
//   },
//   {
//     title: "Key rings",
//     description: "Complex geometries and tight tolerance components",
//     image: "/products/key-ring.jpg",
//     link: "/products/key-ring.jpg",
//   },
//   {
//     title: "3D printed F1 tyre key ring",
//     description: "Complex geometries and tight tolerance components",
//     image: "/products/f1-tyre.jpg",
//     link: "/products/f1-tyre.jpg",
//   }
// ];

// export default function Products() {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const [showLeftButton, setShowLeftButton] = useState(false);
//   const [showRightButton, setShowRightButton] = useState(true);

//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

//   const scroll = (direction: 'left' | 'right') => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = 400;
//       const newScrollPosition =
//         scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

//       scrollContainerRef.current.scrollTo({
//         left: newScrollPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const handleScroll = () => {
//     if (scrollContainerRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
//       setShowLeftButton(scrollLeft > 0);
//       setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
//     }
//   };

//   return (
// <motion.section
//   ref={sectionRef}
//   initial={{ opacity: 0 }}
//   animate={isInView ? { opacity: 1 } : {}}
//   transition={{ duration: 0.8, ease: "easeOut" }}
//   className="w-full bg-black py-16 px-4 sm:px-6 lg:px-8"
// >

//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-4">
//             <span className="text-white">Our</span> Products
//           </h2>
//           <p className="text-gray-300 text-lg">
//             Discover our range of 3D-printed products engineered for precision, durability, and innovation across industries.
//           </p>
//         </motion.div>

//         {/* Products Container with Scroll */}
//         <div className="relative">
//           {showLeftButton && (
//             <button
//               onClick={() => scroll('left')}
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 
//                        text-white rounded-full p-3 transform -translate-x-1/2
//                        transition-all duration-300 hover:scale-110 cursor-target"
//             >
//               <FaChevronLeft size={24} />
//             </button>
//           )}
//           {showRightButton && (
//             <button
//               onClick={() => scroll('right')}
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 
//                        text-white rounded-full p-3 transform translate-x-1/2
//                        transition-all duration-300 hover:scale-110 cursor-target"
//             >
//               <FaChevronRight size={24} />
//             </button>
//           )}

//           {/* Scrollable Container */}
//           <div
//             ref={scrollContainerRef}
//             onScroll={handleScroll}
//             className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {products.map((product, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
//                 className="flex-shrink-0 w-[300px] cursor-target"
//               >
//                 <Link
//                   href="https://we-gift-3-d.vercel.app/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group"
//                 >
//                   <div className="bg-[#181818] rounded-2xl overflow-hidden shadow-lg 
//                                 transition-all duration-300 ease-in-out
//                                 transform hover:scale-105 hover:shadow-2xl
//                                 hover:shadow-red-600/20 h-full">

//                     <div className={`relative overflow-hidden ${index < 0 ? 'aspect-[4/3]' : 'aspect-square'}`}>
//                       <Image
//                         src={product.image}
//                         alt={product.title}
//                         fill
//                         className="object-cover transition-transform duration-500 
//                                  group-hover:scale-110"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
//                                     opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     </div>


//                     <div className="p-6">
//                       <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2
//                                    group-hover:text-red-600 transition-colors duration-300">
//                         {product.title}
//                       </h3>
//                       <div className="mt-4 flex items-center text-red-600 text-sm font-semibold
//                                     transform translate-x-0 group-hover:translate-x-2 transition-transform">
//                         Learn More
//                         <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }


'use client';
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Products() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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

        {/* Work in Progress Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center justify-center min-h-[400px] relative"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse opacity-30"></div>
            
            {/* Floating gears */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-16 h-16 text-red-500/20"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                </svg>
              </motion.div>
            ))}
          </div>

          {/* Main Icon */}
          <motion.div
            className="relative mb-8 z-10"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-24 h-24">
              <motion.div
                className="w-full h-full border-3 border-red-500 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
                </svg>
              </motion.div>
              
              {/* Progress dots */}
              <motion.div
                className="absolute top-0 left-1/2 w-3 h-3 bg-red-400 rounded-full"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: '0 48px' }}
              />
              <motion.div
                className="absolute bottom-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full"
                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: '0 -48px' }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Crafting Excellence
              </span>
            </h3>
            <p className="text-lg text-gray-400 mb-2">
              Our product showcase is currently under development
            </p>
            <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
              We&apos;re working hard to bring you an amazing collection of 3D printed products. 
              Stay tuned for innovative designs and precision engineering!
            </p>
          </motion.div>

          {/* Progress Bar */}
          {/* <motion.div
            className="mt-8 w-64 bg-gray-800 rounded-full h-2 overflow-hidden relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-red-600 to-red-500"
              initial={{ width: "0%" }}
              animate={{ width: "75%" }}
              transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: [-200, 264] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.div> */}

          {/* Status Text */}
          {/* <motion.div
            className="mt-4 text-red-400 text-sm font-medium flex items-center gap-2 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <motion.div
              className="w-2 h-2 bg-red-500 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            75% Complete - Coming Soon
          </motion.div> */}

          {/* Action Button */}
          {/* <motion.div
            className="mt-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <button className="bg-gradient-to-r from-red-600/20 to-red-700/20 border border-red-500/30 hover:from-red-600/30 hover:to-red-700/30 text-red-400 hover:text-red-300 font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM4.07 11H4a2 2 0 01-2-2V7.5C2 6.12 3.12 5 4.5 5S7 6.12 7 7.5V9a2 2 0 01-2 2h-.93zM15.07 11H15a2 2 0 01-2-2V7.5c0-1.38 1.12-2.5 2.5-2.5S18 6.12 18 7.5V9a2 2 0 01-2 2h-.93z"/>
                </svg>
                Get Notified
              </span>
            </button>
          </motion.div> */}
        </motion.div>
      </div>
    </motion.section>
  );
}