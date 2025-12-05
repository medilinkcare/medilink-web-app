import { useState } from "react";
const FAQPage = () => {
const faqs = [
  {
    q: "What is MediLink?",
    a: "MediLink is a digital platform that helps medical professionals connect, communicate, collaborate, and deliver better healthcare from anywhere in the world.",
  },
  {
    q: "Who can use MediLink?",
    a: "Doctors, nurses, researchers, health administrators, specialists, and other medical professionals across different fields.",
  },
  {
    q: "What makes MediLink different?",
    a: "It brings healthcare and global connection together—allowing professionals to collaborate, research, and share insights in real time.",
  },
  {
    q: "How does MediLink improve patient care?",
    a: "By providing seamless communication, quicker access to medical insights, and better collaboration between experts—which leads to faster, more accurate care.",
  },
  {
    q: "Does MediLink support medical research?",
    a: "Absolutely. The platform allows professionals to share data, compare findings, and collaborate on studies from anywhere.",
  },
  {
    q: "Can MediLink help hospitals and clinics work together?",
    a: "Yes. MediLink makes it easier for teams across different facilities or regions to coordinate care and share knowledge.",
  },
  {
    q: "How does MediLink ensure accessibility anytime, anywhere?",
    a: "It’s designed to work across devices and locations, so professionals can stay connected whether they’re in the hospital, in transit, or working remotely.",
  },
  {
    q: "Is MediLink suitable for both individual professionals and large organizations?",
    a: "Yes. It supports individual practitioners, teams, hospitals, and research institutions.",
  },
  {
    q: "What is the main goal of MediLink?",
    a: "To build a connected, innovative healthcare ecosystem where collaboration leads to better outcomes and better care for everyone.",
  },
];


  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full py-10">
      <div className="text-center text-blue-600 text-sm font-semibold mb-2">
        Similar questions asked
      </div>
      <h2 className="text-center text-3xl sm:text-xl md:px-4 font-bold mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3 px-6 mx-auto">
        {faqs.map((item, i) => (
          <div 
            key={i}
            className="border rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer bg-white"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">{item.q}</h3>
              <span className="text-xl">{openIndex === i ? "▲" : "▼"}</span>
            </div>

            {openIndex === i && (
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="max-w-5xl mx-auto mt-20 p-10 md:p-14 bg-blue-800 rounded-2xl text-white">

        <div className="md:flex justify-center align-center sm:text-center gap-10">
          
          <div className="flex-1 align-self-center mb-8 md:mb-0">
            <h2 className="text-3xl font-bold leading-snug">
              Ready to join the Future of <br /> Healthcare Collaboration?
            </h2>
            <p className="opacity-90 mt-2">
              Your Seat in the Future of Healthcare Collaboration across Africa
            </p>
          </div>

        
          <form className="flex-1 grid grid-cols-1 gap-4 bg-white rounded-3xl p-6">
            <div>
              <label className="text-sm font-semibold text-black px-2">Full Name</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-3 border shadow-md rounded-lg text-gray-800 outline-none"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="text-sm font-semibolld text-black px-2">Email Address</label>
              <input
                type="email"
                className="w-full mt-1 px-3 py-3 rounded-lg shadow-md border text-gray-800 outline-none"
                placeholder="Enter your Email Address"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-800 w-25 text-white px-2 py-2 rounded-xl justify-self-center font-semibold hover:bg-blue-600 hover:scale-105 transition"
            >
              Join the Waitlist
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default FAQPage;
