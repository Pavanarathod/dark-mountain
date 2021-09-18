const Hero = () => {
  return (
    <section className="hero__container">
      <div className="py-5 pl-5 lg:max-w-7xl lg:mx-auto">
        <div>
          <img src="/images/LogoDark.png" alt="logo" className="" />
        </div>
        <div className="pt-5 flex flex-col space-y-8 sm:w-96 lg:w-[40rem] mt-10 lg:mt-16">
          <h1 className="text-2xl sm:text-6xl font-serif lg:text-8xl">
            world of fine{" "}
            <span className=" text-red-700 font-serif tracking-wide">
              spirits.
            </span>{" "}
          </h1>
          <p className="text-gray-700 lg:text-lg font-mono ml-1">
            Whiskey & Scotch Delivery
          </p>
        </div>
        <button className="px-5 sm:px-10 py-2 sm:py-4 lg:py-2 mt-5 sm:mt-10 bg-gray-800 lg:bg-red-600 lg:hover:bg-red-500 ml-1 text-white font-mono rounded-md">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
