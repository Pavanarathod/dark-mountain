import { useState } from "react";
import ReactMapGL from "react-map-gl";

const Location = () => {
  const [viewPort, setViewPort] = useState({
    latitude: 12.972442,
    longitude: 77.580643,
    width: "100%",
    height: "100%",
    zoom: 8,
  });

  return (
    <section>
      <h1 className="text-6xl px-3 py-5 sm:text-8xl font-serif text-right">
        <span className="text-red-700">Locations</span>{" "}
      </h1>

      <div className="lg:grid lg:grid-cols-2 lg:h-[80vh]">
        <div className=" bg-white px-20 pt-14">
          <img src="/images/LogoDark.png" alt="" className="pb-5" />
          <form className="flex flex-col items-start bg-transparent mt-5 space-y-4">
            <input
              type="text"
              placeholder="Country"
              className="w-full py-3 p-2 font-mono border border-red-700 focus:outline-none rounded-md"
            />
            <input
              type="text"
              placeholder="State"
              className="w-full py-3 p-2 font-mono border border-red-700 focus:outline-none rounded-md"
            />
            <input
              type="text"
              placeholder="Place"
              className="w-full py-3 p-2 font-mono border border-red-700 focus:outline-none rounded-md"
            />
            <button className="bg-red-700 px-8 rounded-md py-2 text-white font-mono">
              Search
            </button>
          </form>
        </div>
        <div className="hidden sm:block w-full">
          <ReactMapGL
            mapStyle="mapbox://styles/dasbot/cks2yhghb3p6w17p774i5xx8u"
            mapboxApiAccessToken={process.env.NEXT_PUBLIC_ANALYTICS_ID}
            {...viewPort}
            onViewportChange={(event) => setViewPort(event)}
          ></ReactMapGL>
        </div>
      </div>
    </section>
  );
};

export default Location;
