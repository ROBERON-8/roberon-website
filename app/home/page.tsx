import HeroPage from "../components/HeroPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Products from "../components/Products";

export default function HomePage() {
  return (
    <main className=" min-h-screen w-full">
      <div className="absolute top-0 left-0 w-full z-10 flex items-center justify-center">
        <Navbar />
      </div>
      <HeroPage />
      <Services />
      <Products />
      <Testimonials />
      <Footer />
    </main>
  );
}
