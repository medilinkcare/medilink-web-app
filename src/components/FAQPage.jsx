import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const FAQPage = () => {
  const faqs = [
    { q: "What is MediLink?", a: "MediLink is a digital platform that helps medical professionals connect, communicate, collaborate, and deliver better healthcare from anywhere in the world." },
    { q: "Who can use MediLink?", a: "Doctors, nurses, researchers, health administrators, specialists, and other medical professionals across different fields." },
    { q: "What makes MediLink different?", a: "It brings healthcare and global connection together—allowing professionals to collaborate, research, and share insights in real time." },
    { q: "How does MediLink improve patient care?", a: "By providing seamless communication, quicker access to medical insights, and better collaboration between experts—which leads to faster, more accurate care." },
    { q: "Does MediLink support medical research?", a: "Absolutely. The platform allows professionals to share data, compare findings, and collaborate on studies from anywhere." },
    { q: "Can MediLink help hospitals and clinics work together?", a: "Yes. MediLink makes it easier for teams across different facilities or regions to coordinate care and share knowledge." },
    { q: "How does MediLink ensure accessibility anytime, anywhere?", a: "It’s designed to work across devices and locations, so professionals can stay connected whether they’re in the hospital, in transit, or working remotely." },
    { q: "Is MediLink suitable for both individual professionals and large organizations?", a: "Yes. It supports individual practitioners, teams, hospitals, and research institutions." },
    { q: "What is the main goal of MediLink?", a: "To build a connected, innovative healthcare ecosystem where collaboration leads to better outcomes and better care for everyone." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faqs" className=" w-full top-0 left-0 right-0 py-5 sm:px-16 dark:bg-gray-950 transition-colors duration-300">
      <div className="text-center">
        <span className="text-blue-600  dark:text-[#0051FF] text-sm font-semibold mb-2 border border-transparent dark:bg-white  inline-block px-4 py-1 rounded-full">Similar questions asked</span>
      </div>

      <h2 className="text-center text-xl sm:text-3xl md:px-4 font-bold mb-10 dark:text-white">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3 px-6 sm:px-20 mx-auto">
        {faqs.map((item, i) => (
          <div
            key={i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="
              border rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer
              bg-white dark:bg-gray-900 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                {item.q}
              </h3>
              <ChevronDown
                className={`
                  w-5 h-5 text-gray-500 dark:text-gray-300
                  transition-transform duration-300
                  ${openIndex === i ? "rotate-180" : ""}
                `}
              />
            </div>

            {openIndex === i && (
              <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;
