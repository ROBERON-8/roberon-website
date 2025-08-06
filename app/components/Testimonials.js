"use client";
import Image from "next/image";


// Mock testimonial data (short comments for grid)
const testimonials = [
  {
    name: "Sarah W.",
    role: "Product Designer",
    comment: "Amazing quality and fast turnaround. The team was super helpful!",
    avatar: "/images/avatar1.jpg", // Replace with your own avatar images or leave blank for generic
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
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-black"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="flex flex-row w-[80vw] max-w-6xl h-[60vh] shadow-lg rounded-2xl overflow-hidden bg-[#181818]">
        {/* Left: Testimonials Grid */}
        <div className="flex-1 flex flex-col justify-center items-center px-10 py-10 bg-[#181818]">
          <div className="text-3xl font-bold text-red-600 mb-8 w-full text-left">What Our Customers Say</div>
          <div className="grid grid-cols-2 grid-rows-2 gap-6 w-full">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#222] rounded-xl p-5 flex flex-col items-start shadow hover:shadow-lg transition">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700 mr-3 border border-[#333]">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={40}
                      height={40}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-base">{t.name}</div>
                    <div className="text-sm text-gray-400">{t.role}</div>
                  </div>
                </div>
                <div className="text-gray-200 text-[1rem] italic leading-snug">&ldquo;{t.comment}&rdquo;</div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Static Image */}
        <div className="flex-1 relative min-w-[350px] flex items-center justify-center bg-black">
          <Image
            src="/images/testimonials-right.jpg" // Place your static image in /public/images/
            alt="Happy Customers"
            fill
            style={{ objectFit: "cover" }}
            className="transition-all duration-500"
            priority
          />
        </div>
      </div>
    </main>
  );
}