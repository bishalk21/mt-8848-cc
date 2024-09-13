import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Team from "./components/team/Team";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Hero />
        <About />
        <Team />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
