import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../assets/images/medilinkLogo.png";
import White from "../assets/images/whiteMed.png";


const Footer = () => {
  return (
    <footer className="bg-[#0051FF] text-white text-center lg:text-center">
      <div className="max-w-8xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          <div className="md:col-span-5 lg:col-span-4">
            <img src={White} alt="whitemed" className="w-[200px] mx-auto" />
            <p className="text-sm leading-relaxed sm:text-left mx-auto text-blue-100 mb-6 max-w-sm">
              Connecting healthcare professionals worldwide. Share knowledge,
              collaborate on cases, and advance medical practices.
            </p>

            <div className="flex gap-4 px-[12%] justify-center lg:justify-start">
              <a
                href="#"
                aria-label="Twitter"
                className="hover:shadow transition hover:text-[#000000] hover:shadow-[0_0_5px_#000000] transiton-all duration-300"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[#E1306C] hover:shadow-[0_0_5px_#E1306C] transiton-all duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-[#000000] hover:shadow-[0_0_5px_#000000] transiton-all duration-300"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:col-span-7 lg:col-span-8">
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Mission
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Collaboration
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h1 className="max-w-8xl text-center opacity-70 overflow-hidden">
          <span
            className="
              block max-w-8xl
              whitespace-nowrap
              font-black tracking-tight leading-none
              text-[19vw] sm:text-[20vw]
              bg-clip-text text-transparent
              bg-gradient-to-b from-white to-blue-600
              drop-shadow-2xl
            "
          >
            MEDILINK
          </span>
        </h1>


        <div className="mt-3 pt-4 border-t border-blue-400 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-blue-100">
          <p>
            © {new Date().getFullYear()} Medilink. Connecting healthcare
            professionals worldwide.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
