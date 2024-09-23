import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
      </div>
      <Footer />
    </>
  );
}
