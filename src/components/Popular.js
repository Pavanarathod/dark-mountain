import { popular } from "../utils/populer";

const Popular = () => {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 py-14 gap-5 px-5">
      {popular.map((pop) => (
        <div
          key={pop.id}
          className=" flex flex-col items-center hover:bg-gray-50 rounded-md pt-3 hover:shadow-lg"
        >
          <img src={pop.image} alt="whiskey" className="h-36 text-center" />

          <button
            className="py-1 px-4 bg-red-700 mt-5 mb-3
           font-mono text-white"
          >
            {pop.title}
          </button>
        </div>
      ))}
    </section>
  );
};

export default Popular;
