import Rectangle_4096 from "../assets/images/Rectangle_4096.png";
import Rectangle_4103 from "../assets/images/Rectangle_4103.png";
import Rectangle_4101 from "../assets/images/Rectangle_4101.png";
import Rectangle_4097 from "../assets/images/Rectangle_4097.png";
import Rectangle_4099 from "../assets/images/Rectangle_4099.png";
import Rectangle_4098 from "../assets/images/Rectangle_4098.png";
import Rectangle_4100 from "../assets/images/Rectangle_4100.png";
import IMG_0400_1 from "../assets/images/IMG_0400_1.png";
import IMG_0401_1 from "../assets/images/IMG_0401_1.png";

const HeroSection = () => {
  return (
    <section className="w-screen mt-14 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="flex flex-col justify-center max-w-5xl mx-auto text-center py-10">
        <h1 className="text-4xl md:text-5xl mx-6 font-aeonik font-semibold mb-8">
          Where Healthcare Meets Connection, Collaboration, and Innovation.
        </h1>
        <div className="px-10 space-y-4 md:space-y-0 md:space-x-4 text-sm sm:text-base">
          <p className="font-aeonik text-gray-700 dark:text-gray-300">
            A globally connected world demands a globally connected health ecosystem.
          </p>

          <p className="mb-5 font-aeonik">
            <span className="text-blue-600 dark:text-blue-400 font-bold">MediLink</span>{" "}
            empowers medical professionals to communicate, collaborate, research,
            and deliver better care——anytime, anywhere.
          </p>
        </div>
        <div className="flex items-center justify-center space-x-3 mt-4">
          <div className="flex -space-x-2">
            <img src="/src/assets/avatars/user1.png"
              className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 object-cover hover:scale-105 transition-transform" />
            <img src="/src/assets/avatars/user2.png"
              className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 object-cover hover:scale-105 transition-transform" />
            <img src="/src/assets/avatars/user3.png"
              className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 object-cover hover:scale-105 transition-transform" />
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Over <span className="text-green-600 dark:text-green-400 font-semibold">+1050</span> people joined the waitlist
          </p>
        </div>
        <form className="mt-8 flex items-center justify-center px-4">
          <div className="flex flex-col sm:flex-row bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-full w-full max-w-xl overflow-hidden">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-1 px-5 py-3 text-gray-700 dark:text-gray-200 bg-transparent outline-none"
            />
            <button
              className="w-full sm:w-auto px-6 py-2 font-bold sm:px-5 sm:py-2 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 transition text-white font-medium rounded-full">
              Join the waitlist
            </button>
          </div>
        </form>
        <div className="
          flex md:hidden lg:hidden
          overflow-x-auto gap-6 px-10 py-10
        ">
          <img src={Rectangle_4098} className="rounded-xl sm:hidden" />
          <img src={Rectangle_4099} className="rounded-xl sm:hidden" />
          <img src={Rectangle_4103} className="rounded-xl sm:hidden" />
          <img src={IMG_0400_1} className="rounded-xl w-[150px] h-[150px]" />
          <img src={IMG_0401_1} className="rounded-xl w-[150px] h-[150px] object-cover" />
          <img src={Rectangle_4100} className="rounded-xl" />
          <img src={Rectangle_4101} className="rounded-xl" />
          <img src={Rectangle_4096} className="rounded-xl" />
          <img src={Rectangle_4097} className="rounded-xl" />
        </div>
        <div
          className="
            max-w-5xl mx-auto px-10 mt-10
            hidden md:grid gap-4 justify-center place-items-center
            [grid-template-columns:repeat(5,minmax(130px,170px))]
            [grid-template-rows:repeat(5,minmax(130px,170px))]
          "
        >
          <div className="row-start-1 row-end-4 col-start-1 col-end-2 flex flex-col gap-2">
            <img src={Rectangle_4098} className="rounded-xl w-[170px] h-[170px]" />
            <img src={Rectangle_4099} className="rounded-xl w-[170px] h-[170px]" />
          </div>

          <div className="row-start-2 row-end-5 col-start-2 col-end-3 flex flex-col gap-2">
            <img src={Rectangle_4103} className="rounded-xl w-[170px] h-[170px]" />
            <img src={IMG_0400_1} className="rounded-xl w-[170px] h-[170px]" />
          </div>

          <div className="row-start-3 col-start-3 col-end-4">
            <img src={IMG_0401_1} className="rounded-xl object-cover w-[170px] h-[170px]" />
          </div>

          <div className="row-start-2 row-end-5 col-start-4 col-end-5 flex flex-col gap-2">
            <img src={Rectangle_4100} className="rounded-xl w-[170px] h-[170px]" />
            <img src={Rectangle_4101} className="rounded-xl w-[170px] h-[170px]" />
          </div>

          <div className="row-start-1 row-end-4 col-start-5 col-end-6 flex flex-col gap-2">
            <img src={Rectangle_4096} className="rounded-xl w-[170px] h-[170px]" />
            <img src={Rectangle_4097} className="rounded-xl w-[170px] h-[170px]" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
