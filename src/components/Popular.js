import { popular } from "../utils/populer";

const Popular = () => {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 py-10 gap-5 px-5">
      {popular.map((pop) => (
        <div
          key={pop.id}
          className=" flex flex-col items-center hover:bg-gray-50 hover:border hover:border-red-100 rounded-md pt-3 hover:shadow-lg cursor-pointer transition ease-in transform"
        >
          <img src={pop.image} alt="whiskey" className="h-36 text-center" />

          <h1 className="py-5 text-lg font-mono text-gray-700">{pop.title}</h1>
        </div>
      ))}
    </section>
  );
};

export default Popular;
