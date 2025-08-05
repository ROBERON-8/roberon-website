import Image from "next/image";
import HeroPage from "./components/HeroPage";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className=" min-h-screen w-full">
      <div className="absolute top-0 left-0 w-full z-10 flex items-center justify-center">
        <Navbar />
      </div>
      <HeroPage />
      <div className=" w-full h-screen">
        <Services />
      </div>
      <Testimonials />
    </main>
  );
}
