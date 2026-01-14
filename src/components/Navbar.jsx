import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/images/medilinkLogo.png";
import Dark from "../assets/images/Logo.png";

import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const scrollToSection = (id) => {
      setIsOpen(false);
      document.body.style.overflow = "auto";

      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    };

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
    <header className="fixed  top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo */}
          <div   className="flex items-center justify-center">
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
          bg-blue-50 dark:bg-gray-800 dark:text-white  transition">

            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="nav-link dark:hover-blue-500">
              Home
            </button>

            <button onClick={() => scrollToSection("about")} className="nav-link">
              About Us
            </button>

            <button onClick={() => scrollToSection("how-it-works")} className="nav-link">
              How it Works
            </button>

            <button onClick={() => scrollToSection("features")} className="nav-link">
              Features
            </button>

            <button onClick={() => scrollToSection("faqs")} className="nav-link">
              FAQs
            </button>

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
            <li
              onClick={() => scrollToSection("waitlist")}
              className="hidden sm:block bg-blue-600 px-6 py-2.5 text-white font-medium rounded-full 
              hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Join Waitlist
            </li>

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
          <nav className="bg-white dark:bg-gray-900 border-t border-gray-600 dark:border-white0 px-4 py-3 space-y-1">
            {[
              { label: "Home", id: "home" },
              { label: "About Us", id: "about" },
              { label: "How it Works", id: "how-it-works" },
              { label: "Features", id: "features" },
              { label: "FAQs", id: "faqs" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full py-3.5 text-center text-gray-800 dark:text-gray-200 
                text-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-800 rounded-xl transition"
              >
                {item.label}
              </button>
            ))}
            <li
              onClick={() => scrollToSection("waitlist")}
              className="block mt-4 max-w-7x1 text-center bg-blue-600 text-white py-3 rounded-full 
              font-semibold text-lg hover:bg-blue-700 transition-all shadow-md" >
              Join Waitlist
            </li>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;
