const Story = () => {
  return (
    <section className="py-16 px-3">
      <div>
        <h1 className="text-center text-5xl sm:text-7xl lg:text-9xl font-serif">
          Trending in Dark <span className="text-red-700">Mountain</span>
        </h1>
      </div>

      <div className="lg:grid lg:grid-cols-10 lg:gap-5 py-10 items-center">
        <div className="story__one col-span-6 opacity-90 hover:opacity-100 transition duration-500 ease-in-out">
          <div className="">
            <div>
              <h1>
                <h1>THIS IS BEEER</h1>
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:col-start-7 lg:col-span-full lg:grid-rows-2">
          <div className="story__two lg:col-span-full opacity-90 hover:opacity-100 transition duration-500 ease-in-out"></div>
          <div className="story__three lg:col-span-full opacity-90 hover:opacity-100 transition duration-500 ease-in-out"></div>
        </div>
      </div>
    </section>
  );
};

export default Story;
