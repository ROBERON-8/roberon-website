'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

// Mock testimonial data
const testimonials = [
  {
    name: "Sarah W.",
    role: "Product Designer",
    comment: "Amazing quality and fast turnaround. The team was super helpful!",
    avatar: "/images/avatar1.jpg",
  },
  {
    name: "David K.",
    role: "Engineer",
    comment: "Professional service and fantastic print accuracy. Highly recommended.",
    avatar: "/images/avatar2.jpg",
  },
  {
    name: "Ayesha P.",
    role: "Entrepreneur",
    comment: "Helped us get to market faster with reliable prototypes.",
    avatar: "/images/avatar3.jpg",
  },
  {
    name: "Liam T.",
    role: "Architect",
    comment: "Every detail was perfect. Will work with them again!",
    avatar: "/images/avatar4.jpg",
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden bg-[#181818]">
          {/* Left: Testimonials Grid */}
          <div className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mb-6 sm:mb-8">
              What Our <span className="text-white">Customers Say</span>
            </h2>
            
            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#222] rounded-xl p-4 sm:p-5 hover:bg-[#2a2a2a] transition-all duration-300 
                           transform hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Profile Section */}
                  <div className="flex items-center mb-3 space-x-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-700 
                                  border border-[#333] flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="font-semibold text-white text-sm sm:text-base truncate">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm truncate">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  {/* Comment */}
                  <blockquote className="text-gray-200 text-sm sm:text-base italic leading-relaxed">
                    &ldquo;{testimonial.comment}&rdquo;
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image Section */}
          <div className="w-full lg:w-2/5 relative min-h-[300px] lg:min-h-[600px]">
            <Image
              src="/images/testimonials-right.jpg"
              alt="Happy Customers"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#181818] via-transparent to-transparent 
                          opacity-50 lg:opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}