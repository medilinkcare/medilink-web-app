import linking from "../assets/images/linking.png";
import medilink from "../assets/images/medilink.png";
import africa from "../assets/images/africa.png";
import collab from "../assets/images/collab.png";
import pointer from "../assets/images/pointer.png";
import Frame from "../assets/images/Frame.png"


const Advantages = () => {
  const items = [
    {
      title: "Instant Collaboration",
      desc: "Secure chat, voice-notes and video calls that make it easy for professionals to connect across departments, and borders.",
      img1: "Start Collaboration",
      img2: "pointer",
    },
    {
      title: "Professional Networking & Growth",
      desc: "Profile, portfolios, verification system, skill displays, and opportunities to connect with peers and institutions.",
      img: "networking",
    },
    {
      title: "Seamless Knowledge Exchange",
      desc: "Research groups, discussion rooms, mentorship channels, and knowledge hubs for evidence-based practice.",
      icon: "linking",
    },
    {
      title: "Intelligent Digital Tools",
      desc: "Future-driven features like AI case support, digital health workflows, and smart automation to boost efficiency.",
    },
    {
      title: "Global Health Integration",
      desc: "In a world becoming digitally borderless, MediLink positions African healthcare professionals to operate on a global stage.",
      map: "world",
    },
  ];

  return (
    <section id="features" className="w-full mx-auto pb-3 lg: px-6  sm:px-20 dark:bg-gray-900 transition-colors duration-300">
      <div className="py-10 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          The MediLink Advantages
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl">
          Technology has transformed every industry. Now it’s healthcare’s turn. <br />
          <span className="text-blue-600 dark:text-blue-400 font-medium">MediLink</span>
          {" "} leverages modern digital solutions to create an integrated hub for medical professionals.
        </p>
      </div>
      {/**Grid column */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-10">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`
              bg-white 
              border border-gray-200 
              shadow-sm hover:shadow-md 
              rounded-2xl 
              align-center
              p-6 
              transition-colors duration-300
              flex flex-col
              ${idx < 3 ? "lg:col-span-2" : "lg:col-span-3"}
             `}>
              {/**img 1 */}
           <div className="relative">
              {item.img1 && (
                
                  <img src={collab} alt="collab" className="w-full h-full object-cover" />
                
              )}
              {item.img2 && (
                <img
                  src={pointer}
                  alt="pointer"
                  className="w-6 h-6 absolute right-16 top-16"
                />
              )}
            </div>
              {/**imgage 2 */}
            {item.icon && (
              <img
                src={linking}
                alt=""
                className="w-25 h-25 mb-2 mx-auto"
              />
            )}
              {/**image 3 */}
            {item.map && (
              <img
                src={africa}
                alt="global health"
                className="w-25 h-25 mb-2"
              />
            )}
            {/**image 4 */}
          <div className="">
            {item.img && (
              <img
                alt="frame"
                src={Frame}
                className=" w-25 h-25 mx-auto"
              />
            )}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900  px-1 mx-auto mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600  text-sm px-1 mx-auto leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
