import { Menu, X } from "lucide-react";
import img from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { scrollToSection } from "@/utils/scrollToSections";

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  openPopup: () => void;
}

export default function Navbar({
  isMenuOpen,
  toggleMenu,
  openPopup,
}: NavbarProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOnClick = (sectionId: string) => {
    scrollToSection(sectionId);
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <>
      <nav className="bg-blue-600 text-white p-4 sticky top-0 z-20">
        <div className=" container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center"
              onClick={() => {
                scrollToTop();
                handleOnClick("hero");
              }}
            >
              <img src={img} className="h-16 w-16 mr-2" />
              <h1 className="text-2xl font-bold">Mt. 8848 Cricket Club</h1>
            </Link>
          </div>
          <div className="hidden lg:flex space-x-4">
            <Link
              to="/"
              className="hover:text-blue-200"
              onClick={() => handleOnClick("hero")}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-200"
              onClick={() => handleOnClick("about")}
            >
              About Us
            </Link>
            <Link
              to="/team"
              className="hover:text-blue-200"
              onClick={() => handleOnClick("team")}
            >
              Our Team
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-200"
              onClick={() => handleOnClick("contact")}
            >
              Contact Us
            </Link>
            <button
              onClick={openPopup}
              className="bg-yellow-500 text-blue-900 p-2 py-0 rounded-full hover:bg-yellow-400 transition duration-300"
            >
              Become a Member
            </button>
          </div>
          <button
            className="lg:hidden"
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
          <div className="container font-bold mx-auto text-center flex justify-between items-center">
            <div className="lg:hidden mt-2 w-full space-y-2">
              <Link
                to="/"
                className="block hover:text-blue-200"
                onClick={() => handleOnClick("hero")}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block hover:text-blue-200"
                onClick={() => handleOnClick("about")}
              >
                About Us
              </Link>
              <Link
                to="/team"
                className="block hover:text-blue-200"
                onClick={() => handleOnClick("team")}
              >
                Our Team
              </Link>
              <Link
                to="/contact"
                className="block hover:text-blue-200"
                onClick={() => handleOnClick("contact")}
              >
                Contact Us
              </Link>
              <button
                onClick={() => {
                  openPopup();
                  toggleMenu();
                }}
                className="block w-full bg-yellow-500 text-blue-900 p-1 rounded-full hover:bg-yellow-400 transition duration-300"
              >
                Become a Member
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
