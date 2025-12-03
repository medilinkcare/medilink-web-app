import linking from "../assets/linking.png";
import medilink from "../assets/medilink.png";
import africa from "../assets/africa.png"

const Advantages = () => {
  const items = [
    {
      title: "Instant Collaboration",
      desc: "Secure chat, voice-notes and video calls that make it easy for professionals to connect across departments, and borders.",
      button: "Start Collaboration",
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
    <section className="w-full mx-auto lg: px-14 mx-auto ">
      
      {/* --- Section Title --- */}
      <div className="py-20 mb-12 ">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          The MediLink Advantages
        </h2>
        <p className="text-gray-600 max-w-xl">
          Technology has transformed every industry. Now it’s healthcare’s turn.{" "} <br/>
          <span className="text-blue-600 font-medium">MediLink</span> leverages modern digital
          solutions to create an integrated hub for medical professionals.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white flex flex-col justify-between rounded-2xl shadow-sm p-6 border border-gray-200 transition hover:shadow-md">
            {item.button && (
              <button className="w-3/5 justify-center my-20 mx-auto px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 flex text-sm">
                {item.button}
              </button>
            )}
            {item.icon && (
              <img src={linking} alt="" className="w-[100px] h-[100px] mb-4 mx-auto" />
            )}
            {item.map && (
              <img src={africa} alt="Global health integration" className="w-full h-32 object-contain mb-4 " />
            )}
            {item.img &&(
                <img src={medilink} alt="medilink" className="w-5/5 h-52"/>
            )}
            <div>   
            <h3 className="text-lg font-semibold text-gray-900 px-8 mx-auto mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm px-8 mx-auto leading-relaxed">
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
