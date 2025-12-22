import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/medilinkLogo.png";
import Dark from "../assets/images/Logo.png";

import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md"; // 🌙 ☀️ icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo */}
          <div   className="flex items-center justify-center"
>
          <Link to="/" className="flex-shrink-0">
            <img
              src={darkMode ? Dark : logo}
              alt="Medilink"
              className=" w-[120px] h-40 object-contain transition-all duration-300"
            />
          </Link>
        </div>  
           
          

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 px-6 py-3 rounded-full 
            bg-blue-50 dark:bg-gray-800 transition">
            {["About Us", "How it Works", "Features", "FAQs"].map((item) => (
              <Link
                key={item}
                to={
                  item === "About Us"
                    ? "/about"
                    : item === "How it Works"
                    ? "/how-it-works"
                    : item === "Features"
                    ? "/features"
                    : "/faq"
                }
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 
                font-semibold text-base transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 
              hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              {darkMode ? (
                <MdLightMode className="w-6 h-6 text-yellow-300" />
              ) : (
                <MdDarkMode className="w-6 h-6 text-gray-900" />
              )}
            </button>

            {/* Desktop CTA */}
            <Link
              to="/waitlist"
              className="hidden sm:block bg-blue-600 px-6 py-2.5 text-white font-medium rounded-full 
              hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Join Waitlist
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {isOpen ? (
                <IoClose className="w-8 h-8 text-gray-800 dark:text-white" />
              ) : (
                <CiMenuFries className="w-8 h-8 text-gray-800 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-6 space-y-2">
          {["About Us", "How it Works", "Features", "FAQs"].map((item) => (
            <Link
              key={item}
              to={
                item === "About Us"
                  ? "/about"
                  : item === "How it Works"
                  ? "/how-it-works"
                  : item === "Features"
                  ? "/features"
                  : "/faq"
              }
              onClick={closeMenu}
              className="block py-3.5 text-center text-gray-800 dark:text-gray-200 
              text-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-800 
              rounded-xl transition-colors"
            >
              {item}
            </Link>
          ))}

          <Link
            to="/waitlist"
            onClick={closeMenu}
            className="block mt-6 bg-blue-600 text-white text-center py-4 rounded-full font-semibold 
            text-lg hover:bg-blue-700 transition-all shadow-lg"
          >
            Join Waitlist
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
