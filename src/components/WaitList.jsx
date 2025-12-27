
const Waitlist = () => {
  return (
   <section className="w-full py-5 px-5 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
     <div className="max-w-5xl mx-auto py-10 px-5 md:p-14 bg-gradient-to-b from-[#0051FF] to-blue-900 sm:bg-gradient-to-r from-[#0051FF] to-blue-900 rounded-2xl text-white">
      <div className="md:flex justify-center align-center gap-10">
        <div className="flex-1 self-center">
          <h2 className="text-2xl sm:text-3xl text-center font-bold leading-snug dark:text-white">
            Ready to join the Future of Healthcare Collaboration?
          </h2>
          <p className="text-gray-300w text-center mb-1 mt-2 dark:text-gray-300">
            Your Seat in the Future of Healthcare Collaboration across Africa
          </p>
        </div>

        <form className="flex-1 grid grid-cols-1 gap-4 bg-white rounded-3xl p-6 dark:bg-gray-800">
          <div>
            <label className="text-sm opacity-90 text-black px-2 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-3 border shadow-md rounded-lg text-gray-800 outline-none dark:bg-gray-600 dark:text-gray-200"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="text-sm opacity-90 text-black px-2 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              className="w-full mt-1 px-3 py-3 rounded-lg shadow-md border text-gray-800 outline-none dark:bg-gray-600 dark:text-gray-200"
              placeholder="Enter your Email Address"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-800 w-25 text-white px-2 py-2 rounded-xl justify-self-center font-bold hover:bg-blue-600 hover:scale-107 transition dark:bg-blue-600 dark:hover:bg-blue-800"
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
