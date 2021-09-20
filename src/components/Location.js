import { useState } from "react";
import ReactMapGL from "react-map-gl";

const Location = () => {
  const [viewPort, setViewPort] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    width: "100%",
    height: "100%",
    zoom: 8,
  });

  return (
    <section>
      <h1 className="text-6xl px-3 py-5 sm:text-8xl font-serif text-right">
        Search <span className="text-red-700">Locations</span>{" "}
      </h1>

      <div className="lg:grid lg:grid-cols-2 lg:h-[80vh]">
        <div className=" bg-gray-100 px-20 pt-14">
          <img src="/images/LogoDark.png" alt="" />
          <form className="flex flex-col items-start bg-transparent mt-5">
            <input type="text" placeholder="Country" className="w-full" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="Place" />
            <button>Search</button>
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
