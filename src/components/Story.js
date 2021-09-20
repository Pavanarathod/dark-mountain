const Story = () => {
  return (
    <section className="py-16 px-3">
      <div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif">
          History of Dark <span className="text-red-700">Mountain</span>
        </h1>
      </div>

      <div className="lg:grid lg:grid-cols-10 lg:gap-5 py-10 items-center">
        <div className="story__one col-span-6 opacity-90 hover:opacity-100 transition duration-500 ease-in-out relative">
          <div className="absolute bottom-0">
            <h1 className="bg-red-700 py-4 px-4 text-white font-mono">
              Amsterdam 1968 with Robert Pattinson and Alferd Molina
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:col-start-7 lg:col-span-full lg:grid-rows-2 pt-4 lg:pt-0">
          <div className="story__two lg:col-span-full opacity-90 hover:opacity-100 transition duration-500 ease-in-out relative">
            <div className="absolute bottom-0 right-0 ">
              <h1 className="bg-red-700 py-4 px-4 text-white font-mono">
                1970 New York Our first Barrel dis
              </h1>
            </div>
          </div>
          <div className="story__three lg:col-span-full opacity-90 hover:opacity-100 transition duration-500 ease-in-out relative">
            <div className="absolute bottom-0 right-0">
              <h1 className="bg-red-700 py-4 px-4 text-white font-mono">
                Happy customers in West side Story
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
