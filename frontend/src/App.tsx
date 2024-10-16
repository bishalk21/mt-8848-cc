import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Team from "./components/team/Team";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BecomeMember from "./components/become-a-member/BecomeMember";

export const AppRouter = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="h-full bg-gray-100 relative w-full">
      <Navbar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        openPopup={openPopup}
      />

      {isPopupOpen && (
        <div className="absolute bg-opacity-50 bg-gray-300 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full flex justify-center items-center z-10">
          <BecomeMember onClose={closePopup} isOpen={isPopupOpen} />
        </div>
      )}

      <Hero />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
