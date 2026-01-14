import Rectangle_4096 from "../assets/images/Rectangle_4096.png";
import Rectangle_4103 from "../assets/images/Rectangle_4103.png";
import Rectangle_4101 from "../assets/images/Rectangle_4101.png";
import Rectangle_4097 from "../assets/images/Rectangle_4097.png";
import Rectangle_4099 from "../assets/images/Rectangle_4099.png";
import Rectangle_4098 from "../assets/images/Rectangle_4098.png";
import Rectangle_4100 from "../assets/images/Rectangle_4100.png";
import IMG_0400_1 from "../assets/images/IMG_0400_1.png";
import IMG_0401_1 from "../assets/images/IMG_0401_1.png";
import Proof from "../assets/images/Proof.png";

const HeroSection = () => {
  return (
    <section className="w-full pt-6 mt-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
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
            and deliver better care—anytime, anywhere.
          </p>
        </div>
        <div className="flex justify-center  mt-4 px-6 sm:px-10">
            <div className="w-[20px] h-[20px] rounded-full border "></div>
            <div className="w-[20px] h-[20px] rounded-full border "></div>
            <div className="w-[20px] h-[20px] rounded-full border "></div>
            <p className="px-1 text-gray-500">Over<span className="text-green-500">+1050</span> people joined the waitlist</p>
          </div>
        <form className="mt-8 px-4 w-full flex justify-center">
          <div className="w-full px-6 max-w-xl">
            <div className="flex items-center bg-white dark:bg-gray-900
                border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none
                rounded-full overflow-hidden focus-within:ring-2
                focus-within:ring-blue-500/40 dark:focus-within:ring-blue-400/30 transition">
              <input type="email" placeholder="Enter Email Address" className="
                  flex-1 px-6 py-3
                  text-gray-800 dark:text-gray-100
                  placeholder-gray-400 dark:placeholder-gray-500
                  bg-transparent
                  outline-none
                "
              />
              <button
                className="
                  hidden sm:inline-flex items-center
                  px-6 py-2 mr-1
                  bg-blue-600 dark:bg-blue-500
                  hover:bg-blue-700 dark:hover:bg-blue-400
                  text-white font-medium
                  rounded-full
                  transition
                "
              >
                Join the waitlist
              </button>
            </div>
            <button
              className="
                sm:hidden mt-3 w-25 px-6 py-3
                bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400
                text-white font-medium rounded-full
                transition focus:ring-2 focus:ring-blue-500/40 dark:focus:ring-blue-400/30"
            >
              Join the waitlist
            </button>
          </div>
          </form>

        <div className="
          flex md:hidden lg:hidden
          overflow-x-auto 
          overflow-x-scroll
          gap-6 px-10 py-10
          scrollbar-thin
          scrollbar-thumb-gray-400
          scrollbar-track-gray-200
          dark:scrollbar-thumb-gray-600
          dark:scrollbar-track-gray-800
        ">
          <img src={Rectangle_4098} className="rounded-xlw-[170px] h-[177px] " />
          <img src={Rectangle_4099} className="rounded-xl w-[170px] h-[177px] " />
          <img src={Rectangle_4103} className="rounded-xl w-[170px] h-[177px] " />
          <img src={IMG_0401_1} className="rounded-xl w-[170px] h-[177px]" />
          <img src={IMG_0400_1} className="rounded-xl" />
          <img src={Rectangle_4100} className="rounded-xl w-[170px] h-[177px]" />
          <img src={Rectangle_4101} className="rounded-xl w-[170px] h-[177px]" />
          <img src={Rectangle_4096} className="rounded-xl w-[170px] h-[177px]" />
          <img src={Rectangle_4097} className="rounded-xl w-[170px] h-[177px]" />
        </div>
        <div
          className="
            max-w-5xl mx-auto px-10 mt-10
            hidden md:grid gap-4 justify-center place-items-center
            [grid-template-columns:repeat(5,minmax(120px,170px))]
            [grid-template-rows:repeat(4,minmax(120px,170px))]
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
            <img src={IMG_0401_1} className="rounded-xl  w-[170px] h-[170px]" />
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
