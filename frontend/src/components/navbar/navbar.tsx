import { useState } from "react";
import { Menu, X } from "lucide-react";
import BecomeMember from "../become-a-member/BecomeMember";
import img from "../../assets/logo.png";

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function Navbar({ isMenuOpen, toggleMenu }: NavbarProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <nav className="bg-blue-600 text-white p-4 ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={img} className="h-16 w-16 mr-2" />
            <h1 className="text-2xl font-bold">Mt. 8848 Cricket Club</h1>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-blue-200">
              Home
            </a>
            <a href="#about" className="hover:text-blue-200">
              About Us
            </a>
            <a href="#team" className="hover:text-blue-200">
              Our Team
            </a>
            <a href="#contact" className="hover:text-blue-200">
              Contact Us
            </a>
            <button
              onClick={openPopup}
              className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full hover:bg-yellow-400 transition duration-300"
            >
              Become a Member
            </button>
          </div>
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <a
              href="#home"
              className="block hover:text-blue-200"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="block hover:text-blue-200"
              onClick={toggleMenu}
            >
              About Us
            </a>
            <a
              href="#team"
              className="block hover:text-blue-200"
              onClick={toggleMenu}
            >
              Our Team
            </a>
            <a
              href="#contact"
              className="block hover:text-blue-200"
              onClick={toggleMenu}
            >
              Contact Us
            </a>
            <button
              onClick={() => {
                openPopup();
                toggleMenu();
              }}
              className="block w-full text-left bg-yellow-500 text-blue-900 px-3 py-1 rounded-full hover:bg-yellow-400 transition duration-300"
            >
              Become a Member
            </button>
          </div>
        )}
      </nav>
      <BecomeMember isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
}
