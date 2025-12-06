const Waitlist = () => {
  return (
   <section className="w-full py-5 px-5">
     <div className="max-w-5xl mx-auto py-10 px-5 md:p-14 bg-blue-800 rounded-2xl text-white">
      <div className="md:flex justify-center align-center gap-10">
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
            <label className="text-sm opacity-90 text-black px-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-3 border shadow-md rounded-lg text-gray-800 outline-none"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="text-sm opacity-90 text-black px-2">
              Email Address
            </label>
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
   </section>
  );
};
export default Waitlist;
