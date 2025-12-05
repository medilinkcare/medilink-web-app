import Rectangle_4096 from "../assets/Rectangle_4096.png";
import Rectangle_4103 from "../assets/Rectangle_4103.png";
import Rectangle_4101 from "../assets/Rectangle_4101.png";
import Rectangle_4097 from "../assets/Rectangle_4097.png";
import Rectangle_4099 from "../assets/Rectangle_4099.png";
import Rectangle_4098 from "../assets/Rectangle_4098.png";
import Rectangle_4100 from "../assets/Rectangle_4100.png";
import IMG_0400_1 from "../assets/IMG_0400_1.png";
import IMG_0401_1 from "../assets/IMG_0401_1.png";


const HeroSection = () => {
  return (
    <section className="h-f`ull w-screen bg-blue-10 items-center ">
        <div className=" flex flex-col justify-center max-w-5xl mx-auto text-center py-10">
              <h1 className="text-4xl mx-10 font-aeonik font-semibold mb-8 text-black-900
              md:text-5xl mx-6
              sm: mx-2 my-auto">
                Where Healthcare Meets Connection, Collaboration, and Innovation.</h1>
            <div className="px-10">
              <p className="font-aeonik text-grey-900">A globally connected world demands a globally connected health ecosystem.</p>
              <p className="mb-5 font-aeonik"><span className="text-blue-600 font-bold">MediLink</span> empowers medical professionals to communicate, collaborate, research, and deliver better care——anytime, anywhere.</p>
            </div>  
            <div class="flex items-center justify-center space-x-3">
            <div class="flex -space-x-2">
              <img
                src="/src/assets/avatars/user1.png"
                class="w-8 h-8 rounded-full border-2 border-white object-cover transition-transform duration-200 hover:scale-105"
              />
              <img
                src="/src/assets/avatars/user2.png"
                class="w-8 h-8 rounded-full border-2 border-white object-cover transition-transform duration-200 hover:scale-105"
              />
              <img
                src="/src/assets/avatars/user3.png"
                class="w-8 h-8 rounded-full border-2 border-white object-cover transition-transform duration-200 hover:scale-105"
              />
            </div>

            <p class="text-gray-700 text-sm">
              Over <span class="text-green-600 font-semibold">+1050</span> people joined the waitlist
            </p>
          </div>

           <form className="mt-8 flex items-center justify-center px-4">
  <div className="flex flex-col sm:flex-row bg-white border border-gray-200 shadow-sm rounded-full w-full max-w-xl overflow-hidden">
    
    <input
      type="email"
      placeholder="Enter Email Address"
      className="flex-1 px-5 sm: px-8 py-3 outline-none text-gray-700 rounded-full sm:rounded-3"
    />

    <button className="w-full sm:w-auto px-6 py-3 sm:px-5 sm:py-2 bg-blue-800 hover:bg-blue-600 transition text-white font-medium rounded-full sm:rounded-full">
      Join the waitlist
    </button>

  </div>
</form>

            
            <div className="
                flex md:hidden lg:hidden
                overflow-x-auto
                gap-6
                px-10
                py-10
              "
            >
              <img src={Rectangle_4098} className="rounded-xl sm:hidden" />
              <img src={Rectangle_4099} className="rounded-xl sm:hidden" />
              <img src={Rectangle_4103} className="rounded-xl sm:hidden" />
              <img src={IMG_0400_1} className="rounded-xl w-[150px] h-[150px]" />
              <img src={IMG_0401_1} className="rounded-xl w-[150px] h-[150px] object-cover" />
              <img src={Rectangle_4100} className="rounded-xl"/>
              <img src={Rectangle_4101} className="rounded-xl"/>
              <img src={Rectangle_4096} className="rounded-xl"/>
              <img src={Rectangle_4097} className="rounded-xl "/>
            </div>

           
  <div
  className="
    max-w-5xl mx-auto px-10 py-10 mt-10
    hidden md:grid
    gap-4
    justify-center
    place-items-center
    [grid-template-columns:repeat(5, minmax(130px, 170px))]
    [grid-template-rows:repeat(5, minmax(130px, 170px))]
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
}
export default HeroSection;