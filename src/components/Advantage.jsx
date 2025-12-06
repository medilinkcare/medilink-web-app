import linking from "../assets/images/linking.png";
import medilink from "../assets/images/medilink.png";
import africa from "../assets/images/africa.png";
import collab from "../assets/images/collab.png"
import pointer from "../assets/images/pointer.png"

const Advantages = () => {
  const items = [
    {
      title: "Instant Collaboration",
      desc: "Secure chat, voice-notes and video calls that make it easy for professionals to connect across departments, and borders.",
      img1: "Start Collaboration",
      img2:"pointer"
    },
    {
      title: "Professional Networking & Growth",
      desc: "Profile, portfolios, verification system, skill displays, and opportunities to connect with peers and institutions.",
      img:"networking"
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
      map:"world",
    },
  ];

  return (
    <section className="w-full mx-auto lg: px-14 sm: px-6  mx-auto ">
      <div className="py-10 mb-12 ">
        <h2 className="text-2xl md: text-3xl font-bold text-gray-900">
          The MediLink Advantages
        </h2>
        <p className="text-gray-600 max-w-xl">
          Technology has transformed every industry. Now it’s healthcare’s turn.{" "} <br/>
          <span className="text-blue-600 font-medium">MediLink</span> leverages modern digital
          solutions to create an integrated hub for medical professionals.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">

        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white flex flex-col rounded-2xl shadow-sm p-6 border border-gray-200 transition hover:shadow-md">
            <div className="relative">
            {item.img1 && (
              <img src={collab} alt="collab" className="w-full h-25 mb-2" />
            )}
            {item.img2 && (
              <img src={pointer} alt="pointer" className="w-6 h-6 absolute right-16 top-16 mb-2" />
            )}
            </div>
            {item.icon && (
              <img src={linking} alt="" className="w-36 h-25 mb-2 mx-auto" />
            )}
            {item.map && (
              <img src={africa} alt="Global health integration" className="w-full h-25 mb-2" />
            )}
            {item.img &&(
                <img src={medilink} alt="medilink" className="w-full h-25"/>
            )}
            <div>   
            <h3 className="text-lg font-bold text-gray-900 px-1 mx-auto mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm px-1 mx-auto leading-relaxed">
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
