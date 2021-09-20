import { useEffect, useState } from "react";
import { trends } from "../utils/trends";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

const Trending = () => {
  const length = trends.length;
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="relative">
      {trends.map((trend, index) => {
        if (current === index) {
          return (
            <div
              key={trend.id}
              className="grid grid-cols-2 items-center transition duration-500 ease-in-out py-10 px-3 bg-gray-50"
            >
              <div className="py-10 flex flex-col space-y-5 items-start w-80 lg:ml-32">
                <h1 className="text-2xl md:text-5xl font-serif">
                  {trend.title}
                </h1>
                <p className="hidden sm:block text-xl font-serif">
                  {trend.description}
                </p>
                <button className="bg-red-700 text-white px-6 py-2 md:px-10 md:py-3 font-mono">
                  Discover More
                </button>
              </div>
              <div className=" grid place-content-end py-10">
                <img
                  src={trend.image}
                  alt="Logo"
                  className="h-[200px] w-[200px] md:h-[400px] md:w-[400px] lg:h-[600px] lg:[w-600px] object-contain transition duration-500 ease-in-out"
                />
              </div>
            </div>
          );
        }
      })}

      <div className="flex justify-center space-x-3 px-7  right-0">
        <ChevronLeftIcon
          className="h-10 text-white px-4 py-2 bg-red-700 hover:bg-red-600 cursor-pointer"
          onClick={prevSlide}
        />
        <ChevronRightIcon
          className="h-10 text-white px-4 py-2 bg-red-700 hover:bg-red-500 cursor-pointer"
          onClick={nextSlide}
        />
      </div>
    </section>
  );
};

export default Trending;
