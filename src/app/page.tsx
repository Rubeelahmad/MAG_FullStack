import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroText from "./components/HeroText";

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Features />
        <HeroText />
      </div>
      <Footer />
    </>
  );
}
